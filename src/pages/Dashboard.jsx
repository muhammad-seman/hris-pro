import DashboardLayout from '../components/Layout/DashboardLayout';
import StatsCard from '../components/Dashboard/StatsCard';
import Chart from '../components/Dashboard/Chart';
import { Card } from '../components';

const Dashboard = () => {
  const statsData = [
    {
      title: 'Total Employees',
      value: '1,248',
      change: '+12%',
      changeType: 'positive',
      icon: 'UsersIcon',
      color: 'blue',
      description: 'vs last month'
    },
    {
      title: 'Present Today',
      value: '1,156',
      change: '92.6%',
      changeType: 'positive', 
      icon: 'ClockIcon',
      color: 'green',
      description: 'attendance rate'
    },
    {
      title: 'On Leave',
      value: '78',
      change: '-5%',
      changeType: 'negative',
      icon: 'CalendarIcon',
      color: 'orange',
      description: 'vs last week'
    },
    {
      title: 'New Hires',
      value: '24',
      change: '+18%',
      changeType: 'positive',
      icon: 'BriefcaseIcon', 
      color: 'purple',
      description: 'this month'
    },
    {
      title: 'Avg Salary',
      value: '$75,420',
      change: '+8%',
      changeType: 'positive',
      icon: 'CurrencyDollarIcon',
      color: 'green',
      description: 'company wide'
    },
    {
      title: 'Performance',
      value: '8.4/10',
      change: '+0.3',
      changeType: 'positive',
      icon: 'TrendingUpIcon',
      color: 'blue',
      description: 'avg rating'
    }
  ];

  const recentActivities = [
    { id: 1, user: 'Sarah Johnson', action: 'submitted leave request', time: '2 hours ago', type: 'leave' },
    { id: 2, user: 'Mike Chen', action: 'completed training module', time: '4 hours ago', type: 'training' },
    { id: 3, user: 'Emma Wilson', action: 'updated profile information', time: '6 hours ago', type: 'profile' },
    { id: 4, user: 'David Brown', action: 'clocked in', time: '1 day ago', type: 'attendance' },
  ];

  const announcements = [
    { 
      id: 1, 
      title: 'Q4 Performance Reviews', 
      message: 'Performance review cycle starts next week. Please prepare your self-assessments.',
      priority: 'high',
      date: '2024-01-15'
    },
    { 
      id: 2, 
      title: 'New Health Insurance Policy', 
      message: 'Updated health insurance benefits effective February 1st. Check your email for details.',
      priority: 'medium',
      date: '2024-01-10'
    },
    { 
      id: 3, 
      title: 'Team Building Event', 
      message: 'Join us for the annual team building event on January 25th at Central Park.',
      priority: 'low',
      date: '2024-01-08'
    }
  ];

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening at your workplace today
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <Chart
          title="Employee Growth"
          type="line"
          data={[
            { label: 'Jan', value: 1180 },
            { label: 'Feb', value: 1195 },
            { label: 'Mar', value: 1210 },
            { label: 'Apr', value: 1225 },
            { label: 'May', value: 1235 },
            { label: 'Jun', value: 1248 },
          ]}
        />
        
        <Chart
          title="Department Headcount"
          type="bar"
          data={[
            { label: 'Engineering', value: 320 },
            { label: 'Sales', value: 180 },
            { label: 'Marketing', value: 95 },
            { label: 'HR', value: 45 },
            { label: 'Finance', value: 38 },
          ]}
        />
        
        <Chart
          title="Attendance Overview"
          type="pie"
          data={[
            { label: 'Present', value: 92.6, color: 'bg-green-500' },
            { label: 'Leave', value: 6.2, color: 'bg-yellow-500' },
            { label: 'Absent', value: 1.2, color: 'bg-red-500' },
          ]}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card title="Recent Activities">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'leave' ? 'bg-orange-500' :
                  activity.type === 'training' ? 'bg-blue-500' :
                  activity.type === 'profile' ? 'bg-purple-500' :
                  'bg-green-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-800 dark:text-white">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Announcements */}
        <Card title="Latest Announcements">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                    {announcement.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    announcement.priority === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                    announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {announcement.priority}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {announcement.message}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {announcement.date}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;