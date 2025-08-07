import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const CareerDevelopment = () => {
  const [activeTab, setActiveTab] = useState('plans');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const developmentPlans = [
    {
      id: 1,
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      currentLevel: 'Senior',
      targetLevel: 'Staff Engineer',
      planTitle: 'Leadership & Technical Excellence Path',
      status: 'active',
      progress: 65,
      startDate: '2024-01-15',
      targetDate: '2024-12-31',
      mentor: {
        employeeId: 'EMP100',
        employeeName: 'Sarah Johnson',
        position: 'Engineering Manager'
      },
      goals: [
        {
          id: 1,
          category: 'technical',
          title: 'Master System Architecture',
          description: 'Learn advanced system design patterns and lead architectural decisions',
          status: 'in_progress',
          progress: 70,
          dueDate: '2024-06-30',
          activities: [
            'Complete AWS Solutions Architect certification',
            'Design and implement microservices architecture',
            'Lead system design reviews'
          ]
        },
        {
          id: 2,
          category: 'leadership',
          title: 'Develop Team Leadership Skills',
          description: 'Build skills to lead and mentor engineering teams',
          status: 'in_progress',
          progress: 60,
          dueDate: '2024-09-30',
          activities: [
            'Mentor 2 junior developers',
            'Lead cross-functional project',
            'Complete leadership training program'
          ]
        },
        {
          id: 3,
          category: 'communication',
          title: 'Enhance Technical Communication',
          description: 'Improve ability to communicate technical concepts to stakeholders',
          status: 'pending',
          progress: 0,
          dueDate: '2024-11-30',
          activities: [
            'Present at engineering all-hands',
            'Write technical blog posts',
            'Complete presentation skills workshop'
          ]
        }
      ],
      competencyGaps: [
        { competency: 'System Architecture', currentLevel: 3, targetLevel: 5, gap: 2 },
        { competency: 'Team Leadership', currentLevel: 2, targetLevel: 4, gap: 2 },
        { competency: 'Strategic Thinking', currentLevel: 2, targetLevel: 4, gap: 2 }
      ],
      lastUpdated: '2024-03-20'
    },
    {
      id: 2,
      employeeId: 'EMP002',
      employeeName: 'Maria Garcia',
      department: 'Sales',
      position: 'Account Manager',
      currentLevel: 'Mid-Level',
      targetLevel: 'Senior Account Manager',
      planTitle: 'Sales Excellence & Client Management',
      status: 'active',
      progress: 45,
      startDate: '2024-02-01',
      targetDate: '2025-01-31',
      mentor: {
        employeeId: 'EMP101',
        employeeName: 'David Wilson',
        position: 'Sales Director'
      },
      goals: [
        {
          id: 1,
          category: 'sales',
          title: 'Advanced Sales Techniques',
          description: 'Master consultative selling and complex deal management',
          status: 'in_progress',
          progress: 50,
          dueDate: '2024-07-31',
          activities: [
            'Complete advanced sales certification',
            'Manage 3 enterprise deals',
            'Shadow senior sales manager'
          ]
        },
        {
          id: 2,
          category: 'relationship',
          title: 'Strategic Account Management',
          description: 'Develop skills to manage and grow key accounts',
          status: 'in_progress',
          progress: 40,
          dueDate: '2024-10-31',
          activities: [
            'Create account growth plans',
            'Build C-level relationships',
            'Cross-sell additional services'
          ]
        }
      ],
      competencyGaps: [
        { competency: 'Strategic Selling', currentLevel: 2, targetLevel: 4, gap: 2 },
        { competency: 'Account Planning', currentLevel: 2, targetLevel: 4, gap: 2 },
        { competency: 'Negotiation', currentLevel: 3, targetLevel: 4, gap: 1 }
      ],
      lastUpdated: '2024-03-18'
    },
    {
      id: 3,
      employeeId: 'EMP003',
      employeeName: 'Robert Chen',
      department: 'Marketing',
      position: 'Marketing Specialist',
      currentLevel: 'Junior',
      targetLevel: 'Marketing Manager',
      planTitle: 'Digital Marketing Leadership Track',
      status: 'completed',
      progress: 100,
      startDate: '2023-06-01',
      targetDate: '2024-03-31',
      mentor: {
        employeeId: 'EMP102',
        employeeName: 'Lisa Wong',
        position: 'Marketing Director'
      },
      goals: [
        {
          id: 1,
          category: 'technical',
          title: 'Digital Marketing Mastery',
          description: 'Become proficient in all digital marketing channels',
          status: 'completed',
          progress: 100,
          dueDate: '2024-01-31',
          activities: [
            'Google Ads & Analytics certification',
            'Social media marketing strategy',
            'Email marketing automation'
          ]
        },
        {
          id: 2,
          category: 'leadership',
          title: 'Team Management Skills',
          description: 'Develop skills to manage marketing team',
          status: 'completed',
          progress: 100,
          dueDate: '2024-03-31',
          activities: [
            'Lead campaign team',
            'Manage marketing interns',
            'Complete management training'
          ]
        }
      ],
      competencyGaps: [
        { competency: 'Digital Marketing', currentLevel: 5, targetLevel: 5, gap: 0 },
        { competency: 'Team Management', currentLevel: 4, targetLevel: 4, gap: 0 },
        { competency: 'Strategic Planning', currentLevel: 4, targetLevel: 4, gap: 0 }
      ],
      lastUpdated: '2024-03-31'
    }
  ];

  const careerPaths = [
    {
      id: 1,
      title: 'Engineering Track',
      department: 'Engineering',
      description: 'Technical career progression for software engineers',
      levels: [
        { level: 'Junior Engineer', requirements: ['Bachelor degree', '0-2 years experience'], skills: ['Basic programming', 'Version control'] },
        { level: 'Software Engineer', requirements: ['2-4 years experience'], skills: ['Full-stack development', 'Testing', 'Code reviews'] },
        { level: 'Senior Engineer', requirements: ['4-6 years experience'], skills: ['System design', 'Mentoring', 'Technical leadership'] },
        { level: 'Staff Engineer', requirements: ['6-8 years experience'], skills: ['Architecture', 'Cross-team leadership', 'Technical strategy'] },
        { level: 'Principal Engineer', requirements: ['8+ years experience'], skills: ['Engineering excellence', 'Org-wide impact', 'Technical vision'] }
      ]
    },
    {
      id: 2,
      title: 'Sales Track',
      department: 'Sales',
      description: 'Sales career progression from representative to leadership',
      levels: [
        { level: 'Sales Representative', requirements: ['Bachelor degree', 'Communication skills'], skills: ['Product knowledge', 'Cold calling', 'CRM usage'] },
        { level: 'Account Manager', requirements: ['1-3 years sales experience'], skills: ['Account management', 'Relationship building', 'Consultative selling'] },
        { level: 'Senior Account Manager', requirements: ['3-5 years experience'], skills: ['Strategic selling', 'Complex deals', 'Territory management'] },
        { level: 'Sales Manager', requirements: ['5-7 years experience'], skills: ['Team leadership', 'Sales coaching', 'Pipeline management'] },
        { level: 'Sales Director', requirements: ['7+ years experience'], skills: ['Strategic planning', 'Revenue growth', 'Org development'] }
      ]
    },
    {
      id: 3,
      title: 'Marketing Track',
      department: 'Marketing',
      description: 'Marketing career progression with specialization options',
      levels: [
        { level: 'Marketing Specialist', requirements: ['Bachelor in Marketing/Business'], skills: ['Campaign execution', 'Content creation', 'Analytics basics'] },
        { level: 'Marketing Manager', requirements: ['3-5 years experience'], skills: ['Campaign strategy', 'Team coordination', 'Budget management'] },
        { level: 'Senior Marketing Manager', requirements: ['5-7 years experience'], skills: ['Multi-channel strategy', 'Team leadership', 'ROI optimization'] },
        { level: 'Marketing Director', requirements: ['7+ years experience'], skills: ['Strategic marketing', 'Brand management', 'Cross-functional leadership'] }
      ]
    }
  ];

  const skillAssessments = [
    {
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Engineering',
      assessmentDate: '2024-03-15',
      skills: [
        { category: 'Technical', name: 'JavaScript/TypeScript', currentLevel: 4, targetLevel: 5, priority: 'high' },
        { category: 'Technical', name: 'System Architecture', currentLevel: 3, targetLevel: 5, priority: 'high' },
        { category: 'Technical', name: 'Cloud Platforms (AWS)', currentLevel: 3, targetLevel: 4, priority: 'medium' },
        { category: 'Leadership', name: 'Team Leadership', currentLevel: 2, targetLevel: 4, priority: 'high' },
        { category: 'Leadership', name: 'Mentoring', currentLevel: 3, targetLevel: 4, priority: 'medium' },
        { category: 'Communication', name: 'Technical Writing', currentLevel: 3, targetLevel: 4, priority: 'medium' },
        { category: 'Communication', name: 'Presentation Skills', currentLevel: 2, targetLevel: 4, priority: 'high' }
      ]
    },
    {
      employeeId: 'EMP002',
      employeeName: 'Maria Garcia',
      department: 'Sales',
      assessmentDate: '2024-03-10',
      skills: [
        { category: 'Sales', name: 'Consultative Selling', currentLevel: 3, targetLevel: 4, priority: 'high' },
        { category: 'Sales', name: 'Deal Negotiation', currentLevel: 3, targetLevel: 4, priority: 'high' },
        { category: 'Sales', name: 'Account Planning', currentLevel: 2, targetLevel: 4, priority: 'high' },
        { category: 'Relationship', name: 'Client Relationship Management', currentLevel: 4, targetLevel: 5, priority: 'medium' },
        { category: 'Relationship', name: 'Network Building', currentLevel: 3, targetLevel: 4, priority: 'medium' }
      ]
    }
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Operations'];
  const statuses = ['all', 'active', 'completed', 'on_hold', 'cancelled'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      on_hold: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      pending: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.active;
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };
    return colors[priority] || colors.medium;
  };

  const filteredPlans = developmentPlans.filter(plan => {
    if (selectedDepartment !== 'all' && plan.department !== selectedDepartment) return false;
    if (selectedStatus !== 'all' && plan.status !== selectedStatus) return false;
    return true;
  });

  const PlansTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Development Plans</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            New Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPlans.map((plan) => (
          <Card key={plan.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedPlan(plan)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Icon name="AcademicCapIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{plan.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{plan.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{plan.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{plan.progress}%</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Progress</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(plan.status)} mt-2 inline-block`}>
                    {plan.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">{plan.planTitle}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {plan.currentLevel} → {plan.targetLevel}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Start Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(plan.startDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Target Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(plan.targetDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Goals</p>
                  <p className="font-medium text-gray-800 dark:text-white">{plan.goals.length}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Mentor</p>
                  <p className="font-medium text-gray-800 dark:text-white">{plan.mentor.employeeName}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Overall Progress</span>
                  <span className="font-medium text-gray-800 dark:text-white">{plan.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(plan.progress)}`}
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedPlan && (
        <Card title={`Development Plan - ${selectedPlan.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Plan Overview</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Title:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPlan.planTitle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Current Level:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPlan.currentLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Target Level:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPlan.targetLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedPlan.status)}`}>
                        {selectedPlan.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Mentor Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Name:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedPlan.mentor.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Position:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedPlan.mentor.position}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Overall Progress</h4>
                  <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {selectedPlan.progress}%
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Completion Rate</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Start Date:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{formatDate(selectedPlan.startDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Target Date:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{formatDate(selectedPlan.targetDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Last Updated:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{formatDate(selectedPlan.lastUpdated)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Development Goals</h4>
              <div className="space-y-4">
                {selectedPlan.goals.map((goal) => (
                  <div key={goal.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h5 className="font-medium text-gray-800 dark:text-white">{goal.title}</h5>
                          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs capitalize">
                            {goal.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{goal.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">Due: {formatDate(goal.dueDate)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{goal.progress}%</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                          {goal.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <h6 className="font-medium text-gray-800 dark:text-white mb-2">Key Activities:</h6>
                      <ul className="space-y-1">
                        {goal.activities.map((activity, index) => (
                          <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <Icon name="CheckIcon" className="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Competency Gap Analysis</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPlan.competencyGaps.map((gap, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 dark:text-white mb-3">{gap.competency}</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Current Level</span>
                        <span className="font-medium text-gray-800 dark:text-white">{gap.currentLevel}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Target Level</span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">{gap.targetLevel}/5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Gap</span>
                        <span className={`font-semibold ${gap.gap > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                          {gap.gap > 0 ? `+${gap.gap}` : gap.gap} levels
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(gap.currentLevel / gap.targetLevel) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const CareerPathsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Career Paths</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          New Career Path
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {careerPaths.map((path) => (
          <Card key={path.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{path.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{path.department}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{path.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-white">Career Levels</h4>
                {path.levels.map((level, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-800 dark:text-white">{level.level}</h5>
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          <p><strong>Requirements:</strong> {level.requirements.join(', ')}</p>
                          <p><strong>Key Skills:</strong> {level.skills.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                    {index < path.levels.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-6 bg-gray-300 dark:bg-gray-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const SkillsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Skills Assessment</h3>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Icon name="ChartBarIcon" className="w-4 h-4 inline mr-2" />
          New Assessment
        </button>
      </div>

      <div className="space-y-6">
        {skillAssessments.map((assessment) => (
          <Card key={assessment.employeeId} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedEmployee(assessment)}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Icon name="ChartBarIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{assessment.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{assessment.department}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Assessed: {formatDate(assessment.assessmentDate)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{assessment.skills.length}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Skills Assessed</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Technical', 'Leadership', 'Communication', 'Sales', 'Relationship'].map(category => {
                  const categorySkills = assessment.skills.filter(s => s.category === category);
                  if (categorySkills.length === 0) return null;
                  
                  return (
                    <div key={category} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800 dark:text-white mb-2">{category}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{categorySkills.length} skills</p>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        High Priority: {categorySkills.filter(s => s.priority === 'high').length}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedEmployee && (
        <Card title={`Skills Assessment - ${selectedEmployee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedEmployee.skills.length}</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">Total Skills</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {selectedEmployee.skills.filter(s => s.priority === 'high').length}
                </p>
                <p className="text-sm text-red-800 dark:text-red-300">High Priority</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {selectedEmployee.skills.filter(s => s.currentLevel >= s.targetLevel).length}
                </p>
                <p className="text-sm text-green-800 dark:text-green-300">Target Met</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Skills by Category</h4>
              {['Technical', 'Leadership', 'Communication', 'Sales', 'Relationship'].map(category => {
                const categorySkills = selectedEmployee.skills.filter(s => s.category === category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <div key={category} className="mb-6">
                    <h5 className="font-medium text-gray-800 dark:text-white mb-3">{category} Skills</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h6 className="font-medium text-gray-800 dark:text-white">{skill.name}</h6>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(skill.priority)}`}>
                              {skill.priority.toUpperCase()}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Current Level</span>
                              <span className="font-medium text-gray-800 dark:text-white">{skill.currentLevel}/5</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600 dark:text-gray-400">Target Level</span>
                              <span className="font-medium text-blue-600 dark:text-blue-400">{skill.targetLevel}/5</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${(skill.currentLevel / skill.targetLevel) * 100}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                              <span>Gap: {skill.targetLevel - skill.currentLevel} levels</span>
                              <span>{Math.round((skill.currentLevel / skill.targetLevel) * 100)}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Career Development Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="AcademicCapIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{developmentPlans.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Plans</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {developmentPlans.filter(p => p.status === 'active').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Active Plans</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="TrophyIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {developmentPlans.filter(p => p.status === 'completed').length}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ChartBarIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {Math.round(developmentPlans.reduce((sum, p) => sum + p.progress, 0) / developmentPlans.length)}%
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Avg Progress</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Progress">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptPlans = developmentPlans.filter(p => p.department === dept);
              const avgProgress = deptPlans.length > 0 
                ? deptPlans.reduce((sum, p) => sum + p.progress, 0) / deptPlans.length 
                : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(avgProgress)}`}
                        style={{ width: `${avgProgress}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-16 text-right">
                      {avgProgress > 0 ? `${avgProgress.toFixed(0)}%` : 'N/A'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Plan Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'active', label: 'Active', color: 'bg-green-500' },
              { status: 'completed', label: 'Completed', color: 'bg-blue-500' },
              { status: 'on_hold', label: 'On Hold', color: 'bg-yellow-500' },
              { status: 'cancelled', label: 'Cancelled', color: 'bg-red-500' }
            ].map(item => {
              const count = developmentPlans.filter(p => p.status === item.status).length;
              const percentage = developmentPlans.length > 0 ? (count / developmentPlans.length) * 100 : 0;
              
              return (
                <div key={item.status} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                      {count}
                    </span>
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
    { id: 'plans', label: 'Development Plans', icon: 'AcademicCapIcon', component: PlansTab },
    { id: 'paths', label: 'Career Paths', icon: 'ArrowTrendingUpIcon', component: CareerPathsTab },
    { id: 'skills', label: 'Skills Assessment', icon: 'ChartBarIcon', component: SkillsTab },
    { id: 'analytics', label: 'Analytics', icon: 'PresentationChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || PlansTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Development</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage employee career development plans and growth paths</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Icon name="UserPlusIcon" className="w-4 h-4 inline mr-2" />
              Assign Mentor
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Report
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

export default CareerDevelopment;