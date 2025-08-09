import DashboardLayout from '../Layout/DashboardLayout';
import StatsCard from './StatsCard';
import Chart from './Chart';
import { Card } from '../';

const Overview = () => {
  const quickStats = [
    {
      title: 'Active Employees',
      value: '1,248',
      change: '+12%',
      changeType: 'positive',
      icon: 'UsersIcon',
      color: 'blue'
    },
    {
      title: 'Today Attendance',
      value: '92.6%',
      change: '+2.1%',
      changeType: 'positive',
      icon: 'ClockIcon',
      color: 'green'
    },
    {
      title: 'Pending Approvals',
      value: '24',
      change: '-8%',
      changeType: 'negative',
      icon: 'CalendarIcon',
      color: 'orange'
    },
    {
      title: 'This Month Hires',
      value: '18',
      change: '+25%',
      changeType: 'positive',
      icon: 'BriefcaseIcon',
      color: 'purple'
    }
  ];

  const departmentData = [
    { name: 'Engineering', employees: 320, budget: '$2.4M', utilization: 94, headcount: [85, 88, 92, 89, 94, 91, 95, 98, 96, 99, 97, 102] },
    { name: 'Sales', employees: 180, budget: '$1.8M', utilization: 88, headcount: [45, 48, 52, 49, 54, 51, 55, 58, 56, 59, 57, 62] },
    { name: 'Marketing', employees: 95, budget: '$890K', utilization: 91, headcount: [23, 25, 27, 26, 29, 28, 31, 33, 32, 34, 33, 36] },
    { name: 'HR', employees: 45, budget: '$450K', utilization: 87, headcount: [12, 13, 15, 14, 16, 15, 17, 18, 17, 19, 18, 20] },
    { name: 'Finance', employees: 38, budget: '$420K', utilization: 95, headcount: [10, 11, 12, 11, 13, 12, 14, 15, 14, 16, 15, 17] }
  ];

  const recentActivities = [
    { id: 1, action: 'Employee onboarded', user: 'John Smith', department: 'Engineering', time: '10 minutes ago' },
    { id: 2, action: 'Leave approved', user: 'Sarah Wilson', department: 'Marketing', time: '1 hour ago' },
    { id: 3, action: 'Performance review completed', user: 'Mike Chen', department: 'Sales', time: '2 hours ago' },
    { id: 4, action: 'Training completed', user: 'Emma Davis', department: 'HR', time: '4 hours ago' },
    { id: 5, action: 'Policy updated', user: 'Admin', department: 'System', time: '1 day ago' }
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Complete view of your organization's HR metrics and activities
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Employee Distribution Chart */}
        <div className="xl:col-span-2">
          <Chart
            title="Employee Growth Trend"
            type="line"
            data={[
              { label: 'Jan', value: 1180 },
              { label: 'Feb', value: 1025 },
              { label: 'Mar', value: 1385 },
              { label: 'Apr', value: 995 },
              { label: 'May', value: 1415 },
              { label: 'Jun', value: 965 },
              { label: 'Jul', value: 1440 },
              { label: 'Aug', value: 935 },
              { label: 'Sep', value: 1468 },
              { label: 'Oct', value: 905 },
              { label: 'Nov', value: 1495 },
              { label: 'Dec', value: 1275 }
            ]}
            height="350px"
          />
        </div>

        {/* Attendance Overview */}
        <Chart
          title="Today's Attendance"
          type="pie"
          data={[
            { label: 'Present', value: 92.6, color: 'bg-green-500' },
            { label: 'Leave', value: 6.2, color: 'bg-yellow-500' },
            { label: 'Absent', value: 1.2, color: 'bg-red-500' }
          ]}
          height="350px"
        />
      </div>

      {/* Department Headcount Chart */}
      <div className="mb-8">
        <Chart
          title="Department Headcount Trends"
          type="line"
          height="300px"
          periodData={{
            '7d': [
              { label: 'Mon', value: 678 },
              { label: 'Tue', value: 492 },
              { label: 'Wed', value: 885 },
              { label: 'Thu', value: 429 },
              { label: 'Fri', value: 981 },
              { label: 'Sat', value: 404 },
              { label: 'Sun', value: 845 }
            ],
            '30d': [
              { label: 'Week 1', value: 352 },
              { label: 'Week 2', value: 868 },
              { label: 'Week 3', value: 275 },
              { label: 'Week 4', value: 981 }
            ],
            '3m': [
              { label: 'Month 1', value: 245 },
              { label: 'Month 2', value: 868 },
              { label: 'Month 3', value: 581 }
            ],
            '1y': [
              { label: 'Q1', value: 225 },
              { label: 'Q2', value: 858 },
              { label: 'Q3', value: 172 },
              { label: 'Q4', value: 981 }
            ]
          }}
        />
      </div>

      {/* Department Overview & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Department Overview */}
        <Card title="Department Overview">
          <div className="space-y-4">
            {departmentData.map((dept, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 dark:text-white">
                    {dept.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {dept.employees} employees • {dept.budget} budget
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${dept.utilization}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-10">
                    {dept.utilization}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activities */}
        <Card title="Recent Activities">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-gray-800 dark:text-white">
                    <span className="font-medium">{activity.action}</span>
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {activity.user} • {activity.department}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Leave Statistics">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</span>
              <span className="font-semibold text-gray-800 dark:text-white">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Approved This Month</span>
              <span className="font-semibold text-gray-800 dark:text-white">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Average Days Taken</span>
              <span className="font-semibold text-gray-800 dark:text-white">12.4</span>
            </div>
          </div>
        </Card>

        <Card title="Recruitment Status">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Open Positions</span>
              <span className="font-semibold text-gray-800 dark:text-white">32</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Applications This Week</span>
              <span className="font-semibold text-gray-800 dark:text-white">127</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Interviews Scheduled</span>
              <span className="font-semibold text-gray-800 dark:text-white">18</span>
            </div>
          </div>
        </Card>

        <Card title="Performance Metrics">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Performance Score</span>
              <span className="font-semibold text-gray-800 dark:text-white">8.4/10</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Reviews Completed</span>
              <span className="font-semibold text-gray-800 dark:text-white">892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Goals Achieved</span>
              <span className="font-semibold text-gray-800 dark:text-white">76%</span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Overview;