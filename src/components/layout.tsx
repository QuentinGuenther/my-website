import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Link } from 'gatsby';
import { customTheme } from '../theme';

interface LayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  location,
  title,
  children,
}: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header: React.ReactNode;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <ThemeProvider theme={customTheme} data-is-root-path={isRootPath}>
      <CSSReset />
      <header className="global-header">{header}</header>
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
