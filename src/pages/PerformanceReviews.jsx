import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const PerformanceReviews = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const reviews = [
    {
      id: 1,
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      reviewPeriod: '2024-Q1',
      reviewType: 'quarterly',
      status: 'completed',
      overallRating: 4.2,
      reviewDate: '2024-03-30',
      dueDate: '2024-04-15',
      reviewerId: 'EMP100',
      reviewerName: 'Sarah Johnson',
      reviewerPosition: 'Engineering Manager',
      goals: {
        achieved: 4,
        total: 5,
        percentage: 80
      },
      ratings: {
        technical_skills: 4.5,
        communication: 4.0,
        teamwork: 4.2,
        leadership: 3.8,
        problem_solving: 4.6,
        innovation: 4.1,
        reliability: 4.3
      },
      feedback: {
        strengths: [
          'Excellent technical problem-solving abilities',
          'Strong mentorship skills with junior developers',
          'Consistent delivery of high-quality code'
        ],
        improvements: [
          'Could improve presentation skills for client meetings',
          'Needs to be more proactive in cross-team collaboration'
        ],
        achievements: [
          'Led successful migration to microservices architecture',
          'Reduced system downtime by 40%',
          'Mentored 3 junior developers'
        ]
      },
      nextReviewDate: '2024-06-30',
      developmentPlan: 'Focus on leadership skills and public speaking'
    },
    {
      id: 2,
      employeeId: 'EMP002',
      employeeName: 'Maria Garcia',
      department: 'Sales',
      position: 'Senior Account Manager',
      reviewPeriod: '2024-Q1',
      reviewType: 'quarterly',
      status: 'in_progress',
      overallRating: null,
      reviewDate: null,
      dueDate: '2024-04-20',
      reviewerId: 'EMP101',
      reviewerName: 'David Wilson',
      reviewerPosition: 'Sales Director',
      goals: {
        achieved: 3,
        total: 4,
        percentage: 75
      },
      ratings: {
        sales_performance: null,
        client_relationship: null,
        communication: null,
        negotiation: null,
        market_knowledge: null,
        teamwork: null,
        initiative: null
      },
      feedback: {
        strengths: [],
        improvements: [],
        achievements: [
          'Exceeded sales target by 15%',
          'Secured 2 major enterprise clients'
        ]
      },
      nextReviewDate: '2024-06-30',
      developmentPlan: null
    },
    {
      id: 3,
      employeeId: 'EMP003',
      employeeName: 'Robert Chen',
      department: 'Marketing',
      position: 'Marketing Manager',
      reviewPeriod: '2024-Q1',
      reviewType: 'quarterly',
      status: 'pending',
      overallRating: null,
      reviewDate: null,
      dueDate: '2024-04-25',
      reviewerId: 'EMP102',
      reviewerName: 'Lisa Wong',
      reviewerPosition: 'Marketing Director',
      goals: {
        achieved: 2,
        total: 5,
        percentage: 40
      },
      ratings: {
        strategy: null,
        creativity: null,
        analytics: null,
        communication: null,
        project_management: null,
        teamwork: null,
        innovation: null
      },
      feedback: {
        strengths: [],
        improvements: [],
        achievements: []
      },
      nextReviewDate: '2024-06-30',
      developmentPlan: null
    },
    {
      id: 4,
      employeeId: 'EMP004',
      employeeName: 'Emma Davis',
      department: 'HR',
      position: 'HR Manager',
      reviewPeriod: '2024-Q1',
      reviewType: 'quarterly',
      status: 'overdue',
      overallRating: null,
      reviewDate: null,
      dueDate: '2024-04-10',
      reviewerId: 'EMP103',
      reviewerName: 'Michael Brown',
      reviewerPosition: 'VP Human Resources',
      goals: {
        achieved: 4,
        total: 4,
        percentage: 100
      },
      ratings: {
        hr_expertise: null,
        employee_relations: null,
        communication: null,
        compliance: null,
        problem_solving: null,
        leadership: null,
        strategic_thinking: null
      },
      feedback: {
        strengths: [],
        improvements: [],
        achievements: [
          'Implemented new employee onboarding process',
          'Reduced hiring time by 25%'
        ]
      },
      nextReviewDate: '2024-06-30',
      developmentPlan: null
    }
  ];

  const reviewTemplates = [
    {
      id: 1,
      name: 'Standard Employee Review',
      type: 'standard',
      description: 'General performance review template for all employees',
      categories: [
        'Job Performance',
        'Communication Skills',
        'Teamwork & Collaboration',
        'Problem Solving',
        'Professional Development',
        'Goal Achievement'
      ],
      duration: '45 minutes',
      frequency: 'quarterly',
      status: 'active',
      usageCount: 156
    },
    {
      id: 2,
      name: 'Leadership Review',
      type: 'leadership',
      description: 'Comprehensive review template for management positions',
      categories: [
        'Leadership Effectiveness',
        'Team Management',
        'Strategic Thinking',
        'Decision Making',
        'Communication',
        'People Development',
        'Results Achievement'
      ],
      duration: '60 minutes',
      frequency: 'quarterly',
      status: 'active',
      usageCount: 24
    },
    {
      id: 3,
      name: 'Sales Performance Review',
      type: 'sales',
      description: 'Specialized template for sales team members',
      categories: [
        'Sales Performance',
        'Client Relationship Management',
        'Market Knowledge',
        'Negotiation Skills',
        'Pipeline Management',
        'Team Collaboration'
      ],
      duration: '45 minutes',
      frequency: 'quarterly',
      status: 'active',
      usageCount: 32
    }
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Operations'];
  const statuses = ['all', 'pending', 'in_progress', 'completed', 'overdue'];
  const periods = [
    { value: '2024-Q1', label: 'Q1 2024' },
    { value: '2023-Q4', label: 'Q4 2023' },
    { value: '2023-Q3', label: 'Q3 2023' }
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      overdue: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };
    return colors[status] || colors.pending;
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600 dark:text-green-400';
    if (rating >= 4.0) return 'text-blue-600 dark:text-blue-400';
    if (rating >= 3.5) return 'text-yellow-600 dark:text-yellow-400';
    if (rating >= 3.0) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getRatingBars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div
          key={i}
          className={`w-4 h-4 rounded-full ${
            i <= rating ? 'bg-yellow-400' : 'bg-gray-200 dark:bg-gray-600'
          }`}
        />
      );
    }
    return stars;
  };

  const filteredReviews = reviews.filter(review => {
    if (selectedDepartment !== 'all' && review.department !== selectedDepartment) return false;
    if (selectedStatus !== 'all' && review.status !== selectedStatus) return false;
    if (review.reviewPeriod !== selectedPeriod) return false;
    return true;
  });

  const ReviewsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Performance Reviews</h3>
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
            New Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredReviews.map((review) => (
          <Card key={review.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedReview(review)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{review.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{review.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{review.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  {review.overallRating && (
                    <div>
                      <p className={`text-2xl font-bold ${getRatingColor(review.overallRating)}`}>
                        {review.overallRating}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Overall Rating</p>
                    </div>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)} mt-2 inline-block`}>
                    {review.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Review Period</p>
                  <p className="font-medium text-gray-800 dark:text-white">{review.reviewPeriod}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Due Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(review.dueDate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Reviewer</p>
                  <p className="font-medium text-gray-800 dark:text-white">{review.reviewerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Goals Achieved</p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {review.goals.achieved}/{review.goals.total} ({review.goals.percentage}%)
                  </p>
                </div>
              </div>

              {review.overallRating && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Performance Score</span>
                    <span className="font-medium text-gray-800 dark:text-white">{review.overallRating}/5.0</span>
                  </div>
                  <div className="flex space-x-1">
                    {getRatingBars(review.overallRating)}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {selectedReview && (
        <Card title={`Review Details - ${selectedReview.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Employee Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedReview.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedReview.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedReview.department}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Review Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Period:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedReview.reviewPeriod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Due Date:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{formatDate(selectedReview.dueDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedReview.status)}`}>
                        {selectedReview.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {selectedReview.overallRating && (
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Overall Rating</h4>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {selectedReview.overallRating}
                    </p>
                    <div className="flex justify-center space-x-1 mb-2">
                      {getRatingBars(selectedReview.overallRating)}
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">out of 5.0</p>
                  </div>
                )}
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Goals Achievement</h4>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {selectedReview.goals.percentage}%
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      {selectedReview.goals.achieved} of {selectedReview.goals.total} goals achieved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {selectedReview.overallRating && Object.keys(selectedReview.ratings).length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Detailed Ratings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedReview.ratings).map(([category, rating]) => (
                    rating && (
                      <div key={category} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-800 dark:text-white capitalize">
                            {category.replace('_', ' ')}
                          </span>
                          <span className={`font-bold ${getRatingColor(rating)}`}>
                            {rating}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          {getRatingBars(rating)}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {selectedReview.feedback && (selectedReview.feedback.strengths.length > 0 || selectedReview.feedback.improvements.length > 0 || selectedReview.feedback.achievements.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedReview.feedback.strengths.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      Strengths
                    </h4>
                    <div className="space-y-2">
                      {selectedReview.feedback.strengths.map((strength, index) => (
                        <div key={index} className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedReview.feedback.improvements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="ExclamationTriangleIcon" className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                      Areas for Improvement
                    </h4>
                    <div className="space-y-2">
                      {selectedReview.feedback.improvements.map((improvement, index) => (
                        <div key={index} className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">{improvement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedReview.feedback.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="TrophyIcon" className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedReview.feedback.achievements.map((achievement, index) => (
                        <div key={index} className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                          <p className="text-sm text-purple-800 dark:text-purple-200">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );

  const TemplatesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Review Templates</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          New Template
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {reviewTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{template.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{template.type}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                  {template.status.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{template.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{template.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Frequency</p>
                  <p className="font-medium text-gray-800 dark:text-white capitalize">{template.frequency}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Categories</p>
                  <p className="font-medium text-gray-800 dark:text-white">{template.categories.length}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Usage</p>
                  <p className="font-medium text-gray-800 dark:text-white">{template.usageCount} times</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Review Categories</p>
                <div className="flex flex-wrap gap-1">
                  {template.categories.slice(0, 3).map((category, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                      {category}
                    </span>
                  ))}
                  {template.categories.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs">
                      +{template.categories.length - 3} more
                    </span>
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
      <Card title="Review Analytics Overview">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="ClipboardDocumentListIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{reviews.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Reviews</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {reviews.filter(r => r.status === 'completed').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ClockIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {reviews.filter(r => r.status === 'in_progress' || r.status === 'pending').length}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">In Progress</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-600 dark:text-red-400">
              {reviews.filter(r => r.status === 'overdue').length}
            </p>
            <p className="text-sm text-red-800 dark:text-red-300">Overdue</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Performance">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptReviews = reviews.filter(r => r.department === dept);
              const avgRating = deptReviews.length > 0 
                ? deptReviews
                    .filter(r => r.overallRating)
                    .reduce((sum, r) => sum + r.overallRating, 0) / deptReviews.filter(r => r.overallRating).length 
                : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(avgRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-12 text-right">
                      {avgRating > 0 ? avgRating.toFixed(1) : 'N/A'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Review Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'completed', label: 'Completed', color: 'bg-green-500' },
              { status: 'in_progress', label: 'In Progress', color: 'bg-blue-500' },
              { status: 'pending', label: 'Pending', color: 'bg-yellow-500' },
              { status: 'overdue', label: 'Overdue', color: 'bg-red-500' }
            ].map(item => {
              const count = reviews.filter(r => r.status === item.status).length;
              const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
              
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
    { id: 'reviews', label: 'Reviews', icon: 'ClipboardDocumentListIcon', component: ReviewsTab },
    { id: 'templates', label: 'Templates', icon: 'DocumentDuplicateIcon', component: TemplatesTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || ReviewsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Performance Reviews</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage employee performance reviews and evaluations</p>
          </div>
          <div className="flex space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {periods.map(period => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Reviews
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

export default PerformanceReviews;