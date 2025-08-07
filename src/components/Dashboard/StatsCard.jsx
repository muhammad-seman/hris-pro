import Icon from '../Icon';

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon, 
  color = 'blue',
  description 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      light: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400'
    },
    green: {
      bg: 'bg-green-500',
      light: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400'
    },
    purple: {
      bg: 'bg-purple-500',
      light: 'bg-purple-50 dark:bg-purple-900/20',
      text: 'text-purple-600 dark:text-purple-400'
    },
    orange: {
      bg: 'bg-orange-500',
      light: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-600 dark:text-orange-400'
    },
    red: {
      bg: 'bg-red-500',
      light: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400'
    }
  };

  const currentColor = colorClasses[color];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${currentColor.light}`}>
          <Icon name={icon} className={`w-6 h-6 ${currentColor.text}`} />
        </div>
        
        {change && (
          <div className={`flex items-center space-x-1 text-sm ${
            changeType === 'positive' ? 'text-green-600' : 
            changeType === 'negative' ? 'text-red-600' : 
            'text-gray-600 dark:text-gray-400'
          }`}>
            <Icon 
              name={changeType === 'positive' ? 'TrendingUpIcon' : 'TrendingDownIcon'} 
              className="w-4 h-4" 
            />
            <span>{change}</span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          {value}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
          {title}
        </p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;