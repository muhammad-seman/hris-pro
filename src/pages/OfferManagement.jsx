import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import { FileText, DollarSign, Calendar, Clock, Send, Edit, Eye, Download, Plus, Search, Filter, CheckCircle, XCircle, AlertCircle, User, Mail, Phone, MapPin, Building, Briefcase } from 'lucide-react';

function OfferManagement() {
  const [activeTab, setActiveTab] = useState('offers');
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const offers = [
    {
      id: 1,
      candidateName: 'Alex Rodriguez',
      candidateEmail: 'alex.rodriguez@email.com',
      candidatePhone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      department: 'Engineering',
      hiringManager: 'Sarah Johnson',
      status: 'pending',
      offerDate: '2024-01-20',
      expiryDate: '2024-01-27',
      startDate: '2024-02-15',
      salary: {
        base: 130000,
        bonus: 15000,
        equity: 5000,
        currency: 'USD'
      },
      benefits: {
        healthInsurance: true,
        dentalInsurance: true,
        retirement401k: true,
        paidTimeOff: 25,
        remoteWork: true
      },
      workType: 'hybrid',
      location: 'San Francisco, CA',
      reportingTo: 'Mike Chen',
      offerLetter: 'alex_rodriguez_offer_letter.pdf',
      notes: 'Strong candidate, competitive offer package',
      negotiationHistory: [
        { date: '2024-01-18', type: 'initial', salary: 125000, note: 'Initial offer' },
        { date: '2024-01-19', type: 'counter', salary: 135000, note: 'Candidate requested higher base' },
        { date: '2024-01-20', type: 'final', salary: 130000, note: 'Final negotiated amount' }
      ]
    },
    {
      id: 2,
      candidateName: 'Sarah Mitchell',
      candidateEmail: 'sarah.mitchell@email.com',
      candidatePhone: '+1 (555) 234-5678',
      position: 'UX Designer',
      department: 'Design',
      hiringManager: 'Jennifer Lee',
      status: 'accepted',
      offerDate: '2024-01-18',
      acceptedDate: '2024-01-19',
      startDate: '2024-02-12',
      salary: {
        base: 95000,
        bonus: 8000,
        equity: 3000,
        currency: 'USD'
      },
      benefits: {
        healthInsurance: true,
        dentalInsurance: true,
        retirement401k: true,
        paidTimeOff: 20,
        remoteWork: false
      },
      workType: 'in_office',
      location: 'New York, NY',
      reportingTo: 'David Kim',
      offerLetter: 'sarah_mitchell_offer_letter.pdf',
      notes: 'Excellent cultural fit, accepted quickly',
      negotiationHistory: [
        { date: '2024-01-18', type: 'initial', salary: 95000, note: 'Initial offer accepted' }
      ]
    },
    {
      id: 3,
      candidateName: 'Michael Zhang',
      candidateEmail: 'michael.zhang@email.com',
      candidatePhone: '+1 (555) 345-6789',
      position: 'Backend Developer',
      department: 'Engineering',
      hiringManager: 'Sarah Johnson',
      status: 'rejected',
      offerDate: '2024-01-15',
      rejectedDate: '2024-01-17',
      rejectionReason: 'Accepted offer from another company',
      salary: {
        base: 115000,
        bonus: 10000,
        equity: 4000,
        currency: 'USD'
      },
      benefits: {
        healthInsurance: true,
        dentalInsurance: true,
        retirement401k: true,
        paidTimeOff: 20,
        remoteWork: true
      },
      workType: 'remote',
      location: 'Austin, TX',
      reportingTo: 'Tom Anderson',
      offerLetter: 'michael_zhang_offer_letter.pdf',
      notes: 'Great candidate, unfortunately declined for competitive offer',
      negotiationHistory: [
        { date: '2024-01-15', type: 'initial', salary: 115000, note: 'Initial offer' }
      ]
    },
    {
      id: 4,
      candidateName: 'Emily Chen',
      candidateEmail: 'emily.chen@email.com',
      candidatePhone: '+1 (555) 456-7890',
      position: 'Product Manager',
      department: 'Product',
      hiringManager: 'Lisa Wong',
      status: 'draft',
      offerDate: null,
      startDate: '2024-03-01',
      salary: {
        base: 140000,
        bonus: 20000,
        equity: 8000,
        currency: 'USD'
      },
      benefits: {
        healthInsurance: true,
        dentalInsurance: true,
        retirement401k: true,
        paidTimeOff: 25,
        remoteWork: true
      },
      workType: 'hybrid',
      location: 'Seattle, WA',
      reportingTo: 'Mark Johnson',
      notes: 'Preparing offer for senior PM role',
      negotiationHistory: []
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Software Engineer Template',
      department: 'Engineering',
      level: 'Mid-Senior',
      baseSalary: { min: 100000, max: 150000 },
      usageCount: 15,
      lastUsed: '2024-01-20',
      benefits: ['Health Insurance', 'Dental', '401k', 'PTO', 'Remote Work']
    },
    {
      id: 2,
      name: 'Designer Template',
      department: 'Design',
      level: 'Mid-Senior',
      baseSalary: { min: 80000, max: 120000 },
      usageCount: 8,
      lastUsed: '2024-01-18',
      benefits: ['Health Insurance', 'Dental', '401k', 'PTO', 'Learning Budget']
    },
    {
      id: 3,
      name: 'Product Manager Template',
      department: 'Product',
      level: 'Senior',
      baseSalary: { min: 130000, max: 180000 },
      usageCount: 5,
      lastUsed: '2024-01-15',
      benefits: ['Health Insurance', 'Dental', '401k', 'PTO', 'Stock Options', 'Remote Work']
    }
  ];

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || offer.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const renderOffersView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Job Offers</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search offers..."
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
              <option value="draft">Draft</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
              <option value="expired">Expired</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOffers.map(offer => (
            <div key={offer.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{offer.candidateName}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      offer.status === 'accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      offer.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      offer.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      offer.status === 'expired' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {offer.status}
                    </span>
                    {offer.status === 'pending' && offer.expiryDate && (
                      <span className="text-xs text-red-600 dark:text-red-400">
                        Expires {new Date(offer.expiryDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{offer.position} • {offer.department}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hiring Manager: {offer.hiringManager}</p>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-right mb-2">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      ${offer.salary.base.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Base Salary</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Total: ${(offer.salary.base + offer.salary.bonus).toLocaleString()}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  Start: {new Date(offer.startDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {offer.location} ({offer.workType})
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <User className="h-4 w-4 mr-2" />
                  Reports to: {offer.reportingTo}
                </div>
              </div>

              {offer.offerDate && (
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Offer sent: {new Date(offer.offerDate).toLocaleDateString()}
                  {offer.acceptedDate && (
                    <span> • Accepted: {new Date(offer.acceptedDate).toLocaleDateString()}</span>
                  )}
                  {offer.rejectedDate && (
                    <span> • Rejected: {new Date(offer.rejectedDate).toLocaleDateString()}</span>
                  )}
                </div>
              )}

              {offer.status === 'draft' && (
                <div className="mt-4 flex space-x-2">
                  <button className="flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
                    <Send className="h-3 w-3 mr-1" />
                    Send Offer
                  </button>
                  <button className="flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded text-sm transition-colors">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplatesView = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Offer Templates</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Create Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{template.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{template.department} • {template.level}</p>
                </div>
                <div className="flex space-x-1">
                  <button className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Salary Range:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ${template.baseSalary.min.toLocaleString()} - ${template.baseSalary.max.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Benefits Included:</p>
                <div className="flex flex-wrap gap-1">
                  {template.benefits.slice(0, 3).map(benefit => (
                    <span 
                      key={benefit}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                  {template.benefits.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{template.benefits.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Used {template.usageCount} times</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Last used: {new Date(template.lastUsed).toLocaleDateString()}
                  </span>
                </div>
              </div>
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
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Offers</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
          </div>
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+15%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Acceptance Rate</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">85%</p>
          </div>
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+3%</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Salary</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">$118k</p>
          </div>
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
            <DollarSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-green-600 dark:text-green-400">+$8k</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Time to Accept</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">3.2</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">days</p>
          </div>
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm">
          <span className="text-red-600 dark:text-red-400">-0.5 days</span>
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Offer Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Create, manage, and track job offers</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Create Offer
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          <button
            onClick={() => setActiveTab('offers')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'offers'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Job Offers
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'templates'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Templates
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

        {activeTab === 'offers' && renderOffersView()}
        {activeTab === 'templates' && renderTemplatesView()}
        {activeTab === 'analytics' && renderAnalyticsView()}
      </div>

      {selectedOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedOffer.candidateName}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedOffer.position} • {selectedOffer.department}</p>
                  <span className={`inline-block mt-2 px-3 py-1 rounded text-sm font-medium ${
                    selectedOffer.status === 'accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    selectedOffer.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    selectedOffer.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    selectedOffer.status === 'expired' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {selectedOffer.status.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Candidate Information</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Mail className="h-4 w-4 mr-2" />
                      {selectedOffer.candidateEmail}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Phone className="h-4 w-4 mr-2" />
                      {selectedOffer.candidatePhone}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {selectedOffer.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {selectedOffer.workType}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Offer Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Hiring Manager:</span>
                      <span className="text-gray-900 dark:text-white">{selectedOffer.hiringManager}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Reports To:</span>
                      <span className="text-gray-900 dark:text-white">{selectedOffer.reportingTo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Start Date:</span>
                      <span className="text-gray-900 dark:text-white">{new Date(selectedOffer.startDate).toLocaleDateString()}</span>
                    </div>
                    {selectedOffer.expiryDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Expires:</span>
                        <span className="text-red-600 dark:text-red-400">{new Date(selectedOffer.expiryDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Compensation Package</h4>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${selectedOffer.salary.base.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Base Salary</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${selectedOffer.salary.bonus.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Annual Bonus</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${selectedOffer.salary.equity.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Equity Value</p>
                    </div>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${(selectedOffer.salary.base + selectedOffer.salary.bonus + selectedOffer.salary.equity).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Compensation</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Benefits Package</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Health Insurance:</span>
                      <span className="text-gray-900 dark:text-white">
                        {selectedOffer.benefits.healthInsurance ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Dental Insurance:</span>
                      <span className="text-gray-900 dark:text-white">
                        {selectedOffer.benefits.dentalInsurance ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">401k Plan:</span>
                      <span className="text-gray-900 dark:text-white">
                        {selectedOffer.benefits.retirement401k ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Paid Time Off:</span>
                      <span className="text-gray-900 dark:text-white">{selectedOffer.benefits.paidTimeOff} days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Remote Work:</span>
                      <span className="text-gray-900 dark:text-white">
                        {selectedOffer.benefits.remoteWork ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedOffer.negotiationHistory.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Negotiation History</h4>
                  <div className="space-y-3">
                    {selectedOffer.negotiationHistory.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {entry.type === 'initial' ? 'Initial Offer' : 
                             entry.type === 'counter' ? 'Counter Offer' : 'Final Offer'}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{entry.note}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(entry.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            ${entry.salary.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedOffer.rejectionReason && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Rejection Details</h4>
                  <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
                    <p className="text-red-800 dark:text-red-200">
                      <strong>Reason:</strong> {selectedOffer.rejectionReason}
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                      Rejected on {new Date(selectedOffer.rejectedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                {selectedOffer.status === 'draft' && (
                  <>
                    <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <Send className="h-4 w-4 mr-2 inline" />
                      Send Offer
                    </button>
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                      Edit Offer
                    </button>
                  </>
                )}
                {selectedOffer.status === 'pending' && (
                  <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                    <AlertCircle className="h-4 w-4 mr-2 inline" />
                    Send Reminder
                  </button>
                )}
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  <Download className="h-4 w-4 mr-2 inline" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default OfferManagement;