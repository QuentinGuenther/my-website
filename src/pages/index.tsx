import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { IndexPageQuery } from '../../gatsby-graphql-types';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogLink from '../components/blog-link';
import { List, ListItem } from '@chakra-ui/core';

interface BlogIndexProps extends PageProps {
  data: IndexPageQuery;
}

const BlogIndex: React.FC<BlogIndexProps> = ({
  data,
  location,
}: BlogIndexProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to &quot;content/blog&quot;
          (or the directory you specified for the
          &quot;gatsby-source-filesystem&quot; plugin in gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <List
        display="flex"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {posts.map((post) => {
          const title = post.frontmatter.title || post.slug;

          return (
            <ListItem key={post.slug}>
              <BlogLink
                body={post.frontmatter.description || post.excerpt}
                date={post.frontmatter.date}
                slug={post.slug}
                title={title}
              />
            </ListItem>
          );
        })}
      </List>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
