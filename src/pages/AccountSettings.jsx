import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [accountData, setAccountData] = useState({
    companyName: 'Tech Solutions Inc.',
    companyEmail: 'admin@techsolutions.com',
    companyPhone: '+1 (555) 123-4567',
    companyAddress: '123 Tech Street, Silicon Valley, CA 94025',
    website: 'https://techsolutions.com',
    industry: 'Technology',
    employeeCount: '1,248',
    founded: '2015'
  });

  const [billingData, setBillingData] = useState({
    plan: 'Professional',
    billing: 'monthly',
    nextBilling: '2024-02-15',
    amount: '$299.99',
    paymentMethod: '**** **** **** 1234'
  });

  const [integrations, setIntegrations] = useState([
    { id: 'slack', name: 'Slack', connected: true, description: 'Team communication and notifications' },
    { id: 'google-workspace', name: 'Google Workspace', connected: true, description: 'Email and calendar sync' },
    { id: 'microsoft-teams', name: 'Microsoft Teams', connected: false, description: 'Video conferencing and chat' },
    { id: 'jira', name: 'Jira', connected: false, description: 'Project management and tracking' },
    { id: 'salesforce', name: 'Salesforce', connected: false, description: 'CRM and sales data' }
  ]);

  const handleAccountChange = (field, value) => {
    setAccountData(prev => ({ ...prev, [field]: value }));
  };

  const toggleIntegration = (id) => {
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === id 
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );
  };

  const tabs = [
    { id: 'account', label: 'Company Information', icon: 'BuildingOfficeIcon' },
    { id: 'billing', label: 'Billing & Plans', icon: 'CreditCardIcon' },
    { id: 'integrations', label: 'Integrations', icon: 'PuzzlePieceIcon' },
    { id: 'advanced', label: 'Advanced Settings', icon: 'AdjustmentsHorizontalIcon' }
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Account Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your company account and system preferences
        </p>
      </div>

      {/* Account Overview Card */}
      <div className="mb-8">
        <Card>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="BuildingOfficeIcon" className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {accountData.companyName}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {accountData.industry} • {accountData.employeeCount} employees
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {billingData.plan}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Next billing: {billingData.nextBilling}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                <Icon name={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Company Information Tab */}
      {activeTab === 'account' && (
        <Card title="Company Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={accountData.companyName}
                onChange={(e) => handleAccountChange('companyName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              <select
                value={accountData.industry}
                onChange={(e) => handleAccountChange('industry', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Email
              </label>
              <input
                type="email"
                value={accountData.companyEmail}
                onChange={(e) => handleAccountChange('companyEmail', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={accountData.companyPhone}
                onChange={(e) => handleAccountChange('companyPhone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website
              </label>
              <input
                type="url"
                value={accountData.website}
                onChange={(e) => handleAccountChange('website', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Founded Year
              </label>
              <input
                type="text"
                value={accountData.founded}
                onChange={(e) => handleAccountChange('founded', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Address
              </label>
              <input
                type="text"
                value={accountData.companyAddress}
                onChange={(e) => handleAccountChange('companyAddress', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Save Changes
            </button>
          </div>
        </Card>
      )}

      {/* Billing Tab */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          <Card title="Current Plan">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {billingData.plan} Plan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Perfect for growing teams
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    {billingData.amount}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">per month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Next Billing</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{billingData.nextBilling}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Payment Method</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{billingData.paymentMethod}</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Billing Cycle</p>
                  <p className="font-semibold text-gray-800 dark:text-white capitalize">{billingData.billing}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  Upgrade Plan
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  Change Payment Method
                </button>
              </div>
            </div>
          </Card>

          <Card title="Billing History">
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { date: '2024-01-15', amount: '$299.99', status: 'Paid' },
                  { date: '2023-12-15', amount: '$299.99', status: 'Paid' },
                  { date: '2023-11-15', amount: '$299.99', status: 'Paid' }
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">Invoice #{1000 + index}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{invoice.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-gray-800 dark:text-white">{invoice.amount}</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs">
                        {invoice.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <Card title="Third-party Integrations">
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Connect your HRIS with other tools and services to streamline your workflow.
            </p>
            <div className="space-y-4">
              {integrations.map((integration) => (
                <div key={integration.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Icon name="PuzzlePieceIcon" className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">{integration.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {integration.connected && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs">
                        Connected
                      </span>
                    )}
                    <button
                      onClick={() => toggleIntegration(integration.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        integration.connected
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {integration.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Advanced Settings Tab */}
      {activeTab === 'advanced' && (
        <div className="space-y-6">
          <Card title="Data & Privacy">
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Data Retention</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Configure how long employee data is retained after termination
                </p>
                <select className="w-full max-w-xs px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="5">5 years</option>
                  <option value="7">7 years</option>
                </select>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Export Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Download a complete backup of your organization's data
                </p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  Request Data Export
                </button>
              </div>
            </div>
          </Card>

          <Card title="Danger Zone">
            <div className="p-6 space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <h4 className="font-medium text-red-800 dark:text-red-400 mb-2">Delete Account</h4>
                <p className="text-sm text-red-600 dark:text-red-300 mb-3">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AccountSettings;