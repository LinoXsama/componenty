
const DropdownMenu = () => {
   return (
      <main id="dropdown">
         <button className="dropdown-toggle">
            <span>Menu</span>
            <i className="fa-solid fa-caret-down"></i>
         </button>

         <ul className="menu">
            <li className="menu-item"><a href="#">Italian</a></li>
            <li className="menu-item"><a href="#">Chinese</a></li>
            <li className="menu-item dropdown">
               <a href="#" className="submenu-toggle">
                  <span>Healthy Options</span>
                  <i className="fa-solid fa-caret-right"></i>
               </a>
               <ul className="submenu">
                  <li className="submenu-item"><a href="#">Vegetarian</a></li>
                  <li className="submenu-item"><a href="#">Chicken</a></li>
                  {/* More Submenu Items */}
               </ul>
            </li>
            <li className="menu-item"><a href="#">Mexican</a></li>
            <li className="menu-item dropdown">
               <a href="#" className="submenu-toggle">
                  <span>Specials</span>
                  <i className="fa-solid fa-caret-right"></i>
               </a>
               <ul className="submenu">
                  {/* SubMenu Items */}
                  <li className="submenu-item"><a href="#">Vegetarian</a></li>
                  <li className="submenu-item"><a href="#">Chicken</a></li>
               </ul>
            </li>
         </ul>
      </main>
   );
};

export default DropdownMenu;