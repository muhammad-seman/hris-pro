import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const PolicyManagement = () => {
  const [activeTab, setActiveTab] = useState('policies');
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showCreatePolicy, setShowCreatePolicy] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const policies = [
    {
      id: 1,
      title: 'Employee Code of Conduct',
      category: 'Ethics & Compliance',
      description: 'Guidelines for professional behavior and ethical standards',
      version: '2.1',
      status: 'active',
      createdAt: '2023-01-15',
      lastUpdated: '2023-11-20',
      createdBy: 'HR Department',
      approvedBy: 'Jennifer Lee',
      effectiveDate: '2023-12-01',
      nextReview: '2024-12-01',
      acknowledgments: 89,
      totalEmployees: 100,
      tags: ['ethics', 'behavior', 'compliance'],
      content: 'This policy outlines the expected behavior and ethical standards for all employees...',
      attachments: ['conduct_guidelines.pdf', 'ethics_training.pptx']
    },
    {
      id: 2,
      title: 'Remote Work Policy',
      category: 'Work Arrangements',
      description: 'Guidelines and requirements for remote work arrangements',
      version: '1.3',
      status: 'active',
      createdAt: '2023-03-10',
      lastUpdated: '2023-09-15',
      createdBy: 'IT Department',
      approvedBy: 'Sarah Johnson',
      effectiveDate: '2023-10-01',
      nextReview: '2024-10-01',
      acknowledgments: 67,
      totalEmployees: 85,
      tags: ['remote', 'flexible', 'technology'],
      content: 'This policy defines the terms and conditions for employees working remotely...',
      attachments: ['remote_setup_guide.pdf', 'security_checklist.doc']
    },
    {
      id: 3,
      title: 'Leave and Vacation Policy',
      category: 'Time Off',
      description: 'Annual leave, sick leave, and vacation time policies',
      version: '3.0',
      status: 'active',
      createdAt: '2023-02-01',
      lastUpdated: '2023-08-10',
      createdBy: 'HR Department',
      approvedBy: 'Jennifer Lee',
      effectiveDate: '2023-09-01',
      nextReview: '2024-09-01',
      acknowledgments: 95,
      totalEmployees: 100,
      tags: ['leave', 'vacation', 'pto'],
      content: 'This policy outlines the various types of leave available to employees...',
      attachments: ['leave_calendar.xlsx', 'holiday_schedule.pdf']
    },
    {
      id: 4,
      title: 'Information Security Policy',
      category: 'Security & IT',
      description: 'Data protection and information security guidelines',
      version: '2.2',
      status: 'under_review',
      createdAt: '2023-04-20',
      lastUpdated: '2023-12-05',
      createdBy: 'IT Security Team',
      approvedBy: 'Mike Chen',
      effectiveDate: '2024-01-15',
      nextReview: '2024-12-15',
      acknowledgments: 78,
      totalEmployees: 100,
      tags: ['security', 'data', 'privacy'],
      content: 'This policy establishes guidelines for protecting company and customer data...',
      attachments: ['security_handbook.pdf', 'incident_response.doc', 'privacy_notice.pdf']
    },
    {
      id: 5,
      title: 'Performance Management Policy',
      category: 'Performance',
      description: 'Performance evaluation and improvement procedures',
      version: '1.5',
      status: 'active',
      createdAt: '2023-05-15',
      lastUpdated: '2023-10-20',
      createdBy: 'HR Department',
      approvedBy: 'Sarah Johnson',
      effectiveDate: '2023-11-01',
      nextReview: '2024-11-01',
      acknowledgments: 82,
      totalEmployees: 90,
      tags: ['performance', 'evaluation', 'development'],
      content: 'This policy defines the performance management process and evaluation criteria...',
      attachments: ['performance_template.xlsx', 'development_plan.doc']
    },
    {
      id: 6,
      title: 'Workplace Safety Policy',
      category: 'Health & Safety',
      description: 'Health and safety protocols for workplace environments',
      version: '2.0',
      status: 'draft',
      createdAt: '2023-06-01',
      lastUpdated: '2023-12-10',
      createdBy: 'Safety Committee',
      approvedBy: null,
      effectiveDate: null,
      nextReview: null,
      acknowledgments: 0,
      totalEmployees: 100,
      tags: ['safety', 'health', 'workplace'],
      content: 'This policy establishes safety protocols and procedures for all workplace activities...',
      attachments: ['safety_manual.pdf', 'emergency_procedures.doc']
    }
  ];

  const categories = [...new Set(policies.map(policy => policy.category))];

  const filteredPolicies = selectedCategory === 'all' 
    ? policies 
    : policies.filter(policy => policy.category === selectedCategory);

  const totalPolicies = policies.length;
  const activePolicies = policies.filter(p => p.status === 'active').length;
  const underReviewPolicies = policies.filter(p => p.status === 'under_review').length;
  const draftPolicies = policies.filter(p => p.status === 'draft').length;

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'under_review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const renderPoliciesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Policies</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalPolicies}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="DocumentTextIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Policies</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{activePolicies}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="CheckCircleIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Under Review</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{underReviewPolicies}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="EyeIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Drafts</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{draftPolicies}</p>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
              <Icon name="DocumentDuplicateIcon" className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Policy Management</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button 
              onClick={() => setShowCreatePolicy(true)}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
              Create Policy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPolicies.map(policy => (
            <div key={policy.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{policy.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">v{policy.version}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{policy.description}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{policy.category}</span>
                    <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Updated {new Date(policy.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-1 ml-4">
                  <button 
                    onClick={() => setSelectedPolicy(policy)}
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon name="EyeIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Icon name="PencilIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Icon name="TrashIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(policy.status)}`}>
                    {policy.status.replace('_', ' ')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Acknowledgments:</span>
                  <span className="text-gray-900 dark:text-white">
                    {policy.acknowledgments}/{policy.totalEmployees} ({Math.round((policy.acknowledgments / policy.totalEmployees) * 100)}%)
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Next Review:</span>
                  <span className="text-gray-900 dark:text-white">
                    {policy.nextReview ? new Date(policy.nextReview).toLocaleDateString() : 'TBD'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap gap-1">
                  {policy.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAcknowledgmentsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Policy Acknowledgments</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Policy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acknowledgments
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Completion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {policies.map(policy => {
                const completionRate = Math.round((policy.acknowledgments / policy.totalEmployees) * 100);
                return (
                  <tr key={policy.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Icon name="DocumentTextIcon" className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{policy.title}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{policy.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(policy.status)}`}>
                        {policy.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {policy.acknowledgments}/{policy.totalEmployees}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${completionRate}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{completionRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                        Send Reminder
                      </button>
                      <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderComplianceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Compliance Overview</h3>
          <div className="space-y-4">
            {categories.map((category, index) => {
              const categoryPolicies = policies.filter(p => p.category === category);
              const activePolicies = categoryPolicies.filter(p => p.status === 'active').length;
              const totalAcknowledgments = categoryPolicies.reduce((sum, p) => sum + p.acknowledgments, 0);
              const totalEmployees = categoryPolicies.reduce((sum, p) => sum + p.totalEmployees, 0);
              const complianceRate = totalEmployees > 0 ? Math.round((totalAcknowledgments / totalEmployees) * 100) : 0;
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500'];
              
              return (
                <div key={category} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{category}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activePolicies} active policies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{complianceRate}%</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">compliance</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Upcoming Reviews</h3>
          <div className="space-y-3">
            {policies
              .filter(p => p.nextReview)
              .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview))
              .slice(0, 6)
              .map(policy => (
                <div key={policy.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{policy.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{policy.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {new Date(policy.nextReview).toLocaleDateString()}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      new Date(policy.nextReview) < new Date() 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {new Date(policy.nextReview) < new Date() ? 'Overdue' : 'Upcoming'}
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
    { id: 'policies', label: 'Policies', icon: 'DocumentTextIcon', component: renderPoliciesTab },
    { id: 'acknowledgments', label: 'Acknowledgments', icon: 'UserCheckIcon', component: renderAcknowledgmentsTab },
    { id: 'compliance', label: 'Compliance', icon: 'ShieldCheckIcon', component: renderComplianceTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Policy Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage company policies and track compliance</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="BellAlertIcon" className="h-4 w-4 mr-2" />
              Send Reminders
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {tabs.find(tab => tab.id === activeTab)?.component()}
      </div>

      {selectedPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="DocumentTextIcon" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedPolicy.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedPolicy.category} • Version {selectedPolicy.version}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{selectedPolicy.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Policy Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Status:</strong> 
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(selectedPolicy.status)}`}>
                        {selectedPolicy.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div><strong>Created By:</strong> {selectedPolicy.createdBy}</div>
                    <div><strong>Approved By:</strong> {selectedPolicy.approvedBy || 'Pending'}</div>
                    <div><strong>Effective Date:</strong> {selectedPolicy.effectiveDate ? new Date(selectedPolicy.effectiveDate).toLocaleDateString() : 'TBD'}</div>
                    <div><strong>Next Review:</strong> {selectedPolicy.nextReview ? new Date(selectedPolicy.nextReview).toLocaleDateString() : 'TBD'}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Compliance Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Total Employees:</strong> {selectedPolicy.totalEmployees}</div>
                    <div><strong>Acknowledged:</strong> {selectedPolicy.acknowledgments}</div>
                    <div><strong>Completion Rate:</strong> {Math.round((selectedPolicy.acknowledgments / selectedPolicy.totalEmployees) * 100)}%</div>
                    <div><strong>Pending:</strong> {selectedPolicy.totalEmployees - selectedPolicy.acknowledgments}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Policy Content</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{selectedPolicy.content}</p>
                </div>
              </div>

              {selectedPolicy.attachments && selectedPolicy.attachments.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Attachments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedPolicy.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <Icon name="PaperClipIcon" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{attachment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPolicy.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Edit Policy
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Send Reminder
                </button>
                <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PolicyManagement;