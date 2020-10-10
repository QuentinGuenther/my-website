/* eslint-disable react/prop-types */
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Code,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/core';
import { Link } from 'gatsby';

const P = (props) => <Text {...props} />;
const H1 = (props) => <Heading as="h1" size="2xl" {...props} />;
const H2 = (props) => <Heading as="h2" size="xl" {...props} />;
const H3 = (props) => <Heading as="h3" size="lg" {...props} />;
const H4 = (props) => <Heading as="h4" size="md" {...props} />;
const H5 = (props) => <Heading as="h5" size="sm" {...props} />;
const H6 = (props) => <Heading as="h6" size="xs" {...props} />;
const ThematicBreak = (props) => <Divider {...props} />;
const BlockQuote = (props) => <Text as="blockquote" {...props} />;
const Ul = (props) => (
  <List as="ul" styleType="disc" stylePos="outside" {...props} />
);
const Ol = (props) => (
  <List as="ol" styleType="decimal" stylePos="outside" {...props} />
);
const Li = (props) => <ListItem {...props} />;
const Em = (props) => <Text as="em" {...props} />;
const Strong = (props) => <Text as="strong" {...props} />;
const Delete = (props) => <Text as="del" {...props} />;
const A = (props) => <Link {...props} />;
const Img = (props) => <Image {...props} />;

const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  thematicBreak: ThematicBreak,
  blockquote: BlockQuote,
  ul: Ul,
  ol: Ol,
  li: Li,
  em: Em,
  strong: Strong,
  delete: Delete,
  hr: ThematicBreak,
  a: A,
  img: Img,
};

const MDX: React.FC = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDX;
