import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Avatar, Flex, Icon, Link, Text } from '@chakra-ui/core';

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        relativePath
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  const avatar = data?.avatar.relativePath;

  return (
    <Flex alignItems="center" justifyContent="center" mb={4} p={6}>
      <Avatar
        name="Quentin Guenther"
        src={require(`../../content/assets/${avatar}`)}
        size="lg"
        mx={4}
      />
      {author?.name && (
        <Text>
          Written by <Text as="strong">{author.name}</Text>{' '}
          {author?.summary || null}
          {` `}
          <Link
            href={`https://twitter.com/${social?.twitter || ``}`}
            color="teal.500"
            isExternal
          >
            You should follow them on Twitter{' '}
            <Icon name="external-link" mx="1px" />
          </Link>
        </Text>
      )}
    </Flex>
  );
};

export default Bio;
