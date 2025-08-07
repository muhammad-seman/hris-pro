import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const HelpSupport = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [supportTicket, setSupportTicket] = useState({
    subject: '',
    priority: 'medium',
    category: 'general',
    description: ''
  });

  const categories = [
    { id: 'getting-started', label: 'Getting Started', icon: 'PlayIcon' },
    { id: 'account-management', label: 'Account Management', icon: 'UserIcon' },
    { id: 'employee-management', label: 'Employee Management', icon: 'UsersIcon' },
    { id: 'payroll', label: 'Payroll & Benefits', icon: 'CurrencyDollarIcon' },
    { id: 'reporting', label: 'Reports & Analytics', icon: 'ChartBarIcon' },
    { id: 'integrations', label: 'Integrations', icon: 'PuzzlePieceIcon' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: 'WrenchScrewdriverIcon' }
  ];

  const faqs = {
    'getting-started': [
      {
        id: 1,
        question: 'How do I invite new employees to the system?',
        answer: 'Go to Employee Management > Add Employee, fill in their details, and click "Send Invitation". They will receive an email with login instructions.'
      },
      {
        id: 2,
        question: 'How do I set up departments and roles?',
        answer: 'Navigate to Administration > Department Management to create departments, then go to Role & Permissions to set up roles and assign permissions.'
      },
      {
        id: 3,
        question: 'How do I configure payroll settings?',
        answer: 'Go to Payroll & Benefits > Payroll Processing > Settings to configure pay periods, tax settings, and benefit deductions.'
      }
    ],
    'account-management': [
      {
        id: 4,
        question: 'How do I change my company information?',
        answer: 'Go to Account Settings > Company Information and update your details. Changes will take effect immediately.'
      },
      {
        id: 5,
        question: 'How do I upgrade my subscription plan?',
        answer: 'Visit Account Settings > Billing & Plans, select your desired plan, and follow the upgrade process.'
      },
      {
        id: 6,
        question: 'How do I add new admin users?',
        answer: 'Go to Administration > User Management, click "Add User", assign admin role, and send them an invitation.'
      }
    ],
    'employee-management': [
      {
        id: 7,
        question: 'How do I bulk import employee data?',
        answer: 'Use the bulk import feature in Employee Management > Import Employees. Download the CSV template, fill it with employee data, and upload.'
      },
      {
        id: 8,
        question: 'How do I track employee performance?',
        answer: 'Go to Performance Management > Performance Reviews to create review cycles, set goals, and track employee progress.'
      }
    ],
    'payroll': [
      {
        id: 9,
        question: 'How do I process monthly payroll?',
        answer: 'Navigate to Payroll & Benefits > Payroll Processing, review employee hours and deductions, then click "Process Payroll".'
      },
      {
        id: 10,
        question: 'How do I generate payslips?',
        answer: 'After processing payroll, go to Payroll & Benefits > Payslips to generate and distribute payslips to employees.'
      }
    ]
  };

  const quickActions = [
    { icon: 'VideoCameraIcon', title: 'Video Tutorials', description: 'Step-by-step video guides', action: 'Watch Now' },
    { icon: 'DocumentTextIcon', title: 'User Manual', description: 'Complete documentation', action: 'Download PDF' },
    { icon: 'ChatBubbleLeftRightIcon', title: 'Live Chat', description: 'Chat with our support team', action: 'Start Chat' },
    { icon: 'PhoneIcon', title: 'Phone Support', description: 'Call us: +1 (555) 123-HELP', action: 'Call Now' }
  ];

  const handleSupportTicketChange = (field, value) => {
    setSupportTicket(prev => ({ ...prev, [field]: value }));
  };

  const submitSupportTicket = () => {
    console.log('Support ticket submitted:', supportTicket);
    // Reset form
    setSupportTicket({
      subject: '',
      priority: 'medium',
      category: 'general',
      description: ''
    });
    alert('Support ticket submitted successfully! We\'ll get back to you soon.');
  };

  const filteredFAQs = faqs[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Help & Support
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Find answers to your questions and get the help you need
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <Card>
          <div className="p-6">
            <div className="relative">
              <Icon name="MagnifyingGlassIcon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index}>
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={action.icon} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{action.description}</p>
                <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm">
                  {action.action}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Categories */}
        <div className="lg:col-span-1">
          <Card title="Help Categories">
            <div className="p-6">
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors text-left ${
                      activeCategory === category.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Icon name={category.icon} className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card title="Contact Information" className="mt-6">
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="EnvelopeIcon" className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">support@hris.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="PhoneIcon" className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-HELP</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="ClockIcon" className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">Hours</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-2">
          <Card title={`Frequently Asked Questions - ${categories.find(c => c.id === activeCategory)?.label}`}>
            <div className="p-6">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="MagnifyingGlassIcon" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    {searchQuery ? 'No results found for your search.' : 'No FAQs available for this category.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                      <button
                        onClick={() => setSelectedFAQ(selectedFAQ === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
                        <Icon
                          name="ChevronDownIcon"
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            selectedFAQ === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {selectedFAQ === faq.id && (
                        <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-400 pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* Submit Support Ticket */}
          <Card title="Submit a Support Ticket" className="mt-6">
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={supportTicket.subject}
                      onChange={(e) => handleSupportTicketChange('subject', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      value={supportTicket.priority}
                      onChange={(e) => handleSupportTicketChange('priority', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={supportTicket.category}
                    onChange={(e) => handleSupportTicketChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing</option>
                    <option value="feature-request">Feature Request</option>
                    <option value="bug-report">Bug Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    value={supportTicket.description}
                    onChange={(e) => handleSupportTicketChange('description', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSupportTicket({ subject: '', priority: 'medium', category: 'general', description: '' })}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    onClick={submitSupportTicket}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Submit Ticket
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;