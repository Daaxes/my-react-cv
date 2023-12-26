import React from 'react';
import Header from './header';
import SideBar from './sidebar';
import '../Styles/index.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <SideBar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;