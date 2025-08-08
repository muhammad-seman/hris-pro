import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const HRAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState(null);

  // Sample data
  const analyticsData = {
    overview: {
      totalEmployees: 156,
      newHires: 12,
      turnoverRate: 8.5,
      averagePerformance: 4.2,
      satisfactionScore: 4.1,
      absenteeismRate: 2.8,
      trainingHours: 1240,
      costPerHire: 4500
    },
    demographics: {
      ageGroups: [
        { label: '18-25', value: 18, percentage: 11.5 },
        { label: '26-35', value: 62, percentage: 39.7 },
        { label: '36-45', value: 48, percentage: 30.8 },
        { label: '46-55', value: 22, percentage: 14.1 },
        { label: '56+', value: 6, percentage: 3.8 }
      ],
      gender: [
        { label: 'Male', value: 89, percentage: 57.1 },
        { label: 'Female', value: 67, percentage: 42.9 }
      ],
      departments: [
        { label: 'Engineering', value: 45, percentage: 28.8 },
        { label: 'Sales', value: 30, percentage: 19.2 },
        { label: 'Marketing', value: 25, percentage: 16.0 },
        { label: 'HR', value: 12, percentage: 7.7 },
        { label: 'Finance', value: 15, percentage: 9.6 },
        { label: 'Operations', value: 18, percentage: 11.5 },
        { label: 'Others', value: 11, percentage: 7.1 }
      ]
    },
    performance: {
      averageScore: 4.2,
      topPerformers: 23,
      improvementNeeded: 8,
      goalCompletion: 87.5,
      reviewCompletion: 94.2,
      monthlyTrends: [
        { month: 'Jan', score: 4.1 },
        { month: 'Feb', score: 4.0 },
        { month: 'Mar', score: 4.2 },
        { month: 'Apr', score: 4.3 },
        { month: 'May', score: 4.2 },
        { month: 'Jun', score: 4.4 }
      ]
    },
    retention: {
      retentionRate: 91.5,
      avgTenure: 2.8,
      voluntaryTurnover: 6.4,
      involuntaryTurnover: 2.1,
      exitReasons: [
        { reason: 'Better Opportunity', count: 8, percentage: 32 },
        { reason: 'Salary', count: 6, percentage: 24 },
        { reason: 'Work-Life Balance', count: 4, percentage: 16 },
        { reason: 'Career Growth', count: 3, percentage: 12 },
        { reason: 'Management', count: 2, percentage: 8 },
        { reason: 'Others', count: 2, percentage: 8 }
      ],
      retentionByDepartment: [
        { department: 'Engineering', rate: 94.2 },
        { department: 'Sales', rate: 88.9 },
        { department: 'Marketing', rate: 92.0 },
        { department: 'HR', rate: 95.8 },
        { department: 'Finance', rate: 90.7 }
      ]
    },
    engagement: {
      overallScore: 4.1,
      responseRate: 89.7,
      categories: [
        { category: 'Job Satisfaction', score: 4.2, change: 0.3 },
        { category: 'Work Environment', score: 4.0, change: 0.1 },
        { category: 'Management', score: 4.1, change: -0.1 },
        { category: 'Career Development', score: 3.9, change: 0.2 },
        { category: 'Compensation', score: 4.0, change: 0.0 },
        { category: 'Work-Life Balance', score: 4.3, change: 0.4 }
      ],
      trends: [
        { quarter: 'Q1 2023', score: 3.8 },
        { quarter: 'Q2 2023', score: 3.9 },
        { quarter: 'Q3 2023', score: 4.0 },
        { quarter: 'Q4 2023', score: 4.1 }
      ]
    },
    recruitment: {
      timeToHire: 21,
      costPerHire: 4500,
      offerAcceptanceRate: 85.7,
      sourceEffectiveness: [
        { source: 'Job Boards', hires: 15, cost: 3200 },
        { source: 'Referrals', hires: 8, cost: 1200 },
        { source: 'LinkedIn', hires: 12, cost: 4800 },
        { source: 'Career Fairs', hires: 5, cost: 2500 },
        { source: 'Others', hires: 3, cost: 1800 }
      ],
      hiringTrends: [
        { month: 'Jan', hires: 8 },
        { month: 'Feb', hires: 6 },
        { month: 'Mar', hires: 12 },
        { month: 'Apr', hires: 9 },
        { month: 'May', hires: 7 },
        { month: 'Jun', hires: 11 }
      ]
    }
  };

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Employees</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.totalEmployees}</p>
              <p className="text-sm text-green-600 dark:text-green-400">+{analyticsData.overview.newHires} this month</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="UsersIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Turnover Rate</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.turnoverRate}%</p>
              <p className="text-sm text-red-600 dark:text-red-400">+0.5% vs last month</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <Icon name="ArrowRightOnRectangleIcon" className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Performance</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.averagePerformance}/5</p>
              <p className="text-sm text-green-600 dark:text-green-400">+0.1 vs last quarter</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="TrophyIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Satisfaction Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.satisfactionScore}/5</p>
              <p className="text-sm text-green-600 dark:text-green-400">+0.2 vs last survey</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="FaceSmileIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Distribution</h3>
          <div className="space-y-4">
            {analyticsData.demographics.departments.map((dept, index) => {
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500', 'bg-pink-500'];
              return (
                <div key={dept.label} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{dept.label}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${colors[index % colors.length]} h-2 rounded-full`}
                        style={{ width: `${dept.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                      {dept.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Absenteeism Rate</span>
                <Icon name="CalendarDaysIcon" className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.absenteeismRate}%</span>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Training Hours</span>
                <Icon name="AcademicCapIcon" className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.trainingHours}</span>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Cost Per Hire</span>
                <Icon name="CurrencyDollarIcon" className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">${analyticsData.overview.costPerHire}</span>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">New Hires</span>
                <Icon name="UserPlusIcon" className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{analyticsData.overview.newHires}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.performance.averageScore}/5</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="StarIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Top Performers</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.performance.topPerformers}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="TrophyIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Goal Completion</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.performance.goalCompletion}%</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="CheckCircleIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Review Completion</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.performance.reviewCompletion}%</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Icon name="DocumentCheckIcon" className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Trends</h3>
        <div className="space-y-4">
          {analyticsData.performance.monthlyTrends.map((month, index) => (
            <div key={month.month} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{month.month}</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(month.score / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-900 dark:text-white w-12 text-right">
                  {month.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderRetentionTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Retention Rate</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.retention.retentionRate}%</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="UserGroupIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Tenure</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.retention.avgTenure} yrs</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="ClockIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Voluntary Turnover</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.retention.voluntaryTurnover}%</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="ArrowRightOnRectangleIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Involuntary Turnover</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.retention.involuntaryTurnover}%</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <Icon name="XCircleIcon" className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Exit Reasons</h3>
          <div className="space-y-3">
            {analyticsData.retention.exitReasons.map((reason, index) => {
              const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-500', 'bg-gray-500'];
              return (
                <div key={reason.reason} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-full`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{reason.reason}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{reason.count}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">({reason.percentage}%)</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Retention by Department</h3>
          <div className="space-y-3">
            {analyticsData.retention.retentionByDepartment.map((dept, index) => {
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500'];
              return (
                <div key={dept.department} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{dept.department}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`${colors[index % colors.length]} h-2 rounded-full`}
                        style={{ width: `${dept.rate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                      {dept.rate}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderEngagementTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.engagement.overallScore}/5</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="HeartIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Response Rate</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{analyticsData.engagement.responseRate}%</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="ChatBubbleLeftRightIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Trend</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">+0.3</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">vs last quarter</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="TrendingUpIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Engagement Categories</h3>
        <div className="space-y-4">
          {analyticsData.engagement.categories.map((category, index) => (
            <div key={category.category} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{category.category}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{category.score}/5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(category.score / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={category.change >= 0 ? "ArrowUpIcon" : "ArrowDownIcon"} 
                    className={`h-3 w-3 ${category.change >= 0 ? 'text-green-500' : 'text-red-500'}`} 
                  />
                  <span className={`text-xs ${category.change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {Math.abs(category.change)} vs last survey
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'ChartBarIcon', component: renderOverviewTab },
    { id: 'performance', label: 'Performance', icon: 'TrophyIcon', component: renderPerformanceTab },
    { id: 'retention', label: 'Retention', icon: 'UserGroupIcon', component: renderRetentionTab },
    { id: 'engagement', label: 'Engagement', icon: 'HeartIcon', component: renderEngagementTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HR Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive workforce analytics and insights</p>
          </div>
          
          <div className="flex space-x-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="12months">Last 12 Months</option>
            </select>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>

            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {tabs.find(tab => tab.id === activeTab)?.component()}
      </div>
    </DashboardLayout>
  );
};

export default HRAnalytics;