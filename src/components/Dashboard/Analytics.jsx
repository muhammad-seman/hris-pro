import DashboardLayout from '../Layout/DashboardLayout';
import Chart from './Chart';
import { Card } from '../';
import Icon from '../Icon';

const Analytics = () => {
  const analyticsCards = [
    {
      title: 'Total Revenue Impact',
      value: '$2.8M',
      change: '+15.3%',
      period: 'vs last quarter',
      icon: 'CurrencyDollarIcon',
      color: 'green'
    },
    {
      title: 'Employee Productivity',
      value: '94.2%',
      change: '+8.1%',
      period: 'efficiency score',
      icon: 'TrendingUpIcon',
      color: 'blue'
    },
    {
      title: 'Retention Rate',
      value: '91.5%',
      change: '+3.2%',
      period: '12-month rolling',
      icon: 'UsersIcon',
      color: 'purple'
    },
    {
      title: 'Training ROI',
      value: '340%',
      change: '+22%',
      period: 'return on investment',
      icon: 'AcademicCapIcon',
      color: 'orange'
    }
  ];

  const departmentAnalytics = [
    { dept: 'Engineering', performance: 95, satisfaction: 89, retention: 94, productivity: 92 },
    { dept: 'Sales', performance: 88, satisfaction: 91, retention: 87, productivity: 90 },
    { dept: 'Marketing', performance: 92, satisfaction: 86, retention: 89, productivity: 88 },
    { dept: 'HR', performance: 87, satisfaction: 93, retention: 96, productivity: 85 },
    { dept: 'Finance', performance: 91, satisfaction: 88, retention: 92, productivity: 91 }
  ];

  const timeAnalytics = [
    { month: 'Jan', hires: 15, departures: 8, satisfaction: 85, performance: 87 },
    { month: 'Feb', hires: 22, departures: 12, satisfaction: 87, performance: 89 },
    { month: 'Mar', hires: 18, departures: 10, satisfaction: 86, performance: 91 },
    { month: 'Apr', hires: 25, departures: 7, satisfaction: 89, performance: 88 },
    { month: 'May', hires: 20, departures: 15, satisfaction: 88, performance: 92 },
    { month: 'Jun', hires: 28, departures: 9, satisfaction: 91, performance: 90 }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          HR Analytics & Reports
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive analysis of HR metrics, trends, and performance indicators
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsCards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${
                card.color === 'green' ? 'bg-green-50 dark:bg-green-900/20' :
                card.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20' :
                card.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20' :
                'bg-orange-50 dark:bg-orange-900/20'
              }`}>
                <Icon name={card.icon} className={`w-6 h-6 ${
                  card.color === 'green' ? 'text-green-600 dark:text-green-400' :
                  card.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  card.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                  'text-orange-600 dark:text-orange-400'
                }`} />
              </div>
              <span className="text-sm text-green-600 font-medium">{card.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {card.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
              {card.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {card.period}
            </p>
          </div>
        ))}
      </div>

      {/* Main Analytics Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Employee Satisfaction Trend */}
        <Chart
          title="Employee Satisfaction Trend"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 85 },
              { label: 'Tue', value: 42 },
              { label: 'Wed', value: 94 },
              { label: 'Thu', value: 38 },
              { label: 'Fri', value: 91 },
              { label: 'Sat', value: 35 },
              { label: 'Sun', value: 88 }
            ],
            '30d': [
              { label: 'Week 1', value: 25 },
              { label: 'Week 2', value: 87 },
              { label: 'Week 3', value: 46 },
              { label: 'Week 4', value: 91 }
            ],
            '3m': [
              { label: 'Month 1', value: 35 },
              { label: 'Month 2', value: 87 },
              { label: 'Month 3', value: 51 }
            ],
            '1y': [
              { label: 'Q1', value: 25 },
              { label: 'Q2', value: 84 },
              { label: 'Q3', value: 42 },
              { label: 'Q4', value: 88 }
            ]
          }}
          height="350px"
        />

        {/* Hiring vs Departures */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
            Hiring vs Departures Analysis
          </h3>
          <div className="space-y-4">
            {timeAnalytics.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-12">
                  {item.month}
                </span>
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Hires: {item.hires}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Departures: {item.departures}</span>
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    item.hires > item.departures 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                      : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    Net: {item.hires - item.departures > 0 ? '+' : ''}{item.hires - item.departures}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Performance Matrix */}
      <Card title="Department Performance Matrix">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Department</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Performance</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Satisfaction</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Retention</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Productivity</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Overall Score</th>
              </tr>
            </thead>
            <tbody>
              {departmentAnalytics.map((dept, index) => {
                const overall = Math.round((dept.performance + dept.satisfaction + dept.retention + dept.productivity) / 4);
                return (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 font-medium text-gray-800 dark:text-white">{dept.dept}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.performance >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        dept.performance >= 85 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {dept.performance}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.satisfaction >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        dept.satisfaction >= 85 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {dept.satisfaction}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.retention >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        dept.retention >= 85 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {dept.retention}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.productivity >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        dept.productivity >= 85 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {dept.productivity}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          overall >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                          overall >= 85 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                          'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        }`}>
                          {overall}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Bottom Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Cost Analysis */}
        <Card title="Cost Analysis">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Cost per Hire</span>
              <span className="font-semibold text-gray-800 dark:text-white">$3,240</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Training Cost/Employee</span>
              <span className="font-semibold text-gray-800 dark:text-white">$1,850</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Turnover Cost</span>
              <span className="font-semibold text-gray-800 dark:text-white">$128K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Total HR Budget</span>
              <span className="font-semibold text-gray-800 dark:text-white">$2.1M</span>
            </div>
          </div>
        </Card>

        {/* Time to Fill */}
        <Card title="Recruitment Metrics">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Time to Fill</span>
              <span className="font-semibold text-gray-800 dark:text-white">28 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Application to Interview</span>
              <span className="font-semibold text-gray-800 dark:text-white">12%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Interview to Offer</span>
              <span className="font-semibold text-gray-800 dark:text-white">34%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Offer Acceptance Rate</span>
              <span className="font-semibold text-gray-800 dark:text-white">89%</span>
            </div>
          </div>
        </Card>

        {/* Engagement Insights */}
        <Card title="Engagement Insights">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Engagement Score</span>
              <span className="font-semibold text-gray-800 dark:text-white">8.2/10</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">eNPS Score</span>
              <span className="font-semibold text-gray-800 dark:text-white">+42</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Survey Response Rate</span>
              <span className="font-semibold text-gray-800 dark:text-white">76%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Recognition Given</span>
              <span className="font-semibold text-gray-800 dark:text-white">248</span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;