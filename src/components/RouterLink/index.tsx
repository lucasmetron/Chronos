import React from 'react';
import { Link } from 'react-router';
type LinkProps = { children: React.ReactNode } & React.ComponentProps<
  typeof Link
>;

const RouterLink = ({ children, to, ...rest }: LinkProps) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default RouterLink;
