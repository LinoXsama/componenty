import Link from "next/link";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const DropdownMenu = () => {
   return (
      <main id="dropdown">
         <button className="dropdown-toggle">
            <span>Menu</span>
            <IoMdArrowDropdown />
         </button>

         <ul className="menu">
            <li className="menu-item"><Link href="#">Italian</Link></li>
            <li className="menu-item"><Link href="#">Chinese</Link></li>
            <li className="menu-item dropdown">
               <Link href="#" className="submenu-toggle">
                  <span>Healthy Options</span>
                  <IoMdArrowDropright />
               </Link>
               <ul className="submenu">
                  <li className="submenu-item"><Link href="#">Vegetarian</Link></li>
                  <li className="submenu-item"><Link href="#">Chicken</Link></li>
                  {/* More Submenu Items */}
               </ul>
            </li>
            <li className="menu-item"><Link href="#">Mexican</Link></li>
            <li className="menu-item dropdown">
               <Link href="#" className="submenu-toggle">
                  <span>Specials</span>
                  <IoMdArrowDropright />
               </Link>
               <ul className="submenu">
                  {/* SubMenu Items */}
                  <li className="submenu-item"><Link href="#">Vegetarian</Link></li>
                  <li className="submenu-item"><Link href="#">Chicken</Link></li>
               </ul>
            </li>
         </ul>
      </main>
   );
};

export default DropdownMenu;