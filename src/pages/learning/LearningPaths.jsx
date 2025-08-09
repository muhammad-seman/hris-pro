import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const LearningPaths = () => {
  const [activeTab, setActiveTab] = useState('paths');
  const [selectedPath, setSelectedPath] = useState(null);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const learningPaths = [
    {
      id: 1,
      title: 'Full Stack Developer Journey',
      description: 'Complete learning path from beginner to advanced full-stack development with modern technologies',
      category: 'technical',
      level: 'beginner_to_advanced',
      duration: '6 months',
      estimatedHours: 240,
      difficulty: 'progressive',
      prerequisites: 'Basic computer skills',
      targetRole: 'Full Stack Developer',
      status: 'active',
      featured: true,
      enrolledCount: 45,
      completionRate: 78,
      rating: 4.8,
      reviewCount: 156,
      instructor: {
        name: 'Alex Thompson',
        title: 'Senior Full Stack Developer',
        avatar: null
      },
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database Design', 'API Development'],
      courses: [
        {
          id: 1,
          title: 'HTML & CSS Fundamentals',
          duration: '20 hours',
          order: 1,
          type: 'core',
          status: 'required',
          completionRate: 95
        },
        {
          id: 2,
          title: 'JavaScript Essentials',
          duration: '35 hours',
          order: 2,
          type: 'core',
          status: 'required',
          completionRate: 89
        },
        {
          id: 3,
          title: 'React Development',
          duration: '45 hours',
          order: 3,
          type: 'core',
          status: 'required',
          completionRate: 82
        },
        {
          id: 4,
          title: 'Node.js Backend Development',
          duration: '40 hours',
          order: 4,
          type: 'core',
          status: 'required',
          completionRate: 76
        },
        {
          id: 5,
          title: 'Database Design & SQL',
          duration: '30 hours',
          order: 5,
          type: 'core',
          status: 'required',
          completionRate: 71
        },
        {
          id: 6,
          title: 'API Development & Testing',
          duration: '25 hours',
          order: 6,
          type: 'core',
          status: 'required',
          completionRate: 68
        },
        {
          id: 7,
          title: 'DevOps Fundamentals',
          duration: '20 hours',
          order: 7,
          type: 'optional',
          status: 'optional',
          completionRate: 45
        },
        {
          id: 8,
          title: 'Full Stack Capstone Project',
          duration: '25 hours',
          order: 8,
          type: 'project',
          status: 'required',
          completionRate: 62
        }
      ],
      certifications: ['Full Stack Developer Certificate', 'React Developer Certificate'],
      outcomes: [
        'Build complete web applications from scratch',
        'Design and implement RESTful APIs',
        'Work with modern JavaScript frameworks',
        'Deploy applications to cloud platforms'
      ],
      careerOpportunities: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Web Developer'],
      createdDate: '2024-01-15',
      lastUpdated: '2024-02-20'
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist Track',
      description: 'Comprehensive digital marketing learning path covering strategy, execution, and analytics',
      category: 'marketing',
      level: 'intermediate',
      duration: '4 months',
      estimatedHours: 160,
      difficulty: 'moderate',
      prerequisites: 'Basic marketing knowledge',
      targetRole: 'Digital Marketing Specialist',
      status: 'active',
      featured: true,
      enrolledCount: 32,
      completionRate: 85,
      rating: 4.6,
      reviewCount: 89,
      instructor: {
        name: 'Sarah Martinez',
        title: 'Digital Marketing Director',
        avatar: null
      },
      skills: ['SEO', 'SEM', 'Social Media Marketing', 'Content Marketing', 'Analytics', 'Email Marketing'],
      courses: [
        {
          id: 1,
          title: 'Digital Marketing Fundamentals',
          duration: '25 hours',
          order: 1,
          type: 'core',
          status: 'required',
          completionRate: 92
        },
        {
          id: 2,
          title: 'SEO & Content Strategy',
          duration: '30 hours',
          order: 2,
          type: 'core',
          status: 'required',
          completionRate: 88
        },
        {
          id: 3,
          title: 'Social Media Marketing',
          duration: '25 hours',
          order: 3,
          type: 'core',
          status: 'required',
          completionRate: 84
        },
        {
          id: 4,
          title: 'Paid Advertising (PPC)',
          duration: '30 hours',
          order: 4,
          type: 'core',
          status: 'required',
          completionRate: 81
        },
        {
          id: 5,
          title: 'Email Marketing & Automation',
          duration: '20 hours',
          order: 5,
          type: 'core',
          status: 'required',
          completionRate: 79
        },
        {
          id: 6,
          title: 'Analytics & Reporting',
          duration: '30 hours',
          order: 6,
          type: 'core',
          status: 'required',
          completionRate: 76
        }
      ],
      certifications: ['Digital Marketing Professional', 'Google Analytics Certified'],
      outcomes: [
        'Develop comprehensive digital marketing strategies',
        'Execute multi-channel marketing campaigns',
        'Analyze and optimize campaign performance',
        'Use marketing automation tools effectively'
      ],
      careerOpportunities: ['Digital Marketing Specialist', 'Marketing Manager', 'Growth Marketer', 'Marketing Analyst'],
      createdDate: '2024-01-20',
      lastUpdated: '2024-02-15'
    },
    {
      id: 3,
      title: 'Data Science Professional Path',
      description: 'Comprehensive data science journey from statistics to machine learning and AI',
      category: 'technical',
      level: 'advanced',
      duration: '8 months',
      estimatedHours: 320,
      difficulty: 'challenging',
      prerequisites: 'Mathematics background, programming experience',
      targetRole: 'Data Scientist',
      status: 'active',
      featured: false,
      enrolledCount: 28,
      completionRate: 72,
      rating: 4.9,
      reviewCount: 234,
      instructor: {
        name: 'Dr. Lisa Wang',
        title: 'Principal Data Scientist',
        avatar: null
      },
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization', 'Deep Learning', 'Big Data'],
      courses: [
        {
          id: 1,
          title: 'Statistics for Data Science',
          duration: '40 hours',
          order: 1,
          type: 'core',
          status: 'required',
          completionRate: 85
        },
        {
          id: 2,
          title: 'Python for Data Analysis',
          duration: '45 hours',
          order: 2,
          type: 'core',
          status: 'required',
          completionRate: 82
        },
        {
          id: 3,
          title: 'Data Visualization',
          duration: '30 hours',
          order: 3,
          type: 'core',
          status: 'required',
          completionRate: 78
        },
        {
          id: 4,
          title: 'Machine Learning Fundamentals',
          duration: '50 hours',
          order: 4,
          type: 'core',
          status: 'required',
          completionRate: 75
        },
        {
          id: 5,
          title: 'Deep Learning & Neural Networks',
          duration: '60 hours',
          order: 5,
          type: 'core',
          status: 'required',
          completionRate: 68
        },
        {
          id: 6,
          title: 'Big Data Technologies',
          duration: '45 hours',
          order: 6,
          type: 'core',
          status: 'required',
          completionRate: 65
        },
        {
          id: 7,
          title: 'Data Science Capstone',
          duration: '50 hours',
          order: 7,
          type: 'project',
          status: 'required',
          completionRate: 58
        }
      ],
      certifications: ['Data Science Professional', 'Machine Learning Specialist'],
      outcomes: [
        'Apply statistical methods to solve business problems',
        'Build and deploy machine learning models',
        'Create compelling data visualizations',
        'Work with big data technologies and platforms'
      ],
      careerOpportunities: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst', 'AI Researcher'],
      createdDate: '2024-01-10',
      lastUpdated: '2024-02-25'
    }
  ];

  const pathEnrollments = [
    {
      id: 1,
      employee: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Engineering',
        position: 'Junior Developer',
        avatar: null
      },
      learningPath: {
        id: 1,
        title: 'Full Stack Developer Journey',
        category: 'technical'
      },
      enrollmentDate: '2024-01-20',
      expectedCompletionDate: '2024-07-20',
      status: 'in_progress',
      overallProgress: 65,
      currentCourse: 'React Development',
      completedCourses: 2,
      totalCourses: 8,
      timeSpent: 95,
      estimatedTimeRemaining: 145,
      mentor: {
        name: 'Sarah Johnson',
        title: 'Senior Full Stack Developer'
      },
      milestones: [
        {
          name: 'Frontend Fundamentals',
          completed: true,
          completionDate: '2024-02-15'
        },
        {
          name: 'JavaScript Mastery',
          completed: true,
          completionDate: '2024-03-10'
        },
        {
          name: 'React Proficiency',
          completed: false,
          expectedDate: '2024-04-15'
        },
        {
          name: 'Backend Development',
          completed: false,
          expectedDate: '2024-06-01'
        }
      ],
      performance: {
        averageScore: 4.2,
        assignmentSubmissions: 12,
        projectsCompleted: 2,
        quizzesPassed: 15
      }
    },
    {
      id: 2,
      employee: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Marketing',
        position: 'Marketing Coordinator',
        avatar: null
      },
      learningPath: {
        id: 2,
        title: 'Digital Marketing Specialist Track',
        category: 'marketing'
      },
      enrollmentDate: '2024-02-01',
      expectedCompletionDate: '2024-06-01',
      status: 'in_progress',
      overallProgress: 75,
      currentCourse: 'Paid Advertising (PPC)',
      completedCourses: 3,
      totalCourses: 6,
      timeSpent: 120,
      estimatedTimeRemaining: 40,
      mentor: {
        name: 'David Wilson',
        title: 'Marketing Director'
      },
      milestones: [
        {
          name: 'Marketing Fundamentals',
          completed: true,
          completionDate: '2024-02-20'
        },
        {
          name: 'SEO Expertise',
          completed: true,
          completionDate: '2024-03-15'
        },
        {
          name: 'Social Media Mastery',
          completed: true,
          completionDate: '2024-04-05'
        },
        {
          name: 'Analytics Proficiency',
          completed: false,
          expectedDate: '2024-05-15'
        }
      ],
      performance: {
        averageScore: 4.5,
        assignmentSubmissions: 8,
        projectsCompleted: 3,
        quizzesPassed: 12
      }
    }
  ];

  const categories = ['all', 'technical', 'marketing', 'leadership', 'sales', 'finance', 'design', 'operations'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced', 'beginner_to_advanced'];
  const statuses = ['all', 'active', 'draft', 'archived'];
  const enrollmentStatuses = ['all', 'in_progress', 'completed', 'paused', 'dropped'];

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
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      archived: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      paused: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      dropped: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[status] || colors.active;
  };

  const getCategoryColor = (category) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      finance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      design: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      operations: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[category] || colors.technical;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      easy: 'text-green-600 dark:text-green-400',
      moderate: 'text-yellow-600 dark:text-yellow-400',
      challenging: 'text-red-600 dark:text-red-400',
      progressive: 'text-blue-600 dark:text-blue-400'
    };
    return colors[difficulty] || colors.moderate;
  };

  const getCourseTypeIcon = (type) => {
    const icons = {
      core: 'BookOpenIcon',
      optional: 'StarIcon',
      project: 'CodeBracketIcon'
    };
    return icons[type] || 'BookOpenIcon';
  };

  const filteredPaths = learningPaths.filter(path => {
    if (selectedCategory !== 'all' && path.category !== selectedCategory) return false;
    if (selectedLevel !== 'all' && path.level !== selectedLevel) return false;
    if (selectedStatus !== 'all' && path.status !== selectedStatus) return false;
    return true;
  });

  const PathsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Learning Paths</h3>
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
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {levels.map(level => (
              <option key={level} value={level}>
                {level === 'all' ? 'All Levels' : level.replace('_', ' ').charAt(0).toUpperCase() + level.replace('_', ' ').slice(1)}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            Create Path
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredPaths.map((path) => (
          <Card key={path.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedPath(path)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{path.title}</h3>
                    {path.featured && (
                      <Icon name="StarIcon" className="w-5 h-5 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{path.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(path.category)}`}>
                  {path.category.toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(path.status)}`}>
                  {path.status.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{path.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Level</p>
                  <p className="font-medium text-gray-800 dark:text-white capitalize">{path.level.replace('_', ' ')}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Difficulty</p>
                  <p className={`font-medium capitalize ${getDifficultyColor(path.difficulty)}`}>{path.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Courses</p>
                  <p className="font-medium text-gray-800 dark:text-white">{path.courses.length}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-800 dark:text-white">{path.rating}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">({path.reviewCount})</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{path.enrolledCount} enrolled</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{path.instructor.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{path.instructor.title}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {path.completionRate}% completion rate
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedPath && (
        <Card title={`Learning Path Details - ${selectedPath.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Path Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedPath.description}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Path Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-800 dark:text-white">{selectedPath.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Estimated Hours</p>
                      <p className="font-medium text-gray-800 dark:text-white">{selectedPath.estimatedHours}h</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Target Role</p>
                      <p className="font-medium text-gray-800 dark:text-white">{selectedPath.targetRole}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Prerequisites</p>
                      <p className="font-medium text-gray-800 dark:text-white">{selectedPath.prerequisites}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Skills You'll Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPath.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Path Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Enrolled:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedPath.enrolledCount} students</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Completion Rate:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedPath.completionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Rating:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedPath.rating}/5.0</span>
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
                      <p className="font-medium text-green-800 dark:text-green-200">{selectedPath.instructor.name}</p>
                      <p className="text-sm text-green-700 dark:text-green-300">{selectedPath.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Course Curriculum</h4>
              <div className="space-y-3">
                {selectedPath.courses.map((course, index) => (
                  <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Icon name={getCourseTypeIcon(course.type)} className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-gray-800 dark:text-white">{course.title}</h5>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${course.status === 'required' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {course.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {course.completionRate}% completion rate
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${course.completionRate}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Learning Outcomes</h4>
                <div className="space-y-2">
                  {selectedPath.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Career Opportunities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPath.careerOpportunities.map((opportunity, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                      {opportunity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const EnrollmentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Path Enrollments</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {enrollmentStatuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            Enroll Employee
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pathEnrollments.map((enrollment) => (
          <Card key={enrollment.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedEnrollment(enrollment)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{enrollment.employee.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{enrollment.employee.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{enrollment.employee.department}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(enrollment.status)}`}>
                  {enrollment.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">{enrollment.learningPath.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(enrollment.learningPath.category)}`}>
                  {enrollment.learningPath.category.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Overall Progress</span>
                    <span className="font-medium text-gray-800 dark:text-white">{enrollment.overallProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${enrollment.overallProgress}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Current Course</p>
                    <p className="font-medium text-gray-800 dark:text-white">{enrollment.currentCourse}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Courses Completed</p>
                    <p className="font-medium text-gray-800 dark:text-white">{enrollment.completedCourses}/{enrollment.totalCourses}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Time Spent</p>
                    <p className="font-medium text-gray-800 dark:text-white">{enrollment.timeSpent}h</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Time Remaining</p>
                    <p className="font-medium text-gray-800 dark:text-white">{enrollment.estimatedTimeRemaining}h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Icon name="UserIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mentor</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{enrollment.mentor.name}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Expected completion: {formatDate(enrollment.expectedCompletionDate)}
                  </span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    Score: {enrollment.performance.averageScore}/5.0
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedEnrollment && (
        <Card title={`Enrollment Details - ${selectedEnrollment.employee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Enrollment Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Learning Path:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedEnrollment.learningPath.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Enrollment Date:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedEnrollment.enrollmentDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Expected Completion:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedEnrollment.expectedCompletionDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Mentor:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedEnrollment.mentor.name}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Performance Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Average Score:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedEnrollment.performance.averageScore}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Assignments:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedEnrollment.performance.assignmentSubmissions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Projects:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedEnrollment.performance.projectsCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Quizzes Passed:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedEnrollment.performance.quizzesPassed}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Overall Progress</h4>
                  <div className="relative w-32 h-32 mx-auto mb-3">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-200 dark:text-green-700"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${selectedEnrollment.overallProgress}, 100`}
                        className="text-green-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {selectedEnrollment.overallProgress}%
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    {selectedEnrollment.completedCourses} of {selectedEnrollment.totalCourses} courses completed
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Learning Milestones</h4>
              <div className="space-y-3">
                {selectedEnrollment.milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${milestone.completed ? 'bg-green-50 dark:bg-green-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                      {milestone.completed ? (
                        <Icon name="CheckIcon" className="w-4 h-4 text-white" />
                      ) : (
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h5 className={`font-medium ${milestone.completed ? 'text-green-800 dark:text-green-200' : 'text-gray-800 dark:text-white'}`}>
                        {milestone.name}
                      </h5>
                      <p className={`text-sm ${milestone.completed ? 'text-green-700 dark:text-green-300' : 'text-gray-600 dark:text-gray-400'}`}>
                        {milestone.completed 
                          ? `Completed on ${formatDate(milestone.completionDate)}` 
                          : `Expected by ${formatDate(milestone.expectedDate)}`
                        }
                      </p>
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

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Learning Paths Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="AcademicCapIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{learningPaths.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Active Paths</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="UsersIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {learningPaths.reduce((sum, path) => sum + path.enrolledCount, 0)}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Total Enrollments</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ChartBarIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {Math.round(learningPaths.reduce((sum, path) => sum + path.completionRate, 0) / learningPaths.length)}%
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Avg Completion</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="StarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {(learningPaths.reduce((sum, path) => sum + path.rating, 0) / learningPaths.length).toFixed(1)}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Avg Rating</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Popular Learning Paths">
          <div className="space-y-3">
            {[...learningPaths].sort((a, b) => b.enrolledCount - a.enrolledCount).slice(0, 5).map((path, index) => (
              <div key={path.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white truncate">{path.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{path.category} • {path.level.replace('_', ' ')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{path.enrolledCount}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">enrolled</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Completion Rates by Category">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryPaths = learningPaths.filter(p => p.category === category);
              const avgCompletion = categoryPaths.length > 0 
                ? categoryPaths.reduce((sum, p) => sum + p.completionRate, 0) / categoryPaths.length 
                : 0;
              
              return (
                <div key={category} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                      {category.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${avgCompletion}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-12 text-right">
                      {avgCompletion.toFixed(0)}%
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
    { id: 'paths', label: 'Learning Paths', icon: 'AcademicCapIcon', component: PathsTab },
    { id: 'enrollments', label: 'Enrollments', icon: 'UsersIcon', component: EnrollmentsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || PathsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Paths</h1>
            <p className="text-gray-600 dark:text-gray-400">Create structured learning journeys and track employee progress</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Progress
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              Create Path
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

export default LearningPaths;