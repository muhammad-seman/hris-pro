import React, { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import { Calendar, Clock, Users, MapPin, Video, Plus, Filter, Search, ChevronLeft, ChevronRight, Edit, Trash2, CheckCircle, XCircle, User, Mail, Phone } from 'lucide-react';

function InterviewScheduling() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewType, setViewType] = useState('week');

  const interviews = [
    {
      id: 1,
      candidateName: 'Alex Rodriguez',
      candidateEmail: 'alex.rodriguez@email.com',
      candidatePhone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      interviewType: 'Technical Interview',
      date: '2024-01-22',
      time: '10:00 AM',
      duration: 60,
      interviewer: 'Mike Chen',
      interviewerEmail: 'mike.chen@company.com',
      location: 'Conference Room A',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      status: 'scheduled',
      notes: 'Technical interview focusing on React and TypeScript',
      round: 2,
      totalRounds: 3
    },
    {
      id: 2,
      candidateName: 'Sarah Mitchell',
      candidateEmail: 'sarah.mitchell@email.com',
      candidatePhone: '+1 (555) 234-5678',
      position: 'UX Designer',
      interviewType: 'Final Interview',
      date: '2024-01-24',
      time: '2:00 PM',
      duration: 45,
      interviewer: 'Jennifer Lee',
      interviewerEmail: 'jennifer.lee@company.com',
      location: 'Virtual',
      meetingLink: 'https://zoom.us/j/1234567890',
      status: 'scheduled',
      notes: 'Final interview with hiring manager',
      round: 3,
      totalRounds: 3
    },
    {
      id: 3,
      candidateName: 'James Wilson',
      candidateEmail: 'james.wilson@email.com',
      candidatePhone: '+1 (555) 345-6789',
      position: 'Backend Developer',
      interviewType: 'Phone Screening',
      date: '2024-01-21',
      time: '11:30 AM',
      duration: 30,
      interviewer: 'Tom Anderson',
      interviewerEmail: 'tom.anderson@company.com',
      location: 'Phone Call',
      status: 'completed',
      notes: 'Initial screening call',
      round: 1,
      totalRounds: 4,
      feedback: 'Good technical background, proceed to next round'
    },
    {
      id: 4,
      candidateName: 'Emily Chen',
      candidateEmail: 'emily.chen@email.com',
      candidatePhone: '+1 (555) 456-7890',
      position: 'Product Manager',
      interviewType: 'Panel Interview',
      date: '2024-01-25',
      time: '3:30 PM',
      duration: 90,
      interviewer: 'Multiple Interviewers',
      interviewerEmail: 'hr@company.com',
      location: 'Conference Room B',
      status: 'scheduled',
      notes: 'Panel interview with product team',
      round: 2,
      totalRounds: 3
    }
  ];

  const interviewers = [
    { id: 1, name: 'Mike Chen', email: 'mike.chen@company.com', department: 'Engineering', role: 'Senior Engineer' },
    { id: 2, name: 'Jennifer Lee', email: 'jennifer.lee@company.com', department: 'Engineering', role: 'Engineering Manager' },
    { id: 3, name: 'Tom Anderson', email: 'tom.anderson@company.com', department: 'HR', role: 'HR Manager' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah.johnson@company.com', department: 'Engineering', role: 'Engineering Manager' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.interviewer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || interview.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getWeekDays = (date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getInterviewsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return interviews.filter(interview => interview.date === dateString);
  };

  const renderScheduleView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interview Calendar</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewType('week')}
                className={`px-3 py-1 rounded text-sm ${
                  viewType === 'week'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setViewType('day')}
                className={`px-3 py-1 rounded text-sm ${
                  viewType === 'day'
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Day
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setDate(newDate.getDate() - (viewType === 'week' ? 7 : 1));
                setCurrentDate(newDate);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium text-gray-900 dark:text-white min-w-[200px] text-center">
              {viewType === 'week' 
                ? `${formatDate(getWeekDays(currentDate)[0])} - ${formatDate(getWeekDays(currentDate)[6])}`
                : formatDate(currentDate)
              }
            </span>
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setDate(newDate.getDate() + (viewType === 'week' ? 7 : 1));
                setCurrentDate(newDate);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Today
            </button>
          </div>
        </div>

        {viewType === 'week' ? (
          <div className="grid grid-cols-8 gap-1">
            <div className="p-3"></div>
            {getWeekDays(currentDate).map((day, index) => (
              <div key={index} className="p-3 text-center border-b border-gray-200 dark:border-gray-600">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {day.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="text-lg font-bold text-gray-700 dark:text-gray-300">
                  {day.getDate()}
                </div>
              </div>
            ))}

            {timeSlots.map((time, timeIndex) => (
              <React.Fragment key={timeIndex}>
                <div className="p-3 text-right text-sm text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600">
                  {time}
                </div>
                {getWeekDays(currentDate).map((day, dayIndex) => {
                  const dayInterviews = getInterviewsForDate(day).filter(interview => 
                    interview.time === time
                  );
                  return (
                    <div key={dayIndex} className="p-1 min-h-[60px] border-b border-r border-gray-200 dark:border-gray-600">
                      {dayInterviews.map(interview => (
                        <div
                          key={interview.id}
                          onClick={() => setSelectedInterview(interview)}
                          className="p-2 mb-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800"
                        >
                          <div className="font-medium truncate">{interview.candidateName}</div>
                          <div className="truncate">{interview.interviewType}</div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {timeSlots.map((time, index) => {
              const dayInterviews = getInterviewsForDate(currentDate).filter(interview => 
                interview.time === time
              );
              return (
                <div key={index} className="flex border-b border-gray-200 dark:border-gray-600">
                  <div className="w-24 p-3 text-sm text-gray-500 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600">
                    {time}
                  </div>
                  <div className="flex-1 p-3 min-h-[60px]">
                    {dayInterviews.map(interview => (
                      <div
                        key={interview.id}
                        onClick={() => setSelectedInterview(interview)}
                        className="p-3 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-blue-900 dark:text-blue-100">{interview.candidateName}</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">{interview.interviewType}</p>
                            <p className="text-sm text-blue-600 dark:text-blue-400">with {interview.interviewer}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            interview.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            interview.status === 'scheduled' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {interview.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  const renderInterviewsView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All Interviews</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search interviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-64"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredInterviews.map(interview => (
            <div key={interview.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{interview.candidateName}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      interview.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      interview.status === 'scheduled' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {interview.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{interview.position} • {interview.interviewType}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Round {interview.round} of {interview.totalRounds}</p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedInterview(interview)}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(interview.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  {interview.time} ({interview.duration} min)
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <User className="h-4 w-4 mr-2" />
                  {interview.interviewer}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  {interview.location === 'Virtual' || interview.location === 'Phone Call' ? (
                    <Video className="h-4 w-4 mr-2" />
                  ) : (
                    <MapPin className="h-4 w-4 mr-2" />
                  )}
                  {interview.location}
                </div>
              </div>

              {interview.notes && (
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded text-sm text-gray-600 dark:text-gray-400">
                  {interview.notes}
                </div>
              )}

              {interview.feedback && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900 rounded text-sm text-green-800 dark:text-green-200">
                  <strong>Feedback:</strong> {interview.feedback}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInterviewersView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interview Panel</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Add Interviewer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewers.map(interviewer => (
            <div key={interviewer.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  {interviewer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{interviewer.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{interviewer.role}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  {interviewer.email}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  {interviewer.department}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">This Month:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {interviews.filter(interview => interview.interviewer === interviewer.name).length} interviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Interview Scheduling</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and schedule candidate interviews</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Interview
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'schedule'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setActiveTab('interviews')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'interviews'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All Interviews
          </button>
          <button
            onClick={() => setActiveTab('interviewers')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'interviewers'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Interview Panel
          </button>
        </div>

        {activeTab === 'schedule' && renderScheduleView()}
        {activeTab === 'interviews' && renderInterviewsView()}
        {activeTab === 'interviewers' && renderInterviewersView()}
      </div>

      {selectedInterview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedInterview.candidateName}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedInterview.position}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{selectedInterview.interviewType} • Round {selectedInterview.round} of {selectedInterview.totalRounds}</p>
                </div>
                <button
                  onClick={() => setSelectedInterview(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interview Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(selectedInterview.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      {selectedInterview.time} ({selectedInterview.duration} minutes)
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4 mr-2" />
                      {selectedInterview.interviewer}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      {selectedInterview.location === 'Virtual' || selectedInterview.location === 'Phone Call' ? (
                        <Video className="h-4 w-4 mr-2" />
                      ) : (
                        <MapPin className="h-4 w-4 mr-2" />
                      )}
                      {selectedInterview.location}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Candidate Information</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Mail className="h-4 w-4 mr-2" />
                      {selectedInterview.candidateEmail}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedInterview.candidatePhone}
                    </div>
                  </div>
                </div>
              </div>

              {selectedInterview.meetingLink && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Meeting Link</h4>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <a 
                      href={selectedInterview.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      {selectedInterview.meetingLink}
                    </a>
                  </div>
                </div>
              )}

              {selectedInterview.notes && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    {selectedInterview.notes}
                  </p>
                </div>
              )}

              {selectedInterview.feedback && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Feedback</h4>
                  <p className="text-green-800 dark:text-green-200 text-sm bg-green-50 dark:bg-green-900 p-3 rounded-lg">
                    {selectedInterview.feedback}
                  </p>
                </div>
              )}

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Edit Interview
                </button>
                {selectedInterview.status === 'scheduled' && (
                  <>
                    <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Mark Complete
                    </button>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default InterviewScheduling;