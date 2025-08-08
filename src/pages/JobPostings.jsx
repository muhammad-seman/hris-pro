import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const JobPostings = () => {
  const [activeTab, setActiveTab] = useState('active_jobs');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedJobType, setSelectedJobType] = useState('all');

  const jobPostings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      jobType: 'full_time',
      workType: 'hybrid',
      salaryRange: {
        min: 120000,
        max: 160000,
        currency: 'USD'
      },
      status: 'active',
      priority: 'high',
      postedDate: '2024-03-15',
      expiryDate: '2024-04-15',
      applications: 45,
      views: 234,
      hiringManager: {
        name: 'Sarah Johnson',
        title: 'Engineering Manager',
        email: 'sarah.johnson@company.com'
      },
      recruiter: {
        name: 'Mike Chen',
        title: 'Senior Recruiter',
        email: 'mike.chen@company.com'
      },
      description: 'We are seeking an experienced Senior Frontend Developer to join our dynamic engineering team. The ideal candidate will have strong expertise in React, TypeScript, and modern frontend technologies.',
      requirements: [
        '5+ years of experience in frontend development',
        'Strong proficiency in React and TypeScript',
        'Experience with state management libraries (Redux, Zustand)',
        'Knowledge of modern CSS frameworks (Tailwind, Styled Components)',
        'Familiarity with testing frameworks (Jest, Cypress)',
        'Experience with build tools and CI/CD pipelines'
      ],
      responsibilities: [
        'Develop and maintain high-quality frontend applications',
        'Collaborate with designers and backend developers',
        'Implement responsive and accessible user interfaces',
        'Optimize applications for maximum speed and scalability',
        'Mentor junior developers and conduct code reviews',
        'Participate in agile development processes'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching',
        'Unlimited PTO policy'
      ],
      skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML', 'Git'],
      experienceLevel: 'senior',
      educationLevel: 'bachelors',
      remoteWork: true,
      urgency: 'high',
      positions: 2
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      jobType: 'full_time',
      workType: 'in_office',
      salaryRange: {
        min: 80000,
        max: 110000,
        currency: 'USD'
      },
      status: 'active',
      priority: 'medium',
      postedDate: '2024-03-10',
      expiryDate: '2024-04-10',
      applications: 28,
      views: 156,
      hiringManager: {
        name: 'Lisa Wong',
        title: 'VP Marketing',
        email: 'lisa.wong@company.com'
      },
      recruiter: {
        name: 'Jennifer Smith',
        title: 'Recruiter',
        email: 'jennifer.smith@company.com'
      },
      description: 'Join our marketing team as a Digital Marketing Manager to drive our online presence and lead generation efforts. You will be responsible for developing and executing comprehensive digital marketing strategies.',
      requirements: [
        '3+ years of experience in digital marketing',
        'Strong knowledge of SEO/SEM best practices',
        'Experience with marketing automation platforms',
        'Proficiency in Google Analytics and other analytics tools',
        'Social media marketing expertise',
        'Content marketing and copywriting skills'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage SEO/SEM strategies and implementations',
        'Create and optimize content for various digital channels',
        'Analyze campaign performance and provide insights',
        'Collaborate with sales team on lead generation',
        'Stay updated with digital marketing trends and best practices'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Health and wellness benefits',
        'Professional development opportunities',
        'Marketing conference attendance budget',
        'Flexible PTO policy',
        'Team building activities and events'
      ],
      skills: ['SEO', 'SEM', 'Google Analytics', 'Social Media', 'Content Marketing', 'Marketing Automation'],
      experienceLevel: 'mid',
      educationLevel: 'bachelors',
      remoteWork: false,
      urgency: 'medium',
      positions: 1
    },
    {
      id: 3,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      jobType: 'full_time',
      workType: 'remote',
      salaryRange: {
        min: 90000,
        max: 130000,
        currency: 'USD'
      },
      status: 'draft',
      priority: 'low',
      postedDate: null,
      expiryDate: null,
      applications: 0,
      views: 0,
      hiringManager: {
        name: 'David Wilson',
        title: 'Head of Design',
        email: 'david.wilson@company.com'
      },
      recruiter: {
        name: 'Mike Chen',
        title: 'Senior Recruiter',
        email: 'mike.chen@company.com'
      },
      description: 'We are looking for a talented Product Designer to join our design team. You will work closely with product managers and engineers to create intuitive and beautiful user experiences.',
      requirements: [
        '4+ years of experience in product design',
        'Strong portfolio demonstrating UX/UI design skills',
        'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
        'Experience with user research and testing methodologies',
        'Understanding of design systems and component libraries',
        'Knowledge of frontend development principles'
      ],
      responsibilities: [
        'Design user-centered digital experiences',
        'Create wireframes, prototypes, and high-fidelity mockups',
        'Collaborate with cross-functional teams',
        'Conduct user research and usability testing',
        'Maintain and contribute to design system',
        'Present design concepts to stakeholders'
      ],
      benefits: [
        'Competitive compensation package',
        'Remote work flexibility',
        'Design tool and software allowance',
        'Health and dental insurance',
        'Professional development budget',
        'Annual team retreats'
      ],
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
      experienceLevel: 'mid',
      educationLevel: 'bachelors',
      remoteWork: true,
      urgency: 'low',
      positions: 1
    }
  ];

  const jobTemplates = [
    {
      id: 1,
      name: 'Software Engineer Template',
      department: 'Engineering',
      category: 'technical',
      description: 'Standard template for software engineering positions',
      lastUsed: '2024-03-10',
      usageCount: 15,
      sections: [
        'Job Description',
        'Technical Requirements',
        'Responsibilities',
        'Qualifications',
        'Benefits Package',
        'Company Culture'
      ],
      status: 'active'
    },
    {
      id: 2,
      name: 'Marketing Role Template',
      department: 'Marketing',
      category: 'marketing',
      description: 'Template for marketing and growth positions',
      lastUsed: '2024-03-08',
      usageCount: 8,
      sections: [
        'Role Overview',
        'Marketing Requirements',
        'Key Responsibilities',
        'Experience & Skills',
        'Compensation & Benefits',
        'Growth Opportunities'
      ],
      status: 'active'
    },
    {
      id: 3,
      name: 'Management Position Template',
      department: 'All',
      category: 'leadership',
      description: 'Template for leadership and management roles',
      lastUsed: '2024-02-28',
      usageCount: 5,
      sections: [
        'Leadership Role Description',
        'Management Requirements',
        'Team Responsibilities',
        'Leadership Qualifications',
        'Executive Benefits',
        'Career Development'
      ],
      status: 'active'
    }
  ];

  const jobMetrics = [
    {
      id: 1,
      jobId: 1,
      jobTitle: 'Senior Frontend Developer',
      metrics: {
        totalViews: 234,
        totalApplications: 45,
        conversionRate: 19.2,
        averageTimeToApply: '5.2 days',
        topSources: [
          { source: 'LinkedIn', applications: 18, percentage: 40 },
          { source: 'Company Website', applications: 12, percentage: 27 },
          { source: 'Indeed', applications: 8, percentage: 18 },
          { source: 'Referrals', applications: 7, percentage: 15 }
        ],
        demographics: {
          experienceLevel: {
            junior: 12,
            mid: 20,
            senior: 13
          },
          location: {
            local: 28,
            national: 12,
            international: 5
          }
        }
      }
    }
  ];

  const departments = ['all', 'Engineering', 'Marketing', 'Design', 'Sales', 'Operations', 'HR'];
  const statuses = ['all', 'active', 'draft', 'paused', 'expired', 'filled'];
  const jobTypes = ['all', 'full_time', 'part_time', 'contract', 'internship'];
  const workTypes = ['all', 'in_office', 'remote', 'hybrid'];
  const priorities = ['all', 'high', 'medium', 'low'];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      draft: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      paused: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      expired: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      filled: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.active;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      low: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    };
    return colors[priority] || colors.medium;
  };

  const getDepartmentColor = (department) => {
    const colors = {
      Engineering: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      Marketing: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      Design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      Sales: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      Operations: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      HR: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
    };
    return colors[department] || colors.Engineering;
  };

  const getWorkTypeIcon = (workType) => {
    const icons = {
      remote: 'ComputerDesktopIcon',
      in_office: 'BuildingOfficeIcon',
      hybrid: 'GlobeAltIcon'
    };
    return icons[workType] || 'BuildingOfficeIcon';
  };

  const filteredJobs = jobPostings.filter(job => {
    if (selectedDepartment !== 'all' && job.department !== selectedDepartment) return false;
    if (selectedStatus !== 'all' && job.status !== selectedStatus) return false;
    if (selectedJobType !== 'all' && job.jobType !== selectedJobType) return false;
    return true;
  });

  const ActiveJobsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Job Postings</h3>
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
            Post New Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedJob(job)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Icon name="BuildingOfficeIcon" className="w-4 h-4" />
                      <span>{job.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPinIcon" className="w-4 h-4" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name={getWorkTypeIcon(job.workType)} className="w-4 h-4" />
                      <span className="capitalize">{job.workType.replace('_', ' ')}</span>
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                    {job.status.toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ml-1 ${getPriorityColor(job.priority)}`}>
                    {job.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{job.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Salary Range</p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {formatCurrency(job.salaryRange.min)} - {formatCurrency(job.salaryRange.max)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Applications</p>
                  <p className="font-medium text-gray-800 dark:text-white">{job.applications}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Posted Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(job.postedDate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Views</p>
                  <p className="font-medium text-gray-800 dark:text-white">{job.views}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{job.hiringManager.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{job.hiringManager.title}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-1">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                      +{job.skills.length - 3}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {job.positions > 1 ? `${job.positions} positions` : '1 position'}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedJob && (
        <Card title={`Job Details - ${selectedJob.title}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Job Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedJob.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedJob.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Work Type:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedJob.workType.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Job Type:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedJob.jobType.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Positions:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedJob.positions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience Level:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedJob.experienceLevel}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Team</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">{selectedJob.hiringManager.name}</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300">{selectedJob.hiringManager.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <Icon name="UserIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200">{selectedJob.recruiter.name}</p>
                        <p className="text-xs text-blue-700 dark:text-blue-300">{selectedJob.recruiter.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedJob.views}</p>
                      <p className="text-xs text-green-800 dark:text-green-300">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">{selectedJob.applications}</p>
                      <p className="text-xs text-green-800 dark:text-green-300">Applications</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Conversion Rate: {((selectedJob.applications / selectedJob.views) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Salary Range</h4>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {formatCurrency(selectedJob.salaryRange.min)} - {formatCurrency(selectedJob.salaryRange.max)}
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Annual Salary</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Job Description</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedJob.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Requirements</h4>
                <div className="space-y-2">
                  {selectedJob.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Responsibilities</h4>
                <div className="space-y-2">
                  {selectedJob.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="ArrowRightIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Skills Required</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedJob.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="StarIcon" className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const TemplatesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Job Templates</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Create Template
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedTemplate(template)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{template.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{template.department}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(template.department)}`}>
                  {template.category.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{template.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Last Used</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(template.lastUsed)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Usage Count</p>
                  <p className="font-medium text-gray-800 dark:text-white">{template.usageCount} times</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Template Sections:</p>
                <div className="space-y-1">
                  {template.sections.slice(0, 3).map((section, index) => (
                    <div key={index} className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {section}
                    </div>
                  ))}
                  {template.sections.length > 3 && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      +{template.sections.length - 3} more sections
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedTemplate && (
        <Card title={`Template Details - ${selectedTemplate.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Template Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedTemplate.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedTemplate.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Category:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedTemplate.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedTemplate.status}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedTemplate.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Usage Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Times Used:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedTemplate.usageCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Last Used:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{formatDate(selectedTemplate.lastUsed)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Template Sections</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedTemplate.sections.map((section, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <Icon name="DocumentTextIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{section}</span>
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
      <Card title="Job Posting Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="BriefcaseIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{jobPostings.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Jobs</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="EyeIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {jobPostings.reduce((sum, job) => sum + job.views, 0)}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Total Views</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="DocumentTextIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {jobPostings.reduce((sum, job) => sum + job.applications, 0)}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">Total Applications</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="ChartBarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {((jobPostings.reduce((sum, job) => sum + job.applications, 0) / jobPostings.reduce((sum, job) => sum + job.views, 0)) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Avg Conversion</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Jobs by Department">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptJobs = jobPostings.filter(j => j.department === dept);
              const count = deptJobs.length;
              const percentage = jobPostings.length > 0 ? (count / jobPostings.length) * 100 : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(dept)}`}>
                      {dept.toUpperCase()}
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

        <Card title="Job Performance">
          <div className="space-y-4">
            {jobPostings.map(job => {
              const conversionRate = job.views > 0 ? (job.applications / job.views) * 100 : 0;
              
              return (
                <div key={job.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 truncate">{job.title}</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {conversionRate.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        conversionRate >= 20 ? 'bg-green-500' :
                        conversionRate >= 10 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(conversionRate * 5, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{job.applications} applications</span>
                    <span>{job.views} views</span>
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
    { id: 'active_jobs', label: 'Job Postings', icon: 'BriefcaseIcon', component: ActiveJobsTab },
    { id: 'templates', label: 'Templates', icon: 'DocumentDuplicateIcon', component: TemplatesTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ActiveJobsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Job Postings</h1>
            <p className="text-gray-600 dark:text-gray-400">Create, manage, and track job postings and applications</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Jobs
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              Post Job
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

export default JobPostings;