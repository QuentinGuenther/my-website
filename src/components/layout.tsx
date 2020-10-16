import React from 'react';
import { Box, CSSReset, Flex, Grid, ITheme, ThemeProvider } from '@chakra-ui/core';
import { customTheme } from '../theme';
import PageHeading from './page-heading';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const config = (theme: ITheme) => ({
    light: {
      color: theme.colors.white,
      bg: theme.colors.gray[800],
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
      <Grid gridTemplateRows='auto 1fr auto' minH="100vh">
        <PageHeading />
        <Box>{children}</Box>
        <Flex alignItems="center" justifyContent="center" mb={4} p={6}>
          © {new Date().getFullYear()}, Quentin Guenther
        </Flex>
      </Grid>
    </ThemeProvider>
  );
};

export default Layout;
