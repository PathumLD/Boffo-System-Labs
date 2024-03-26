import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  const activeStyle = ' rounded-lg border-x-4 border-amber-600 px-3 py-2';

  return (
    <header className="fixed top-0 w-full h-20 overflow-hidden bg-white text-amber-600 ">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <div className="flex items-center justify-start">
          <Link to="/" className="fixed text-2xl font-semibold">
            <img src={logo} alt="logo" className="h-12 " />
            </Link> 
        </div>
        <nav className="">
          <ul className="flex items-center justify-between gap-10 text-lg font-semibold ">
            <li className="">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : '')}>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : '')}>
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/projects" className={({ isActive }) => (isActive ? activeStyle : '')}>
                Projects
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/careers" className={({ isActive }) => (isActive ? activeStyle : '')}>
                Careers
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeStyle : '')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;