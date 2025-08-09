import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';
import Chart from '../../components/Dashboard/Chart';

const EmployeeProfiles = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const employees = [
    {
      id: 1,
      name: 'Sarah Wilson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      email: 'sarah.wilson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      status: 'active',
      employeeId: 'EMP001',
      joinDate: '2022-03-15',
      manager: 'John Smith',
      directReports: 2,
      workLocation: 'Hybrid',
      avatar: null,
      bio: 'Experienced software engineer with expertise in full-stack development and cloud architecture. Passionate about building scalable solutions and mentoring junior developers.',
      personalInfo: {
        dateOfBirth: '1988-07-22',
        emergencyContact: 'Michael Wilson - Spouse - +1 (555) 987-6543',
        address: '123 Broadway St, New York, NY 10001',
        nationality: 'American',
        languages: ['English', 'Spanish']
      },
      workInfo: {
        employmentType: 'Full-time',
        workSchedule: 'Standard (9 AM - 5 PM)',
        salary: '$115,000',
        startDate: '2022-03-15',
        probationEndDate: '2022-09-15',
        nextReviewDate: '2024-03-15'
      },
      skills: [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'Node.js', level: 85, category: 'Backend' },
        { name: 'Python', level: 80, category: 'Backend' },
        { name: 'AWS', level: 75, category: 'Cloud' },
        { name: 'MongoDB', level: 70, category: 'Database' },
        { name: 'Docker', level: 85, category: 'DevOps' }
      ],
      performance: [
        { period: 'Q4 2023', rating: 4.5, goals: 'Exceeded', feedback: 'Excellent technical leadership' },
        { period: 'Q3 2023', rating: 4.2, goals: 'Met', feedback: 'Strong code quality and delivery' },
        { period: 'Q2 2023', rating: 4.0, goals: 'Met', feedback: 'Good progress on mentoring' }
      ],
      goals: [
        { id: 1, title: 'Lead React migration project', progress: 75, dueDate: '2024-06-30', status: 'on-track' },
        { id: 2, title: 'Mentor 2 junior developers', progress: 60, dueDate: '2024-12-31', status: 'on-track' },
        { id: 3, title: 'Complete AWS certification', progress: 30, dueDate: '2024-09-15', status: 'behind' }
      ],
      timeline: [
        { date: '2024-01-15', event: 'Promoted to Senior Software Engineer', type: 'promotion' },
        { date: '2023-12-10', event: 'Completed Leadership Training', type: 'training' },
        { date: '2023-06-20', event: 'Led successful product launch', type: 'achievement' },
        { date: '2022-09-15', event: 'Successfully completed probation', type: 'milestone' },
        { date: '2022-03-15', event: 'Started at company', type: 'start' }
      ]
    }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'inactive':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'on-leave':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getGoalStatusColor = (status) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'behind':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    }
  };

  const getSkillColor = (level) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-blue-500';
    if (level >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'UserIcon' },
    { id: 'personal', label: 'Personal Info', icon: 'IdentificationIcon' },
    { id: 'work', label: 'Work Details', icon: 'BriefcaseIcon' },
    { id: 'skills', label: 'Skills', icon: 'AcademicCapIcon' },
    { id: 'performance', label: 'Performance', icon: 'ChartBarIcon' },
    { id: 'goals', label: 'Goals', icon: 'TrophyIcon' },
    { id: 'timeline', label: 'Timeline', icon: 'ClockIcon' }
  ];

  const OverviewTab = ({ employee }) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Quick Stats */}
      <div className="lg:col-span-1 space-y-4">
        <Card title="Quick Stats">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Tenure</span>
              <span className="font-medium text-gray-800 dark:text-white">
                {Math.floor((new Date() - new Date(employee.joinDate)) / (1000 * 60 * 60 * 24 * 365))} years
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Direct Reports</span>
              <span className="font-medium text-gray-800 dark:text-white">{employee.directReports}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Work Location</span>
              <span className="font-medium text-gray-800 dark:text-white">{employee.workLocation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Performance Avg</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">4.2/5.0</span>
            </div>
          </div>
        </Card>

        <Card title="Recent Activity">
          <div className="space-y-3">
            {employee.timeline.slice(0, 3).map((item, index) => (
              <div key={index} className="flex space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 dark:text-white">{item.event}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Skills Overview */}
      <div className="lg:col-span-2">
        <Card title="Skills Overview">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {employee.skills.slice(0, 6).map((skill) => (
              <div key={skill.name} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Chart */}
        <Card title="Performance Trend" className="mt-6">
          <Chart
            title="Quarterly Performance Ratings"
            type="line"
            data={employee.performance.map(p => ({ 
              label: p.period, 
              value: p.rating * 20 // Convert to percentage 
            }))}
            height="250px"
          />
        </Card>
      </div>
    </div>
  );

  const PersonalTab = ({ employee }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Personal Information">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Date of Birth</label>
            <p className="text-gray-800 dark:text-white">{employee.personalInfo.dateOfBirth}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Address</label>
            <p className="text-gray-800 dark:text-white">{employee.personalInfo.address}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Nationality</label>
            <p className="text-gray-800 dark:text-white">{employee.personalInfo.nationality}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Languages</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {employee.personalInfo.languages.map(lang => (
                <span key={lang} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card title="Emergency Contact">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Contact Information</label>
            <p className="text-gray-800 dark:text-white">{employee.personalInfo.emergencyContact}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const WorkTab = ({ employee }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Employment Details">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Employment Type</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.employmentType}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Work Schedule</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.workSchedule}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Salary</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.salary}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Start Date</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.startDate}</p>
          </div>
        </div>
      </Card>

      <Card title="Review Information">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Probation End Date</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.probationEndDate}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Next Review Date</label>
            <p className="text-gray-800 dark:text-white">{employee.workInfo.nextReviewDate}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Manager</label>
            <p className="text-gray-800 dark:text-white">{employee.manager}</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const SkillsTab = ({ employee }) => (
    <Card title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps'].map(category => (
          <div key={category} className="space-y-3">
            <h4 className="font-semibold text-gray-800 dark:text-white">{category}</h4>
            {employee.skills.filter(skill => skill.category === category).map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );

  const PerformanceTab = ({ employee }) => (
    <div className="space-y-6">
      <Card title="Performance Reviews">
        <div className="space-y-4">
          {employee.performance.map((review, index) => (
            <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800 dark:text-white">{review.period}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{review.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400">/5.0</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Goals:</span>
                  <span className="font-medium text-gray-800 dark:text-white ml-2">{review.goals}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{review.feedback}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const GoalsTab = ({ employee }) => (
    <Card title="Current Goals">
      <div className="space-y-4">
        {employee.goals.map(goal => (
          <div key={goal.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-gray-800 dark:text-white">{goal.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGoalStatusColor(goal.status)}`}>
                {goal.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${goal.progress >= 70 ? 'bg-green-500' : goal.progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Due: {goal.dueDate}</p>
          </div>
        ))}
      </div>
    </Card>
  );

  const TimelineTab = ({ employee }) => (
    <Card title="Employment Timeline">
      <div className="space-y-4">
        {employee.timeline.map((item, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              {index < employee.timeline.length - 1 && <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600 mt-2"></div>}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{item.event}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderTabContent = () => {
    if (!selectedEmployee) return null;

    switch (activeTab) {
      case 'overview':
        return <OverviewTab employee={selectedEmployee} />;
      case 'personal':
        return <PersonalTab employee={selectedEmployee} />;
      case 'work':
        return <WorkTab employee={selectedEmployee} />;
      case 'skills':
        return <SkillsTab employee={selectedEmployee} />;
      case 'performance':
        return <PerformanceTab employee={selectedEmployee} />;
      case 'goals':
        return <GoalsTab employee={selectedEmployee} />;
      case 'timeline':
        return <TimelineTab employee={selectedEmployee} />;
      default:
        return <OverviewTab employee={selectedEmployee} />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Employee Profiles
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Detailed employee information, skills, performance, and career progression
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Employee List */}
        <div className="xl:col-span-1">
          <Card title="Employees">
            <div className="space-y-3">
              {employees.map(employee => (
                <div 
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedEmployee?.id === employee.id 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {getInitials(employee.name)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 dark:text-white text-sm">
                        {employee.name}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {employee.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Profile Content */}
        <div className="xl:col-span-3">
          {selectedEmployee ? (
            <>
              {/* Profile Header */}
              <Card className="mb-6">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {getInitials(selectedEmployee.name)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                          {selectedEmployee.name}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                          {selectedEmployee.position}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Icon name="BuildingOfficeIcon" className="w-4 h-4" />
                            <span>{selectedEmployee.department}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="MapPinIcon" className="w-4 h-4" />
                            <span>{selectedEmployee.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="IdentificationIcon" className="w-4 h-4" />
                            <span>{selectedEmployee.employeeId}</span>
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedEmployee.status)}`}>
                        {selectedEmployee.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">{selectedEmployee.bio}</p>
                  </div>
                </div>
              </Card>

              {/* Tabs */}
              <div className="mb-6">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="flex space-x-8">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                          activeTab === tab.id
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
            </>
          ) : (
            <Card>
              <div className="text-center py-12">
                <Icon name="UserIcon" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Select an Employee
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose an employee from the list to view their detailed profile
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeProfiles;