import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const CourseCatalog = () => {
  const [activeTab, setActiveTab] = useState('catalog');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Advanced JavaScript Programming',
      description: 'Master advanced JavaScript concepts including ES6+, async/await, promises, and modern frameworks',
      category: 'technical',
      subcategory: 'programming',
      level: 'advanced',
      duration: '40 hours',
      format: 'online',
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviewsCount: 156,
      studentsEnrolled: 1250,
      instructor: {
        name: 'Alex Thompson',
        title: 'Senior JavaScript Developer',
        company: 'Tech Corp',
        avatar: null
      },
      thumbnail: null,
      tags: ['JavaScript', 'ES6', 'Async Programming', 'Node.js'],
      skills: ['Advanced JavaScript', 'Async Programming', 'Modern Frameworks', 'Code Optimization'],
      prerequisites: 'Basic JavaScript knowledge required',
      language: 'English',
      lastUpdated: '2024-01-15',
      certification: true,
      featured: true,
      bestseller: true,
      modules: [
        'ES6+ Features and Syntax',
        'Asynchronous JavaScript',
        'Advanced Functions and Closures',
        'Object-Oriented Programming',
        'Error Handling and Debugging',
        'Performance Optimization',
        'Testing and Quality Assurance',
        'Final Project'
      ],
      learningObjectives: [
        'Master ES6+ features and syntax',
        'Understand asynchronous programming patterns',
        'Build complex JavaScript applications',
        'Implement proper error handling',
        'Optimize code performance'
      ]
    },
    {
      id: 2,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing course covering SEO, social media, content marketing, and analytics',
      category: 'marketing',
      subcategory: 'digital_marketing',
      level: 'intermediate',
      duration: '25 hours',
      format: 'blended',
      price: 199,
      originalPrice: 249,
      discount: 20,
      rating: 4.6,
      reviewsCount: 89,
      studentsEnrolled: 780,
      instructor: {
        name: 'Sarah Martinez',
        title: 'Digital Marketing Consultant',
        company: 'Marketing Pro',
        avatar: null
      },
      thumbnail: null,
      tags: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      skills: ['SEO Optimization', 'Social Media Strategy', 'Content Creation', 'Analytics Interpretation'],
      prerequisites: 'Basic marketing knowledge helpful',
      language: 'English',
      lastUpdated: '2024-02-01',
      certification: true,
      featured: false,
      bestseller: true,
      modules: [
        'Digital Marketing Fundamentals',
        'Search Engine Optimization',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing',
        'Paid Advertising',
        'Analytics and Reporting',
        'Campaign Development'
      ],
      learningObjectives: [
        'Develop comprehensive digital marketing strategies',
        'Master SEO techniques and best practices',
        'Create engaging social media campaigns',
        'Analyze and interpret marketing data'
      ]
    },
    {
      id: 3,
      title: 'Leadership in the Digital Age',
      description: 'Modern leadership techniques for managing remote teams and digital transformation',
      category: 'leadership',
      subcategory: 'management',
      level: 'advanced',
      duration: '30 hours',
      format: 'hybrid',
      price: 449,
      originalPrice: 549,
      discount: 18,
      rating: 4.9,
      reviewsCount: 234,
      studentsEnrolled: 890,
      instructor: {
        name: 'Dr. Michael Chen',
        title: 'Leadership Development Expert',
        company: 'Executive Institute',
        avatar: null
      },
      thumbnail: null,
      tags: ['Leadership', 'Remote Teams', 'Digital Transformation', 'Management'],
      skills: ['Digital Leadership', 'Remote Team Management', 'Change Management', 'Strategic Thinking'],
      prerequisites: '2+ years management experience',
      language: 'English',
      lastUpdated: '2024-01-20',
      certification: true,
      featured: true,
      bestseller: false,
      modules: [
        'Digital Leadership Fundamentals',
        'Remote Team Management',
        'Communication in Digital Environments',
        'Change Management Strategies',
        'Building Digital Culture',
        'Performance Management',
        'Strategic Decision Making',
        'Leadership Capstone Project'
      ],
      learningObjectives: [
        'Lead effectively in digital environments',
        'Manage and motivate remote teams',
        'Drive digital transformation initiatives',
        'Make strategic decisions with confidence'
      ]
    },
    {
      id: 4,
      title: 'Data Science with Python',
      description: 'Learn data analysis, machine learning, and data visualization using Python libraries',
      category: 'technical',
      subcategory: 'data_science',
      level: 'intermediate',
      duration: '50 hours',
      format: 'online',
      price: 349,
      originalPrice: 449,
      discount: 22,
      rating: 4.7,
      reviewsCount: 198,
      studentsEnrolled: 1456,
      instructor: {
        name: 'Dr. Lisa Wang',
        title: 'Data Science Researcher',
        company: 'AI Institute',
        avatar: null
      },
      thumbnail: null,
      tags: ['Python', 'Data Science', 'Machine Learning', 'Visualization'],
      skills: ['Python Programming', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
      prerequisites: 'Basic Python knowledge required',
      language: 'English',
      lastUpdated: '2024-01-10',
      certification: true,
      featured: true,
      bestseller: true,
      modules: [
        'Python for Data Science',
        'Data Collection and Cleaning',
        'Exploratory Data Analysis',
        'Statistical Analysis',
        'Machine Learning Fundamentals',
        'Deep Learning Basics',
        'Data Visualization',
        'Real-world Projects'
      ],
      learningObjectives: [
        'Master Python for data science',
        'Perform comprehensive data analysis',
        'Build machine learning models',
        'Create compelling data visualizations'
      ]
    }
  ];

  const courseCollections = [
    {
      id: 1,
      name: 'Technical Skills Bootcamp',
      description: 'Complete technical skill development bundle',
      courseCount: 8,
      totalDuration: '120 hours',
      price: 999,
      originalPrice: 1299,
      discount: 23,
      rating: 4.8,
      featured: true,
      thumbnail: null,
      courses: [1, 4], // Course IDs
      skills: ['Programming', 'Data Science', 'Web Development', 'Database Management']
    },
    {
      id: 2,
      name: 'Leadership Development Track',
      description: 'Comprehensive leadership and management training',
      courseCount: 6,
      totalDuration: '80 hours',
      price: 749,
      originalPrice: 949,
      discount: 21,
      rating: 4.9,
      featured: true,
      thumbnail: null,
      courses: [3], // Course IDs
      skills: ['Leadership', 'Team Management', 'Strategic Planning', 'Communication']
    },
    {
      id: 3,
      name: 'Digital Marketing Master Class',
      description: 'Complete digital marketing certification program',
      courseCount: 5,
      totalDuration: '65 hours',
      price: 599,
      originalPrice: 749,
      discount: 20,
      rating: 4.7,
      featured: false,
      thumbnail: null,
      courses: [2], // Course IDs
      skills: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics']
    }
  ];

  const categories = ['all', 'technical', 'marketing', 'leadership', 'sales', 'finance', 'design', 'business'];
  const levels = ['all', 'beginner', 'intermediate', 'advanced'];
  const formats = ['all', 'online', 'in_person', 'blended', 'hybrid'];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      leadership: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      finance: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      design: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      business: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[category] || colors.technical;
  };

  const getLevelColor = (level) => {
    const colors = {
      beginner: 'text-green-600 dark:text-green-400',
      intermediate: 'text-yellow-600 dark:text-yellow-400',
      advanced: 'text-red-600 dark:text-red-400'
    };
    return colors[level] || colors.beginner;
  };

  const getFormatIcon = (format) => {
    const icons = {
      online: 'ComputerDesktopIcon',
      in_person: 'BuildingOfficeIcon',
      blended: 'AcademicCapIcon',
      hybrid: 'GlobeAltIcon'
    };
    return icons[format] || 'AcademicCapIcon';
  };

  const filteredCourses = courses.filter(course => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
    if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
    if (selectedFormat !== 'all' && course.format !== selectedFormat) return false;
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) return false;
    return true;
  });

  const CatalogTab = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Course Catalog</h3>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Icon name="MagnifyingGlassIcon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
                {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>
          <select 
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {formats.map(format => (
              <option key={format} value={format}>
                {format === 'all' ? 'All Formats' : format.replace('_', ' ').charAt(0).toUpperCase() + format.replace('_', ' ').slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCourse(course)}>
            <div className="space-y-4">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Icon name="PlayIcon" className="w-12 h-12 text-gray-400" />
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">{course.title}</h3>
                  {course.featured && (
                    <Icon name="StarIcon" className="w-5 h-5 text-yellow-400 fill-current flex-shrink-0" />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{course.description}</p>
              </div>

              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                  {course.category.toUpperCase()}
                </span>
                {course.bestseller && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                    BESTSELLER
                  </span>
                )}
                {course.certification && (
                  <Icon name="AcademicCapIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" title="Certificate Available" />
                )}
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="ClockIcon" className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name={getFormatIcon(course.format)} className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 capitalize">{course.format.replace('_', ' ')}</span>
                </div>
                <span className={`font-medium capitalize ${getLevelColor(course.level)}`}>{course.level}</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-800 dark:text-white">{course.rating}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">({course.reviewsCount})</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{course.studentsEnrolled.toLocaleString()} students</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{course.instructor.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{course.instructor.title}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  {course.discount > 0 && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${course.originalPrice}</span>
                  )}
                  <span className="text-lg font-bold text-gray-800 dark:text-white">${course.price}</span>
                  {course.discount > 0 && (
                    <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded">
                      -{course.discount}%
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedCourse && (
        <Card title={`Course Details - ${selectedCourse.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Icon name="PlayIcon" className="w-16 h-16 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Course Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedCourse.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Skills You'll Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Course Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Level:</span>
                      <span className={`font-medium capitalize ${getLevelColor(selectedCourse.level)}`}>{selectedCourse.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Format:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedCourse.format.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Language:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCourse.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedCourse.lastUpdated)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Certificate:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {selectedCourse.certification ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Instructor</h4>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800 dark:text-blue-200">{selectedCourse.instructor.name}</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{selectedCourse.instructor.title}</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">{selectedCourse.instructor.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Course Modules</h4>
              <div className="space-y-2">
                {selectedCourse.modules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Learning Objectives</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedCourse.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const CollectionsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Course Collections</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Create Collection
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courseCollections.map((collection) => (
          <Card key={collection.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCollection(collection)}>
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="AcademicCapIcon" className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-semibold">{collection.courseCount} Courses</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{collection.name}</h3>
                  {collection.featured && (
                    <Icon name="StarIcon" className="w-5 h-5 text-yellow-400 fill-current" />
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{collection.description}</p>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="BookOpenIcon" className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{collection.courseCount} courses</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="ClockIcon" className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{collection.totalDuration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-800 dark:text-white">{collection.rating}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Skills included:</p>
                <div className="flex flex-wrap gap-1">
                  {collection.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {collection.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                      +{collection.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  {collection.discount > 0 && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${collection.originalPrice}</span>
                  )}
                  <span className="text-lg font-bold text-gray-800 dark:text-white">${collection.price}</span>
                  {collection.discount > 0 && (
                    <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded">
                      -{collection.discount}%
                    </span>
                  )}
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedCollection && (
        <Card title={`Collection Details - ${selectedCollection.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="AcademicCapIcon" className="w-20 h-20 mx-auto mb-3" />
                    <p className="text-lg font-semibold">{selectedCollection.courseCount} Courses</p>
                    <p className="text-sm">{selectedCollection.totalDuration}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Collection Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedCollection.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Collection Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Courses:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCollection.courseCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Total Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCollection.totalDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCollection.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Price:</span>
                      <div className="flex items-center space-x-2">
                        {selectedCollection.discount > 0 && (
                          <span className="text-gray-500 dark:text-gray-400 line-through">${selectedCollection.originalPrice}</span>
                        )}
                        <span className="font-medium text-gray-800 dark:text-white">${selectedCollection.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Skills You'll Master</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollection.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Included Courses</h4>
              <div className="space-y-3">
                {selectedCollection.courses.map(courseId => {
                  const course = courses.find(c => c.id === courseId);
                  if (!course) return null;
                  
                  return (
                    <div key={courseId} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-16 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                        <Icon name="PlayIcon" className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-800 dark:text-white">{course.title}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{course.duration} • {course.level}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-800 dark:text-white">{course.rating}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{course.studentsEnrolled.toLocaleString()} students</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Course Catalog Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="BookOpenIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{courses.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Courses</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="UsersIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {courses.reduce((sum, c) => sum + c.studentsEnrolled, 0).toLocaleString()}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Total Enrollments</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="StarIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {(courses.reduce((sum, c) => sum + c.rating, 0) / courses.length).toFixed(1)}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Avg Rating</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="CurrencyDollarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              ${Math.round(courses.reduce((sum, c) => sum + c.price, 0) / courses.length)}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Avg Price</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Courses by Category">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryCount = courses.filter(c => c.category === category).length;
              const percentage = courses.length > 0 ? (categoryCount / courses.length) * 100 : 0;
              
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

        <Card title="Top Rated Courses">
          <div className="space-y-3">
            {[...courses].sort((a, b) => b.rating - a.rating).slice(0, 5).map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white truncate">{course.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{course.studentsEnrolled.toLocaleString()} students</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-800 dark:text-white">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const tabs = [
    { id: 'catalog', label: 'Course Catalog', icon: 'BookOpenIcon', component: CatalogTab },
    { id: 'collections', label: 'Collections', icon: 'RectangleStackIcon', component: CollectionsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || CatalogTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Course Catalog</h1>
            <p className="text-gray-600 dark:text-gray-400">Browse and manage our comprehensive course library</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Catalog
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              Add Course
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

export default CourseCatalog;