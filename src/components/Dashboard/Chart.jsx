import { useState } from 'react';

const Chart = ({ 
  title, 
  type = 'line', 
  data = [], 
  height = '300px',
  showLegend = true,
  periodData = null
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  // Mock chart data processing
  const processData = () => {
    // If periodData is provided, use it based on selectedPeriod
    if (periodData && periodData[selectedPeriod]) {
      return periodData[selectedPeriod];
    }
    
    // Use provided data
    if (data.length > 0) {
      return data;
    }
    
    // Fallback default data
    if (type === 'line') {
      return [
        { label: 'Jan', value: 65 },
        { label: 'Feb', value: 28 },
        { label: 'Mar', value: 95 },
        { label: 'Apr', value: 21 },
        { label: 'May', value: 98 },
        { label: 'Jun', value: 18 },
      ];
    }
    
    if (type === 'bar') {
      return [
        { label: 'Engineering', value: 420 },
        { label: 'Sales', value: 80 },
        { label: 'Marketing', value: 395 },
        { label: 'HR', value: 45 },
        { label: 'Finance', value: 238 },
      ];
    }
    
    if (type === 'pie') {
      return [
        { label: 'Present', value: 92.6, color: 'bg-green-500' },
        { label: 'Leave', value: 6.2, color: 'bg-yellow-500' },
        { label: 'Absent', value: 1.2, color: 'bg-red-500' },
      ];
    }
    
    return [];
  };

  const chartData = processData();
  const maxValue = Math.max(...chartData.map(item => item.value));

  const renderLineChart = () => {
    const points = chartData.map((item, index) => {
      const x = (index / (chartData.length - 1)) * 100;
      const y = 100 - (item.value / maxValue) * 80;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative" style={{ height }}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'rgb(59, 130, 246)', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'rgb(59, 130, 246)', stopOpacity:0}} />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#lineGradient)"
            stroke="rgb(59, 130, 246)"
            strokeWidth="0.5"
            points={`0,100 ${points} 100,100`}
          />
          <polyline
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="0.8"
            points={points}
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-2">
          {chartData.map((item, index) => (
            <span key={index}>{item.label}</span>
          ))}
        </div>
      </div>
    );
  };

  const renderBarChart = () => (
    <div className="flex items-end justify-between space-x-2" style={{ height }}>
      {chartData.map((item, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
            title={`${item.label}: ${item.value}`}
          />
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  const renderPieChart = () => {
    let cumulativePercentage = 0;
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <div className="flex items-center justify-center" style={{ height }}>
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {chartData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeDasharray = `${percentage} ${100 - percentage}`;
              const strokeDashoffset = -cumulativePercentage;
              
              cumulativePercentage += percentage;
              
              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color?.replace('bg-', '').includes('green') ? '#10b981' : 
                         item.color?.replace('bg-', '').includes('yellow') ? '#f59e0b' : '#ef4444'}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                {total}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Total
              </div>
            </div>
          </div>
        </div>
        
        {showLegend && (
          <div className="ml-8 space-y-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.label}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        
        {/* Desktop: Buttons, Mobile: Dropdown */}
        <div className="flex items-center">
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {['7d', '30d', '3m', '1y'].map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2">
            {['7d', '30d', '3m', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        {type === 'line' && renderLineChart()}
        {type === 'bar' && renderBarChart()}
        {type === 'pie' && renderPieChart()}
      </div>
    </div>
  );
};

export default Chart;