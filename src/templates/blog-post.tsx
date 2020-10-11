/* eslint-disable react/prop-types */
import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MDX from '../components/mdx';
import { Box, Divider, Heading, Text } from '@chakra-ui/core';

interface BlogPostTemplateProps {
  pageContext: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
  };
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = (props) => {
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
      <Box
        as="article"
        my={6}
        mx="auto"
        width={['xs', 'sm', 'lg', 'xl', '2xl']}
        itemScope
        itemType="http://schema.org/Article"
      >
        <Box as="header" mb={4}>
          <Heading itemProp="headline" as="h1" size="2xl">
            {frontmatter.title}
          </Heading>
          <Text>{frontmatter.date}</Text>
        </Box>
        <MDX>{props.children}</MDX>
        <Divider />
        <Box as="footer">
          <Bio />
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogPostTemplate;
