'use client';

import Link from 'next/link';

import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropright } from 'react-icons/io';

import { useState } from 'react';


const DropdownMenu = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <main id='dropdown'>
         <button className={`dropdown-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span>Menu</span>
            <IoMdArrowDropdown className='icon' />
         </button>

         <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li className='menu-item'><Link className='link' href='/italians'>Italians</Link></li>
            <li className='menu-item'><Link className='link' href='/chinese'>Chinese</Link></li>
            <li className='menu-item dropdown'>
               <Link href='#' className='submenu-toggle link'>
                  <span>Healthy Options</span>
                  <IoMdArrowDropright className='icon' />
               </Link>
               <ul className='submenu'>
                  {/* More Submenu Items */}
                  <li className='submenu-item'><Link className='link' href='#'>Vegetarian</Link></li>
                  <li className='submenu-item'><Link className='link' href='#'>Chicken</Link></li>
               </ul>
            </li>
            <li className='menu-item'><Link className='link' href='#'>Mexican</Link></li>
            <li className='menu-item dropdown'>
               <Link href='#' className='submenu-toggle link'>
                  <span>Specials</span>
                  <IoMdArrowDropright className='icon' />
               </Link>
               <ul className='submenu'>
                  {/* SubMenu Items */}
                  <li className='submenu-item'><Link className='link' href='#'>Vegetarian</Link></li>
                  <li className='submenu-item'><Link className='link' href='#'>Chicken</Link></li>
               </ul>
            </li>
         </ul>
      </main>
   );
};

export default DropdownMenu;