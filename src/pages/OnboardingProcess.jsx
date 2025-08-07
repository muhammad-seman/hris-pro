import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const OnboardingProcess = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const candidates = [
    {
      id: 1,
      name: 'Jessica Martinez',
      position: 'Frontend Developer',
      department: 'Engineering',
      startDate: '2024-02-15',
      status: 'in-progress',
      progress: 65,
      email: 'jessica.martinez@company.com',
      phone: '+1 (555) 123-4567',
      manager: 'Sarah Wilson',
      buddy: 'Michael Chen',
      currentStep: 3,
      completedSteps: 3,
      totalSteps: 7
    },
    {
      id: 2,
      name: 'Robert Kim',
      position: 'Sales Representative',
      department: 'Sales',
      startDate: '2024-02-20',
      status: 'pending',
      progress: 25,
      email: 'robert.kim@company.com',
      phone: '+1 (555) 234-5678',
      manager: 'Lisa Johnson',
      buddy: 'Emma Davis',
      currentStep: 1,
      completedSteps: 2,
      totalSteps: 6
    },
    {
      id: 3,
      name: 'Amanda Foster',
      position: 'Marketing Manager',
      department: 'Marketing',
      startDate: '2024-01-30',
      status: 'completed',
      progress: 100,
      email: 'amanda.foster@company.com',
      phone: '+1 (555) 345-6789',
      manager: 'Robert Lee',
      buddy: 'James Rodriguez',
      currentStep: 6,
      completedSteps: 6,
      totalSteps: 6
    }
  ];

  const onboardingSteps = [
    {
      id: 1,
      title: 'Pre-boarding Setup',
      description: 'Prepare workspace, IT equipment, and access credentials',
      tasks: [
        { id: 1, name: 'Prepare workspace and desk', completed: true, assignee: 'Facilities Team' },
        { id: 2, name: 'Order laptop and peripherals', completed: true, assignee: 'IT Department' },
        { id: 3, name: 'Create email account and system access', completed: true, assignee: 'IT Department' },
        { id: 4, name: 'Prepare welcome package', completed: true, assignee: 'HR Team' }
      ],
      icon: 'CogIcon',
      estimatedTime: '2-3 days before start date'
    },
    {
      id: 2,
      title: 'First Day Welcome',
      description: 'Welcome the new employee and complete initial paperwork',
      tasks: [
        { id: 1, name: 'Welcome meeting with HR', completed: true, assignee: 'HR Representative' },
        { id: 2, name: 'Complete employment forms', completed: true, assignee: 'New Employee' },
        { id: 3, name: 'Office tour and introduction', completed: false, assignee: 'Onboarding Buddy' },
        { id: 4, name: 'IT setup and equipment handover', completed: false, assignee: 'IT Support' },
        { id: 5, name: 'Photo for employee ID', completed: false, assignee: 'Security Team' }
      ],
      icon: 'HandRaisedIcon',
      estimatedTime: 'Day 1 - First 4 hours'
    },
    {
      id: 3,
      title: 'Documentation & Compliance',
      description: 'Complete all necessary documentation and compliance training',
      tasks: [
        { id: 1, name: 'Review employee handbook', completed: true, assignee: 'New Employee' },
        { id: 2, name: 'Complete compliance training', completed: true, assignee: 'New Employee' },
        { id: 3, name: 'Sign confidentiality agreement', completed: true, assignee: 'New Employee' },
        { id: 4, name: 'Safety and security briefing', completed: false, assignee: 'Safety Officer' },
        { id: 5, name: 'Benefits enrollment', completed: false, assignee: 'Benefits Coordinator' }
      ],
      icon: 'DocumentTextIcon',
      estimatedTime: 'Day 1-2'
    },
    {
      id: 4,
      title: 'Team Introduction',
      description: 'Meet the team, department overview, and role-specific briefing',
      tasks: [
        { id: 1, name: 'Meeting with direct manager', completed: false, assignee: 'Direct Manager' },
        { id: 2, name: 'Team introduction session', completed: false, assignee: 'Team Lead' },
        { id: 3, name: 'Department overview presentation', completed: false, assignee: 'Department Head' },
        { id: 4, name: 'Role and responsibilities briefing', completed: false, assignee: 'Direct Manager' },
        { id: 5, name: 'Introduction to key stakeholders', completed: false, assignee: 'Onboarding Buddy' }
      ],
      icon: 'UsersIcon',
      estimatedTime: 'Day 2-3'
    },
    {
      id: 5,
      title: 'Training & Development',
      description: 'Job-specific training and skill development programs',
      tasks: [
        { id: 1, name: 'Technical training sessions', completed: false, assignee: 'Training Team' },
        { id: 2, name: 'Software and tools training', completed: false, assignee: 'IT Trainer' },
        { id: 3, name: 'Company processes training', completed: false, assignee: 'Process Owner' },
        { id: 4, name: 'Mentorship program enrollment', completed: false, assignee: 'Learning & Development' },
        { id: 5, name: 'Skills assessment', completed: false, assignee: 'Technical Lead' }
      ],
      icon: 'AcademicCapIcon',
      estimatedTime: 'Week 1-2'
    },
    {
      id: 6,
      title: '30-Day Check-in',
      description: 'Review progress, address concerns, and gather feedback',
      tasks: [
        { id: 1, name: '30-day review meeting', completed: false, assignee: 'Direct Manager' },
        { id: 2, name: 'Feedback collection', completed: false, assignee: 'HR Representative' },
        { id: 3, name: 'Goal setting for next 60 days', completed: false, assignee: 'Direct Manager' },
        { id: 4, name: 'Address any concerns or questions', completed: false, assignee: 'HR Representative' },
        { id: 5, name: 'Update performance tracking', completed: false, assignee: 'Direct Manager' }
      ],
      icon: 'ChatBubbleLeftRightIcon',
      estimatedTime: 'End of Month 1'
    },
    {
      id: 7,
      title: 'Integration Complete',
      description: 'Final assessment and transition to regular employee status',
      tasks: [
        { id: 1, name: '90-day performance review', completed: false, assignee: 'Direct Manager' },
        { id: 2, name: 'End of probation assessment', completed: false, assignee: 'HR Manager' },
        { id: 3, name: 'Career development planning', completed: false, assignee: 'Direct Manager' },
        { id: 4, name: 'Integration feedback survey', completed: false, assignee: 'New Employee' },
        { id: 5, name: 'Welcome to regular employee status', completed: false, assignee: 'HR Team' }
      ],
      icon: 'CheckBadgeIcon',
      estimatedTime: 'End of Month 3'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'delayed':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };


  const OnboardingTimeline = () => {
    if (!selectedCandidate) {
      return (
        <Card>
          <div className="text-center py-12">
            <Icon name="UserPlusIcon" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              Select a New Hire
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a candidate from the list to view their onboarding progress
            </p>
          </div>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        {/* Candidate Info Header */}
        <Card>
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {getInitials(selectedCandidate.name)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedCandidate.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {selectedCandidate.position}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Icon name="BuildingOfficeIcon" className="w-4 h-4" />
                      <span>{selectedCandidate.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="CalendarIcon" className="w-4 h-4" />
                      <span>Start: {selectedCandidate.startDate}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="UserIcon" className="w-4 h-4" />
                      <span>Manager: {selectedCandidate.manager}</span>
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedCandidate.status)}`}>
                  {selectedCandidate.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Overall Progress</span>
                  <span>{selectedCandidate.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(selectedCandidate.progress)}`}
                    style={{ width: `${selectedCandidate.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Onboarding Steps */}
        <Card title="Onboarding Timeline">
          <div className="space-y-6">
            {onboardingSteps.map((step, index) => {
              const isCompleted = index < selectedCandidate.completedSteps;
              const isCurrent = index === selectedCandidate.currentStep;
              const isPending = index > selectedCandidate.currentStep;

              return (
                <div key={step.id} className="flex space-x-4">
                  {/* Timeline Icon */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500' :
                      isCurrent ? 'bg-blue-500' :
                      'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      {isCompleted ? (
                        <Icon name="CheckIcon" className="w-5 h-5 text-white" />
                      ) : (
                        <Icon name={step.icon} className={`w-5 h-5 ${
                          isCurrent ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                        }`} />
                      )}
                    </div>
                    {index < onboardingSteps.length - 1 && (
                      <div className={`w-0.5 h-16 mt-2 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                      }`} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-8">
                    <div className={`p-6 rounded-lg ${
                      isCurrent ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' :
                      isCompleted ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' :
                      'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className={`text-lg font-semibold ${
                            isCurrent ? 'text-blue-800 dark:text-blue-300' :
                            isCompleted ? 'text-green-800 dark:text-green-300' :
                            'text-gray-800 dark:text-white'
                          }`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm ${
                            isCurrent ? 'text-blue-600 dark:text-blue-400' :
                            isCompleted ? 'text-green-600 dark:text-green-400' :
                            'text-gray-600 dark:text-gray-400'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isCompleted ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                          isCurrent ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
                        }`}>
                          {isCompleted ? 'COMPLETED' : isCurrent ? 'IN PROGRESS' : 'PENDING'}
                        </span>
                      </div>

                      <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                        Estimated Time: {step.estimatedTime}
                      </div>

                      {/* Tasks */}
                      <div className="space-y-2">
                        {step.tasks.map(task => (
                          <div key={task.id} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded border">
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                task.completed 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}>
                                {task.completed && (
                                  <Icon name="CheckIcon" className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <div>
                                <p className={`text-sm font-medium ${
                                  task.completed 
                                    ? 'text-gray-500 dark:text-gray-400 line-through' 
                                    : 'text-gray-800 dark:text-white'
                                }`}>
                                  {task.name}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {task.assignee}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Onboarding Process
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track and manage the onboarding journey for new employees
            </p>
          </div>
          <button 
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Add New Hire"
          >
            <Icon name="PlusIcon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Candidates Table */}
        <Card title="New Hires Overview">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Start Date</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Progress</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map(candidate => (
                  <tr 
                    key={candidate.id} 
                    className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                      selectedCandidate?.id === candidate.id ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => setSelectedCandidate(candidate)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {getInitials(candidate.name)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{candidate.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.position}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {candidate.department}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {candidate.startDate}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                        {candidate.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(candidate.progress)}`}
                            style={{ width: `${candidate.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                          {candidate.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected Candidate Timeline */}
        <OnboardingTimeline />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UserPlusIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Onboarding</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckBadgeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed This Month</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">18</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Days to Complete</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">94%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OnboardingProcess;