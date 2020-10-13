/* eslint-disable react/prop-types */
import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  PseudoBox,
  Text,
} from '@chakra-ui/core';
import { Link } from 'gatsby';

const P = (props) => <Text mb={4} {...props} />;
const H1 = (props) => <Heading as="h1" size="2xl" mt={6} mb={2} {...props} />;
const H2 = (props) => <Heading as="h2" size="xl" mt={6} mb={2} {...props} />;
const H3 = (props) => <Heading as="h3" size="lg" mt={6} mb={2} {...props} />;
const H4 = (props) => <Heading as="h4" size="md" mt={6} mb={2} {...props} />;
const H5 = (props) => <Heading as="h5" size="sm" mt={6} mb={2} {...props} />;
const H6 = (props) => <Heading as="h6" size="xs" mt={6} mb={2} {...props} />;
const ThematicBreak = (props) => <Divider {...props} />;
// eslint-disable-next-line react/no-children-prop
const BlockQuote = (props) => (
  <PseudoBox
    display="flex"
    pos='relative'
    _before={{
      content: `""`,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '10px',
      bg: 'cyan.400',
      boxShadow: 'sm'
    }}
    bg="gray.700"
    pt={2}
    pl={6}
    pr={2}
    mt={5}
    mb={6}
    boxShadow="sm"
    // eslint-disable-next-line react/no-children-prop
    children={<Text as="blockquote" color="gray.100" {...props} />}
  />
);
const Ul = (props) => (
  <List
    as="ul"
    styleType="disc"
    stylePos="outside"
    mt={2}
    mb={2}
    pl={2}
    {...props}
  />
);
const Ol = (props) => (
  <List
    as="ol"
    styleType="decimal"
    stylePos="outside"
    mt={2}
    mb={2}
    pl={2}
    {...props}
  />
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
