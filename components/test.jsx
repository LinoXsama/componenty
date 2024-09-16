'use client';

import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import Link from 'next/link';

import { useState } from 'react';

const DropdownMenu = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<main id='dropdown' className=''>
			<button className={`dropdown-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className=''>Menu</span>
				<IoMdArrowDropdown color='#db8400' className='icon' />
			</button>

			<ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
				{/* Menu items */}
				<li className='menu-item'><Link href='/' className='link'>Italians</Link></li>
				<li className='menu-item'><Link href='/' className='link'>Chinese</Link></li>
				<li className='menu-item submenu-toggle'>
					<span className=''>Drinks</span>
					<IoMdArrowDropright color='#db8400' className='icon' />

					<ul className='submenu'>
						{/* Submenu items */}
						<li className='submenu-item'><Link className='link' href='/'>Coffee</Link></li>
						<li className='submenu-item'><Link className='link' href='/'>Tea</Link></li>
						<li className='submenu-item'><Link className='link' href='/'>Hot chocolate</Link></li>
					</ul>
				</li>
				<li className='menu-item'><Link href='/' className='link'>Indians</Link></li>
				<li className='menu-item submenu-toggle'>
					<span className=''>Deserts</span>
					<IoMdArrowDropright color='#db8400' className='icon' />

					<ul className='submenu'>
						{/* Submenu items */}
						<li className='submenu-item'><Link className='link' href='/'>Tiramisu</Link></li>
						<li className='submenu-item'><Link className='link' href='/'>Granola</Link></li>
					</ul>
				</li>
			</ul>
		</main>
	);
};

export default DropdownMenu;