import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { menuData } from '../../data/menuData';
import Icon from '../Icon';

const Sidebar = () => {
  const { sidebarLayout, sidebarCollapsed, toggleSidebarCollapsed } = useTheme();
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRefs = useRef({});
  const sidebarRef = useRef(null);

  // Only vertical layout is supported now
  const isCollapsed = sidebarCollapsed;

  const toggleMenu = (menuId) => {
    // Vertical accordion behavior only
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleCollapsedMenuClick = (menuId) => {
    // When clicking any menu item in collapsed mode, expand the sidebar
    toggleSidebarCollapsed();
    
    // If the menu has children, expand it after the sidebar expands
    const menu = menuData.find(m => m.id === menuId);
    if (menu?.children && menu.children.length > 0) {
      // Small delay to allow sidebar expand animation to start
      setTimeout(() => {
        setExpandedMenus(prev => ({
          ...prev,
          [menuId]: true
        }));
      }, 100);
    }
  };


  // Close submenu when clicking outside (only needed for expanded mode)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    if (!isCollapsed) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isCollapsed]);

  // Calculate optimal sidebar width
  const calculateOptimalWidth = () => {
    const longestMenuTitle = menuData.reduce((longest, menu) => {
      const menuLength = menu.title.length;
      const childrenLength = menu.children ? 
        Math.max(...menu.children.map(child => child.title.length)) : 0;
      const maxLength = Math.max(menuLength, childrenLength);
      return maxLength > longest ? maxLength : longest;
    }, 0);
    
    // Base width + character width estimation + padding + icon space
    const baseWidth = 64; // Icon space + padding
    const charWidth = 8; // Approximate character width in px
    const padding = 48; // Additional padding and chevron space
    
    return Math.max(256, baseWidth + (longestMenuTitle * charWidth) + padding);
  };

  const optimalWidth = calculateOptimalWidth();

  // ...existing code...

  return (
    <>
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 
          ${isCollapsed ? 'w-16' : ''}
        `}
        style={!isCollapsed ? { width: `${optimalWidth}px` } : {}}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
          {!isCollapsed ? (
            <div className="flex items-center space-x-3 px-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.1 14.1 8 13 8H11C9.9 8 9 7.1 9 6V4L3 7V9H21ZM21 10H3V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16V10ZM6 14.5C6 15.3 6.7 16 7.5 16S9 15.3 9 14.5 8.3 13 7.5 13 6 13.7 6 14.5ZM15 14.5C15 15.3 15.7 16 16.5 16S18 15.3 18 14.5 17.3 13 16.5 13 15 13.7 15 14.5Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">
                  HRIS Pro
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Human Resources</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <svg 
                className="w-5 h-5 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4V6C15 7.1 14.1 8 13 8H11C9.9 8 9 7.1 9 6V4L3 7V9H21ZM21 10H3V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16V10ZM6 14.5C6 15.3 6.7 16 7.5 16S9 15.3 9 14.5 8.3 13 7.5 13 6 13.7 6 14.5ZM15 14.5C15 15.3 15.7 16 16.5 16S18 15.3 18 14.5 17.3 13 16.5 13 15 13.7 15 14.5Z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1 overflow-y-auto h-full pb-20">
          {menuData.map((menu) => (
            <div key={menu.id}>
              {/* Main Menu Item */}
              <div
                ref={el => menuRefs.current[menu.id] = el}
                onClick={() => isCollapsed ? 
                  handleCollapsedMenuClick(menu.id) : 
                  (menu.children && toggleMenu(menu.id))
                }
                className={`
                  flex items-center justify-between p-3 rounded-lg text-gray-700 dark:text-gray-300 
                  hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer
                  ${isCollapsed ? 'justify-center' : ''}
                  ${expandedMenus[menu.id] || activeSubmenu === menu.id ? 'bg-gray-100 dark:bg-gray-700' : ''}
                `}
                title={isCollapsed ? `Click to expand and access ${menu.title}` : ''}
              >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={menu.icon} 
                      className="w-5 h-5 flex-shrink-0"
                    />
                    {!isCollapsed && (
                      <span className="font-medium">{menu.title}</span>
                    )}
                  </div>
                  
                  {!isCollapsed && menu.children && (
                    <Icon 
                      name="ChevronDownIcon"
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                        expandedMenus[menu.id] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>

              {/* Accordion Submenu for Expanded Vertical */}
              {!isCollapsed && menu.children && (
                <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${expandedMenus[menu.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="mt-1 ml-4 space-y-1">
                    {menu.children.map((child) => (
                      <NavLink
                        key={child.id}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`
                        }
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={toggleSidebarCollapsed}
        />
      )}

    </>
  );
};

export default Sidebar;