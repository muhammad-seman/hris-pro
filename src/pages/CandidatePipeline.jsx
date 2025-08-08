import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import { Users, Eye, MessageCircle, Clock, CheckCircle, XCircle, Star, Download, Filter, Search, Calendar, User, Mail, Phone, MapPin, ExternalLink, FileText, Briefcase } from 'lucide-react';

function CandidatePipeline() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const pipelineStages = [
    { id: 'applied', name: 'Applied', count: 45, color: 'bg-blue-500' },
    { id: 'screening', name: 'Screening', count: 23, color: 'bg-yellow-500' },
    { id: 'first_interview', name: 'First Interview', count: 12, color: 'bg-purple-500' },
    { id: 'technical', name: 'Technical Round', count: 8, color: 'bg-orange-500' },
    { id: 'final_interview', name: 'Final Interview', count: 5, color: 'bg-green-500' },
    { id: 'offer', name: 'Offer', count: 3, color: 'bg-emerald-500' },
    { id: 'hired', name: 'Hired', count: 2, color: 'bg-teal-500' }
  ];

  const candidates = [
    {
      id: 1,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@email.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      stage: 'technical',
      status: 'active',
      rating: 4.5,
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      appliedDate: '2024-01-15',
      lastActivity: '2024-01-20',
      resume: 'alex_rodriguez_resume.pdf',
      notes: 'Strong technical background, excellent communication skills',
      interviews: [
        { date: '2024-01-18', type: 'Phone Screening', interviewer: 'Sarah Johnson', status: 'completed', rating: 4 },
        { date: '2024-01-22', type: 'Technical Interview', interviewer: 'Mike Chen', status: 'scheduled' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      email: 'sarah.mitchell@email.com',
      phone: '+1 (555) 234-5678',
      position: 'UX Designer',
      location: 'New York, NY',
      stage: 'final_interview',
      status: 'active',
      rating: 4.8,
      experience: '7 years',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      appliedDate: '2024-01-10',
      lastActivity: '2024-01-21',
      resume: 'sarah_mitchell_resume.pdf',
      notes: 'Exceptional portfolio, great culture fit',
      interviews: [
        { date: '2024-01-16', type: 'Phone Screening', interviewer: 'Lisa Wong', status: 'completed', rating: 5 },
        { date: '2024-01-19', type: 'Portfolio Review', interviewer: 'David Kim', status: 'completed', rating: 5 },
        { date: '2024-01-24', type: 'Final Interview', interviewer: 'Jennifer Lee', status: 'scheduled' }
      ]
    },
    {
      id: 3,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '+1 (555) 345-6789',
      position: 'Backend Developer',
      location: 'Austin, TX',
      stage: 'screening',
      status: 'active',
      rating: 3.8,
      experience: '3 years',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      appliedDate: '2024-01-18',
      lastActivity: '2024-01-19',
      resume: 'james_wilson_resume.pdf',
      notes: 'Good technical skills, needs improvement in system design',
      interviews: [
        { date: '2024-01-21', type: 'Phone Screening', interviewer: 'Tom Anderson', status: 'scheduled' }
      ]
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = selectedStage === 'all' || candidate.stage === selectedStage;
    const matchesStatus = filterStatus === 'all' || candidate.status === filterStatus;
    
    return matchesSearch && matchesStage && matchesStatus;
  });

  const renderPipelineView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recruitment Pipeline</h3>
          <div className="flex space-x-2">
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Stages</option>
              {pipelineStages.map(stage => (
                <option key={stage.id} value={stage.id}>{stage.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {pipelineStages.map(stage => (
            <div key={stage.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">{stage.name}</h4>
                <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                  {stage.count}
                </span>
              </div>
              <div className={`w-full h-2 ${stage.color} rounded mb-4`}></div>
              
              <div className="space-y-2">
                {candidates
                  .filter(candidate => candidate.stage === stage.id)
                  .slice(0, 3)
                  .map(candidate => (
                    <div 
                      key={candidate.id}
                      className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-600 cursor-pointer hover:shadow-sm transition-shadow"
                      onClick={() => setSelectedCandidate(candidate)}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {candidate.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{candidate.position}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">{candidate.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{candidate.experience}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCandidatesView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All Candidates</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search candidates..."
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
              <option value="active">Active</option>
              <option value="on_hold">On Hold</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCandidates.map(candidate => (
            <div 
              key={candidate.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{candidate.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{candidate.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{candidate.rating}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4 mr-2" />
                  {candidate.email}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {candidate.experience}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.slice(0, 3).map(skill => (
                    <span 
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {candidate.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{candidate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  candidate.stage === 'hired' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  candidate.stage === 'offer' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
                  candidate.stage === 'final_interview' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  candidate.stage === 'technical' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                  candidate.stage === 'first_interview' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                  candidate.stage === 'screening' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {pipelineStages.find(stage => stage.id === candidate.stage)?.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Applied {new Date(candidate.appliedDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Candidates</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">98</p>
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Pipeline</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">56</p>
          </div>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+8%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Hired This Month</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+25%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Time to Hire</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">18</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">days</p>
          </div>
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-red-600 dark:text-red-400">-3 days</span>
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Candidate Pipeline</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage and track candidates through the recruitment process</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Users className="h-4 w-4 mr-2" />
              Add Candidate
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'pipeline'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Pipeline View
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'candidates'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            All Candidates
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

        {activeTab === 'pipeline' && renderPipelineView()}
        {activeTab === 'candidates' && renderCandidatesView()}
        {activeTab === 'analytics' && renderAnalyticsView()}
      </div>

      {selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedCandidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCandidate.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedCandidate.position}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{selectedCandidate.rating}/5</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCandidate(null)}
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
                      {selectedCandidate.email}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedCandidate.phone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {selectedCandidate.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>{selectedCandidate.resume}</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Application Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Applied:</span>
                      <span className="text-gray-900 dark:text-white">{new Date(selectedCandidate.appliedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                      <span className="text-gray-900 dark:text-white">{selectedCandidate.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Current Stage:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        selectedCandidate.stage === 'hired' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        selectedCandidate.stage === 'offer' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
                        selectedCandidate.stage === 'final_interview' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        selectedCandidate.stage === 'technical' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        selectedCandidate.stage === 'first_interview' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                        selectedCandidate.stage === 'screening' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {pipelineStages.find(stage => stage.id === selectedCandidate.stage)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map(skill => (
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interview History</h4>
                <div className="space-y-3">
                  {selectedCandidate.interviews.map((interview, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{interview.type}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">with {interview.interviewer}</p>
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

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notes</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  {selectedCandidate.notes}
                </p>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Schedule Interview
                </button>
                <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Move to Next Stage
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

export default CandidatePipeline;