import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const GoalsKPITracking = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedKPI, setSelectedKPI] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Goals Data
  const goals = [
    {
      id: 1,
      title: 'Increase Customer Satisfaction Score',
      description: 'Improve overall customer satisfaction rating from 4.2 to 4.6 by implementing new service protocols',
      category: 'customer_service',
      type: 'performance',
      priority: 'high',
      status: 'in_progress',
      progress: 65,
      targetValue: 4.6,
      currentValue: 4.4,
      unit: 'score',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      assignedTo: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Customer Service',
        position: 'Customer Service Manager'
      },
      createdBy: {
        employeeId: 'EMP100',
        employeeName: 'Sarah Johnson',
        position: 'Operations Director'
      },
      keyResults: [
        {
          id: 1,
          description: 'Implement new customer feedback system',
          progress: 80,
          status: 'in_progress',
          dueDate: '2024-06-30'
        },
        {
          id: 2,
          description: 'Train all customer service staff on new protocols',
          progress: 50,
          status: 'in_progress',
          dueDate: '2024-08-15'
        },
        {
          id: 3,
          description: 'Reduce average response time to under 2 hours',
          progress: 70,
          status: 'in_progress',
          dueDate: '2024-10-30'
        }
      ],
      lastUpdated: '2024-03-25'
    },
    {
      id: 2,
      title: 'Launch New Product Line',
      description: 'Successfully launch and establish market presence for our new eco-friendly product line',
      category: 'business_development',
      type: 'project',
      priority: 'critical',
      status: 'in_progress',
      progress: 45,
      targetValue: 100,
      currentValue: 45,
      unit: 'percentage',
      startDate: '2024-01-15',
      endDate: '2024-09-30',
      assignedTo: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Product Development',
        position: 'Product Manager'
      },
      createdBy: {
        employeeId: 'EMP101',
        employeeName: 'David Wilson',
        position: 'CEO'
      },
      keyResults: [
        {
          id: 1,
          description: 'Complete product development and testing',
          progress: 85,
          status: 'in_progress',
          dueDate: '2024-05-31'
        },
        {
          id: 2,
          description: 'Establish partnerships with 10 key retailers',
          progress: 30,
          status: 'not_started',
          dueDate: '2024-07-31'
        },
        {
          id: 3,
          description: 'Achieve $500K in first quarter sales',
          progress: 20,
          status: 'not_started',
          dueDate: '2024-12-31'
        }
      ],
      lastUpdated: '2024-03-20'
    }
  ];

  // KPIs Data
  const kpis = [
    {
      id: 1,
      name: 'Customer Satisfaction Score',
      description: 'Measure customer satisfaction through surveys and feedback',
      category: 'customer',
      type: 'score',
      unit: 'rating',
      target: 4.5,
      current: 4.2,
      achievement: 93.3,
      status: 'on_track',
      trend: 'up',
      frequency: 'monthly',
      owner: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Customer Service',
        position: 'CS Manager'
      },
      history: [
        { period: '2024-01', value: 4.0, target: 4.5 },
        { period: '2024-02', value: 4.1, target: 4.5 },
        { period: '2024-03', value: 4.2, target: 4.5 }
      ],
      lastUpdated: '2024-03-25'
    },
    {
      id: 2,
      name: 'Revenue Growth Rate',
      description: 'Monthly revenue growth compared to previous period',
      category: 'financial',
      type: 'percentage',
      unit: '%',
      target: 15,
      current: 12.5,
      achievement: 83.3,
      status: 'at_risk',
      trend: 'down',
      frequency: 'monthly',
      owner: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Sales',
        position: 'Sales Director'
      },
      history: [
        { period: '2024-01', value: 18.2, target: 15 },
        { period: '2024-02', value: 14.8, target: 15 },
        { period: '2024-03', value: 12.5, target: 15 }
      ],
      lastUpdated: '2024-03-30'
    },
    {
      id: 3,
      name: 'Employee Productivity Index',
      description: 'Measure overall employee productivity and efficiency',
      category: 'operational',
      type: 'index',
      unit: 'points',
      target: 85,
      current: 88,
      achievement: 103.5,
      status: 'exceeding',
      trend: 'up',
      frequency: 'weekly',
      owner: {
        employeeId: 'EMP003',
        employeeName: 'Robert Chen',
        department: 'Operations',
        position: 'Operations Manager'
      },
      history: [
        { period: '2024-W10', value: 82, target: 85 },
        { period: '2024-W11', value: 85, target: 85 },
        { period: '2024-W12', value: 88, target: 85 }
      ],
      lastUpdated: '2024-03-28'
    }
  ];

  const categories = [
    'all', 'customer_service', 'business_development', 'efficiency', 'productivity'
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'Customer Service', 'HR', 'Finance'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      not_started: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      on_track: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      at_risk: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      behind: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      exceeding: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.not_started;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[priority] || colors.medium;
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return 'ArrowTrendingUpIcon';
    if (trend === 'down') return 'ArrowTrendingDownIcon';
    return 'MinusIcon';
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600 dark:text-green-400';
    if (trend === 'down') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const GoalsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Goals & Objectives</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            New Goal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedGoal(goal)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{goal.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{goal.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                    {goal.priority.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                    {goal.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(goal.progress)}`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Start Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(goal.startDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">End Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(goal.endDate)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 dark:text-gray-400">Assigned To</p>
                  <p className="font-medium text-gray-800 dark:text-white">{goal.assignedTo.employeeName}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{goal.assignedTo.position}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Key Results ({goal.keyResults.length})</p>
                <div className="space-y-1">
                  {goal.keyResults.slice(0, 2).map((kr) => (
                    <div key={kr.id} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700 dark:text-gray-300 truncate">{kr.description}</span>
                      <span className="font-medium text-gray-800 dark:text-white ml-2">{kr.progress}%</span>
                    </div>
                  ))}
                  {goal.keyResults.length > 2 && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      +{goal.keyResults.length - 2} more results
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const KPIsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Key Performance Indicators</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            New KPI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kpis.map((kpi) => (
          <Card key={kpi.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedKPI(kpi)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{kpi.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{kpi.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(kpi.status)}`}>
                    {kpi.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <Icon name={getTrendIcon(kpi.trend)} className={`w-4 h-4 ${getTrendColor(kpi.trend)}`} />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Achievement</span>
                  <span className="text-lg font-bold text-gray-800 dark:text-white">{kpi.achievement.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(kpi.achievement)}`}
                    style={{ width: `${Math.min(kpi.achievement, 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Current</p>
                  <p className="font-bold text-gray-800 dark:text-white">{kpi.current} {kpi.unit}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Target</p>
                  <p className="font-bold text-gray-800 dark:text-white">{kpi.target} {kpi.unit}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Frequency</p>
                  <p className="font-medium text-gray-800 dark:text-white capitalize">{kpi.frequency}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Owner</p>
                  <p className="font-medium text-gray-800 dark:text-white">{kpi.owner.employeeName}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Recent History</p>
                <div className="space-y-1">
                  {kpi.history.slice(-3).map((record, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{record.period}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-800 dark:text-white">{record.value} {kpi.unit}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">({record.target})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="FlagIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{goals.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Goals</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{kpis.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active KPIs</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUpIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Goal Progress</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="StarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round(kpis.reduce((sum, kpi) => sum + kpi.achievement, 0) / kpis.length)}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg KPI Achievement</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Goals Status Distribution">
          <div className="space-y-4">
            {['in_progress', 'completed', 'not_started', 'overdue'].map(status => {
              const count = goals.filter(g => g.status === status).length;
              const percentage = goals.length > 0 ? (count / goals.length) * 100 : 0;
              
              return (
                <div key={status} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${getProgressColor(percentage)} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300 capitalize">{status.replace('_', ' ')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                      {count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="KPI Performance Overview">
          <div className="space-y-4">
            {kpis.map((kpi) => (
              <div key={kpi.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{kpi.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{kpi.owner.department}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(kpi.achievement)}`}
                      style={{ width: `${Math.min(kpi.achievement, 100)}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-800 dark:text-white w-12 text-right">
                    {kpi.achievement.toFixed(0)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const tabs = [
    { id: 'goals', label: 'Goals', icon: 'FlagIcon', component: GoalsTab },
    { id: 'kpis', label: 'KPIs', icon: 'ChartBarIcon', component: KPIsTab },
    { id: 'analytics', label: 'Analytics', icon: 'PresentationChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || GoalsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Goal Setting & KPI Tracking</h1>
            <p className="text-gray-600 dark:text-gray-400">Set objectives, track key performance indicators, and monitor progress</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Report
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <ActiveComponent />
      </div>
    </DashboardLayout>
  );
};

export default GoalsKPITracking;