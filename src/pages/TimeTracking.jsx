import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const TimeTracking = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [dateRange, setDateRange] = useState('thisWeek');

  const employees = [
    {
      id: 1,
      name: 'Sarah Wilson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      avatar: null,
      todayStatus: 'present',
      clockInTime: '09:15',
      clockOutTime: null,
      workingHours: '7:45',
      breakTime: '0:45',
      overtimeHours: '0:00',
      weeklyHours: 42.5,
      productivityScore: 94,
      currentProject: 'Mobile App Redesign',
      location: 'Office'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Data Scientist',
      department: 'Engineering',
      avatar: null,
      todayStatus: 'remote',
      clockInTime: '08:45',
      clockOutTime: null,
      workingHours: '8:15',
      breakTime: '0:30',
      overtimeHours: '0:15',
      weeklyHours: 44.0,
      productivityScore: 89,
      currentProject: 'ML Pipeline Development',
      location: 'Remote'
    },
    {
      id: 3,
      name: 'Emma Davis',
      position: 'UX Designer',
      department: 'Design',
      avatar: null,
      todayStatus: 'absent',
      clockInTime: null,
      clockOutTime: null,
      workingHours: '0:00',
      breakTime: '0:00',
      overtimeHours: '0:00',
      weeklyHours: 32.5,
      productivityScore: 0,
      currentProject: 'Dashboard Redesign',
      location: 'Sick Leave'
    },
    {
      id: 4,
      name: 'James Rodriguez',
      position: 'Backend Developer',
      department: 'Engineering',
      avatar: null,
      todayStatus: 'present',
      clockInTime: '09:00',
      clockOutTime: '18:30',
      workingHours: '8:30',
      breakTime: '1:00',
      overtimeHours: '0:30',
      weeklyHours: 41.0,
      productivityScore: 87,
      currentProject: 'API Optimization',
      location: 'Office'
    }
  ];

  const timeEntries = [
    {
      id: 1,
      employeeId: 1,
      date: '2024-02-07',
      clockIn: '09:15',
      clockOut: null,
      breakTime: 45,
      project: 'Mobile App Redesign',
      tasks: ['UI Components', 'State Management', 'API Integration'],
      notes: 'Working on the new dashboard components'
    },
    {
      id: 2,
      employeeId: 1,
      date: '2024-02-06',
      clockIn: '09:00',
      clockOut: '18:15',
      breakTime: 60,
      project: 'Mobile App Redesign',
      tasks: ['Code Review', 'Bug Fixes', 'Testing'],
      notes: 'Completed user authentication module'
    },
    {
      id: 3,
      employeeId: 2,
      date: '2024-02-07',
      clockIn: '08:45',
      clockOut: null,
      breakTime: 30,
      project: 'ML Pipeline Development',
      tasks: ['Data Processing', 'Model Training', 'Performance Analysis'],
      notes: 'Optimizing model accuracy'
    }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'remote':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'absent':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'late':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getProductivityColor = (score) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 75) return 'text-blue-600 dark:text-blue-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const calculateWorkingTime = (clockIn, clockOut) => {
    if (!clockIn || !clockOut) return '--';
    // Simple calculation for demo
    const [inHour, inMin] = clockIn.split(':').map(Number);
    const [outHour, outMin] = clockOut.split(':').map(Number);
    const totalMinutes = (outHour * 60 + outMin) - (inHour * 60 + inMin);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Time Tracking
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor employee work hours, productivity, and time allocation
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="thisMonth">This Month</option>
            </select>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Export Time Report"
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
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">1,847</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Hours</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UserGroupIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">186</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Today</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">87%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Productivity</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">23</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Overtime Hours</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Employee Time Tracking Table */}
      <Card title="Employee Time Overview">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Clock In</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Clock Out</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Hours</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Break</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Weekly</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Productivity</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr 
                  key={employee.id} 
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {getInitials(employee.name)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{employee.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{employee.position}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.todayStatus)}`}>
                      {employee.todayStatus.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.clockInTime || '--'}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.clockOutTime || '--'}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.workingHours}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.breakTime}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.weeklyHours}h
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium ${getProductivityColor(employee.productivityScore)}`}>
                        {employee.productivityScore > 0 ? `${employee.productivityScore}%` : '--'}
                      </span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${employee.productivityScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Details"
                        onClick={() => setSelectedEmployee(employee)}
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button 
                        className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        title="Edit Time"
                      >
                        <Icon name="PencilIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </button>
                      <button 
                        className="p-1 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                        title="Time Report"
                      >
                        <Icon name="DocumentTextIcon" className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <Chart
          title="Weekly Time Tracking Trends"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 8.5 },
              { label: 'Tue', value: 7.8 },
              { label: 'Wed', value: 9.2 },
              { label: 'Thu', value: 8.1 },
              { label: 'Fri', value: 8.7 },
              { label: 'Sat', value: 4.2 },
              { label: 'Sun', value: 2.1 }
            ],
            '30d': [
              { label: 'Week 1', value: 42.5 },
              { label: 'Week 2', value: 38.9 },
              { label: 'Week 3', value: 45.2 },
              { label: 'Week 4', value: 41.8 }
            ],
            '3m': [
              { label: 'Month 1', value: 168.4 },
              { label: 'Month 2', value: 172.1 },
              { label: 'Month 3', value: 165.8 }
            ],
            '1y': [
              { label: 'Q1', value: 506.3 },
              { label: 'Q2', value: 521.7 },
              { label: 'Q3', value: 498.2 },
              { label: 'Q4', value: 512.8 }
            ]
          }}
          height="350px"
        />

        <Chart
          title="Department Time Distribution"
          type="pie"
          data={[
            { label: 'Engineering', value: 65, color: 'bg-blue-500' },
            { label: 'Design', value: 15, color: 'bg-purple-500' },
            { label: 'Marketing', value: 12, color: 'bg-green-500' },
            { label: 'Sales', value: 8, color: 'bg-yellow-500' }
          ]}
          height="350px"
        />
      </div>

      {/* Employee Detail Modal-like section */}
      {selectedEmployee && (
        <Card title={`Time Details - ${selectedEmployee.name}`} className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Location</span>
                  <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Project</span>
                  <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.currentProject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Today's Hours</span>
                  <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.workingHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Overtime</span>
                  <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.overtimeHours}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Recent Time Entries</h4>
              <div className="space-y-3">
                {timeEntries
                  .filter(entry => entry.employeeId === selectedEmployee.id)
                  .slice(0, 3)
                  .map(entry => (
                    <div key={entry.id} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-800 dark:text-white">{entry.date}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {entry.clockIn} - {entry.clockOut || 'Active'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{entry.project}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{entry.notes}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default TimeTracking;