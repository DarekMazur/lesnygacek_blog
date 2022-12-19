import React from 'react';
import Logo from '../../Atoms/Logo/Logo';
import Copyright from '../../Molecules/Copyright/Copyright';

const Layout = ({ children }) => {
  return (
    <>
      <header style={{ backgroundColor: '#444' }}>
        <Logo logo={'long'} light />
        <Logo logo={'long'} />
        <Logo logo={'long'} size="8" />
        <Logo logo={'long'} size="5" />
        <Logo logo={'square'} />
      </header>
      {children}
      <footer>
        <Copyright pageCopy />
        <Copyright />
      </footer>
    </>
  );
};

export default Layout;
