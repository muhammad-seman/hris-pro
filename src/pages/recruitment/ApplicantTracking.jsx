import React, { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import { Users, Search, Filter, Eye, Edit, Trash2, Download, Plus, Star, Calendar, Clock, User, Mail, Phone, MapPin, FileText, Tag, MessageCircle, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

function ApplicantTracking() {
  const [activeTab, setActiveTab] = useState('applications');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPosition, setFilterPosition] = useState('all');
  const [sortBy, setSortBy] = useState('applied_date');

  const applications = [
    {
      id: 1,
      applicantName: 'Alex Rodriguez',
      email: 'alex.rodriguez@email.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      department: 'Engineering',
      appliedDate: '2024-01-15',
      lastUpdate: '2024-01-20',
      status: 'interview',
      stage: 'technical',
      priority: 'high',
      rating: 4.5,
      experience: '5 years',
      location: 'San Francisco, CA',
      source: 'LinkedIn',
      resume: 'alex_rodriguez_resume.pdf',
      coverLetter: 'alex_rodriguez_cover_letter.pdf',
      portfolio: 'https://alexrodriguez.dev',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      notes: [
        { date: '2024-01-15', author: 'HR Team', content: 'Strong technical background, good culture fit' },
        { date: '2024-01-18', author: 'Sarah Johnson', content: 'Impressed with portfolio and experience' }
      ],
      interviews: [
        { date: '2024-01-18', type: 'Phone Screening', status: 'completed', rating: 4 },
        { date: '2024-01-22', type: 'Technical Interview', status: 'scheduled' }
      ],
      referrer: 'Mike Chen',
      salaryExpectation: '$120,000 - $140,000'
    },
    {
      id: 2,
      applicantName: 'Sarah Mitchell',
      email: 'sarah.mitchell@email.com',
      phone: '+1 (555) 234-5678',
      position: 'UX Designer',
      department: 'Design',
      appliedDate: '2024-01-10',
      lastUpdate: '2024-01-21',
      status: 'offer',
      stage: 'final_interview',
      priority: 'high',
      rating: 4.8,
      experience: '7 years',
      location: 'New York, NY',
      source: 'Company Website',
      resume: 'sarah_mitchell_resume.pdf',
      coverLetter: 'sarah_mitchell_cover_letter.pdf',
      portfolio: 'https://sarahmitchell.design',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Sketch'],
      notes: [
        { date: '2024-01-10', author: 'HR Team', content: 'Exceptional portfolio, strong design background' },
        { date: '2024-01-19', author: 'David Kim', content: 'Outstanding cultural fit and design thinking' }
      ],
      interviews: [
        { date: '2024-01-16', type: 'Phone Screening', status: 'completed', rating: 5 },
        { date: '2024-01-19', type: 'Portfolio Review', status: 'completed', rating: 5 },
        { date: '2024-01-24', type: 'Final Interview', status: 'scheduled' }
      ],
      salaryExpectation: '$90,000 - $110,000'
    },
    {
      id: 3,
      applicantName: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '+1 (555) 345-6789',
      position: 'Backend Developer',
      department: 'Engineering',
      appliedDate: '2024-01-18',
      lastUpdate: '2024-01-19',
      status: 'screening',
      stage: 'screening',
      priority: 'medium',
      rating: 3.8,
      experience: '3 years',
      location: 'Austin, TX',
      source: 'Indeed',
      resume: 'james_wilson_resume.pdf',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
      notes: [
        { date: '2024-01-18', author: 'HR Team', content: 'Good technical skills, need to assess system design knowledge' }
      ],
      interviews: [
        { date: '2024-01-21', type: 'Phone Screening', status: 'scheduled' }
      ],
      salaryExpectation: '$80,000 - $95,000'
    },
    {
      id: 4,
      applicantName: 'Emily Chen',
      email: 'emily.chen@email.com',
      phone: '+1 (555) 456-7890',
      position: 'Product Manager',
      department: 'Product',
      appliedDate: '2024-01-12',
      lastUpdate: '2024-01-12',
      status: 'applied',
      stage: 'applied',
      priority: 'medium',
      rating: null,
      experience: '6 years',
      location: 'Seattle, WA',
      source: 'Referral',
      resume: 'emily_chen_resume.pdf',
      coverLetter: 'emily_chen_cover_letter.pdf',
      skills: ['Product Strategy', 'Data Analysis', 'Agile', 'Stakeholder Management', 'A/B Testing'],
      notes: [
        { date: '2024-01-12', author: 'HR Team', content: 'Referred by Tom Anderson, strong PM background' }
      ],
      interviews: [],
      referrer: 'Tom Anderson',
      salaryExpectation: '$130,000 - $150,000'
    },
    {
      id: 5,
      applicantName: 'David Park',
      email: 'david.park@email.com',
      phone: '+1 (555) 567-8901',
      position: 'Frontend Developer',
      department: 'Engineering',
      appliedDate: '2024-01-08',
      lastUpdate: '2024-01-16',
      status: 'rejected',
      stage: 'first_interview',
      priority: 'low',
      rating: 2.5,
      experience: '2 years',
      location: 'Los Angeles, CA',
      source: 'Glassdoor',
      resume: 'david_park_resume.pdf',
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
      notes: [
        { date: '2024-01-08', author: 'HR Team', content: 'Junior level candidate, good potential' },
        { date: '2024-01-16', author: 'Mike Chen', content: 'Technical skills below requirements for current role' }
      ],
      interviews: [
        { date: '2024-01-14', type: 'Phone Screening', status: 'completed', rating: 3 },
        { date: '2024-01-16', type: 'Technical Interview', status: 'completed', rating: 2 }
      ],
      rejectionReason: 'Technical skills did not meet requirements',
      salaryExpectation: '$65,000 - $75,000'
    }
  ];

  const positions = [...new Set(applications.map(app => app.position))];
  const departments = [...new Set(applications.map(app => app.department))];

  const filteredApplications = applications.filter(application => {
    const matchesSearch = application.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         application.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = filterStatus === 'all' || application.status === filterStatus;
    const matchesPosition = filterPosition === 'all' || application.position === filterPosition;
    
    return matchesSearch && matchesStatus && matchesPosition;
  });

  const sortedApplications = [...filteredApplications].sort((a, b) => {
    switch (sortBy) {
      case 'applied_date':
        return new Date(b.appliedDate) - new Date(a.appliedDate);
      case 'last_update':
        return new Date(b.lastUpdate) - new Date(a.lastUpdate);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      default:
        return 0;
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'applied': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'screening': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'interview': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'offer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'hired': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'rejected': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'withdrawn': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return null;
    }
  };

  const renderApplicationsView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Job Applications</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-64"
              />
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="applied">Applied</option>
              <option value="screening">Screening</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Positions</option>
              {positions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="applied_date">Sort by Applied Date</option>
              <option value="last_update">Sort by Last Update</option>
              <option value="rating">Sort by Rating</option>
              <option value="priority">Sort by Priority</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {sortedApplications.map(application => (
            <div key={application.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{application.applicantName}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(application.status)}`}>
                      {application.status}
                    </span>
                    {getPriorityIcon(application.priority)}
                    {application.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{application.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{application.position} • {application.department}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Applied {new Date(application.appliedDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {application.location}
                    </span>
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {application.source}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {application.experience}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedApplication(application)}
                    className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {application.skills.slice(0, 4).map(skill => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {application.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{application.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    {application.interviews.length} interview{application.interviews.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {application.notes.length} note{application.notes.length !== 1 ? 's' : ''}
                  </span>
                  {application.salaryExpectation && (
                    <span className="text-gray-600 dark:text-gray-400">
                      Salary: {application.salaryExpectation}
                    </span>
                  )}
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  Updated {new Date(application.lastUpdate).toLocaleDateString()}
                </span>
              </div>

              {application.referrer && (
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900 rounded text-sm">
                  <span className="text-blue-800 dark:text-blue-200">
                    Referred by {application.referrer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Applications</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">156</p>
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+23%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Applications</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">89</p>
          </div>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+12%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Interview Rate</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">34%</p>
          </div>
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+5%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Rating</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">4.2</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
            <Star className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+0.3</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Applicant Tracking</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and manage all job applications</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Add Application
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'applications'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Analytics
          </button>
        </div>

        {activeTab === 'applications' && renderApplicationsView()}
        {activeTab === 'analytics' && renderAnalyticsView()}
      </div>

      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedApplication.applicantName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedApplication.applicantName}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedApplication.position}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedApplication.status)}`}>
                        {selectedApplication.status}
                      </span>
                      {selectedApplication.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{selectedApplication.rating}/5</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Mail className="h-4 w-4 mr-2" />
                      {selectedApplication.email}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedApplication.phone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {selectedApplication.location}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Application Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Applied:</span>
                      <span className="text-gray-900 dark:text-white">{new Date(selectedApplication.appliedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                      <span className="text-gray-900 dark:text-white">{selectedApplication.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Source:</span>
                      <span className="text-gray-900 dark:text-white">{selectedApplication.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Priority:</span>
                      <div className="flex items-center space-x-1">
                        {getPriorityIcon(selectedApplication.priority)}
                        <span className="text-gray-900 dark:text-white capitalize">{selectedApplication.priority}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedApplication.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Documents</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-900 dark:text-white">{selectedApplication.resume}</span>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      Download
                    </button>
                  </div>
                  {selectedApplication.coverLetter && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-900 dark:text-white">{selectedApplication.coverLetter}</span>
                      </div>
                      <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                        Download
                      </button>
                    </div>
                  )}
                  {selectedApplication.portfolio && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-900 dark:text-white">Portfolio</span>
                      </div>
                      <a 
                        href={selectedApplication.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        View
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {selectedApplication.interviews.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interview History</h4>
                  <div className="space-y-3">
                    {selectedApplication.interviews.map((interview, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{interview.type}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(interview.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            interview.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            interview.status === 'scheduled' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {interview.status}
                          </span>
                          {interview.rating && (
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">{interview.rating}/5</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedApplication.notes.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notes & Comments</h4>
                  <div className="space-y-3">
                    {selectedApplication.notes.map((note, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{note.author}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{new Date(note.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{note.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedApplication.salaryExpectation && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Salary Expectation</h4>
                  <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      {selectedApplication.salaryExpectation}
                    </p>
                  </div>
                </div>
              )}

              {selectedApplication.referrer && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Referral Information</h4>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-200">
                      Referred by <strong>{selectedApplication.referrer}</strong>
                    </p>
                  </div>
                </div>
              )}

              {selectedApplication.rejectionReason && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Rejection Details</h4>
                  <div className="p-3 bg-red-50 dark:bg-red-900 rounded-lg">
                    <p className="text-red-800 dark:text-red-200">
                      <strong>Reason:</strong> {selectedApplication.rejectionReason}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Update Status
                </button>
                <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Schedule Interview
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default ApplicantTracking;