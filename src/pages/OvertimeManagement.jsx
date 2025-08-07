import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const OvertimeManagement = () => {
  const [selectedTab, setSelectedTab] = useState('requests');
  const [selectedPeriod, setSelectedPeriod] = useState('thisMonth');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const overtimeRequests = [
    {
      id: 1,
      employeeName: 'Sarah Wilson',
      employeeId: 'EMP001',
      department: 'Engineering',
      requestDate: '2024-02-07',
      overtimeDate: '2024-02-10',
      startTime: '18:00',
      endTime: '22:00',
      hours: 4,
      reason: 'Critical project deadline',
      status: 'pending',
      priority: 'high',
      approvedBy: null,
      rate: 1.5
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      employeeId: 'EMP002',
      department: 'Engineering',
      requestDate: '2024-02-06',
      overtimeDate: '2024-02-08',
      startTime: '19:00',
      endTime: '23:00',
      hours: 4,
      reason: 'Data processing completion',
      status: 'approved',
      priority: 'medium',
      approvedBy: 'John Anderson',
      rate: 1.5
    },
    {
      id: 3,
      employeeName: 'Emma Davis',
      employeeId: 'EMP003',
      department: 'Design',
      requestDate: '2024-02-05',
      overtimeDate: '2024-02-07',
      startTime: '17:30',
      endTime: '20:30',
      hours: 3,
      reason: 'Client presentation preparation',
      status: 'rejected',
      priority: 'low',
      approvedBy: 'Patricia Brown',
      rate: 1.5
    },
    {
      id: 4,
      employeeName: 'James Rodriguez',
      employeeId: 'EMP004',
      department: 'Engineering',
      requestDate: '2024-02-04',
      overtimeDate: '2024-02-06',
      startTime: '18:30',
      endTime: '21:30',
      hours: 3,
      reason: 'Server maintenance',
      status: 'completed',
      priority: 'high',
      approvedBy: 'Sarah Wilson',
      rate: 2.0
    }
  ];

  const overtimeHistory = [
    {
      id: 1,
      employeeName: 'Sarah Wilson',
      department: 'Engineering',
      month: 'January 2024',
      regularHours: 160,
      overtimeHours: 18,
      totalPay: 4800,
      overtimePay: 540,
      averageRate: 1.5
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      department: 'Engineering',
      month: 'January 2024',
      regularHours: 160,
      overtimeHours: 24,
      totalPay: 5200,
      overtimePay: 720,
      averageRate: 1.5
    },
    {
      id: 3,
      employeeName: 'James Rodriguez',
      department: 'Engineering',
      month: 'January 2024',
      regularHours: 160,
      overtimeHours: 16,
      totalPay: 4600,
      overtimePay: 640,
      averageRate: 2.0
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR'];

  const tabs = [
    { id: 'requests', label: 'Overtime Requests', icon: 'ClockIcon' },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon' },
    { id: 'history', label: 'History', icon: 'DocumentTextIcon' },
    { id: 'policies', label: 'Policies', icon: 'Cog6ToothIcon' }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredRequests = selectedDepartment === 'all' 
    ? overtimeRequests 
    : overtimeRequests.filter(req => req.department === selectedDepartment);

  const RequestsTab = () => (
    <div className="space-y-6">
      <Card title="Overtime Requests">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Date & Time</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Hours</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Reason</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Priority</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map(request => (
                <tr key={request.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {getInitials(request.employeeName)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{request.employeeName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{request.employeeId} • {request.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{request.overtimeDate}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{request.startTime} - {request.endTime}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-gray-800 dark:text-white">{request.hours}h</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">({request.rate}x)</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs truncate" title={request.reason}>
                      {request.reason}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                      {request.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      {request.status === 'pending' && (
                        <>
                          <button 
                            className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                            title="Approve"
                          >
                            <Icon name="CheckIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </button>
                          <button 
                            className="p-1 bg-red-50 dark:bg-red-900/20 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                            title="Reject"
                          >
                            <Icon name="XMarkIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />
                          </button>
                        </>
                      )}
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Details"
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Monthly Overtime Trends"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 12 },
              { label: 'Tue', value: 8 },
              { label: 'Wed', value: 15 },
              { label: 'Thu', value: 18 },
              { label: 'Fri', value: 22 },
              { label: 'Sat', value: 5 },
              { label: 'Sun', value: 2 }
            ],
            '30d': [
              { label: 'Week 1', value: 45 },
              { label: 'Week 2', value: 52 },
              { label: 'Week 3', value: 38 },
              { label: 'Week 4', value: 47 }
            ],
            '3m': [
              { label: 'Month 1', value: 158 },
              { label: 'Month 2', value: 172 },
              { label: 'Month 3', value: 145 }
            ],
            '1y': [
              { label: 'Q1', value: 475 },
              { label: 'Q2', value: 523 },
              { label: 'Q3', value: 456 },
              { label: 'Q4', value: 512 }
            ]
          }}
          height="300px"
        />

        <Chart
          title="Department Overtime Distribution"
          type="pie"
          data={[
            { label: 'Engineering', value: 45, color: 'bg-blue-500' },
            { label: 'Sales', value: 25, color: 'bg-green-500' },
            { label: 'Marketing', value: 15, color: 'bg-purple-500' },
            { label: 'Support', value: 10, color: 'bg-yellow-500' },
            { label: 'HR', value: 5, color: 'bg-red-500' }
          ]}
          height="300px"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Overtime Cost Analysis">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Regular Pay</span>
              <span className="text-xl font-bold text-gray-800 dark:text-white">$45,600</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Overtime Pay</span>
              <span className="text-xl font-bold text-orange-600 dark:text-orange-400">$8,450</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
              <span className="text-gray-800 dark:text-white font-semibold">Total Cost</span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$54,050</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span>Overtime percentage: </span>
              <span className="font-medium">18.5%</span>
            </div>
          </div>
        </Card>

        <Card title="Top Overtime Performers">
          <div className="space-y-3">
            {[
              { name: 'Michael Chen', hours: 24, cost: '$720' },
              { name: 'Sarah Wilson', hours: 18, cost: '$540' },
              { name: 'James Rodriguez', hours: 16, cost: '$640' },
              { name: 'Emma Davis', hours: 12, cost: '$360' }
            ].map((employee, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {getInitials(employee.name)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{employee.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{employee.hours}h</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{employee.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const HistoryTab = () => (
    <Card title="Overtime History">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Period</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Regular Hours</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Overtime Hours</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Avg Rate</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Total Pay</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {overtimeHistory.map(record => (
              <tr key={record.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {getInitials(record.employeeName)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{record.employeeName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{record.department}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {record.month}
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {record.regularHours}h
                </td>
                <td className="py-4 px-4">
                  <span className="font-medium text-orange-600 dark:text-orange-400">
                    {record.overtimeHours}h
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {record.averageRate}x
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">${record.totalPay.toLocaleString()}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">OT: ${record.overtimePay}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-1">
                    <button 
                      className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      title="View Details"
                    >
                      <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                    <button 
                      className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                      title="Export"
                    >
                      <Icon name="ArrowDownTrayIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );

  const PoliciesTab = () => (
    <div className="space-y-6">
      <Card title="Overtime Policies">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Rate Configuration</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Standard Overtime (>40h/week)</span>
                <span className="font-medium text-gray-800 dark:text-white">1.5x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Weekend Overtime</span>
                <span className="font-medium text-gray-800 dark:text-white">2.0x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Holiday Overtime</span>
                <span className="font-medium text-gray-800 dark:text-white">2.5x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Emergency Overtime</span>
                <span className="font-medium text-gray-800 dark:text-white">2.0x</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Approval Rules</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800 dark:text-white">Auto-approve overtime up to 2 hours</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">For employees with manager approval</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="ClockIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800 dark:text-white">Require approval for >2 hours</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Must be approved by department head</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="ExclamationTriangleIcon" className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800 dark:text-white">Executive approval for >8 hours</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Requires C-level authorization</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="XCircleIcon" className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-800 dark:text-white">Maximum 12 hours per day</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Legal limit enforced automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Department Limits">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Weekly Limit</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Monthly Limit</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Current Usage</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Budget</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dept: 'Engineering', weekly: '60h', monthly: '240h', usage: '185h (77%)', budget: '$15,000' },
                { dept: 'Sales', weekly: '40h', monthly: '160h', usage: '125h (78%)', budget: '$8,000' },
                { dept: 'Marketing', weekly: '30h', monthly: '120h', usage: '95h (79%)', budget: '$6,000' },
                { dept: 'Support', weekly: '50h', monthly: '200h', usage: '165h (83%)', budget: '$10,000' },
                { dept: 'HR', weekly: '20h', monthly: '80h', usage: '45h (56%)', budget: '$3,000' }
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4 font-medium text-gray-800 dark:text-white">{item.dept}</td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{item.weekly}</td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{item.monthly}</td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{item.usage}</td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{item.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'requests':
        return <RequestsTab />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'history':
        return <HistoryTab />;
      case 'policies':
        return <PoliciesTab />;
      default:
        return <RequestsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Overtime Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage overtime requests, approvals, and analytics
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="New Request"
            >
              <Icon name="PlusIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">4</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Approved This Month</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">182</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Hours This Month</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CurrencyDollarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">$8,450</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overtime Cost</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </DashboardLayout>
  );
};

export default OvertimeManagement;