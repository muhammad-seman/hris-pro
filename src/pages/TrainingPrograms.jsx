import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const trainingPrograms = [
    {
      id: 1,
      title: 'Leadership Excellence Program',
      description: 'Comprehensive leadership development program designed for managers and senior staff',
      category: 'leadership',
      level: 'advanced',
      duration: '12 weeks',
      format: 'blended',
      capacity: 25,
      enrolled: 22,
      waitlist: 8,
      startDate: '2024-03-01',
      endDate: '2024-05-24',
      schedule: 'Fridays 2:00-5:00 PM',
      location: 'Training Center A',
      status: 'active',
      instructor: {
        name: 'Dr. Sarah Chen',
        title: 'Leadership Development Specialist',
        rating: 4.9,
        experience: '15+ years'
      },
      modules: [
        'Strategic Thinking & Vision Setting',
        'Team Building & Motivation',
        'Communication & Influence',
        'Decision Making & Problem Solving',
        'Change Management',
        'Performance Management'
      ],
      cost: 1500,
      certification: 'Leadership Excellence Certificate',
      prerequisites: '2+ years management experience',
      rating: 4.8,
      completionRate: 94
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      description: 'Complete digital marketing course covering SEO, social media, content marketing, and analytics',
      category: 'marketing',
      level: 'intermediate',
      duration: '8 weeks',
      format: 'online',
      capacity: 40,
      enrolled: 35,
      waitlist: 12,
      startDate: '2024-02-15',
      endDate: '2024-04-10',
      schedule: 'Self-paced with weekly live sessions',
      location: 'Online Platform',
      status: 'active',
      instructor: {
        name: 'Mike Rodriguez',
        title: 'Digital Marketing Expert',
        rating: 4.7,
        experience: '10+ years'
      },
      modules: [
        'SEO Fundamentals',
        'Social Media Strategy',
        'Content Marketing',
        'Email Marketing',
        'PPC Advertising',
        'Analytics & Reporting'
      ],
      cost: 899,
      certification: 'Digital Marketing Professional',
      prerequisites: 'Basic marketing knowledge',
      rating: 4.6,
      completionRate: 87
    },
    {
      id: 3,
      title: 'Data Analysis with Python',
      description: 'Learn data analysis, visualization, and machine learning using Python and popular libraries',
      category: 'technical',
      level: 'intermediate',
      duration: '10 weeks',
      format: 'hybrid',
      capacity: 20,
      enrolled: 18,
      waitlist: 5,
      startDate: '2024-02-20',
      endDate: '2024-04-30',
      schedule: 'Tuesdays & Thursdays 6:00-8:00 PM',
      location: 'Lab Room B',
      status: 'active',
      instructor: {
        name: 'Dr. James Wang',
        title: 'Data Science Consultant',
        rating: 4.9,
        experience: '12+ years'
      },
      modules: [
        'Python Fundamentals',
        'Pandas & NumPy',
        'Data Visualization',
        'Statistical Analysis',
        'Machine Learning Basics',
        'Project Presentation'
      ],
      cost: 1200,
      certification: 'Python Data Analysis Certificate',
      prerequisites: 'Basic programming knowledge',
      rating: 4.8,
      completionRate: 91
    },
    {
      id: 4,
      title: 'Customer Service Excellence',
      description: 'Enhance customer service skills and learn best practices for exceptional customer experience',
      category: 'customer_service',
      level: 'beginner',
      duration: '4 weeks',
      format: 'in_person',
      capacity: 30,
      enrolled: 28,
      waitlist: 0,
      startDate: '2024-04-01',
      endDate: '2024-04-26',
      schedule: 'Mondays & Wednesdays 10:00 AM-12:00 PM',
      location: 'Conference Room C',
      status: 'upcoming',
      instructor: {
        name: 'Lisa Thompson',
        title: 'Customer Experience Specialist',
        rating: 4.6,
        experience: '8+ years'
      },
      modules: [
        'Understanding Customer Needs',
        'Effective Communication',
        'Conflict Resolution',
        'Service Recovery',
        'Building Customer Loyalty'
      ],
      cost: 450,
      certification: 'Customer Service Professional',
      prerequisites: 'None',
      rating: 4.5,
      completionRate: 96
    }
  ];

  const instructors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Leadership Development Specialist',
      specialization: 'Leadership & Management',
      experience: '15+ years',
      rating: 4.9,
      studentsCount: 250,
      programsCount: 8,
      certifications: ['Certified Leadership Coach', 'MBA - Organizational Psychology'],
      bio: 'Dr. Chen is a renowned leadership expert with over 15 years of experience in executive coaching and organizational development.',
      achievements: [
        'Harvard Business Review contributor',
        'Leadership Excellence Award 2023',
        '500+ executives coached'
      ]
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'Digital Marketing Expert',
      specialization: 'Digital Marketing & Analytics',
      experience: '10+ years',
      rating: 4.7,
      studentsCount: 180,
      programsCount: 5,
      certifications: ['Google Analytics Certified', 'Facebook Blueprint Certified'],
      bio: 'Mike brings a wealth of practical experience from leading digital marketing campaigns for Fortune 500 companies.',
      achievements: [
        'Digital Marketing Institute Speaker',
        'Campaign Performance Award 2022',
        '1M+ in campaign management'
      ]
    },
    {
      id: 3,
      name: 'Dr. James Wang',
      title: 'Data Science Consultant',
      specialization: 'Data Science & Machine Learning',
      experience: '12+ years',
      rating: 4.9,
      studentsCount: 120,
      programsCount: 6,
      certifications: ['PhD in Computer Science', 'AWS Machine Learning Specialist'],
      bio: 'Dr. Wang is a data science expert who has worked with leading tech companies and research institutions.',
      achievements: [
        'Published 20+ research papers',
        'AI Innovation Award 2023',
        '10+ patents in ML algorithms'
      ]
    }
  ];

  const categories = ['all', 'leadership', 'technical', 'marketing', 'sales', 'customer_service', 'compliance'];
  const statuses = ['all', 'active', 'upcoming', 'completed', 'cancelled'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];

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
      upcoming: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[status] || colors.active;
  };

  const getLevelColor = (level) => {
    const colors = {
      beginner: 'text-green-600 dark:text-green-400',
      intermediate: 'text-yellow-600 dark:text-yellow-400',
      advanced: 'text-red-600 dark:text-red-400'
    };
    return colors[level] || colors.beginner;
  };

  const getCategoryColor = (category) => {
    const colors = {
      leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      customer_service: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      compliance: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[category] || colors.technical;
  };

  const getFormatIcon = (format) => {
    const icons = {
      online: 'ComputerDesktopIcon',
      in_person: 'BuildingOfficeIcon',
      hybrid: 'GlobeAltIcon',
      blended: 'AcademicCapIcon'
    };
    return icons[format] || 'AcademicCapIcon';
  };

  const filteredPrograms = trainingPrograms.filter(program => {
    if (selectedCategory !== 'all' && program.category !== selectedCategory) return false;
    if (selectedStatus !== 'all' && program.status !== selectedStatus) return false;
    return true;
  });

  const ProgramsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Training Programs</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.replace('_', ' ').toUpperCase()}
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
            Create Program
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
          <Card key={program.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProgram(program)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{program.description}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(program.category)}`}>
                      {program.category.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                      {program.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{program.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{program.completionRate}% completion</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{program.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Level</p>
                  <p className={`font-medium capitalize ${getLevelColor(program.level)}`}>{program.level}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Format</p>
                  <div className="flex items-center space-x-1">
                    <Icon name={getFormatIcon(program.format)} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <p className="font-medium text-gray-800 dark:text-white capitalize">{program.format.replace('_', ' ')}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Cost</p>
                  <p className="font-medium text-gray-800 dark:text-white">${program.cost}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Enrollment: </span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {program.enrolled}/{program.capacity}
                  </span>
                  {program.waitlist > 0 && (
                    <span className="text-orange-600 dark:text-orange-400 ml-1">
                      (+{program.waitlist} waitlist)
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(program.startDate)} - {formatDate(program.endDate)}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{program.instructor.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{program.instructor.title}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{program.instructor.rating}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedProgram && (
        <Card title={`Program Details - ${selectedProgram.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Program Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Level:</span>
                      <span className={`font-medium capitalize ${getLevelColor(selectedProgram.level)}`}>{selectedProgram.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Format:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedProgram.format.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Schedule:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                      <span className="font-medium text-gray-800 dark:text-white">${selectedProgram.cost}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prerequisites</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProgram.prerequisites}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Enrollment Status</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-blue-700 dark:text-blue-300">Enrolled</span>
                        <span className="text-blue-800 dark:text-blue-200">{selectedProgram.enrolled}/{selectedProgram.capacity}</span>
                      </div>
                      <div className="w-full bg-blue-200 dark:bg-blue-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(selectedProgram.enrolled / selectedProgram.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                    {selectedProgram.waitlist > 0 && (
                      <div className="text-sm">
                        <span className="text-blue-700 dark:text-blue-300">Waitlist: </span>
                        <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.waitlist} students</span>
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="text-blue-700 dark:text-blue-300">Available Spots: </span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">
                        {selectedProgram.capacity - selectedProgram.enrolled}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Performance Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Rating:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{selectedProgram.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Completion Rate:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{selectedProgram.completionRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700 dark:text-green-300">Certification:</span>
                      <span className="font-medium text-green-800 dark:text-green-200">{selectedProgram.certification}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Course Modules</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedProgram.modules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const InstructorsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Training Instructors</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Add Instructor
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedInstructor(instructor)}>
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="UserIcon" className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{instructor.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{instructor.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{instructor.specialization}</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-lg font-bold text-gray-800 dark:text-white">{instructor.rating}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">/5.0</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{instructor.experience} experience</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{instructor.studentsCount}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Students Taught</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{instructor.programsCount}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Programs</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Certifications:</p>
                <div className="space-y-1">
                  {instructor.certifications.slice(0, 2).map((cert, index) => (
                    <div key={index} className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {cert}
                    </div>
                  ))}
                  {instructor.certifications.length > 2 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{instructor.certifications.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedInstructor && (
        <Card title={`Instructor Profile - ${selectedInstructor.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Professional Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Title:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedInstructor.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Specialization:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedInstructor.specialization}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedInstructor.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedInstructor.rating}/5.0</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Biography</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedInstructor.bio}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Teaching Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Students Taught:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedInstructor.studentsCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Programs:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedInstructor.programsCount}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {selectedInstructor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="TrophyIcon" className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Certifications & Credentials</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedInstructor.certifications.map((certification, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 p-2 rounded">
                    <Icon name="AcademicCapIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{certification}</span>
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
      <Card title="Training Programs Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="AcademicCapIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{trainingPrograms.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Active Programs</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="UsersIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {trainingPrograms.reduce((sum, p) => sum + p.enrolled, 0)}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Total Enrolled</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="StarIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {(trainingPrograms.reduce((sum, p) => sum + p.rating, 0) / trainingPrograms.length).toFixed(1)}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Avg Rating</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="CurrencyDollarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              ${(trainingPrograms.reduce((sum, p) => sum + (p.cost * p.enrolled), 0) / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Revenue Generated</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Programs by Category">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryPrograms = trainingPrograms.filter(p => p.category === category);
              const count = categoryPrograms.length;
              const percentage = trainingPrograms.length > 0 ? (count / trainingPrograms.length) * 100 : 0;
              
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
                      {count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Enrollment Status">
          <div className="space-y-4">
            {trainingPrograms.map(program => {
              const enrollmentRate = (program.enrolled / program.capacity) * 100;
              
              return (
                <div key={program.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 truncate">{program.title}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {program.enrolled}/{program.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        enrollmentRate >= 90 ? 'bg-red-500' :
                        enrollmentRate >= 70 ? 'bg-yellow-500' : 'bg-green-500'
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
    { id: 'programs', label: 'Programs', icon: 'AcademicCapIcon', component: ProgramsTab },
    { id: 'instructors', label: 'Instructors', icon: 'UserIcon', component: InstructorsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ProgramsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Training Programs</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage training programs, instructors, and program analytics</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Data
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              New Program
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

export default TrainingPrograms;