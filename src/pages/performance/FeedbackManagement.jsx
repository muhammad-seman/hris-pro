import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const FeedbackManagement = () => {
  const [activeTab, setActiveTab] = useState('feedback');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedCycle, setSelectedCycle] = useState('2024-Q1');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const feedbackCycles = [
    {
      id: 1,
      name: 'Q1 2024 360° Feedback',
      period: '2024-Q1',
      status: 'active',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      participants: 45,
      completedFeedbacks: 38,
      pendingFeedbacks: 7,
      completionRate: 84.4,
      type: '360_feedback',
      description: 'Quarterly 360-degree feedback cycle for all employees'
    },
    {
      id: 2,
      name: 'Annual Review Feedback 2023',
      period: '2023-Annual',
      status: 'completed',
      startDate: '2023-11-01',
      endDate: '2023-12-15',
      participants: 52,
      completedFeedbacks: 52,
      pendingFeedbacks: 0,
      completionRate: 100,
      type: 'annual',
      description: 'Annual comprehensive feedback for performance reviews'
    }
  ];

  const feedbacks = [
    {
      id: 1,
      cycleId: 1,
      cycleName: 'Q1 2024 360° Feedback',
      employee: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Engineering',
        position: 'Senior Software Engineer'
      },
      feedbackType: '360_degree',
      status: 'completed',
      overallRating: 4.3,
      completedDate: '2024-03-25',
      feedbackSources: {
        self: { completed: true, rating: 4.2, submittedDate: '2024-03-20' },
        supervisor: { completed: true, rating: 4.5, submittedDate: '2024-03-22', reviewerName: 'Sarah Johnson' },
        peers: [
          { completed: true, rating: 4.2, submittedDate: '2024-03-21', reviewerName: 'Mike Wilson' },
          { completed: true, rating: 4.1, submittedDate: '2024-03-23', reviewerName: 'Lisa Brown' },
          { completed: true, rating: 4.4, submittedDate: '2024-03-24', reviewerName: 'David Lee' }
        ],
        subordinates: [
          { completed: true, rating: 4.3, submittedDate: '2024-03-22', reviewerName: 'Junior Dev 1' },
          { completed: true, rating: 4.2, submittedDate: '2024-03-25', reviewerName: 'Junior Dev 2' }
        ]
      },
      competencies: {
        technical_skills: { selfRating: 4.0, avgRating: 4.4, gap: 0.4 },
        communication: { selfRating: 3.8, avgRating: 4.1, gap: 0.3 },
        leadership: { selfRating: 4.2, avgRating: 4.0, gap: -0.2 },
        teamwork: { selfRating: 4.5, avgRating: 4.3, gap: -0.2 },
        problem_solving: { selfRating: 4.3, avgRating: 4.5, gap: 0.2 },
        innovation: { selfRating: 3.9, avgRating: 4.2, gap: 0.3 }
      },
      comments: {
        strengths: [
          'Excellent technical problem-solving skills',
          'Great mentorship abilities with junior team members',
          'Innovative thinking in solution design'
        ],
        improvements: [
          'Could improve presentation skills for stakeholder meetings',
          'Would benefit from more cross-team collaboration'
        ],
        suggestions: [
          'Consider taking public speaking courses',
          'Participate in cross-functional projects'
        ]
      }
    },
    {
      id: 2,
      cycleId: 1,
      cycleName: 'Q1 2024 360° Feedback',
      employee: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Sales',
        position: 'Sales Manager'
      },
      feedbackType: '360_degree',
      status: 'in_progress',
      overallRating: null,
      completedDate: null,
      feedbackSources: {
        self: { completed: true, rating: 4.1, submittedDate: '2024-03-18' },
        supervisor: { completed: true, rating: 4.3, submittedDate: '2024-03-20', reviewerName: 'David Wilson' },
        peers: [
          { completed: true, rating: 4.0, submittedDate: '2024-03-19', reviewerName: 'Tom Anderson' },
          { completed: false, rating: null, submittedDate: null, reviewerName: 'Jane Miller' }
        ],
        subordinates: [
          { completed: true, rating: 4.2, submittedDate: '2024-03-21', reviewerName: 'Sales Rep 1' },
          { completed: false, rating: null, submittedDate: null, reviewerName: 'Sales Rep 2' }
        ]
      },
      competencies: {
        sales_skills: { selfRating: 4.2, avgRating: 4.2, gap: 0.0 },
        communication: { selfRating: 4.0, avgRating: 4.1, gap: 0.1 },
        leadership: { selfRating: 4.3, avgRating: 4.2, gap: -0.1 },
        customer_focus: { selfRating: 4.4, avgRating: null, gap: null },
        negotiation: { selfRating: 4.0, avgRating: null, gap: null }
      },
      comments: {
        strengths: [
          'Strong sales performance and client relationships',
          'Good leadership of sales team'
        ],
        improvements: [],
        suggestions: []
      }
    },
    {
      id: 3,
      cycleId: 1,
      cycleName: 'Q1 2024 360° Feedback',
      employee: {
        employeeId: 'EMP003',
        employeeName: 'Robert Chen',
        department: 'Marketing',
        position: 'Marketing Manager'
      },
      feedbackType: '360_degree',
      status: 'pending',
      overallRating: null,
      completedDate: null,
      feedbackSources: {
        self: { completed: false, rating: null, submittedDate: null },
        supervisor: { completed: false, rating: null, submittedDate: null, reviewerName: 'Lisa Wong' },
        peers: [
          { completed: false, rating: null, submittedDate: null, reviewerName: 'Product Manager' },
          { completed: false, rating: null, submittedDate: null, reviewerName: 'Design Lead' }
        ],
        subordinates: []
      },
      competencies: {},
      comments: {
        strengths: [],
        improvements: [],
        suggestions: []
      }
    }
  ];

  const competencyFramework = [
    {
      category: 'Technical Skills',
      competencies: [
        { id: 'technical_skills', name: 'Technical Expertise', description: 'Proficiency in job-related technical skills' },
        { id: 'problem_solving', name: 'Problem Solving', description: 'Ability to analyze and solve complex problems' },
        { id: 'innovation', name: 'Innovation', description: 'Creative thinking and innovative solutions' }
      ]
    },
    {
      category: 'Leadership',
      competencies: [
        { id: 'leadership', name: 'Leadership', description: 'Ability to lead and inspire others' },
        { id: 'decision_making', name: 'Decision Making', description: 'Making effective decisions' },
        { id: 'strategic_thinking', name: 'Strategic Thinking', description: 'Long-term planning and vision' }
      ]
    },
    {
      category: 'Interpersonal',
      competencies: [
        { id: 'communication', name: 'Communication', description: 'Clear and effective communication' },
        { id: 'teamwork', name: 'Teamwork', description: 'Collaboration and team participation' },
        { id: 'customer_focus', name: 'Customer Focus', description: 'Commitment to customer satisfaction' }
      ]
    }
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Operations'];
  const statuses = ['all', 'pending', 'in_progress', 'completed'];
  const cycles = [
    { value: '2024-Q1', label: 'Q1 2024' },
    { value: '2023-Annual', label: '2023 Annual' },
    { value: '2023-Q4', label: 'Q4 2023' }
  ];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not completed';
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
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };
    return colors[status] || colors.pending;
  };

  const getRatingColor = (rating) => {
    if (!rating) return 'text-gray-400 dark:text-gray-500';
    if (rating >= 4.5) return 'text-green-600 dark:text-green-400';
    if (rating >= 4.0) return 'text-blue-600 dark:text-blue-400';
    if (rating >= 3.5) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getCompletionProgress = (feedback) => {
    let total = 0;
    let completed = 0;

    // Self feedback
    total += 1;
    if (feedback.feedbackSources.self.completed) completed += 1;

    // Supervisor feedback
    total += 1;
    if (feedback.feedbackSources.supervisor.completed) completed += 1;

    // Peer feedback
    total += feedback.feedbackSources.peers.length;
    completed += feedback.feedbackSources.peers.filter(p => p.completed).length;

    // Subordinate feedback
    total += feedback.feedbackSources.subordinates.length;
    completed += feedback.feedbackSources.subordinates.filter(s => s.completed).length;

    return { completed, total, percentage: total > 0 ? (completed / total) * 100 : 0 };
  };

  const filteredFeedbacks = feedbacks.filter(feedback => {
    if (selectedDepartment !== 'all' && feedback.employee.department !== selectedDepartment) return false;
    if (selectedStatus !== 'all' && feedback.status !== selectedStatus) return false;
    if (feedback.cycleName !== cycles.find(c => c.value === selectedCycle)?.label.replace('Q1 2024', 'Q1 2024 360° Feedback')) return false;
    return true;
  });

  const FeedbackTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">360° Feedback</h3>
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
            New Feedback
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFeedbacks.map((feedback) => {
          const progress = getCompletionProgress(feedback);
          return (
            <Card key={feedback.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedFeedback(feedback)}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feedback.employee.employeeName}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.employee.position}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.employee.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {feedback.overallRating && (
                      <div>
                        <p className={`text-2xl font-bold ${getRatingColor(feedback.overallRating)}`}>
                          {feedback.overallRating}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Overall Rating</p>
                      </div>
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feedback.status)} mt-2 inline-block`}>
                      {feedback.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Cycle</p>
                    <p className="font-medium text-gray-800 dark:text-white">{feedback.cycleName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Feedback Type</p>
                    <p className="font-medium text-gray-800 dark:text-white">360° Feedback</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Completion Progress</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {progress.completed}/{progress.total} ({progress.percentage.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${progress.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Self: {feedback.feedbackSources.self.completed ? '✓' : '○'}</span>
                  <span>Supervisor: {feedback.feedbackSources.supervisor.completed ? '✓' : '○'}</span>
                  <span>Peers: {feedback.feedbackSources.peers.filter(p => p.completed).length}/{feedback.feedbackSources.peers.length}</span>
                  <span>Subordinates: {feedback.feedbackSources.subordinates.filter(s => s.completed).length}/{feedback.feedbackSources.subordinates.length}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedFeedback && (
        <Card title={`360° Feedback Details - ${selectedFeedback.employee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Employee Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedFeedback.employee.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedFeedback.employee.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedFeedback.employee.department}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Feedback Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Cycle:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedFeedback.cycleName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedFeedback.status)}`}>
                        {selectedFeedback.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Completed:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{formatDate(selectedFeedback.completedDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {selectedFeedback.overallRating && (
                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Overall Rating</h4>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {selectedFeedback.overallRating}
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">out of 5.0</p>
                  </div>
                )}
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Feedback Sources</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Self Assessment</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${selectedFeedback.feedbackSources.self.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {selectedFeedback.feedbackSources.self.completed ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Supervisor</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${selectedFeedback.feedbackSources.supervisor.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {selectedFeedback.feedbackSources.supervisor.completed ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Peers</span>
                      <span className="text-purple-800 dark:text-purple-200 font-medium">
                        {selectedFeedback.feedbackSources.peers.filter(p => p.completed).length}/{selectedFeedback.feedbackSources.peers.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Subordinates</span>
                      <span className="text-purple-800 dark:text-purple-200 font-medium">
                        {selectedFeedback.feedbackSources.subordinates.filter(s => s.completed).length}/{selectedFeedback.feedbackSources.subordinates.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {Object.keys(selectedFeedback.competencies).length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Competency Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedFeedback.competencies).map(([competency, data]) => (
                    data.avgRating && (
                      <div key={competency} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h5 className="font-medium text-gray-800 dark:text-white mb-3 capitalize">
                          {competency.replace('_', ' ')}
                        </h5>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Self Rating</span>
                            <span className={`font-semibold ${getRatingColor(data.selfRating)}`}>
                              {data.selfRating}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Others Average</span>
                            <span className={`font-semibold ${getRatingColor(data.avgRating)}`}>
                              {data.avgRating}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Gap</span>
                            <span className={`font-semibold ${data.gap > 0 ? 'text-blue-600' : data.gap < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                              {data.gap > 0 ? '+' : ''}{data.gap}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {selectedFeedback.comments && (selectedFeedback.comments.strengths.length > 0 || selectedFeedback.comments.improvements.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {selectedFeedback.comments.strengths.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      Strengths
                    </h4>
                    <div className="space-y-2">
                      {selectedFeedback.comments.strengths.map((strength, index) => (
                        <div key={index} className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedFeedback.comments.improvements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="ExclamationTriangleIcon" className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                      Areas for Improvement
                    </h4>
                    <div className="space-y-2">
                      {selectedFeedback.comments.improvements.map((improvement, index) => (
                        <div key={index} className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">{improvement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedFeedback.comments.suggestions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                      <Icon name="LightBulbIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      Suggestions
                    </h4>
                    <div className="space-y-2">
                      {selectedFeedback.comments.suggestions.map((suggestion, index) => (
                        <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">{suggestion}</p>
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

  const CyclesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Feedback Cycles</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          New Cycle
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {feedbackCycles.map((cycle) => (
          <Card key={cycle.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cycle.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{cycle.type.replace('_', ' ')}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{cycle.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cycle.status)}`}>
                  {cycle.status.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Start Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(cycle.startDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">End Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(cycle.endDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Participants</p>
                  <p className="font-medium text-gray-800 dark:text-white">{cycle.participants}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Completion Rate</p>
                  <p className="font-medium text-gray-800 dark:text-white">{cycle.completionRate}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {cycle.completedFeedbacks}/{cycle.participants} completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${cycle.completionRate}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                <span>Completed: {cycle.completedFeedbacks}</span>
                <span>Pending: {cycle.pendingFeedbacks}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const CompetenciesTab = () => (
    <div className="space-y-6">
      <Card title="Competency Framework">
        <div className="space-y-6">
          {competencyFramework.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.competencies.map((competency) => (
                  <div key={competency.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">{competency.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{competency.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="360° Feedback Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="UsersIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{feedbacks.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Feedback</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {feedbacks.filter(f => f.status === 'completed').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ClockIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {feedbacks.filter(f => f.status === 'in_progress').length}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">In Progress</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {feedbacks.filter(f => f.status === 'pending').length}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Pending</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Participation">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptFeedbacks = feedbacks.filter(f => f.employee.department === dept);
              const completionRate = deptFeedbacks.length > 0 
                ? (deptFeedbacks.filter(f => f.status === 'completed').length / deptFeedbacks.length) * 100 
                : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${completionRate}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-12 text-right">
                      {completionRate.toFixed(0)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Average Ratings by Competency">
          <div className="space-y-4">
            {Object.keys(feedbacks[0]?.competencies || {}).map(competency => {
              const ratings = feedbacks
                .filter(f => f.competencies[competency]?.avgRating)
                .map(f => f.competencies[competency].avgRating);
              const avgRating = ratings.length > 0 
                ? ratings.reduce((sum, r) => sum + r, 0) / ratings.length 
                : 0;
              
              return (
                <div key={competency} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 capitalize">
                    {competency.replace('_', ' ')}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(avgRating / 5) * 100}%` }}
                      />
                    </div>
                    <span className={`font-medium w-12 text-right ${getRatingColor(avgRating)}`}>
                      {avgRating > 0 ? avgRating.toFixed(1) : 'N/A'}
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
    { id: 'feedback', label: '360° Feedback', icon: 'ChatBubbleBottomCenterTextIcon', component: FeedbackTab },
    { id: 'cycles', label: 'Feedback Cycles', icon: 'ArrowPathIcon', component: CyclesTab },
    { id: 'competencies', label: 'Competencies', icon: 'StarIcon', component: CompetenciesTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || FeedbackTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">360° Feedback</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive 360-degree feedback and performance evaluation</p>
          </div>
          <div className="flex space-x-3">
            <select 
              value={selectedCycle}
              onChange={(e) => setSelectedCycle(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {cycles.map(cycle => (
                <option key={cycle.value} value={cycle.value}>
                  {cycle.label}
                </option>
              ))}
            </select>
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

export default FeedbackManagement;