import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'system';
    }
    return 'system';
  });


  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebarCollapsed') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    const applyTheme = (themeName) => {
      // Remove all theme classes
      root.classList.remove('light', 'dark');
      body.classList.remove('light', 'dark');
      
      if (themeName === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
        body.classList.add(systemTheme);
        
        // Set CSS custom property for dynamic theme detection
        root.style.setProperty('--theme', systemTheme);
      } else {
        root.classList.add(themeName);
        body.classList.add(themeName);
        root.style.setProperty('--theme', themeName);
      }
    };

    // Initial theme application
    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // Listen for system theme changes if using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);


  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  const setThemeMode = (mode) => {
    setTheme(mode);
  };


  const toggleSidebarCollapsed = () => {
    setSidebarCollapsed(prev => !prev);
  };

  const value = {
    theme,
    setTheme: setThemeMode,
    toggleTheme,
    sidebarCollapsed,
    setSidebarCollapsed,
    toggleSidebarCollapsed,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};