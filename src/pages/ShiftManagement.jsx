import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const ShiftManagement = () => {
  const [selectedView, setSelectedView] = useState('schedule');
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const shifts = [
    {
      id: 1,
      name: 'Morning Shift',
      startTime: '08:00',
      endTime: '16:00',
      duration: 8,
      breakTime: 60,
      type: 'regular',
      department: 'Engineering',
      maxCapacity: 25,
      currentAssigned: 23,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Afternoon Shift',
      startTime: '16:00',
      endTime: '00:00',
      duration: 8,
      breakTime: 60,
      type: 'regular',
      department: 'Engineering',
      maxCapacity: 15,
      currentAssigned: 14,
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Night Shift',
      startTime: '00:00',
      endTime: '08:00',
      duration: 8,
      breakTime: 60,
      type: 'overnight',
      department: 'Engineering',
      maxCapacity: 10,
      currentAssigned: 8,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Sales Day Shift',
      startTime: '09:00',
      endTime: '18:00',
      duration: 8,
      breakTime: 60,
      type: 'regular',
      department: 'Sales',
      maxCapacity: 20,
      currentAssigned: 18,
      color: 'bg-yellow-500'
    },
    {
      id: 5,
      name: 'Support 24/7',
      startTime: '00:00',
      endTime: '23:59',
      duration: 24,
      breakTime: 180,
      type: 'rotation',
      department: 'Support',
      maxCapacity: 12,
      currentAssigned: 12,
      color: 'bg-red-500'
    }
  ];

  const employees = [
    {
      id: 1,
      name: 'Sarah Wilson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      currentShift: 'Morning Shift',
      weeklyHours: 40,
      preferredShifts: ['Morning Shift'],
      availability: {
        monday: ['Morning Shift'],
        tuesday: ['Morning Shift'],
        wednesday: ['Morning Shift'],
        thursday: ['Morning Shift'],
        friday: ['Morning Shift'],
        saturday: [],
        sunday: []
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Data Scientist',
      department: 'Engineering',
      currentShift: 'Afternoon Shift',
      weeklyHours: 40,
      preferredShifts: ['Afternoon Shift'],
      availability: {
        monday: ['Afternoon Shift'],
        tuesday: ['Afternoon Shift'],
        wednesday: ['Afternoon Shift'],
        thursday: ['Afternoon Shift'],
        friday: ['Afternoon Shift'],
        saturday: [],
        sunday: []
      }
    },
    {
      id: 3,
      name: 'Emma Davis',
      position: 'UX Designer',
      department: 'Design',
      currentShift: 'Morning Shift',
      weeklyHours: 35,
      preferredShifts: ['Morning Shift'],
      availability: {
        monday: ['Morning Shift'],
        tuesday: ['Morning Shift'],
        wednesday: ['Morning Shift'],
        thursday: ['Morning Shift'],
        friday: [],
        saturday: [],
        sunday: []
      }
    },
    {
      id: 4,
      name: 'James Rodriguez',
      position: 'Backend Developer',
      department: 'Engineering',
      currentShift: 'Night Shift',
      weeklyHours: 40,
      preferredShifts: ['Night Shift', 'Afternoon Shift'],
      availability: {
        monday: ['Night Shift'],
        tuesday: ['Night Shift'],
        wednesday: ['Night Shift'],
        thursday: ['Night Shift'],
        friday: ['Night Shift'],
        saturday: ['Afternoon Shift'],
        sunday: []
      }
    }
  ];

  const scheduleData = [
    { day: 'Monday', shifts: { morning: 23, afternoon: 14, night: 8 } },
    { day: 'Tuesday', shifts: { morning: 25, afternoon: 13, night: 7 } },
    { day: 'Wednesday', shifts: { morning: 24, afternoon: 15, night: 8 } },
    { day: 'Thursday', shifts: { morning: 22, afternoon: 14, night: 9 } },
    { day: 'Friday', shifts: { morning: 20, afternoon: 12, night: 6 } },
    { day: 'Saturday', shifts: { morning: 8, afternoon: 10, night: 5 } },
    { day: 'Sunday', shifts: { morning: 6, afternoon: 8, night: 4 } }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Support', 'Marketing'];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getShiftTypeColor = (type) => {
    switch (type) {
      case 'regular':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'overnight':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'rotation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getCapacityColor = (current, max) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return 'text-red-600 dark:text-red-400';
    if (percentage >= 75) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const filteredShifts = selectedDepartment === 'all' 
    ? shifts 
    : shifts.filter(shift => shift.department === selectedDepartment);

  const filteredEmployees = selectedDepartment === 'all' 
    ? employees 
    : employees.filter(emp => emp.department === selectedDepartment);

  const ShiftOverview = () => (
    <div className="space-y-6">
      {/* Shift Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredShifts.map(shift => (
          <Card key={shift.id}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {shift.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {shift.department} • {shift.startTime} - {shift.endTime}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getShiftTypeColor(shift.type)}`}>
                  {shift.type.charAt(0).toUpperCase() + shift.type.slice(1)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400 block">Duration</span>
                  <span className="font-medium text-gray-800 dark:text-white">{shift.duration}h</span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400 block">Break Time</span>
                  <span className="font-medium text-gray-800 dark:text-white">{shift.breakTime}m</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Capacity</span>
                  <span className={`text-sm font-medium ${getCapacityColor(shift.currentAssigned, shift.maxCapacity)}`}>
                    {shift.currentAssigned}/{shift.maxCapacity}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${shift.color}`}
                    style={{ width: `${(shift.currentAssigned / shift.maxCapacity) * 100}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-1">
                  <button 
                    className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    title="Edit Shift"
                  >
                    <Icon name="PencilIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </button>
                  <button 
                    className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    title="View Schedule"
                  >
                    <Icon name="CalendarIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </button>
                  <button 
                    className="p-1 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                    title="Assign Employees"
                  >
                    <Icon name="UserPlusIcon" className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Weekly Shift Coverage"
          type="bar"
          data={scheduleData.map(day => ({
            label: day.day.substring(0, 3),
            value: day.shifts.morning + day.shifts.afternoon + day.shifts.night
          }))}
          height="300px"
        />

        <Chart
          title="Shift Distribution"
          type="pie"
          data={[
            { label: 'Morning', value: 45, color: 'bg-blue-500' },
            { label: 'Afternoon', value: 30, color: 'bg-green-500' },
            { label: 'Night', value: 20, color: 'bg-purple-500' },
            { label: 'Rotation', value: 5, color: 'bg-red-500' }
          ]}
          height="300px"
        />
      </div>
    </div>
  );

  const EmployeeSchedule = () => (
    <div className="space-y-6">
      {/* Schedule Grid */}
      <Card title="Employee Schedule Matrix">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Current Shift</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Weekly Hours</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Preferred Shifts</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Availability</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => (
                <tr key={employee.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
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
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                      {employee.currentShift}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {employee.weeklyHours}h
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {employee.preferredShifts.map((shift, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded text-xs">
                          {shift}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      {Object.entries(employee.availability).map(([day, shifts]) => (
                        <div key={day} className="text-center">
                          <div className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
                            shifts.length > 0 
                              ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                          }`}>
                            {day.charAt(0).toUpperCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="Edit Schedule"
                      >
                        <Icon name="PencilIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button 
                        className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        title="View Details"
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </button>
                      <button 
                        className="p-1 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                        title="Change Shift"
                      >
                        <Icon name="ArrowPathIcon" className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Weekly Schedule Calendar */}
      <Card title="Weekly Schedule Overview">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="font-semibold text-gray-700 dark:text-gray-300">Time</div>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {day}
                </div>
              ))}
            </div>
            
            {['08:00-16:00', '16:00-00:00', '00:00-08:00'].map(timeSlot => (
              <div key={timeSlot} className="grid grid-cols-8 gap-2 mb-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 py-2">
                  {timeSlot}
                </div>
                {scheduleData.map(day => (
                  <div key={day.day} className="bg-gray-50 dark:bg-gray-700 rounded p-2 text-center">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {timeSlot === '08:00-16:00' ? day.shifts.morning :
                       timeSlot === '16:00-00:00' ? day.shifts.afternoon :
                       day.shifts.night}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Shift Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage employee shifts, schedules, and availability
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
              title="Create Shift"
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
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Shifts</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UserGroupIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">75</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled Employees</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Understaffed Shifts</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CalendarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">168</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Coverage Hours</p>
            </div>
          </div>
        </Card>
      </div>

      {/* View Toggle */}
      <div className="mb-6">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1 w-fit">
          <button
            onClick={() => setSelectedView('schedule')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === 'schedule'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            <Icon name="Squares2X2Icon" className="w-4 h-4 inline mr-2" />
            Shift Overview
          </button>
          <button
            onClick={() => setSelectedView('employees')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedView === 'employees'
                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            <Icon name="UsersIcon" className="w-4 h-4 inline mr-2" />
            Employee Schedules
          </button>
        </div>
      </div>

      {/* Content */}
      {selectedView === 'schedule' ? <ShiftOverview /> : <EmployeeSchedule />}
    </DashboardLayout>
  );
};

export default ShiftManagement;