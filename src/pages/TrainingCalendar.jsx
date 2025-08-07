import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const TrainingCalendar = () => {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedView, setSelectedView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const trainingEvents = [
    {
      id: 1,
      title: 'JavaScript Advanced Concepts',
      type: 'workshop',
      category: 'technical',
      startDate: '2024-04-15',
      endDate: '2024-04-15',
      startTime: '09:00',
      endTime: '17:00',
      duration: '8 hours',
      location: 'Training Room A',
      format: 'in_person',
      instructor: {
        name: 'Alex Thompson',
        title: 'Senior JavaScript Developer',
        avatar: null
      },
      maxParticipants: 20,
      currentParticipants: 15,
      waitingList: 3,
      status: 'confirmed',
      description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, and asynchronous programming.',
      prerequisites: 'Basic JavaScript knowledge required',
      materials: ['Laptop', 'Code editor', 'Browser dev tools'],
      objectives: [
        'Master advanced JavaScript patterns',
        'Understand asynchronous programming',
        'Work with modern ES6+ features',
        'Debug complex JavaScript applications'
      ],
      cost: 299,
      certificateAvailable: true,
      recurring: false
    },
    {
      id: 2,
      title: 'Digital Marketing Strategy Bootcamp',
      type: 'bootcamp',
      category: 'marketing',
      startDate: '2024-04-18',
      endDate: '2024-04-19',
      startTime: '09:00',
      endTime: '17:00',
      duration: '16 hours',
      location: 'Conference Room B',
      format: 'hybrid',
      instructor: {
        name: 'Sarah Martinez',
        title: 'Digital Marketing Director',
        avatar: null
      },
      maxParticipants: 25,
      currentParticipants: 22,
      waitingList: 8,
      status: 'confirmed',
      description: 'Comprehensive 2-day bootcamp covering all aspects of digital marketing strategy and execution.',
      prerequisites: 'Basic marketing knowledge helpful',
      materials: ['Marketing analytics tools access', 'Case study materials'],
      objectives: [
        'Develop comprehensive digital marketing strategies',
        'Master SEO and content marketing',
        'Execute paid advertising campaigns',
        'Analyze and optimize marketing performance'
      ],
      cost: 599,
      certificateAvailable: true,
      recurring: false
    },
    {
      id: 3,
      title: 'Leadership Skills Development',
      type: 'seminar',
      category: 'leadership',
      startDate: '2024-04-22',
      endDate: '2024-04-22',
      startTime: '14:00',
      endTime: '18:00',
      duration: '4 hours',
      location: 'Executive Conference Room',
      format: 'in_person',
      instructor: {
        name: 'Dr. Michael Chen',
        title: 'Leadership Development Expert',
        avatar: null
      },
      maxParticipants: 15,
      currentParticipants: 12,
      waitingList: 0,
      status: 'confirmed',
      description: 'Interactive seminar focused on developing essential leadership skills for managers.',
      prerequisites: '1+ years management experience',
      materials: ['Leadership assessment tool', 'Workbook'],
      objectives: [
        'Understand different leadership styles',
        'Develop effective communication skills',
        'Learn conflict resolution techniques',
        'Build high-performing teams'
      ],
      cost: 199,
      certificateAvailable: false,
      recurring: true,
      recurringSchedule: 'Monthly - 4th Monday'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      type: 'course',
      category: 'technical',
      startDate: '2024-04-25',
      endDate: '2024-05-30',
      startTime: '18:00',
      endTime: '20:00',
      duration: '2 hours/session, 10 sessions',
      location: 'Online Platform',
      format: 'online',
      instructor: {
        name: 'Dr. Lisa Wang',
        title: 'Principal Data Scientist',
        avatar: null
      },
      maxParticipants: 30,
      currentParticipants: 28,
      waitingList: 12,
      status: 'confirmed',
      description: '10-week online course covering data science fundamentals using Python programming language.',
      prerequisites: 'Basic programming knowledge',
      materials: ['Python installed', 'Jupyter notebook', 'Dataset access'],
      objectives: [
        'Master Python for data analysis',
        'Learn statistical analysis techniques',
        'Build machine learning models',
        'Create data visualizations'
      ],
      cost: 799,
      certificateAvailable: true,
      recurring: false
    },
    {
      id: 5,
      title: 'Agile Project Management',
      type: 'certification',
      category: 'project_management',
      startDate: '2024-04-30',
      endDate: '2024-05-02',
      startTime: '09:00',
      endTime: '17:00',
      duration: '3 days',
      location: 'Training Center',
      format: 'in_person',
      instructor: {
        name: 'Jennifer Smith',
        title: 'Certified Agile Coach',
        avatar: null
      },
      maxParticipants: 16,
      currentParticipants: 14,
      waitingList: 5,
      status: 'confirmed',
      description: '3-day intensive certification program for Agile project management methodologies.',
      prerequisites: 'Basic project management experience',
      materials: ['Agile toolkit', 'Certification exam fee included'],
      objectives: [
        'Understand Agile principles and practices',
        'Master Scrum methodology',
        'Learn sprint planning and execution',
        'Prepare for Agile certification exam'
      ],
      cost: 1299,
      certificateAvailable: true,
      recurring: false
    }
  ];

  const trainingSessions = [
    {
      id: 1,
      title: 'Weekly Team Standup Training',
      type: 'recurring',
      category: 'leadership',
      schedule: 'Every Monday 10:00 AM',
      duration: '1 hour',
      location: 'Conference Room A',
      format: 'in_person',
      instructor: {
        name: 'Sarah Johnson',
        title: 'Agile Coach'
      },
      participants: 8,
      maxParticipants: 12,
      status: 'active',
      description: 'Weekly training session focused on effective team standup meetings and agile practices.',
      nextSession: '2024-04-15'
    },
    {
      id: 2,
      title: 'Monthly Security Awareness',
      type: 'recurring',
      category: 'security',
      schedule: 'First Friday of each month 2:00 PM',
      duration: '2 hours',
      location: 'Online Platform',
      format: 'online',
      instructor: {
        name: 'Robert Chen',
        title: 'Security Specialist'
      },
      participants: 45,
      maxParticipants: 50,
      status: 'active',
      description: 'Monthly cybersecurity awareness training covering latest threats and best practices.',
      nextSession: '2024-05-03'
    },
    {
      id: 3,
      title: 'Quarterly Sales Skills Refresher',
      type: 'recurring',
      category: 'sales',
      schedule: 'Every quarter, 2nd Tuesday',
      duration: '4 hours',
      location: 'Sales Training Room',
      format: 'hybrid',
      instructor: {
        name: 'Maria Rodriguez',
        title: 'Sales Director'
      },
      participants: 15,
      maxParticipants: 20,
      status: 'active',
      description: 'Quarterly refresher training on sales techniques, product updates, and market trends.',
      nextSession: '2024-07-09'
    }
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      type: 'registration',
      title: 'React Development Bootcamp Registration',
      deadline: '2024-04-10',
      daysRemaining: 3,
      priority: 'high',
      action: 'Register now'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Python Data Analysis Assignment Due',
      deadline: '2024-04-12',
      daysRemaining: 5,
      priority: 'medium',
      action: 'Submit assignment'
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Certification Exam',
      deadline: '2024-04-20',
      daysRemaining: 13,
      priority: 'high',
      action: 'Schedule exam'
    },
    {
      id: 4,
      type: 'renewal',
      title: 'Google Analytics Certification Renewal',
      deadline: '2024-04-25',
      daysRemaining: 18,
      priority: 'medium',
      action: 'Complete renewal'
    }
  ];

  const categories = ['all', 'technical', 'marketing', 'leadership', 'sales', 'security', 'project_management', 'design'];
  const eventTypes = ['all', 'workshop', 'bootcamp', 'seminar', 'course', 'certification', 'webinar'];
  const formats = ['all', 'in_person', 'online', 'hybrid'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      tentative: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      active: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.confirmed;
  };

  const getCategoryColor = (category) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      project_management: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      design: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    };
    return colors[category] || colors.technical;
  };

  const getTypeIcon = (type) => {
    const icons = {
      workshop: 'WrenchScrewdriverIcon',
      bootcamp: 'CommandLineIcon',
      seminar: 'SpeakerWaveIcon',
      course: 'BookOpenIcon',
      certification: 'AcademicCapIcon',
      webinar: 'VideoCameraIcon',
      recurring: 'ArrowPathIcon'
    };
    return icons[type] || 'CalendarIcon';
  };

  const getFormatIcon = (format) => {
    const icons = {
      in_person: 'BuildingOfficeIcon',
      online: 'ComputerDesktopIcon',
      hybrid: 'GlobeAltIcon'
    };
    return icons[format] || 'CalendarIcon';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };
    return colors[priority] || colors.medium;
  };

  const filteredEvents = trainingEvents.filter(event => {
    if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
    return true;
  });

  const CalendarTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Training Calendar</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="month">Month View</option>
            <option value="week">Week View</option>
            <option value="day">Day View</option>
          </select>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.replace('_', ' ').charAt(0).toUpperCase() + category.replace('_', ' ').slice(1)}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            Schedule Training
          </button>
        </div>
      </div>

      <Card title={`${selectedView.charAt(0).toUpperCase() + selectedView.slice(1)} View - April 2024`}>
        <div className="space-y-4">
          {/* Calendar Header */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Icon name="ChevronLeftIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Icon name="ChevronRightIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors">
              Today
            </button>
          </div>

          {/* Upcoming Events List */}
          <div className="space-y-3">
            {filteredEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedEvent(event)}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(event.category).replace('text-', 'bg-').replace('800', '500').replace('300', '400')}`}>
                      <Icon name={getTypeIcon(event.type)} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{event.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{formatDate(event.startDate)}</span>
                        <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                        <span className="flex items-center space-x-1">
                          <Icon name={getFormatIcon(event.format)} className="w-4 h-4" />
                          <span>{event.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                      {event.status.toUpperCase()}
                    </span>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {event.currentParticipants}/{event.maxParticipants} enrolled
                      {event.waitingList > 0 && (
                        <span className="text-orange-600 dark:text-orange-400 ml-1">
                          (+{event.waitingList} waiting)
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{event.type}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{event.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-800 dark:text-white">${event.cost}</span>
                    {event.certificateAvailable && (
                      <Icon name="AcademicCapIcon" className="w-4 h-4 text-yellow-600 dark:text-yellow-400" title="Certificate Available" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {selectedEvent && (
        <Card title={`Event Details - ${selectedEvent.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Event Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Date:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {formatDate(selectedEvent.startDate)}
                        {selectedEvent.endDate !== selectedEvent.startDate && ` - ${formatDate(selectedEvent.endDate)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Time:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {formatTime(selectedEvent.startTime)} - {formatTime(selectedEvent.endTime)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedEvent.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedEvent.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Format:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedEvent.format.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                      <span className="font-medium text-gray-800 dark:text-white">${selectedEvent.cost}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedEvent.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prerequisites</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedEvent.prerequisites}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Enrollment Status</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-blue-700 dark:text-blue-300">Enrolled</span>
                        <span className="text-blue-800 dark:text-blue-200">{selectedEvent.currentParticipants}/{selectedEvent.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-blue-200 dark:bg-blue-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(selectedEvent.currentParticipants / selectedEvent.maxParticipants) * 100}%` }}
                        />
                      </div>
                    </div>
                    {selectedEvent.waitingList > 0 && (
                      <div className="text-sm">
                        <span className="text-blue-700 dark:text-blue-300">Waiting List: </span>
                        <span className="font-medium text-blue-800 dark:text-blue-200">{selectedEvent.waitingList} people</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="text-blue-700 dark:text-blue-300">Available Spots: </span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">
                        {selectedEvent.maxParticipants - selectedEvent.currentParticipants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Instructor</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                      <Icon name="UserIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">{selectedEvent.instructor.name}</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{selectedEvent.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Learning Objectives</h4>
                <div className="space-y-2">
                  {selectedEvent.objectives.map((objective, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Required Materials</h4>
                <div className="space-y-2">
                  {selectedEvent.materials.map((material, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Square3Stack3DIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const SessionsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Recurring Training Sessions</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Create Session
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainingSessions.map((session) => (
          <Card key={session.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedSession(session)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(session.category).replace('text-', 'bg-').replace('800', '500').replace('300', '400')}`}>
                    <Icon name={getTypeIcon(session.type)} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{session.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{session.schedule}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                  {session.status.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{session.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{session.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Format</p>
                  <p className="font-medium text-gray-800 dark:text-white capitalize">{session.format.replace('_', ' ')}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-800 dark:text-white">{session.location}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Participants</p>
                  <p className="font-medium text-gray-800 dark:text-white">{session.participants}/{session.maxParticipants}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{session.instructor.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{session.instructor.title}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(session.category)}`}>
                      {session.category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Next: {formatDate(session.nextSession)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedSession && (
        <Card title={`Session Details - ${selectedSession.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Session Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Schedule:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedSession.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedSession.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedSession.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Format:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedSession.format.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Next Session:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedSession.nextSession)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedSession.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Enrollment</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-blue-700 dark:text-blue-300">Current Participants</span>
                        <span className="text-blue-800 dark:text-blue-200">{selectedSession.participants}/{selectedSession.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-blue-200 dark:bg-blue-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(selectedSession.participants / selectedSession.maxParticipants) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-blue-700 dark:text-blue-300">Available Spots: </span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">
                        {selectedSession.maxParticipants - selectedSession.participants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Instructor</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                      <Icon name="UserIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">{selectedSession.instructor.name}</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{selectedSession.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const DeadlinesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Upcoming Deadlines</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="BellIcon" className="w-4 h-4 inline mr-2" />
          Set Reminder
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {upcomingDeadlines.map((deadline) => (
          <Card key={deadline.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${deadline.priority === 'high' ? 'bg-red-100 dark:bg-red-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
                    <Icon name="ClockIcon" className={`w-6 h-6 ${deadline.priority === 'high' ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{deadline.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{deadline.type}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline.priority)}`}>
                  {deadline.priority.toUpperCase()}
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Deadline</span>
                  <span className="font-medium text-gray-800 dark:text-white">{formatDate(deadline.deadline)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Days Remaining</span>
                  <span className={`font-bold ${deadline.daysRemaining <= 7 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {deadline.daysRemaining} days
                  </span>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  {deadline.action}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Training Calendar Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="CalendarIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{trainingEvents.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Scheduled Events</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="UsersIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {trainingEvents.reduce((sum, event) => sum + event.currentParticipants, 0)}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Total Enrolled</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ArrowPathIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{trainingSessions.length}</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Recurring Sessions</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{upcomingDeadlines.length}</p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Upcoming Deadlines</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Events by Category">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryCount = trainingEvents.filter(e => e.category === category).length;
              const percentage = trainingEvents.length > 0 ? (categoryCount / trainingEvents.length) * 100 : 0;
              
              return (
                <div key={category} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                      {category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                      {categoryCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Enrollment Status">
          <div className="space-y-4">
            {trainingEvents.map(event => {
              const enrollmentRate = (event.currentParticipants / event.maxParticipants) * 100;
              
              return (
                <div key={event.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 truncate">{event.title}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {event.currentParticipants}/{event.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        enrollmentRate >= 90 ? 'bg-green-500' :
                        enrollmentRate >= 70 ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${enrollmentRate}%` }}
                    />
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
    { id: 'calendar', label: 'Calendar', icon: 'CalendarIcon', component: CalendarTab },
    { id: 'sessions', label: 'Recurring Sessions', icon: 'ArrowPathIcon', component: SessionsTab },
    { id: 'deadlines', label: 'Deadlines', icon: 'ClockIcon', component: DeadlinesTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || CalendarTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Training Calendar</h1>
            <p className="text-gray-600 dark:text-gray-400">Schedule, manage, and track training events and sessions</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Calendar
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              Schedule Event
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

export default TrainingCalendar;