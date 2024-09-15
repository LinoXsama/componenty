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
		<main id='dropdown' className='bg-pink-300'>
			<button className={`border-2 bg-green-400 dropdown-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<span className='bg-yellow-500'>Menu</span>
				<IoMdArrowDropdown color='#db8400' className='icon' />
			</button>

			<ul className={`border-2 bg-blue-500 menu ${isMenuOpen ? 'open' : ''}`}>
				{/* Menu items */}
				<li className='bg-slate-500 menu-item'><Link href='/' className='bg-purple-500 link'>Italians</Link></li>
				<li className='bg-slate-500 menu-item'><Link href='/' className='bg-purple-500 link'>Chinese</Link></li>
				<li className='bg-slate-500 menu-item submenu-toggle'>
					<span className='bg-yellow-500'>Drinks</span>
					<IoMdArrowDropright color='#db8400' className='icon' />

					<ul className='bg-red-500 submenu'>
						{/* Submenu items */}
						<li className='bg-orange-500 submenu-item'><Link className='bg-purple-500 link' href='/'>Coffee</Link></li>
						<li className='bg-orange-500 submenu-item'><Link className='bg-purple-500 link' href='/'>Tea</Link></li>
						<li className='bg-orange-500 submenu-item'><Link className='bg-purple-500 link' href='/'>Hot chocolate</Link></li>
					</ul>
				</li>
				<li className='bg-slate-500 menu-item'><Link href='/' className='bg-purple-500 link'>Indians</Link></li>
				<li className='bg-slate-500 menu-item submenu-toggle'>
					<span className='bg-yellow-500'>Deserts</span>
					<IoMdArrowDropright color='#db8400' className='icon' />

					<ul className='bg-red-500 submenu'>
						{/* Submenu items */}
						<li className='bg-orange-500 submenu-item'><Link className='bg-purple-500 link' href='/'>Tiramisu</Link></li>
						<li className='bg-orange-500 submenu-item'><Link className='bg-purple-500 link' href='/'>Granola</Link></li>
					</ul>
				</li>
			</ul>
		</main>
	);
};

export default DropdownMenu;