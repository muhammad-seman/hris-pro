import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const GoalSetting = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

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
          description: 'Achieve first month sales target of $50k',
          progress: 0,
          status: 'not_started',
          dueDate: '2024-10-31'
        }
      ],
      lastUpdated: '2024-03-20'
    },
    {
      id: 3,
      title: 'Reduce Development Cycle Time',
      description: 'Optimize development processes to reduce average feature delivery time from 4 weeks to 2.5 weeks',
      category: 'efficiency',
      type: 'performance',
      priority: 'medium',
      status: 'in_progress',
      progress: 30,
      targetValue: 2.5,
      currentValue: 3.2,
      unit: 'weeks',
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      assignedTo: {
        employeeId: 'EMP003',
        employeeName: 'Robert Chen',
        department: 'Engineering',
        position: 'Engineering Lead'
      },
      createdBy: {
        employeeId: 'EMP102',
        employeeName: 'Lisa Wong',
        position: 'CTO'
      },
      keyResults: [
        {
          id: 1,
          description: 'Implement automated testing pipeline',
          progress: 60,
          status: 'in_progress',
          dueDate: '2024-06-15'
        },
        {
          id: 2,
          description: 'Adopt agile development methodology across all teams',
          progress: 20,
          status: 'in_progress',
          dueDate: '2024-08-30'
        },
        {
          id: 3,
          description: 'Reduce code review time by 50%',
          progress: 10,
          status: 'not_started',
          dueDate: '2024-10-15'
        }
      ],
      lastUpdated: '2024-03-22'
    },
    {
      id: 4,
      title: 'Increase Team Productivity',
      description: 'Improve team productivity metrics by 25% through better resource allocation and process optimization',
      category: 'productivity',
      type: 'performance',
      priority: 'medium',
      status: 'completed',
      progress: 100,
      targetValue: 125,
      currentValue: 127,
      unit: 'index',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      assignedTo: {
        employeeId: 'EMP004',
        employeeName: 'Emma Davis',
        department: 'Operations',
        position: 'Operations Manager'
      },
      createdBy: {
        employeeId: 'EMP100',
        employeeName: 'Sarah Johnson',
        position: 'Operations Director'
      },
      keyResults: [
        {
          id: 1,
          description: 'Implement new project management tools',
          progress: 100,
          status: 'completed',
          dueDate: '2024-03-31'
        },
        {
          id: 2,
          description: 'Optimize workflow processes',
          progress: 100,
          status: 'completed',
          dueDate: '2024-05-15'
        },
        {
          id: 3,
          description: 'Conduct team efficiency training',
          progress: 100,
          status: 'completed',
          dueDate: '2024-06-15'
        }
      ],
      lastUpdated: '2024-06-30'
    }
  ];

  const employees = [
    {
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Customer Service',
      position: 'Customer Service Manager',
      goals: goals.filter(g => g.assignedTo.employeeId === 'EMP001'),
      totalGoals: 3,
      completedGoals: 1,
      inProgressGoals: 2,
      averageProgress: 72
    },
    {
      employeeId: 'EMP002',
      employeeName: 'Maria Garcia',
      department: 'Product Development',
      position: 'Product Manager',
      goals: goals.filter(g => g.assignedTo.employeeId === 'EMP002'),
      totalGoals: 2,
      completedGoals: 0,
      inProgressGoals: 2,
      averageProgress: 55
    },
    {
      employeeId: 'EMP003',
      employeeName: 'Robert Chen',
      department: 'Engineering',
      position: 'Engineering Lead',
      goals: goals.filter(g => g.assignedTo.employeeId === 'EMP003'),
      totalGoals: 4,
      completedGoals: 1,
      inProgressGoals: 3,
      averageProgress: 48
    },
    {
      employeeId: 'EMP004',
      employeeName: 'Emma Davis',
      department: 'Operations',
      position: 'Operations Manager',
      goals: goals.filter(g => g.assignedTo.employeeId === 'EMP004'),
      totalGoals: 2,
      completedGoals: 2,
      inProgressGoals: 0,
      averageProgress: 100
    }
  ];

  const goalCategories = [
    { id: 'customer_service', label: 'Customer Service', count: 1, color: 'bg-blue-500' },
    { id: 'business_development', label: 'Business Development', count: 1, color: 'bg-green-500' },
    { id: 'efficiency', label: 'Efficiency', count: 1, color: 'bg-purple-500' },
    { id: 'productivity', label: 'Productivity', count: 1, color: 'bg-orange-500' }
  ];

  const departments = ['all', 'Customer Service', 'Product Development', 'Engineering', 'Operations'];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      not_started: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      on_hold: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    };
    return colors[status] || colors.not_started;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[priority] || colors.low;
  };

  const getCategoryColor = (category) => {
    const categoryData = goalCategories.find(c => c.id === category);
    return categoryData ? categoryData.color : 'bg-gray-500';
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const GoalsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Company Goals</h3>
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
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 ${getCategoryColor(goal.category)} rounded-full`}></div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{goal.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{goal.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                    {goal.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                    {goal.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{goal.assignedTo.employeeName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{goal.assignedTo.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">{goal.progress}%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Complete</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium text-gray-800 dark:text-white">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <span>Due: {formatDate(goal.endDate)}</span>
                <span>{goal.keyResults.length} Key Results</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedGoal && (
        <Card title={`Goal Details - ${selectedGoal.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Description</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedGoal.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${getCategoryColor(selectedGoal.category)} rounded-full`}></div>
                      <p className="font-medium text-gray-800 dark:text-white capitalize">{selectedGoal.category.replace('_', ' ')}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">{selectedGoal.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Priority</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedGoal.priority)}`}>
                      {selectedGoal.priority.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedGoal.status)}`}>
                      {selectedGoal.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Start Date</p>
                    <p className="font-medium text-gray-800 dark:text-white">{formatDate(selectedGoal.startDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">End Date</p>
                    <p className="font-medium text-gray-800 dark:text-white">{formatDate(selectedGoal.endDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Current Value</p>
                    <p className="font-medium text-gray-800 dark:text-white">{selectedGoal.currentValue} {selectedGoal.unit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Target Value</p>
                    <p className="font-medium text-gray-800 dark:text-white">{selectedGoal.targetValue} {selectedGoal.unit}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Assigned To</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Icon name="UserIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{selectedGoal.assignedTo.employeeName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{selectedGoal.assignedTo.position}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{selectedGoal.assignedTo.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Results</h4>
              <div className="space-y-3">
                {selectedGoal.keyResults.map((keyResult) => (
                  <div key={keyResult.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-medium text-gray-800 dark:text-white">{keyResult.description}</h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(keyResult.status)}`}>
                        {keyResult.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="font-medium text-gray-800 dark:text-white">{keyResult.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(keyResult.progress)}`}
                          style={{ width: `${keyResult.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Due: {formatDate(keyResult.dueDate)}</span>
                        <span>{keyResult.progress}% Complete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const EmployeesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Goals</h3>
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
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Icon name="ChartBarIcon" className="w-4 h-4 inline mr-2" />
            Bulk Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {employees.map((employee) => (
          <Card key={employee.employeeId} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedEmployee(employee)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{employee.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{employee.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{employee.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{employee.averageProgress}%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Avg Progress</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{employee.totalGoals}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Total Goals</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{employee.completedGoals}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{employee.inProgressGoals}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">In Progress</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Overall Progress</span>
                  <span className="font-medium text-gray-800 dark:text-white">{employee.averageProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(employee.averageProgress)}`}
                    style={{ width: `${employee.averageProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedEmployee && (
        <Card title={`Employee Goals - ${selectedEmployee.employeeName}`}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedEmployee.totalGoals}</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">Total Goals</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedEmployee.completedGoals}</p>
                <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{selectedEmployee.inProgressGoals}</p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">In Progress</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{selectedEmployee.averageProgress}%</p>
                <p className="text-sm text-purple-800 dark:text-purple-300">Avg Progress</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">Active Goals</h4>
              {selectedEmployee.goals.map((goal) => (
                <div key={goal.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-800 dark:text-white">{goal.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{goal.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                        {goal.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                        {goal.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="font-medium text-gray-800 dark:text-white">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Due: {formatDate(goal.endDate)}</span>
                      <span>{goal.keyResults.length} Key Results</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const CategoriesTab = () => (
    <div className="space-y-6">
      <Card title="Goal Categories Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalCategories.map((category) => (
            <div key={category.id} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name="TargetIcon" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{category.label}</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{category.count}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Active Goals</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Category Performance">
        <div className="space-y-4">
          {goalCategories.map((category) => {
            const categoryGoals = goals.filter(g => g.category === category.id);
            const avgProgress = categoryGoals.length > 0 
              ? categoryGoals.reduce((sum, goal) => sum + goal.progress, 0) / categoryGoals.length 
              : 0;
            
            return (
              <div key={category.id} className="flex items-center space-x-4">
                <div className={`w-8 h-8 ${category.color} rounded flex items-center justify-center`}>
                  <Icon name="TargetIcon" className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-800 dark:text-white">{category.label}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {Math.round(avgProgress)}% avg progress
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={category.color}
                      style={{ width: `${avgProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>{category.count} goals</span>
                    <span>{categoryGoals.filter(g => g.status === 'completed').length} completed</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Goal Analytics Overview">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="TargetIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{goals.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Goals</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {goals.filter(g => g.status === 'completed').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ClockIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {goals.filter(g => g.status === 'in_progress').length}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">In Progress</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="ChartBarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Avg Progress</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Performance">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptGoals = goals.filter(g => g.assignedTo.department === dept);
              const avgProgress = deptGoals.length > 0 
                ? deptGoals.reduce((sum, goal) => sum + goal.progress, 0) / deptGoals.length 
                : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${avgProgress}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-12 text-right">
                      {Math.round(avgProgress)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Goal Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'completed', label: 'Completed', color: 'bg-green-500' },
              { status: 'in_progress', label: 'In Progress', color: 'bg-blue-500' },
              { status: 'not_started', label: 'Not Started', color: 'bg-gray-500' },
              { status: 'overdue', label: 'Overdue', color: 'bg-red-500' }
            ].map(item => {
              const count = goals.filter(g => g.status === item.status).length;
              const percentage = goals.length > 0 ? (count / goals.length) * 100 : 0;
              
              return (
                <div key={item.status} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
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
      </div>
    </div>
  );

  const tabs = [
    { id: 'goals', label: 'Company Goals', icon: 'TargetIcon', component: GoalsTab },
    { id: 'employees', label: 'Employee Goals', icon: 'UserGroupIcon', component: EmployeesTab },
    { id: 'categories', label: 'Categories', icon: 'TagIcon', component: CategoriesTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || GoalsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Goal Setting</h1>
            <p className="text-gray-600 dark:text-gray-400">Set, track, and manage company and employee goals</p>
          </div>
          <div className="flex space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Goals
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

export default GoalSetting;