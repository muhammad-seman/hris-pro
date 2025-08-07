import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { menuData } from '../../data/menuData';
import Icon from '../Icon';

const Header = () => {
  const navigate = useNavigate();
  const { 
    theme, 
    toggleTheme, 
    sidebarCollapsed,
    toggleSidebarCollapsed 
  } = useTheme();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const dashboardMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
      if (dashboardMenuRef.current && !dashboardMenuRef.current.contains(event.target)) {
        setShowDashboardMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return 'SunIcon';
      case 'dark': return 'MoonIcon';
      default: return 'ComputerDesktopIcon';
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'light': return 'Light';
      case 'dark': return 'Dark';
      default: return 'System';
    }
  };

  // Calculate optimal sidebar width dynamically
  const calculateOptimalWidth = () => {
    const longestMenuTitle = menuData.reduce((longest, menu) => {
      const menuLength = menu.title.length;
      const childrenLength = menu.children ? 
        Math.max(...menu.children.map(child => child.title.length)) : 0;
      const maxLength = Math.max(menuLength, childrenLength);
      return maxLength > longest ? maxLength : longest;
    }, 0);
    
    const baseWidth = 64;
    const charWidth = 8;
    const padding = 48;
    
    return Math.max(256, baseWidth + (longestMenuTitle * charWidth) + padding);
  };

  const optimalWidth = calculateOptimalWidth();

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
    
    // Navigate to login page
    navigate('/login');
  };

  const handleProfileNavigation = (path) => {
    navigate(path);
    setShowProfile(false);
  };

  return (
    <header 
      className="fixed top-0 right-0 h-16 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-all duration-300"
      style={{
        left: sidebarCollapsed ? '64px' : `${optimalWidth}px`
      }}
    >
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebarCollapsed}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <Icon 
              name={sidebarCollapsed ? 'ChevronRightIcon' : 'ChevronLeftIcon'} 
              className="w-5 h-5 text-gray-600 dark:text-gray-300" 
            />
          </button>
          
          {/* Page Title */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                WorkSpace
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Human Resources</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dashboard Dropdown for Navbar Mode */}
          {/* ...existing code... */}

          {/* Theme Toggle - Disabled temporarily */}
          <button
            disabled
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 cursor-not-allowed opacity-50"
            title="Theme switcher - Coming soon"
          >
            <Icon 
              name="SunIcon" 
              className="w-5 h-5 text-gray-400 dark:text-gray-500" 
            />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon name="BellIcon" className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
            </button>
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-[9999]">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {[
                  { id: 1, title: 'New Leave Request', message: 'Sarah Johnson submitted a leave request', time: '2 min ago', unread: true },
                  { id: 2, title: 'Performance Review Due', message: 'Complete your Q4 performance review', time: '1 hour ago', unread: true },
                  { id: 3, title: 'Meeting Reminder', message: 'Team standup in 15 minutes', time: '3 hours ago', unread: false },
                  { id: 4, title: 'Policy Update', message: 'New remote work policy published', time: '1 day ago', unread: false },
                  { id: 5, title: 'Payroll Processed', message: 'December payroll has been processed', time: '2 days ago', unread: false },
                ].map((notification) => (
                  <div key={notification.id} className={`p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${notification.unread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                    <div className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-blue-500' : 'bg-gray-300'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  View All Notifications
                </button>
              </div>
            </div>
            )}
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
              </div>
              <Icon name="ChevronDownIcon" className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
            
            {/* Dropdown Menu */}
            {showProfile && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-[9999]">
                <div className="p-2">
                  <button 
                    onClick={() => handleProfileNavigation('/profile-settings')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Profile Settings
                  </button>
                  <button 
                    onClick={() => handleProfileNavigation('/account-settings')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Account Settings
                  </button>
                  <button 
                    onClick={() => handleProfileNavigation('/help-support')}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Help & Support
                  </button>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;