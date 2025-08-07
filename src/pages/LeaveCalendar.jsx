import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const LeaveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month'); // month, week, list
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR'];

  const leaveEvents = [
    {
      id: 1,
      employeeName: 'Sarah Wilson',
      department: 'Engineering',
      type: 'Annual Leave',
      startDate: '2024-03-15',
      endDate: '2024-03-18',
      status: 'approved',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      employeeName: 'Michael Chen',
      department: 'Engineering',
      type: 'Sick Leave',
      startDate: '2024-03-10',
      endDate: '2024-03-10',
      status: 'approved',
      color: 'bg-red-500'
    },
    {
      id: 3,
      employeeName: 'Emma Davis',
      department: 'Design',
      type: 'Personal Leave',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      status: 'pending',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      employeeName: 'James Rodriguez',
      department: 'Engineering',
      type: 'Annual Leave',
      startDate: '2024-03-25',
      endDate: '2024-03-29',
      status: 'approved',
      color: 'bg-green-500'
    }
  ];

  const holidays = [
    {
      id: 'h1',
      name: 'New Year Day',
      date: '2024-01-01',
      type: 'public',
      color: 'bg-purple-500'
    },
    {
      id: 'h2',
      name: 'Independence Day',
      date: '2024-08-17',
      type: 'public',
      color: 'bg-purple-500'
    },
    {
      id: 'h3',
      name: 'Christmas Day',
      date: '2024-12-25',
      type: 'public',
      color: 'bg-purple-500'
    }
  ];

  const getCurrentMonth = () => {
    return selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay()); // Start from Sunday

    const days = [];
    const current = new Date(startDate);

    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(current),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString(),
        events: getEventsForDate(current)
      });
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    const events = [];

    // Add leave events
    leaveEvents.forEach(event => {
      if (selectedDepartment !== 'all' && event.department !== selectedDepartment) return;
      
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);
      
      if (date >= startDate && date <= endDate) {
        events.push({
          ...event,
          eventType: 'leave'
        });
      }
    });

    // Add holidays
    holidays.forEach(holiday => {
      if (holiday.date === dateString) {
        events.push({
          ...holiday,
          eventType: 'holiday'
        });
      }
    });

    return events;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setSelectedDate(newDate);
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const CalendarGrid = () => {
    const days = getDaysInMonth(selectedDate);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Calendar Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {getCurrentMonth()}
              </h2>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon name="ChevronLeftIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Icon name="ChevronRightIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
          </div>
        </div>

        {/* Week Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-200 dark:border-gray-700">
          {weekDays.map(day => (
            <div key={day} className="p-4 text-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {day}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <div
              key={index}
              className={`min-h-32 p-2 border-r border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                !day.isCurrentMonth ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${
                  day.isToday 
                    ? 'w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center' 
                    : day.isCurrentMonth 
                      ? 'text-gray-800 dark:text-white' 
                      : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {day.date.getDate()}
                </span>
              </div>

              {/* Events */}
              <div className="space-y-1">
                {day.events.slice(0, 3).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    onClick={() => setSelectedEvent(event)}
                    className={`px-2 py-1 ${event.color} text-white text-xs rounded cursor-pointer hover:opacity-80 transition-opacity truncate`}
                  >
                    {event.eventType === 'holiday' ? event.name : event.employeeName}
                  </div>
                ))}
                {day.events.length > 3 && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 px-2">
                    +{day.events.length - 3} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ListView = () => {
    const filteredEvents = leaveEvents.filter(event => 
      selectedDepartment === 'all' || event.department === selectedDepartment
    );

    return (
      <div className="space-y-4">
        {filteredEvents.map(event => (
          <Card key={event.id}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {getInitials(event.employeeName)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {event.employeeName}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {event.department}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'approved' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : event.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Type: </span>
                    <span className="font-medium text-gray-800 dark:text-white">{event.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Duration: </span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  const LegendCard = () => (
    <Card title="Legend">
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Annual Leave</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Sick Leave</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Pending</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Personal Leave</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span className="text-sm text-gray-700 dark:text-gray-300">Public Holiday</span>
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Leave Calendar
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              View team leave schedule and holidays
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
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('month')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  viewMode === 'month'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {viewMode === 'month' ? <CalendarGrid /> : <ListView />}
        </div>
        <div className="space-y-6">
          <LegendCard />
          
          {/* Upcoming Leave */}
          <Card title="Upcoming Leave">
            <div className="space-y-3">
              {leaveEvents
                .filter(event => new Date(event.startDate) > new Date())
                .slice(0, 5)
                .map(event => (
                  <div key={event.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {getInitials(event.employeeName)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-white">
                        {event.employeeName}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {new Date(event.startDate).toLocaleDateString()} - {event.type}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </Card>

          {/* Team Status */}
          <Card title="Team Status">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">On Leave Today</span>
                <span className="font-medium text-gray-800 dark:text-white">3 people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</span>
                <span className="font-medium text-yellow-600 dark:text-yellow-400">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Next Holiday</span>
                <span className="font-medium text-gray-800 dark:text-white">Aug 17</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {selectedEvent.eventType === 'holiday' ? selectedEvent.name : selectedEvent.employeeName}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="space-y-3">
              {selectedEvent.eventType === 'leave' ? (
                <>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
                    <p className="font-medium text-gray-800 dark:text-white">{selectedEvent.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Leave Type</p>
                    <p className="font-medium text-gray-800 dark:text-white">{selectedEvent.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {new Date(selectedEvent.startDate).toLocaleDateString()} - {new Date(selectedEvent.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedEvent.status === 'approved' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : selectedEvent.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                    </span>
                  </div>
                </>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Holiday Type</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedEvent.type}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default LeaveCalendar;