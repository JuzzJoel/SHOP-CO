import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { links } from './NavLinks';

const Link = ({ to, children }) => {
  const link = links.find((link) => link.to === to);
  if (!link) {
    console.error(`Link not found: ${to}`);
    return null;
  }
  return <RouterLink to={link.to}>{children || link.text}</RouterLink>;
};

export default Link;
