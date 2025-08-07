import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const LeaveBalance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('myself');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [viewMode, setViewMode] = useState('summary'); // summary, detailed, team

  const currentUser = {
    id: 1,
    name: 'John Smith',
    employeeId: 'EMP001',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    joinDate: '2022-03-15',
    probationEndDate: '2022-09-15'
  };

  const leaveBalances = {
    2024: {
      annual: {
        type: 'Annual Leave',
        entitlement: 21,
        used: 8,
        pending: 4,
        available: 9,
        carried: 2,
        expiring: 1,
        expiryDate: '2024-12-31',
        color: 'bg-blue-500',
        icon: 'CalendarIcon'
      },
      sick: {
        type: 'Sick Leave',
        entitlement: 14,
        used: 3,
        pending: 0,
        available: 11,
        carried: 0,
        expiring: 0,
        expiryDate: '2024-12-31',
        color: 'bg-red-500',
        icon: 'HeartIcon'
      },
      personal: {
        type: 'Personal Leave',
        entitlement: 5,
        used: 2,
        pending: 1,
        available: 2,
        carried: 0,
        expiring: 0,
        expiryDate: '2024-12-31',
        color: 'bg-green-500',
        icon: 'UserIcon'
      },
      maternity: {
        type: 'Maternity Leave',
        entitlement: 90,
        used: 0,
        pending: 0,
        available: 90,
        carried: 0,
        expiring: 0,
        expiryDate: 'N/A',
        color: 'bg-pink-500',
        icon: 'HeartIcon'
      }
    }
  };

  const leaveHistory = [
    {
      id: 1,
      type: 'Annual Leave',
      startDate: '2024-02-15',
      endDate: '2024-02-19',
      days: 5,
      status: 'approved',
      reason: 'Family vacation'
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2024-01-22',
      endDate: '2024-01-23',
      days: 2,
      status: 'approved',
      reason: 'Medical appointment'
    },
    {
      id: 3,
      type: 'Personal Leave',
      startDate: '2024-01-08',
      endDate: '2024-01-08',
      days: 1,
      status: 'approved',
      reason: 'Personal matter'
    },
    {
      id: 4,
      type: 'Annual Leave',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      days: 3,
      status: 'pending',
      reason: 'Weekend getaway'
    }
  ];

  const teamBalances = [
    {
      id: 2,
      name: 'Sarah Wilson',
      employeeId: 'EMP002',
      department: 'Engineering',
      position: 'Team Lead',
      balances: {
        annual: { available: 15, used: 6 },
        sick: { available: 12, used: 2 },
        personal: { available: 3, used: 2 }
      },
      utilizationRate: 32
    },
    {
      id: 3,
      name: 'Michael Chen',
      employeeId: 'EMP003',
      department: 'Engineering',
      position: 'Software Engineer',
      balances: {
        annual: { available: 18, used: 3 },
        sick: { available: 14, used: 0 },
        personal: { available: 5, used: 0 }
      },
      utilizationRate: 8
    },
    {
      id: 4,
      name: 'Emma Davis',
      employeeId: 'EMP004',
      department: 'Design',
      position: 'UX Designer',
      balances: {
        annual: { available: 12, used: 9 },
        sick: { available: 11, used: 3 },
        personal: { available: 2, used: 3 }
      },
      utilizationRate: 58
    }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getUtilizationColor = (rate) => {
    if (rate < 25) return 'text-red-600 dark:text-red-400';
    if (rate < 50) return 'text-yellow-600 dark:text-yellow-400';
    if (rate < 75) return 'text-green-600 dark:text-green-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  const BalanceCard = ({ balance, leaveType }) => {
    const percentage = (balance.used / balance.entitlement) * 100;
    
    return (
      <Card>
        <div className="flex items-start space-x-4">
          <div className={`w-12 h-12 ${balance.color} rounded-lg flex items-center justify-center`}>
            <Icon name={balance.icon} className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {balance.type}
              </h3>
              <span className="text-2xl font-bold text-gray-800 dark:text-white">
                {balance.available}
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">days</span>
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                <span>Used: {balance.used}</span>
                <span>Total: {balance.entitlement}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${balance.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div>
                <p className="text-gray-600 dark:text-gray-400">Pending</p>
                <p className="font-medium text-gray-800 dark:text-white">{balance.pending}</p>
              </div>
              {balance.carried > 0 && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Carried Over</p>
                  <p className="font-medium text-blue-600 dark:text-blue-400">{balance.carried}</p>
                </div>
              )}
              {balance.expiring > 0 && (
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Expiring Soon</p>
                  <p className="font-medium text-red-600 dark:text-red-400">{balance.expiring}</p>
                </div>
              )}
              <div>
                <p className="text-gray-600 dark:text-gray-400">Expires</p>
                <p className="font-medium text-gray-800 dark:text-white">{balance.expiryDate}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const SummaryView = () => (
    <div className="space-y-6">
      {/* Balance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.entries(leaveBalances[selectedYear]).map(([key, balance]) => (
          <BalanceCard key={key} balance={balance} leaveType={key} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Leave Usage by Type"
          type="pie"
          data={Object.entries(leaveBalances[selectedYear])
            .filter(([_, balance]) => balance.used > 0)
            .map(([key, balance]) => ({
              label: balance.type,
              value: balance.used,
              color: balance.color
            }))}
          height="300px"
        />

        <Chart
          title="Monthly Leave Usage"
          type="bar"
          data={[
            { label: 'Jan', value: 3 },
            { label: 'Feb', value: 5 },
            { label: 'Mar', value: 2 },
            { label: 'Apr', value: 1 },
            { label: 'May', value: 0 },
            { label: 'Jun', value: 2 }
          ]}
          height="300px"
        />
      </div>
    </div>
  );

  const DetailedView = () => (
    <div className="space-y-6">
      {/* Employee Information */}
      <Card title="Employee Information">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Employee ID</p>
            <p className="font-medium text-gray-800 dark:text-white">{currentUser.employeeId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
            <p className="font-medium text-gray-800 dark:text-white">{currentUser.department}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Join Date</p>
            <p className="font-medium text-gray-800 dark:text-white">{formatDate(currentUser.joinDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Probation End</p>
            <p className="font-medium text-gray-800 dark:text-white">{formatDate(currentUser.probationEndDate)}</p>
          </div>
        </div>
      </Card>

      {/* Leave History */}
      <Card title="Leave History">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Type</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Period</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Days</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Reason</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.map(leave => (
                <tr key={leave.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                      {leave.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatDate(leave.startDate)} - {formatDate(leave.endDate)}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {leave.days} {leave.days > 1 ? 'days' : 'day'}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {leave.reason}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      leave.status === 'approved' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : leave.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Accrual Details */}
      <Card title="Leave Accrual Details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Current Year Accrual</h4>
            <div className="space-y-3">
              {Object.entries(leaveBalances[selectedYear]).map(([key, balance]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{balance.type}</span>
                  <div className="text-right">
                    <p className="font-medium text-gray-800 dark:text-white">
                      {balance.entitlement} days
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Monthly: {(balance.entitlement / 12).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Next Accrual</h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-800 dark:text-blue-400 font-medium">Annual Leave</span>
                  <span className="text-blue-800 dark:text-blue-400 font-bold">1.75 days</span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">Next accrual: March 1, 2024</p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-800 dark:text-red-400 font-medium">Sick Leave</span>
                  <span className="text-red-800 dark:text-red-400 font-bold">1.17 days</span>
                </div>
                <p className="text-xs text-red-600 dark:text-red-400">Next accrual: March 1, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const TeamView = () => (
    <div className="space-y-6">
      <Card title="Team Leave Balances">
        <div className="space-y-4">
          {teamBalances.map(employee => (
            <div key={employee.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {getInitials(employee.name)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {employee.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {employee.employeeId} • {employee.position}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Utilization Rate</p>
                      <p className={`text-lg font-bold ${getUtilizationColor(employee.utilizationRate)}`}>
                        {employee.utilizationRate}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Annual</p>
                      <p className="font-medium text-blue-600 dark:text-blue-400">
                        {employee.balances.annual.available}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Used: {employee.balances.annual.used}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Sick</p>
                      <p className="font-medium text-red-600 dark:text-red-400">
                        {employee.balances.sick.available}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Used: {employee.balances.sick.used}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-600 dark:text-gray-400">Personal</p>
                      <p className="font-medium text-green-600 dark:text-green-400">
                        {employee.balances.personal.available}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Used: {employee.balances.personal.used}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (viewMode) {
      case 'summary':
        return <SummaryView />;
      case 'detailed':
        return <DetailedView />;
      case 'team':
        return <TeamView />;
      default:
        return <SummaryView />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Leave Balance
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your leave entitlements and usage
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Export Balance Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CalendarDaysIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Object.values(leaveBalances[selectedYear]).reduce((sum, balance) => sum + balance.available, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Days Available</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Object.values(leaveBalances[selectedYear]).reduce((sum, balance) => sum + balance.used, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Days Used</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Object.values(leaveBalances[selectedYear]).reduce((sum, balance) => sum + balance.pending, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Object.values(leaveBalances[selectedYear]).reduce((sum, balance) => sum + balance.expiring, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Expiring Soon</p>
            </div>
          </div>
        </Card>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1 w-fit">
          <button
            onClick={() => setViewMode('summary')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'summary'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setViewMode('detailed')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'detailed'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Detailed
          </button>
          <button
            onClick={() => setViewMode('team')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'team'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            Team View
          </button>
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </DashboardLayout>
  );
};

export default LeaveBalance;