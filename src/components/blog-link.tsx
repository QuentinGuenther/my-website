import { Box, Divider, Heading, PseudoBox, Text } from '@chakra-ui/core';
import { Link } from 'gatsby';
import * as React from 'react';

export interface BlogLinkProps {
  date: string;
  slug: string;
  title: string;
  body: string;
}

const BlogLink: React.FC<BlogLinkProps> = ({
  date,
  slug,
  title,
  body,
}: BlogLinkProps) => {
  return (
    <PseudoBox
      as="article"
      itemScope
      itemType="http://schema.org/Article"
      mb={4}
      p={6}
      width={['xs', 'sm', 'md', 'lg', 'xl']}
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
      bg="gray.700"
      _hover={{ bg: 'cyan.700', color: 'white' }}
      _active={{ boxShadow: 'outline', bg: 'cyan.700', color: 'white' }}
    >
      <Link to={slug} itemProp="url">
        <Box as="header">
          <Heading as="h2" size="xl" itemProp="headline">
            {title}
          </Heading>
          <Text fontSize="sm">{date}</Text>
        </Box>
        <Divider />
        <Box as="section">
          <Text>{body}</Text>
        </Box>
      </Link>
    </PseudoBox>
  );
};

export default BlogLink;
