import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: "Complete HR Management",
      description: "Manage your entire workforce from hiring to retirement with our comprehensive HRIS platform.",
      icon: "UsersIcon"
    },
    {
      title: "Advanced Analytics",
      description: "Make data-driven decisions with powerful analytics, reporting, and predictive insights.",
      icon: "ChartBarIcon"
    },
    {
      title: "Automated Workflows",
      description: "Streamline HR processes with intelligent automation and seamless integrations.",
      icon: "CogIcon"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with compliance standards including GDPR, SOX, and more.",
      icon: "ShieldCheckIcon"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple validation for demo purposes
      if (formData.email && formData.password) {
        // Store auth token in localStorage (demo purposes)
        localStorage.setItem('authToken', 'demo-token-' + Date.now());
        localStorage.setItem('userInfo', JSON.stringify({
          name: formData.email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          email: formData.email,
          role: 'Administrator',
          avatar: formData.email.split('@')[0].substring(0, 2).toUpperCase(),
          loginTime: new Date().toISOString()
        }));
        
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        setError('Please fill in all fields');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      email: 'admin@company.com',
      password: 'demo123',
      rememberMe: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex">
      {/* Left Panel - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center p-12 xl:p-16 text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Icon name="BuildingOfficeIcon" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">HRIS Pro</h1>
                <p className="text-blue-200 text-sm">Enterprise HR Management</p>
              </div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>

          {/* Feature Showcase */}
          <div className="space-y-8">
            <div className="transition-all duration-500 transform">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={features[currentFeature].icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{features[currentFeature].title}</h3>
                  <p className="text-blue-100 leading-relaxed">{features[currentFeature].description}</p>
                </div>
              </div>
            </div>

            {/* Feature Indicators */}
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFeature ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-blue-200 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-blue-200 text-sm">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Icon name="BuildingOfficeIcon" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">HRIS Pro</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Enterprise HR Management Platform</p>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your HR dashboard
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3">
                  <Icon name="ExclamationTriangleIcon" className="w-5 h-5 text-red-500" />
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Icon name="EnvelopeIcon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Icon name="LockClosedIcon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Demo Login */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 border border-gray-300 dark:border-gray-600"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="PlayIcon" className="w-4 h-4" />
                  <span>Try Demo Login</span>
                </div>
              </button>
            </form>

            {/* Help Text */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <div className="flex items-start space-x-2">
                <Icon name="InformationCircleIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="text-sm text-blue-800 dark:text-blue-300">
                  <p className="font-medium mb-1">Demo Access</p>
                  <p>Use any valid email and password, or click "Try Demo Login" to explore the platform with sample data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account? {' '}
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Contact Sales
              </a>
            </p>
            <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-400">
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;