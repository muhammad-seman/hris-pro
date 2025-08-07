import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const SkillsAssessment = () => {
  const [activeTab, setActiveTab] = useState('assessments');
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const skillsAssessments = [
    {
      id: 1,
      employee: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Engineering',
        position: 'Senior Software Engineer',
        avatar: null
      },
      assessment: {
        name: 'Full Stack Development Assessment',
        category: 'technical',
        type: 'comprehensive',
        framework: 'Software Engineering Competency Framework',
        assessor: 'Sarah Johnson',
        assessorTitle: 'Technical Lead'
      },
      status: 'completed',
      completionDate: '2024-02-15',
      nextAssessmentDate: '2024-08-15',
      overallScore: 4.2,
      skillsEvaluated: [
        {
          skillName: 'JavaScript Programming',
          category: 'frontend',
          currentLevel: 4,
          targetLevel: 5,
          proficiency: 'advanced',
          score: 4.5,
          gapAnalysis: 'Strong foundation, needs improvement in performance optimization'
        },
        {
          skillName: 'React Development',
          category: 'frontend',
          currentLevel: 4,
          targetLevel: 4,
          proficiency: 'advanced',
          score: 4.3,
          gapAnalysis: 'Excellent knowledge of hooks and state management'
        },
        {
          skillName: 'Node.js Backend',
          category: 'backend',
          currentLevel: 3,
          targetLevel: 4,
          proficiency: 'intermediate',
          score: 3.8,
          gapAnalysis: 'Good understanding, needs more experience with scalability'
        },
        {
          skillName: 'Database Design',
          category: 'backend',
          currentLevel: 3,
          targetLevel: 4,
          proficiency: 'intermediate',
          score: 3.5,
          gapAnalysis: 'Solid SQL skills, needs NoSQL experience'
        },
        {
          skillName: 'System Architecture',
          category: 'architecture',
          currentLevel: 3,
          targetLevel: 4,
          proficiency: 'intermediate',
          score: 3.7,
          gapAnalysis: 'Understanding of patterns, needs microservices experience'
        }
      ],
      developmentPlan: {
        priority: 'high',
        recommendedTraining: [
          'Advanced JavaScript Performance Optimization',
          'Microservices Architecture',
          'NoSQL Database Design'
        ],
        timeline: '6 months',
        mentor: 'Sarah Johnson',
        budget: 2500
      }
    },
    {
      id: 2,
      employee: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Marketing',
        position: 'Digital Marketing Manager',
        avatar: null
      },
      assessment: {
        name: 'Digital Marketing Skills Assessment',
        category: 'marketing',
        type: 'specialized',
        framework: 'Digital Marketing Competency Framework',
        assessor: 'David Wilson',
        assessorTitle: 'Marketing Director'
      },
      status: 'in_progress',
      completionDate: null,
      nextAssessmentDate: '2024-03-30',
      overallScore: null,
      skillsEvaluated: [
        {
          skillName: 'SEO Optimization',
          category: 'digital_marketing',
          currentLevel: 4,
          targetLevel: 5,
          proficiency: 'advanced',
          score: 4.2,
          gapAnalysis: 'Strong technical SEO, needs improvement in content strategy'
        },
        {
          skillName: 'Social Media Strategy',
          category: 'digital_marketing',
          currentLevel: 5,
          targetLevel: 5,
          proficiency: 'expert',
          score: 4.8,
          gapAnalysis: 'Excellent across all platforms'
        },
        {
          skillName: 'Content Marketing',
          category: 'digital_marketing',
          currentLevel: 4,
          targetLevel: 4,
          proficiency: 'advanced',
          score: 4.1,
          gapAnalysis: 'Great storytelling, consistent quality'
        },
        {
          skillName: 'Analytics & Reporting',
          category: 'analytics',
          currentLevel: 3,
          targetLevel: 4,
          proficiency: 'intermediate',
          score: 3.6,
          gapAnalysis: 'Good with basic metrics, needs advanced attribution modeling'
        }
      ],
      developmentPlan: {
        priority: 'medium',
        recommendedTraining: [
          'Advanced SEO Content Strategy',
          'Marketing Attribution Modeling',
          'Data-Driven Marketing Decisions'
        ],
        timeline: '4 months',
        mentor: 'Lisa Wong',
        budget: 1800
      }
    }
  ];

  const competencyFrameworks = [
    {
      id: 1,
      name: 'Software Engineering Competency Framework',
      category: 'technical',
      description: 'Comprehensive framework for evaluating software engineering skills across frontend, backend, and architecture domains',
      version: '2.1',
      lastUpdated: '2024-01-15',
      skillCategories: [
        {
          name: 'Frontend Development',
          skills: ['JavaScript', 'React', 'Vue.js', 'HTML/CSS', 'TypeScript', 'Frontend Testing']
        },
        {
          name: 'Backend Development',
          skills: ['Node.js', 'Python', 'Java', 'Database Design', 'API Development', 'Microservices']
        },
        {
          name: 'DevOps & Infrastructure',
          skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms', 'Monitoring', 'Security']
        },
        {
          name: 'System Architecture',
          skills: ['Design Patterns', 'Scalability', 'Performance', 'Security Architecture']
        }
      ],
      proficiencyLevels: [
        { level: 1, name: 'Novice', description: 'Basic understanding with guidance needed' },
        { level: 2, name: 'Beginner', description: 'Can complete simple tasks with some guidance' },
        { level: 3, name: 'Intermediate', description: 'Can work independently on most tasks' },
        { level: 4, name: 'Advanced', description: 'Can handle complex tasks and guide others' },
        { level: 5, name: 'Expert', description: 'Recognized expert, can design solutions and mentor' }
      ],
      assessmentCriteria: 'Technical knowledge, practical application, problem-solving, code quality',
      applicableDepartments: ['Engineering', 'Product'],
      totalEmployeesAssessed: 45,
      averageScore: 3.6,
      status: 'active'
    },
    {
      id: 2,
      name: 'Digital Marketing Competency Framework',
      category: 'marketing',
      description: 'Framework for assessing digital marketing capabilities including strategy, execution, and analytics',
      version: '1.8',
      lastUpdated: '2024-02-01',
      skillCategories: [
        {
          name: 'Search Marketing',
          skills: ['SEO', 'SEM', 'Keyword Research', 'Content Optimization', 'Technical SEO']
        },
        {
          name: 'Social Media Marketing',
          skills: ['Strategy Development', 'Content Creation', 'Community Management', 'Paid Social']
        },
        {
          name: 'Content Marketing',
          skills: ['Content Strategy', 'Copywriting', 'Video Marketing', 'Email Marketing']
        },
        {
          name: 'Analytics & Measurement',
          skills: ['Google Analytics', 'Marketing Attribution', 'KPI Tracking', 'Reporting']
        }
      ],
      proficiencyLevels: [
        { level: 1, name: 'Novice', description: 'Basic understanding of concepts' },
        { level: 2, name: 'Beginner', description: 'Can execute simple campaigns with guidance' },
        { level: 3, name: 'Intermediate', description: 'Can plan and execute campaigns independently' },
        { level: 4, name: 'Advanced', description: 'Can develop strategy and optimize performance' },
        { level: 5, name: 'Expert', description: 'Can lead marketing transformation and innovation' }
      ],
      assessmentCriteria: 'Strategic thinking, campaign execution, data analysis, creative skills',
      applicableDepartments: ['Marketing', 'Sales'],
      totalEmployeesAssessed: 28,
      averageScore: 3.8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Leadership & Management Framework',
      category: 'leadership',
      description: 'Comprehensive assessment of leadership capabilities and management effectiveness',
      version: '3.0',
      lastUpdated: '2024-01-20',
      skillCategories: [
        {
          name: 'People Leadership',
          skills: ['Team Building', 'Coaching & Mentoring', 'Performance Management', 'Conflict Resolution']
        },
        {
          name: 'Strategic Leadership',
          skills: ['Vision Setting', 'Strategic Planning', 'Change Management', 'Innovation Leadership']
        },
        {
          name: 'Operational Excellence',
          skills: ['Process Optimization', 'Resource Management', 'Quality Management', 'Project Leadership']
        },
        {
          name: 'Communication & Influence',
          skills: ['Executive Communication', 'Stakeholder Management', 'Negotiation', 'Public Speaking']
        }
      ],
      proficiencyLevels: [
        { level: 1, name: 'Emerging', description: 'Developing foundational leadership skills' },
        { level: 2, name: 'Developing', description: 'Can lead small teams with support' },
        { level: 3, name: 'Proficient', description: 'Effective leader of teams and projects' },
        { level: 4, name: 'Advanced', description: 'Strategic leader driving organizational results' },
        { level: 5, name: 'Exceptional', description: 'Visionary leader shaping industry direction' }
      ],
      assessmentCriteria: '360-degree feedback, leadership behaviors, business results, cultural impact',
      applicableDepartments: ['All'],
      totalEmployeesAssessed: 67,
      averageScore: 3.4,
      status: 'active'
    }
  ];

  const skillGaps = [
    {
      id: 1,
      department: 'Engineering',
      skillName: 'Cloud Architecture',
      category: 'technical',
      currentAverageLevel: 2.8,
      targetAverageLevel: 4.0,
      gapSize: 1.2,
      priority: 'high',
      affectedEmployees: 15,
      businessImpact: 'Critical for digital transformation initiative',
      recommendedActions: [
        'AWS Solutions Architect training program',
        'Cloud migration workshops',
        'Mentorship from senior architects'
      ],
      estimatedCost: 25000,
      timeline: '6 months'
    },
    {
      id: 2,
      department: 'Marketing',
      skillName: 'Marketing Automation',
      category: 'marketing',
      currentAverageLevel: 2.5,
      targetAverageLevel: 3.5,
      gapSize: 1.0,
      priority: 'medium',
      affectedEmployees: 8,
      businessImpact: 'Moderate impact on campaign efficiency',
      recommendedActions: [
        'Marketing automation platform training',
        'Best practices workshops',
        'Cross-functional collaboration sessions'
      ],
      estimatedCost: 12000,
      timeline: '4 months'
    },
    {
      id: 3,
      department: 'Sales',
      skillName: 'Consultative Selling',
      category: 'sales',
      currentAverageLevel: 3.1,
      targetAverageLevel: 4.2,
      gapSize: 1.1,
      priority: 'high',
      affectedEmployees: 12,
      businessImpact: 'High impact on revenue growth',
      recommendedActions: [
        'Advanced sales methodology training',
        'Role-playing workshops',
        'Customer interaction simulations'
      ],
      estimatedCost: 18000,
      timeline: '3 months'
    }
  ];

  const categories = ['all', 'technical', 'marketing', 'leadership', 'sales', 'finance', 'hr', 'operations'];
  const statuses = ['all', 'completed', 'in_progress', 'scheduled', 'overdue'];

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      scheduled: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[status] || colors.scheduled;
  };

  const getCategoryColor = (category) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      finance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      hr: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      operations: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[category] || colors.technical;
  };

  const getProficiencyColor = (level) => {
    const colors = {
      1: 'text-red-600 dark:text-red-400',
      2: 'text-orange-600 dark:text-orange-400',
      3: 'text-yellow-600 dark:text-yellow-400',
      4: 'text-green-600 dark:text-green-400',
      5: 'text-blue-600 dark:text-blue-400'
    };
    return colors[level] || colors[3];
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[priority] || colors.medium;
  };

  const filteredAssessments = skillsAssessments.filter(assessment => {
    if (selectedCategory !== 'all' && assessment.assessment.category !== selectedCategory) return false;
    if (selectedStatus !== 'all' && assessment.status !== selectedStatus) return false;
    return true;
  });

  const AssessmentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Skills Assessments</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
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
            New Assessment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAssessments.map((assessment) => (
          <Card key={assessment.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedAssessment(assessment)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{assessment.employee.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{assessment.employee.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{assessment.employee.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                    {assessment.status.replace('_', ' ').toUpperCase()}
                  </span>
                  {assessment.overallScore && (
                    <p className="text-lg font-bold text-gray-800 dark:text-white mt-1">
                      {assessment.overallScore}/5.0
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">{assessment.assessment.name}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(assessment.assessment.category)}`}>
                    {assessment.assessment.category.toUpperCase()}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 capitalize">{assessment.assessment.type}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Assessor: {assessment.assessment.assessor}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Completion Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(assessment.completionDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Next Assessment</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(assessment.nextAssessmentDate)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 dark:text-gray-400">Skills Evaluated</p>
                  <p className="font-medium text-gray-800 dark:text-white">{assessment.skillsEvaluated.length} skills</p>
                </div>
              </div>

              {assessment.status === 'completed' && (
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800 dark:text-white">Top Skills:</h5>
                  <div className="space-y-1">
                    {assessment.skillsEvaluated.slice(0, 3).map((skill, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{skill.skillName}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${getProficiencyColor(skill.currentLevel)}`}>
                            Level {skill.currentLevel}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">({skill.score})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {selectedAssessment && (
        <Card title={`Assessment Details - ${selectedAssessment.employee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Assessment Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Assessment:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedAssessment.assessment.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Framework:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedAssessment.assessment.framework}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Assessor:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedAssessment.assessment.assessor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Completion:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedAssessment.completionDate)}</span>
                    </div>
                  </div>
                </div>
                {selectedAssessment.developmentPlan && (
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Development Plan</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-700 dark:text-blue-300">Priority:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedAssessment.developmentPlan.priority)}`}>
                          {selectedAssessment.developmentPlan.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700 dark:text-blue-300">Timeline:</span>
                        <span className="font-medium text-blue-800 dark:text-blue-200">{selectedAssessment.developmentPlan.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700 dark:text-blue-300">Budget:</span>
                        <span className="font-medium text-blue-800 dark:text-blue-200">${selectedAssessment.developmentPlan.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-700 dark:text-blue-300">Mentor:</span>
                        <span className="font-medium text-blue-800 dark:text-blue-200">{selectedAssessment.developmentPlan.mentor}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {selectedAssessment.overallScore && (
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Overall Score</h4>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{selectedAssessment.overallScore}</p>
                    <p className="text-sm text-green-700 dark:text-green-300">out of 5.0</p>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Skills Evaluation</h4>
              <div className="space-y-3">
                {selectedAssessment.skillsEvaluated.map((skill, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-medium text-gray-800 dark:text-white">{skill.skillName}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(skill.category)}`}>
                          {skill.category.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800 dark:text-white">Score: {skill.score}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{skill.proficiency}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Current Level</p>
                        <p className={`font-bold ${getProficiencyColor(skill.currentLevel)}`}>
                          Level {skill.currentLevel}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Target Level</p>
                        <p className={`font-bold ${getProficiencyColor(skill.targetLevel)}`}>
                          Level {skill.targetLevel}
                        </p>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Progress to Target</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {Math.round((skill.currentLevel / skill.targetLevel) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(skill.currentLevel / skill.targetLevel) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Gap Analysis:</strong> {skill.gapAnalysis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedAssessment.developmentPlan?.recommendedTraining && (
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Recommended Training</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedAssessment.developmentPlan.recommendedTraining.map((training, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                      <Icon name="AcademicCapIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">{training}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );

  const FrameworksTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Competency Frameworks</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Create Framework
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {competencyFrameworks.map((framework) => (
          <Card key={framework.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedFramework(framework)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{framework.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Version {framework.version}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(framework.category)}`}>
                  {framework.category.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{framework.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Categories</p>
                  <p className="font-medium text-gray-800 dark:text-white">{framework.skillCategories.length}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Levels</p>
                  <p className="font-medium text-gray-800 dark:text-white">{framework.proficiencyLevels.length}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Assessed</p>
                  <p className="font-medium text-gray-800 dark:text-white">{framework.totalEmployeesAssessed} employees</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Avg Score</p>
                  <p className="font-medium text-gray-800 dark:text-white">{framework.averageScore}/5.0</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Applicable Departments:</p>
                <div className="flex flex-wrap gap-1">
                  {framework.applicableDepartments.slice(0, 2).map((dept, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                      {dept}
                    </span>
                  ))}
                  {framework.applicableDepartments.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                      +{framework.applicableDepartments.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Updated: {formatDate(framework.lastUpdated)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${framework.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                  {framework.status.toUpperCase()}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedFramework && (
        <Card title={`Framework Details - ${selectedFramework.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Framework Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedFramework.description}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Framework Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Version:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedFramework.version}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedFramework.lastUpdated)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Assessment Criteria:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedFramework.assessmentCriteria}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Usage Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Employees Assessed:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedFramework.totalEmployeesAssessed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Average Score:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedFramework.averageScore}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Status:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200 capitalize">{selectedFramework.status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Skill Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedFramework.skillCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 dark:text-white mb-2">{category.name}</h5>
                    <div className="space-y-1">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Proficiency Levels</h4>
              <div className="space-y-2">
                {selectedFramework.proficiencyLevels.map((level, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${getProficiencyColor(level.level)} bg-current`}>
                      {level.level}
                    </span>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{level.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{level.description}</p>
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

  const SkillGapsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Skills Gap Analysis</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="ChartBarIcon" className="w-4 h-4 inline mr-2" />
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillGaps.map((gap) => (
          <Card key={gap.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{gap.skillName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{gap.department} Department</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(gap.priority)}`}>
                    {gap.priority.toUpperCase()}
                  </span>
                  <p className="text-lg font-bold text-red-600 dark:text-red-400 mt-1">
                    Gap: {gap.gapSize}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Skill Level Progress</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    {gap.currentAverageLevel.toFixed(1)} / {gap.targetAverageLevel.toFixed(1)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${(gap.currentAverageLevel / gap.targetAverageLevel) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Affected Employees</p>
                  <p className="font-medium text-gray-800 dark:text-white">{gap.affectedEmployees}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Timeline</p>
                  <p className="font-medium text-gray-800 dark:text-white">{gap.timeline}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 dark:text-gray-400">Estimated Cost</p>
                  <p className="font-medium text-gray-800 dark:text-white">${gap.estimatedCost.toLocaleString()}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Business Impact:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{gap.businessImpact}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Recommended Actions:</p>
                <div className="space-y-1">
                  {gap.recommendedActions.slice(0, 2).map((action, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{action}</span>
                    </div>
                  ))}
                  {gap.recommendedActions.length > 2 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 ml-6">
                      +{gap.recommendedActions.length - 2} more actions
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Skills Assessment Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="ClipboardDocumentListIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{skillsAssessments.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Assessments</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {skillsAssessments.filter(a => a.status === 'completed').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{skillGaps.length}</p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Critical Gaps</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="CurrencyDollarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              ${(skillGaps.reduce((sum, gap) => sum + gap.estimatedCost, 0) / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Training Investment</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Assessment Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'completed', label: 'Completed', color: 'bg-green-500' },
              { status: 'in_progress', label: 'In Progress', color: 'bg-blue-500' },
              { status: 'scheduled', label: 'Scheduled', color: 'bg-yellow-500' },
              { status: 'overdue', label: 'Overdue', color: 'bg-red-500' }
            ].map(item => {
              const count = skillsAssessments.filter(a => a.status === item.status).length;
              const percentage = skillsAssessments.length > 0 ? (count / skillsAssessments.length) * 100 : 0;
              
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

        <Card title="Skills Gap Priority">
          <div className="space-y-4">
            {skillGaps.map((gap) => (
              <div key={gap.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{gap.skillName}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{gap.department}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(gap.priority)}`}>
                    {gap.priority.toUpperCase()}
                  </span>
                  <span className="text-sm font-bold text-red-600 dark:text-red-400">
                    {gap.gapSize.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const tabs = [
    { id: 'assessments', label: 'Assessments', icon: 'ClipboardDocumentListIcon', component: AssessmentsTab },
    { id: 'frameworks', label: 'Frameworks', icon: 'RectangleStackIcon', component: FrameworksTab },
    { id: 'skill_gaps', label: 'Skills Gaps', icon: 'ExclamationTriangleIcon', component: SkillGapsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AssessmentsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Skills Assessment</h1>
            <p className="text-gray-600 dark:text-gray-400">Evaluate employee skills, identify gaps, and plan development initiatives</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              New Assessment
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

export default SkillsAssessment;