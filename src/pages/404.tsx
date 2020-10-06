import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { NotFoundPageQuery } from '../../gatsby-graphql-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface NotFoundPageProps extends PageProps {
  data: NotFoundPageQuery;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  data,
  location,
}: NotFoundPageProps) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
