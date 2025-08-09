import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { menuData } from '../../data/menuData';
import Icon from '../Icon';

const Sidebar = () => {
  const { sidebarLayout, sidebarCollapsed, toggleSidebarCollapsed } = useTheme();
  const sidebarRef = useRef(null);

  // Only vertical layout is supported now
  const isCollapsed = sidebarCollapsed;

  // Calculate optimal sidebar width
  const calculateOptimalWidth = () => {
    const longestMenuTitle = menuData
      .filter(menu => !menu.category)
      .reduce((longest, menu) => {
        const menuLength = menu.title.length;
        return menuLength > longest ? menuLength : longest;
      }, 0);
    
    // Base width + character width estimation + padding + icon space
    const baseWidth = 64; // Icon space + padding
    const charWidth = 8; // Approximate character width in px
    const padding = 48; // Additional padding
    
    return Math.max(280, baseWidth + (longestMenuTitle * charWidth) + padding);
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
              {menu.category ? (
                /* Category Header */
                !isCollapsed && (
                  <div className="px-3 py-2 mt-4 first:mt-0">
                    <h3 className="text-sm font-extrabold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      {menu.title}
                    </h3>
                  </div>
                )
              ) : (
                /* Menu Item */
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } ${isCollapsed ? 'justify-center' : ''}`
                  }
                  title={isCollapsed ? menu.title : ''}
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
                </NavLink>
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