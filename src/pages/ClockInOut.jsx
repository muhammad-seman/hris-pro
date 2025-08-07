import { useState, useEffect } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const ClockInOut = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [onBreak, setOnBreak] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [notes, setNotes] = useState('');

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const projects = [
    { id: 'mobile-app', name: 'Mobile App Redesign' },
    { id: 'dashboard', name: 'Analytics Dashboard' },
    { id: 'api-optimization', name: 'API Optimization' },
    { id: 'ml-pipeline', name: 'ML Pipeline Development' },
    { id: 'testing', name: 'Quality Assurance' },
    { id: 'maintenance', name: 'System Maintenance' }
  ];

  const todayEntries = [
    {
      id: 1,
      type: 'clock_in',
      time: '09:15:23',
      project: 'Mobile App Redesign',
      notes: 'Starting work on user authentication module'
    },
    {
      id: 2,
      type: 'break_start',
      time: '12:00:15',
      project: null,
      notes: 'Lunch break'
    },
    {
      id: 3,
      type: 'break_end',
      time: '13:00:42',
      project: 'Mobile App Redesign',
      notes: 'Back from lunch, continuing authentication work'
    },
    {
      id: 4,
      type: 'project_change',
      time: '15:30:18',
      project: 'API Optimization',
      notes: 'Switching to urgent API performance issue'
    }
  ];

  const recentEmployeeActivity = [
    {
      id: 1,
      name: 'Sarah Wilson',
      action: 'Clocked In',
      time: '08:45',
      project: 'Mobile App Redesign',
      status: 'working'
    },
    {
      id: 2,
      name: 'Michael Chen',
      action: 'Started Break',
      time: '12:15',
      project: 'ML Pipeline Development',
      status: 'break'
    },
    {
      id: 3,
      name: 'Emma Davis',
      action: 'Clocked Out',
      time: '17:30',
      project: 'Dashboard Redesign',
      status: 'off'
    },
    {
      id: 4,
      name: 'James Rodriguez',
      action: 'Project Change',
      time: '14:20',
      project: 'System Maintenance',
      status: 'working'
    }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateWorkingTime = () => {
    if (!clockInTime) return '00:00:00';
    
    const now = new Date();
    const diff = now - clockInTime;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClockIn = () => {
    if (!selectedProject) {
      alert('Please select a project before clocking in');
      return;
    }
    
    setIsLoggedIn(true);
    setClockInTime(new Date());
  };

  const handleClockOut = () => {
    setIsLoggedIn(false);
    setClockInTime(null);
    setOnBreak(false);
    setBreakStartTime(null);
    setSelectedProject('');
    setNotes('');
  };

  const handleBreakStart = () => {
    setOnBreak(true);
    setBreakStartTime(new Date());
  };

  const handleBreakEnd = () => {
    setOnBreak(false);
    setBreakStartTime(null);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'working':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'break':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'off':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'clock_in':
        return <Icon name="PlayIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'clock_out':
        return <Icon name="StopIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />;
      case 'break_start':
        return <Icon name="PauseIcon" className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      case 'break_end':
        return <Icon name="PlayIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'project_change':
        return <Icon name="ArrowPathIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <Icon name="ClockIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Clock In/Out
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your work hours and manage time entries
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="View Reports"
            >
              <Icon name="ChartBarIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Clock In/Out Panel */}
        <div className="xl:col-span-1">
          <Card>
            <div className="text-center space-y-6">
              {/* Current Time Display */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30 rounded-lg">
                <div className="text-4xl font-mono font-bold text-gray-800 dark:text-white">
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {formatDate(currentTime)}
                </div>
              </div>

              {/* Status Display */}
              <div className="space-y-4">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  isLoggedIn 
                    ? onBreak 
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  <Icon name="ClockIcon" className="w-4 h-4 mr-2" />
                  {isLoggedIn ? (onBreak ? 'On Break' : 'Working') : 'Not Clocked In'}
                </div>

                {isLoggedIn && (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Working Time: <span className="font-mono font-medium text-gray-800 dark:text-white">
                        {calculateWorkingTime()}
                      </span>
                    </div>
                    {clockInTime && (
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Started at {formatTime(clockInTime)}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Project Selection */}
              {!isLoggedIn && (
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Select Project
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose a project...</option>
                    {projects.map(project => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Notes Input */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="What are you working on?"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {!isLoggedIn ? (
                  <button
                    onClick={handleClockIn}
                    disabled={!selectedProject}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                  >
                    <Icon name="PlayIcon" className="w-5 h-5" />
                    <span>Clock In</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    {!onBreak ? (
                      <>
                        <button
                          onClick={handleBreakStart}
                          className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Icon name="PauseIcon" className="w-5 h-5" />
                          <span>Start Break</span>
                        </button>
                        <button
                          onClick={handleClockOut}
                          className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Icon name="StopIcon" className="w-5 h-5" />
                          <span>Clock Out</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleBreakEnd}
                          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Icon name="PlayIcon" className="w-5 h-5" />
                          <span>End Break</span>
                        </button>
                        <button
                          onClick={handleClockOut}
                          className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                        >
                          <Icon name="StopIcon" className="w-5 h-5" />
                          <span>Clock Out</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">7:45</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Today's Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">38:30</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">This Week</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Activity Feeds */}
        <div className="xl:col-span-2 space-y-6">
          {/* Today's Entries */}
          <Card title="Today's Activity">
            <div className="space-y-4">
              {todayEntries.map(entry => (
                <div key={entry.id} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-600">
                    {getActionIcon(entry.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 dark:text-white">
                          {entry.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          {entry.project && (
                            <span className="text-gray-600 dark:text-gray-400"> - {projects.find(p => p.id === entry.project)?.name}</span>
                          )}
                        </h4>
                        {entry.notes && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {entry.notes}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                        {entry.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Team Activity */}
          <Card title="Team Activity">
            <div className="space-y-4">
              {recentEmployeeActivity.map(activity => (
                <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {getInitials(activity.name)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{activity.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.action} • {activity.project}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 font-mono">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card title="Quick Actions">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-center">
                <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <span className="text-sm text-blue-800 dark:text-blue-400">View Timesheet</span>
              </button>
              <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-center">
                <Icon name="ClockIcon" className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <span className="text-sm text-green-800 dark:text-green-400">Request Overtime</span>
              </button>
              <button className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors text-center">
                <Icon name="CalendarIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <span className="text-sm text-yellow-800 dark:text-yellow-400">View Schedule</span>
              </button>
              <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-center">
                <Icon name="ChartBarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <span className="text-sm text-purple-800 dark:text-purple-400">Time Reports</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClockInOut;