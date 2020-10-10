/* eslint-disable react/prop-types */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDXProvider } from '@mdx-js/react';
import MDX from '../components/mdx';
import { Box } from '@chakra-ui/core';

const MyH1 = (props) => <h2 style={{ color: 'tomato' }} {...props} />;
const MyParagraph = (props) => (
  <p style={{ fontSize: '18px', lineHeight: 1.6 }} {...props} />
);

const components = {
  h2: MyH1,
  p: MyParagraph,
};

const BlogPostTemplate: React.FC = (props) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const frontmatter = props.pageContext.frontmatter;

  return (
    <Layout title={siteTitle}>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </header>
        <MDX>{props.children}</MDX>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;
