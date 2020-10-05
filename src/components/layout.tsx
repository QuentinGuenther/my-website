import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { customTheme } from '../theme';
import PageHeading from './page-heading';

interface LayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <PageHeading />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </ThemeProvider>
  );
};

export default Layout;
