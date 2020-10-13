import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  PseudoBox,
  Stack,
} from '@chakra-ui/core';
import { Link } from 'gatsby';
import * as React from 'react';

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, to }: MenuItemProps) => (
  <Link to={to}>
    <PseudoBox px={6} py={4} _hover={{ bg: 'cyan.600', color: 'white' }}>
      {children}
    </PseudoBox>
  </Link>
);

const PageHeading: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const menuIconRef = React.useRef(null);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.700"
      color="white"
      shadow="md"
    >
      <Flex align="center" mr={5}>
        <Link to="/">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'} color="cyan.300">
            Chakra UI
          </Heading>
        </Link>
      </Flex>
      <Box display={{ base: 'block' }} onClick={handleToggle}>
        <Icon name="add" ref={menuIconRef} color="cyan.300" size="24px" />
      </Box>
      <Drawer
        isOpen={show}
        placement="right"
        size="sm"
        onClose={handleToggle}
        finalFocusRef={menuIconRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.600" color="white">
          <DrawerCloseButton size="lg" />
          <DrawerHeader borderBottomWidth="1px">
            Find all the things you need
          </DrawerHeader>
          <DrawerBody px={0}>
            <Stack>
              <MenuItem to="docs">Docs</MenuItem>
              <MenuItem to="examples">Examples</MenuItem>
              <MenuItem to="blog">Blog</MenuItem>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default PageHeading;
