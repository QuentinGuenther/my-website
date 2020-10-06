import React from 'react';
import { CSSReset, ITheme, ThemeProvider } from '@chakra-ui/core';
import { customTheme } from '../theme';
import PageHeading from './page-heading';

interface LayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const config = (theme: ITheme) => ({
    light: {
      color: theme.colors.gray[700],
      bg: theme.colors.gray[50],
      borderColor: theme.colors.gray[200],
      placeholderColor: theme.colors.gray[500],
    },
    dark: {
      color: theme.colors.whiteAlpha[900],
      bg: theme.colors.gray[800],
      borderColor: theme.colors.whiteAlpha[300],
      placeholderColor: theme.colors.whiteAlpha[400],
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset config={config} />
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
