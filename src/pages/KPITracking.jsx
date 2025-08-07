import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const KPITracking = () => {
  const [activeTab, setActiveTab] = useState('kpis');
  const [selectedKPI, setSelectedKPI] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
    },
    {
      id: 4,
      name: 'System Uptime',
      description: 'Percentage of time systems are operational and available',
      category: 'technical',
      type: 'percentage',
      unit: '%',
      target: 99.5,
      current: 99.2,
      achievement: 99.7,
      status: 'on_track',
      trend: 'stable',
      frequency: 'daily',
      owner: {
        employeeId: 'EMP004',
        employeeName: 'Emma Davis',
        department: 'IT',
        position: 'IT Director'
      },
      history: [
        { period: '2024-03-01', value: 99.1, target: 99.5 },
        { period: '2024-03-15', value: 99.3, target: 99.5 },
        { period: '2024-03-30', value: 99.2, target: 99.5 }
      ],
      lastUpdated: '2024-03-30'
    },
    {
      id: 5,
      name: 'Lead Conversion Rate',
      description: 'Percentage of leads converted to paying customers',
      category: 'sales',
      type: 'percentage',
      unit: '%',
      target: 25,
      current: 28,
      achievement: 112,
      status: 'exceeding',
      trend: 'up',
      frequency: 'monthly',
      owner: {
        employeeId: 'EMP005',
        employeeName: 'Lisa Wong',
        department: 'Marketing',
        position: 'Marketing Manager'
      },
      history: [
        { period: '2024-01', value: 22, target: 25 },
        { period: '2024-02', value: 26, target: 25 },
        { period: '2024-03', value: 28, target: 25 }
      ],
      lastUpdated: '2024-03-29'
    }
  ];

  const employees = [
    {
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Customer Service',
      position: 'CS Manager',
      kpis: kpis.filter(k => k.owner.employeeId === 'EMP001'),
      averageAchievement: 93.3,
      totalKPIs: 1,
      onTrackKPIs: 1,
      atRiskKPIs: 0,
      exceedingKPIs: 0
    },
    {
      employeeId: 'EMP002',
      employeeName: 'Maria Garcia',
      department: 'Sales',
      position: 'Sales Director',
      kpis: kpis.filter(k => k.owner.employeeId === 'EMP002'),
      averageAchievement: 83.3,
      totalKPIs: 1,
      onTrackKPIs: 0,
      atRiskKPIs: 1,
      exceedingKPIs: 0
    },
    {
      employeeId: 'EMP003',
      employeeName: 'Robert Chen',
      department: 'Operations',
      position: 'Operations Manager',
      kpis: kpis.filter(k => k.owner.employeeId === 'EMP003'),
      averageAchievement: 103.5,
      totalKPIs: 1,
      onTrackKPIs: 0,
      atRiskKPIs: 0,
      exceedingKPIs: 1
    },
    {
      employeeId: 'EMP004',
      employeeName: 'Emma Davis',
      department: 'IT',
      position: 'IT Director',
      kpis: kpis.filter(k => k.owner.employeeId === 'EMP004'),
      averageAchievement: 99.7,
      totalKPIs: 1,
      onTrackKPIs: 1,
      atRiskKPIs: 0,
      exceedingKPIs: 0
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories', count: kpis.length },
    { id: 'customer', label: 'Customer', count: kpis.filter(k => k.category === 'customer').length },
    { id: 'financial', label: 'Financial', count: kpis.filter(k => k.category === 'financial').length },
    { id: 'operational', label: 'Operational', count: kpis.filter(k => k.category === 'operational').length },
    { id: 'technical', label: 'Technical', count: kpis.filter(k => k.category === 'technical').length },
    { id: 'sales', label: 'Sales', count: kpis.filter(k => k.category === 'sales').length }
  ];

  const departments = ['all', 'Customer Service', 'Sales', 'Operations', 'IT', 'Marketing'];
  const periods = [
    { value: '2024-Q1', label: 'Q1 2024' },
    { value: '2023-Q4', label: 'Q4 2023' },
    { value: '2023-Q3', label: 'Q3 2023' }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      on_track: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      at_risk: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      behind: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      exceeding: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.on_track;
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

  const getAchievementColor = (achievement) => {
    if (achievement >= 100) return 'text-green-600 dark:text-green-400';
    if (achievement >= 80) return 'text-blue-600 dark:text-blue-400';
    if (achievement >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getProgressColor = (achievement) => {
    if (achievement >= 100) return 'bg-green-500';
    if (achievement >= 80) return 'bg-blue-500';
    if (achievement >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredKPIs = kpis.filter(kpi => {
    if (selectedDepartment !== 'all' && kpi.owner.department !== selectedDepartment) return false;
    if (selectedCategory !== 'all' && kpi.category !== selectedCategory) return false;
    return true;
  });

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
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
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
        {filteredKPIs.map((kpi) => (
          <Card key={kpi.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedKPI(kpi)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{kpi.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{kpi.category} • {kpi.frequency}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{kpi.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(kpi.status)}`}>
                    {kpi.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Icon name={getTrendIcon(kpi.trend)} className={`w-4 h-4 ${getTrendColor(kpi.trend)}`} />
                    <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                      {kpi.trend}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">
                    {kpi.current}{kpi.unit === '%' ? '%' : ''}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Current</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {kpi.target}{kpi.unit === '%' ? '%' : ''}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Target</p>
                </div>
                <div className="text-center">
                  <p className={`text-2xl font-bold ${getAchievementColor(kpi.achievement)}`}>
                    {kpi.achievement.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Achievement</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium text-gray-800 dark:text-white">{kpi.achievement.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(kpi.achievement)}`}
                    style={{ width: `${Math.min(kpi.achievement, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <span>Owner: {kpi.owner.employeeName}</span>
                <span>Updated: {formatDate(kpi.lastUpdated)}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedKPI && (
        <Card title={`KPI Details - ${selectedKPI.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Description</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedKPI.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">{selectedKPI.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">{selectedKPI.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Frequency</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">{selectedKPI.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedKPI.status)}`}>
                      {selectedKPI.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Owner Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedKPI.owner.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedKPI.owner.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedKPI.owner.department}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {selectedKPI.current}{selectedKPI.unit === '%' ? '%' : ''}
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-300">Current Value</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {selectedKPI.target}{selectedKPI.unit === '%' ? '%' : ''}
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-300">Target Value</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {selectedKPI.achievement.toFixed(1)}%
                    </p>
                    <p className="text-sm text-purple-800 dark:text-purple-300">Achievement</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress to Target</span>
                    <div className="flex items-center space-x-2">
                      <Icon name={getTrendIcon(selectedKPI.trend)} className={`w-4 h-4 ${getTrendColor(selectedKPI.trend)}`} />
                      <span className={`text-sm font-medium ${getTrendColor(selectedKPI.trend)}`}>
                        {selectedKPI.trend}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full ${getProgressColor(selectedKPI.achievement)}`}
                      style={{ width: `${Math.min(selectedKPI.achievement, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                    <span>0</span>
                    <span>{selectedKPI.achievement.toFixed(1)}%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Performance History</h4>
              <div className="space-y-3">
                {selectedKPI.history.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{record.period}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Actual</p>
                        <p className="font-semibold text-gray-800 dark:text-white">
                          {record.value}{selectedKPI.unit === '%' ? '%' : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Target</p>
                        <p className="font-semibold text-blue-600 dark:text-blue-400">
                          {record.target}{selectedKPI.unit === '%' ? '%' : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Achievement</p>
                        <p className={`font-semibold ${getAchievementColor((record.value / record.target) * 100)}`}>
                          {((record.value / record.target) * 100).toFixed(1)}%
                        </p>
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
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee KPI Performance</h3>
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
            Generate Report
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
                  <p className={`text-2xl font-bold ${getAchievementColor(employee.averageAchievement)}`}>
                    {employee.averageAchievement.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Avg Achievement</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{employee.totalKPIs}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Total KPIs</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">{employee.onTrackKPIs}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">On Track</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{employee.atRiskKPIs}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">At Risk</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{employee.exceedingKPIs}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Exceeding</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Overall Performance</span>
                  <span className="font-medium text-gray-800 dark:text-white">{employee.averageAchievement.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(employee.averageAchievement)}`}
                    style={{ width: `${Math.min(employee.averageAchievement, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedEmployee && (
        <Card title={`KPI Performance - ${selectedEmployee.employeeName}`}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedEmployee.totalKPIs}</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">Total KPIs</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedEmployee.onTrackKPIs}</p>
                <p className="text-sm text-green-800 dark:text-green-300">On Track</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{selectedEmployee.atRiskKPIs}</p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">At Risk</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{selectedEmployee.exceedingKPIs}</p>
                <p className="text-sm text-purple-800 dark:text-purple-300">Exceeding</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">KPI Details</h4>
              {selectedEmployee.kpis.map((kpi) => (
                <div key={kpi.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-800 dark:text-white">{kpi.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{kpi.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(kpi.status)}`}>
                        {kpi.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Icon name={getTrendIcon(kpi.trend)} className={`w-3 h-3 ${getTrendColor(kpi.trend)}`} />
                        <span className={`text-xs ${getTrendColor(kpi.trend)}`}>
                          {kpi.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-800 dark:text-white">
                        {kpi.current}{kpi.unit === '%' ? '%' : ''}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Current</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {kpi.target}{kpi.unit === '%' ? '%' : ''}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Target</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-lg font-bold ${getAchievementColor(kpi.achievement)}`}>
                        {kpi.achievement.toFixed(1)}%
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Achievement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Updated</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{formatDate(kpi.lastUpdated)}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(kpi.achievement)}`}
                      style={{ width: `${Math.min(kpi.achievement, 100)}%` }}
                    ></div>
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
      <Card title="KPI Categories Overview">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(cat => cat.id !== 'all').map((category) => {
            const categoryKPIs = kpis.filter(k => k.category === category.id);
            const avgAchievement = categoryKPIs.length > 0 
              ? categoryKPIs.reduce((sum, k) => sum + k.achievement, 0) / categoryKPIs.length 
              : 0;
            
            return (
              <div key={category.id} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ChartBarIcon" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{category.label}</h3>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">{category.count}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">KPIs</p>
                <p className={`text-lg font-semibold ${getAchievementColor(avgAchievement)}`}>
                  {avgAchievement.toFixed(1)}% avg
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      <Card title="Category Performance Breakdown">
        <div className="space-y-4">
          {categories.filter(cat => cat.id !== 'all').map((category) => {
            const categoryKPIs = kpis.filter(k => k.category === category.id);
            const avgAchievement = categoryKPIs.length > 0 
              ? categoryKPIs.reduce((sum, k) => sum + k.achievement, 0) / categoryKPIs.length 
              : 0;
            
            return (
              <div key={category.id} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <Icon name="ChartBarIcon" className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-800 dark:text-white">{category.label}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {avgAchievement.toFixed(1)}% avg achievement
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={getProgressColor(avgAchievement)}
                      style={{ width: `${Math.min(avgAchievement, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>{category.count} KPIs</span>
                    <span>
                      {categoryKPIs.filter(k => k.status === 'exceeding').length} exceeding, {' '}
                      {categoryKPIs.filter(k => k.status === 'on_track').length} on track, {' '}
                      {categoryKPIs.filter(k => k.status === 'at_risk').length} at risk
                    </span>
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
      <Card title="KPI Analytics Overview">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="ChartBarIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{kpis.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total KPIs</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {kpis.filter(k => k.status === 'on_track').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">On Track</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="ArrowTrendingUpIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {kpis.filter(k => k.status === 'exceeding').length}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Exceeding</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {kpis.filter(k => k.status === 'at_risk').length}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">At Risk</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Performance">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptKPIs = kpis.filter(k => k.owner.department === dept);
              const avgAchievement = deptKPIs.length > 0 
                ? deptKPIs.reduce((sum, k) => sum + k.achievement, 0) / deptKPIs.length 
                : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(avgAchievement)}`}
                        style={{ width: `${Math.min(avgAchievement, 100)}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-16 text-right">
                      {avgAchievement > 0 ? `${avgAchievement.toFixed(1)}%` : 'N/A'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="KPI Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'exceeding', label: 'Exceeding', color: 'bg-blue-500' },
              { status: 'on_track', label: 'On Track', color: 'bg-green-500' },
              { status: 'at_risk', label: 'At Risk', color: 'bg-yellow-500' },
              { status: 'behind', label: 'Behind', color: 'bg-red-500' }
            ].map(item => {
              const count = kpis.filter(k => k.status === item.status).length;
              const percentage = kpis.length > 0 ? (count / kpis.length) * 100 : 0;
              
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
    { id: 'kpis', label: 'KPIs', icon: 'ChartBarIcon', component: KPIsTab },
    { id: 'employees', label: 'Employees', icon: 'UserGroupIcon', component: EmployeesTab },
    { id: 'categories', label: 'Categories', icon: 'TagIcon', component: CategoriesTab },
    { id: 'analytics', label: 'Analytics', icon: 'PresentationChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || KPIsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">KPI Tracking</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and monitor key performance indicators across the organization</p>
          </div>
          <div className="flex space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {periods.map(period => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export KPIs
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

export default KPITracking;