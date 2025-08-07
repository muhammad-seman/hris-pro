import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const AttendanceReports = () => {
  const [selectedReport, setSelectedReport] = useState('summary');
  const [dateRange, setDateRange] = useState('thisMonth');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const reportTypes = [
    { id: 'summary', label: 'Attendance Summary', icon: 'ChartBarIcon' },
    { id: 'detailed', label: 'Detailed Report', icon: 'DocumentTextIcon' },
    { id: 'trends', label: 'Trends Analysis', icon: 'TrendingUpIcon' },
    { id: 'exceptions', label: 'Exceptions Report', icon: 'ExclamationTriangleIcon' }
  ];

  const attendanceData = [
    {
      id: 1,
      employeeName: 'Sarah Wilson',
      employeeId: 'EMP001',
      department: 'Engineering',
      daysPresent: 22,
      daysAbsent: 1,
      daysLate: 2,
      totalWorkingDays: 25,
      attendanceRate: 88,
      avgClockIn: '09:15',
      avgClockOut: '18:30',
      totalHours: 184.5,
      overtimeHours: 12.0,
      leavesTaken: 1
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      employeeId: 'EMP002',
      department: 'Engineering',
      daysPresent: 24,
      daysAbsent: 0,
      daysLate: 1,
      totalWorkingDays: 25,
      attendanceRate: 96,
      avgClockIn: '08:45',
      avgClockOut: '18:15',
      totalHours: 192.0,
      overtimeHours: 8.5,
      leavesTaken: 0
    },
    {
      id: 3,
      employeeName: 'Emma Davis',
      employeeId: 'EMP003',
      department: 'Design',
      daysPresent: 20,
      daysAbsent: 3,
      daysLate: 1,
      totalWorkingDays: 25,
      attendanceRate: 80,
      avgClockIn: '09:30',
      avgClockOut: '18:00',
      totalHours: 160.0,
      overtimeHours: 2.0,
      leavesTaken: 2
    },
    {
      id: 4,
      employeeName: 'James Rodriguez',
      employeeId: 'EMP004',
      department: 'Engineering',
      daysPresent: 23,
      daysAbsent: 1,
      daysLate: 0,
      totalWorkingDays: 25,
      attendanceRate: 92,
      avgClockIn: '09:00',
      avgClockOut: '18:30',
      totalHours: 184.0,
      overtimeHours: 6.0,
      leavesTaken: 1
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Sales', 'HR'];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAttendanceColor = (rate) => {
    if (rate >= 95) return 'text-green-600 dark:text-green-400';
    if (rate >= 85) return 'text-blue-600 dark:text-blue-400';
    if (rate >= 75) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getAttendanceBadge = (rate) => {
    if (rate >= 95) return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    if (rate >= 85) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
    if (rate >= 75) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
  };

  const filteredData = selectedDepartment === 'all' 
    ? attendanceData 
    : attendanceData.filter(emp => emp.department === selectedDepartment);

  const SummaryReport = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">92%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Attendance</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">7.8h</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Daily Hours</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">14</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Late Arrivals</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Icon name="XCircleIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">8</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Unexcused Absences</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card title="Employee Attendance Summary">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Present</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Absent</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Late</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Rate</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Total Hours</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Overtime</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(employee => (
                <tr key={employee.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {getInitials(employee.employeeName)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{employee.employeeName}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{employee.employeeId} • {employee.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      {employee.daysPresent}/{employee.totalWorkingDays}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-red-600 dark:text-red-400 font-medium">
                      {employee.daysAbsent}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                      {employee.daysLate}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAttendanceBadge(employee.attendanceRate)}`}>
                        {employee.attendanceRate}%
                      </span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                        <div 
                          className="bg-blue-500 h-1.5 rounded-full"
                          style={{ width: `${employee.attendanceRate}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.totalHours}h
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.overtimeHours}h
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Report"
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
    </div>
  );

  const TrendsReport = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Monthly Attendance Trends"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 95 },
              { label: 'Tue', value: 88 },
              { label: 'Wed', value: 92 },
              { label: 'Thu', value: 89 },
              { label: 'Fri', value: 84 },
              { label: 'Sat', value: 76 },
              { label: 'Sun', value: 82 }
            ],
            '30d': [
              { label: 'Week 1', value: 92 },
              { label: 'Week 2', value: 88 },
              { label: 'Week 3', value: 90 },
              { label: 'Week 4', value: 87 }
            ],
            '3m': [
              { label: 'Month 1', value: 89 },
              { label: 'Month 2', value: 92 },
              { label: 'Month 3', value: 87 }
            ],
            '1y': [
              { label: 'Q1', value: 89 },
              { label: 'Q2', value: 92 },
              { label: 'Q3', value: 87 },
              { label: 'Q4', value: 91 }
            ]
          }}
          height="350px"
        />

        <Chart
          title="Department Attendance Comparison"
          type="bar"
          data={[
            { label: 'Engineering', value: 92 },
            { label: 'Design', value: 85 },
            { label: 'Marketing', value: 89 },
            { label: 'Sales', value: 91 },
            { label: 'HR', value: 94 }
          ]}
          height="350px"
        />
      </div>

      <Card title="Attendance Patterns">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Peak Attendance Days</h4>
            <div className="space-y-2">
              {['Tuesday', 'Wednesday', 'Thursday'].map((day, idx) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{day}</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {[94, 92, 91][idx]}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Low Attendance Days</h4>
            <div className="space-y-2">
              {['Monday', 'Friday'].map((day, idx) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{day}</span>
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">
                    {[86, 84][idx]}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Common Absence Reasons</h4>
            <div className="space-y-2">
              {[
                { reason: 'Sick Leave', count: 12 },
                { reason: 'Personal Leave', count: 8 },
                { reason: 'Family Emergency', count: 4 }
              ].map((item) => (
                <div key={item.reason} className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{item.reason}</span>
                  <span className="font-medium text-gray-800 dark:text-white">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const ExceptionsReport = () => (
    <Card title="Attendance Exceptions">
      <div className="space-y-4">
        {[
          { type: 'Late Arrival', employee: 'Sarah Wilson', date: '2024-02-07', time: '09:45', threshold: '09:00', severity: 'medium' },
          { type: 'Early Departure', employee: 'Michael Chen', date: '2024-02-06', time: '17:30', threshold: '18:00', severity: 'low' },
          { type: 'Unexcused Absence', employee: 'Emma Davis', date: '2024-02-05', time: '--', threshold: '--', severity: 'high' },
          { type: 'Long Break', employee: 'James Rodriguez', date: '2024-02-04', time: '2:30h', threshold: '1:00h', severity: 'medium' }
        ].map((exception, idx) => (
          <div key={idx} className={`p-4 rounded-lg border-l-4 ${
            exception.severity === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-900/20' :
            exception.severity === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
            'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{exception.type}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exception.employee} • {exception.date}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {exception.time !== '--' ? `Time: ${exception.time}` : 'No clock-in recorded'}
                  {exception.threshold !== '--' && ` (Threshold: ${exception.threshold})`}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                exception.severity === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                exception.severity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
              }`}>
                {exception.severity.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'summary':
        return <SummaryReport />;
      case 'trends':
        return <TrendsReport />;
      case 'exceptions':
        return <ExceptionsReport />;
      default:
        return <SummaryReport />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Attendance Reports
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive attendance analytics and reporting
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="thisYear">This Year</option>
            </select>
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
              title="Export Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Report Type Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {reportTypes.map(report => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  selectedReport === report.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon name={report.icon} className="w-4 h-4" />
                <span>{report.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Report Content */}
      {renderReportContent()}
    </DashboardLayout>
  );
};

export default AttendanceReports;