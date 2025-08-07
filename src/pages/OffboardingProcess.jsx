import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const OffboardingProcess = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeTab, setActiveTab] = useState('checklist');

  const departingEmployees = [
    {
      id: 1,
      name: 'David Thompson',
      position: 'Marketing Coordinator',
      department: 'Marketing',
      lastWorkingDay: '2024-03-15',
      reason: 'resignation',
      status: 'in-progress',
      progress: 45,
      email: 'david.thompson@company.com',
      manager: 'Robert Lee',
      noticePeriod: '2 weeks',
      handoverComplete: false,
      exitInterviewScheduled: true,
      currentStep: 3,
      completedSteps: 4,
      totalSteps: 8
    },
    {
      id: 2,
      name: 'Linda Garcia',
      position: 'Software Engineer',
      department: 'Engineering',
      lastWorkingDay: '2024-03-20',
      reason: 'termination',
      status: 'pending',
      progress: 15,
      email: 'linda.garcia@company.com',
      manager: 'Sarah Wilson',
      noticePeriod: 'Immediate',
      handoverComplete: false,
      exitInterviewScheduled: false,
      currentStep: 1,
      completedSteps: 2,
      totalSteps: 8
    },
    {
      id: 3,
      name: 'Mark Johnson',
      position: 'Sales Manager',
      department: 'Sales',
      lastWorkingDay: '2024-02-28',
      reason: 'retirement',
      status: 'completed',
      progress: 100,
      email: 'mark.johnson@company.com',
      manager: 'Lisa Johnson',
      noticePeriod: '1 month',
      handoverComplete: true,
      exitInterviewScheduled: true,
      currentStep: 8,
      completedSteps: 8,
      totalSteps: 8
    }
  ];

  const offboardingSteps = [
    {
      id: 1,
      title: 'Notification & Documentation',
      description: 'Record departure notification and create offboarding case',
      tasks: [
        { id: 1, name: 'Record resignation/termination notice', completed: true, assignee: 'HR Team', priority: 'high' },
        { id: 2, name: 'Create offboarding checklist', completed: true, assignee: 'HR Team', priority: 'high' },
        { id: 3, name: 'Notify relevant departments', completed: false, assignee: 'HR Team', priority: 'medium' },
        { id: 4, name: 'Update employee status in system', completed: false, assignee: 'HR Team', priority: 'high' }
      ],
      icon: 'DocumentTextIcon',
      estimatedTime: 'Day 1'
    },
    {
      id: 2,
      title: 'Access & Security Review',
      description: 'Review and plan the revocation of system access and security credentials',
      tasks: [
        { id: 1, name: 'Audit current system access', completed: true, assignee: 'IT Security', priority: 'high' },
        { id: 2, name: 'Identify critical systems and data', completed: true, assignee: 'IT Security', priority: 'high' },
        { id: 3, name: 'Plan access revocation timeline', completed: false, assignee: 'IT Security', priority: 'high' },
        { id: 4, name: 'Prepare data backup requirements', completed: false, assignee: 'IT Team', priority: 'medium' }
      ],
      icon: 'ShieldCheckIcon',
      estimatedTime: 'Day 1-2'
    },
    {
      id: 3,
      title: 'Knowledge Transfer Planning',
      description: 'Plan and initiate knowledge transfer and handover process',
      tasks: [
        { id: 1, name: 'Identify key responsibilities and projects', completed: true, assignee: 'Direct Manager', priority: 'high' },
        { id: 2, name: 'Assign handover responsibilities', completed: true, assignee: 'Direct Manager', priority: 'high' },
        { id: 3, name: 'Schedule knowledge transfer sessions', completed: true, assignee: 'Direct Manager', priority: 'high' },
        { id: 4, name: 'Document critical processes and contacts', completed: false, assignee: 'Departing Employee', priority: 'high' },
        { id: 5, name: 'Create project transition plan', completed: false, assignee: 'Direct Manager', priority: 'medium' }
      ],
      icon: 'AcademicCapIcon',
      estimatedTime: 'Week 1'
    },
    {
      id: 4,
      title: 'Handover Execution',
      description: 'Execute the knowledge transfer and handover of responsibilities',
      tasks: [
        { id: 1, name: 'Conduct handover meetings', completed: false, assignee: 'Departing Employee', priority: 'high' },
        { id: 2, name: 'Transfer ongoing projects', completed: false, assignee: 'Departing Employee', priority: 'high' },
        { id: 3, name: 'Share important documents and files', completed: false, assignee: 'Departing Employee', priority: 'high' },
        { id: 4, name: 'Introduce key contacts to successors', completed: false, assignee: 'Departing Employee', priority: 'medium' },
        { id: 5, name: 'Complete handover documentation', completed: false, assignee: 'Departing Employee', priority: 'high' }
      ],
      icon: 'HandRaisedIcon',
      estimatedTime: 'Week 1-2'
    },
    {
      id: 5,
      title: 'Exit Interview',
      description: 'Conduct exit interview and gather feedback',
      tasks: [
        { id: 1, name: 'Schedule exit interview', completed: false, assignee: 'HR Representative', priority: 'medium' },
        { id: 2, name: 'Prepare exit interview questions', completed: false, assignee: 'HR Representative', priority: 'medium' },
        { id: 3, name: 'Conduct exit interview session', completed: false, assignee: 'HR Representative', priority: 'medium' },
        { id: 4, name: 'Document feedback and suggestions', completed: false, assignee: 'HR Representative', priority: 'medium' },
        { id: 5, name: 'Share insights with management', completed: false, assignee: 'HR Manager', priority: 'low' }
      ],
      icon: 'ChatBubbleLeftRightIcon',
      estimatedTime: 'Final Week'
    },
    {
      id: 6,
      title: 'Benefits & Payroll',
      description: 'Process final payroll, benefits, and financial settlements',
      tasks: [
        { id: 1, name: 'Calculate final salary and dues', completed: false, assignee: 'Payroll Team', priority: 'high' },
        { id: 2, name: 'Process unused leave balance', completed: false, assignee: 'Payroll Team', priority: 'high' },
        { id: 3, name: 'Handle benefits termination', completed: false, assignee: 'Benefits Team', priority: 'high' },
        { id: 4, name: 'Process expense reimbursements', completed: false, assignee: 'Finance Team', priority: 'medium' },
        { id: 5, name: 'Issue final payslip and documents', completed: false, assignee: 'Payroll Team', priority: 'high' }
      ],
      icon: 'CurrencyDollarIcon',
      estimatedTime: 'Final Week'
    },
    {
      id: 7,
      title: 'Asset Return & Access Revocation',
      description: 'Collect company assets and revoke all access',
      tasks: [
        { id: 1, name: 'Collect laptop and equipment', completed: false, assignee: 'IT Team', priority: 'high' },
        { id: 2, name: 'Collect ID card and access badges', completed: false, assignee: 'Security Team', priority: 'high' },
        { id: 3, name: 'Revoke all system access', completed: false, assignee: 'IT Security', priority: 'high' },
        { id: 4, name: 'Disable email and accounts', completed: false, assignee: 'IT Team', priority: 'high' },
        { id: 5, name: 'Return company credit cards', completed: false, assignee: 'Finance Team', priority: 'medium' },
        { id: 6, name: 'Collect company phone/devices', completed: false, assignee: 'IT Team', priority: 'medium' }
      ],
      icon: 'KeyIcon',
      estimatedTime: 'Last Working Day'
    },
    {
      id: 8,
      title: 'Final Documentation',
      description: 'Complete all final documentation and case closure',
      tasks: [
        { id: 1, name: 'Generate relieving letter', completed: false, assignee: 'HR Team', priority: 'high' },
        { id: 2, name: 'Update employment records', completed: false, assignee: 'HR Team', priority: 'high' },
        { id: 3, name: 'Archive employee files', completed: false, assignee: 'HR Team', priority: 'medium' },
        { id: 4, name: 'Send final communications', completed: false, assignee: 'HR Team', priority: 'low' },
        { id: 5, name: 'Close offboarding case', completed: false, assignee: 'HR Manager', priority: 'low' },
        { id: 6, name: 'Update organizational chart', completed: false, assignee: 'HR Team', priority: 'low' }
      ],
      icon: 'CheckBadgeIcon',
      estimatedTime: 'Post-departure'
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

  const getReasonColor = (reason) => {
    switch (reason) {
      case 'resignation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'termination':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'retirement':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'transfer':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
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

  const tabs = [
    { id: 'checklist', label: 'Checklist', icon: 'ListBulletIcon' },
    { id: 'timeline', label: 'Timeline', icon: 'ClockIcon' },
    { id: 'details', label: 'Details', icon: 'InformationCircleIcon' }
  ];


  const OffboardingContent = () => {
    if (!selectedEmployee) {
      return (
        <Card>
          <div className="text-center py-12">
            <Icon name="UserMinusIcon" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              Select a Departing Employee
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Choose an employee from the list to view their offboarding progress
            </p>
          </div>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        {/* Employee Info Header */}
        <Card>
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                {getInitials(selectedEmployee.name)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedEmployee.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {selectedEmployee.position}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Icon name="BuildingOfficeIcon" className="w-4 h-4" />
                      <span>{selectedEmployee.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="CalendarIcon" className="w-4 h-4" />
                      <span>Last Day: {selectedEmployee.lastWorkingDay}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="ClockIcon" className="w-4 h-4" />
                      <span>Notice: {selectedEmployee.noticePeriod}</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedEmployee.status)}`}>
                    {selectedEmployee.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getReasonColor(selectedEmployee.reason)}`}>
                    {selectedEmployee.reason.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Overall Progress</span>
                  <span>{selectedEmployee.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getProgressColor(selectedEmployee.progress)}`}
                    style={{ width: `${selectedEmployee.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600 dark:text-red-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'checklist' && (
          <Card title="Offboarding Checklist">
            <div className="space-y-6">
              {offboardingSteps.map((step, index) => {
                const isCompleted = index < selectedEmployee.completedSteps;
                const isCurrent = index === selectedEmployee.currentStep;

                return (
                  <div key={step.id} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-500' :
                        isCurrent ? 'bg-red-500' :
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
                      {index < offboardingSteps.length - 1 && (
                        <div className={`w-0.5 h-16 mt-2 ${
                          isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`} />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className={`p-6 rounded-lg ${
                        isCurrent ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' :
                        isCompleted ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' :
                        'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className={`text-lg font-semibold ${
                              isCurrent ? 'text-red-800 dark:text-red-300' :
                              isCompleted ? 'text-green-800 dark:text-green-300' :
                              'text-gray-800 dark:text-white'
                            }`}>
                              {step.title}
                            </h3>
                            <p className={`text-sm ${
                              isCurrent ? 'text-red-600 dark:text-red-400' :
                              isCompleted ? 'text-green-600 dark:text-green-400' :
                              'text-gray-600 dark:text-gray-400'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            isCompleted ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                            isCurrent ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300'
                          }`}>
                            {isCompleted ? 'COMPLETED' : isCurrent ? 'IN PROGRESS' : 'PENDING'}
                          </span>
                        </div>

                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                          Timeline: {step.estimatedTime}
                        </div>

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
                                <div className="flex-1">
                                  <p className={`text-sm font-medium ${
                                    task.completed 
                                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                                      : 'text-gray-800 dark:text-white'
                                  }`}>
                                    {task.name}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                                  {task.priority.toUpperCase()}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {task.assignee}
                                </span>
                              </div>
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
        )}

        {activeTab === 'details' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Employee Information">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Manager</label>
                  <p className="text-gray-800 dark:text-white">{selectedEmployee.manager}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                  <p className="text-gray-800 dark:text-white">{selectedEmployee.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Notice Period</label>
                  <p className="text-gray-800 dark:text-white">{selectedEmployee.noticePeriod}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Departure Reason</label>
                  <p className="text-gray-800 dark:text-white capitalize">{selectedEmployee.reason}</p>
                </div>
              </div>
            </Card>

            <Card title="Handover Status">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Knowledge Transfer</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedEmployee.handoverComplete 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {selectedEmployee.handoverComplete ? 'COMPLETE' : 'IN PROGRESS'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Exit Interview</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    selectedEmployee.exitInterviewScheduled 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {selectedEmployee.exitInterviewScheduled ? 'SCHEDULED' : 'NOT SCHEDULED'}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        )}
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
              Offboarding Process
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage the departure process and ensure smooth transitions
            </p>
          </div>
          <button 
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title="Start Offboarding"
          >
            <Icon name="UserMinusIcon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Departing Employees Table */}
        <Card title="Departing Employees Overview">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Last Day</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Reason</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Progress</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departingEmployees.map(employee => (
                  <tr 
                    key={employee.id} 
                    className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                      selectedEmployee?.id === employee.id ? 'bg-red-50 dark:bg-red-900/20' : ''
                    }`}
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
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
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {employee.department}
                    </td>
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {employee.lastWorkingDay}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getReasonColor(employee.reason)}`}>
                        {employee.reason.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                        {employee.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(employee.progress)}`}
                            style={{ width: `${employee.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                          {employee.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected Employee Offboarding Details */}
        <OffboardingContent />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UserMinusIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Offboarding</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckBadgeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">8</p>
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
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Days to Complete</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChatBubbleLeftRightIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">89%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Exit Interview Rate</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OffboardingProcess;