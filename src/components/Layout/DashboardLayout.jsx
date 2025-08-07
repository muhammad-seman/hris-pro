import { useTheme } from '../../context/ThemeContext';
import { menuData } from '../../data/menuData';
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumb from '../Breadcrumb';

const DashboardLayout = ({ children }) => {
  const { sidebarCollapsed } = useTheme();
  
  const isCollapsed = sidebarCollapsed;

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <Header />
      
      {/* Main Content */}
      <main
        className="transition-all duration-300 pt-16"
        style={{ 
          marginLeft: isCollapsed ? '64px' : `${optimalWidth}px`
        }}
      >
        <div className="p-6">
          <Breadcrumb />
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;