import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { menuData } from '../data/menuData';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Find the current menu item and its category
  const findMenuPath = (path) => {
    let breadcrumbPath = [];
    let currentCategory = null;

    for (let i = 0; i < menuData.length; i++) {
      const menu = menuData[i];
      
      // Track current category
      if (menu.category) {
        currentCategory = menu;
        continue;
      }

      // Check if this menu item matches the current path
      if (menu.path === path && currentCategory) {
        breadcrumbPath = [
          { 
            title: currentCategory.title, 
            path: null, // Categories are not clickable
            clickable: false 
          },
          { 
            title: menu.title, 
            path: menu.path, 
            icon: menu.icon, 
            clickable: true 
          }
        ];
        break;
      }
    }

    return breadcrumbPath;
  };

  const getBreadcrumbs = () => {
    const currentPath = location.pathname;
    let breadcrumbs = [];

    // Get menu-based breadcrumbs
    const menuPath = findMenuPath(currentPath);
    if (menuPath.length > 0) {
      breadcrumbs = [...menuPath];
    } else {
      // Fallback: generate breadcrumbs from URL segments
      let currentPath = '';
      pathnames.forEach((segment, index) => {
        currentPath += `/${segment}`;
        
        // Capitalize and format segment name
        const title = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        breadcrumbs.push({
          title,
          path: currentPath
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.path} className="flex items-center">
          {index > 0 && (
            <Icon 
              name="ChevronRightIcon" 
              className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" 
            />
          )}
          
          {index === breadcrumbs.length - 1 ? (
            // Current page - not clickable
            <span className="flex items-center space-x-2 text-gray-800 dark:text-white font-medium">
              {breadcrumb.icon && (
                <Icon 
                  name={breadcrumb.icon} 
                  className="w-4 h-4" 
                />
              )}
              <span>{breadcrumb.title}</span>
            </span>
          ) : breadcrumb.clickable !== false ? (
            // Clickable breadcrumb
            <Link 
              to={breadcrumb.path}
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {breadcrumb.icon && (
                <Icon 
                  name={breadcrumb.icon} 
                  className="w-4 h-4" 
                />
              )}
              <span>{breadcrumb.title}</span>
            </Link>
          ) : (
            // Non-clickable breadcrumb (text only)
            <span className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              {breadcrumb.icon && (
                <Icon 
                  name={breadcrumb.icon} 
                  className="w-4 h-4" 
                />
              )}
              <span>{breadcrumb.title}</span>
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;