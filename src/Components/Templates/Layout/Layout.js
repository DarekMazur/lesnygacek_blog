import React from 'react';
import Logo from '../../Atoms/Logo/Logo';

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ backgroundColor: '#444' }}>
        <Logo logo={'long'} light />
        <Logo logo={'long'} />
        <Logo logo={'square'} />
      </header>
      {children}
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
