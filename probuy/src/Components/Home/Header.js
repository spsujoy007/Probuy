import ContainItem from '@/Commons/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const menuItem =  <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>Contact</Link></li>
        <li><Link href={'/'}>Blog</Link></li>
    </>

    return (
      <div className="navbar z-[1000px] fixed navbarHead">
            <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg-white shadow rounded-box w-[80vw]">
        {menuItem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Probuy</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuItem}
    </ul>
  </div>
        </div>
    );
};

export default Header;