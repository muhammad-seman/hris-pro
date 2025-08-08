import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const CompanySettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isEditing, setIsEditing] = useState({});

  const companyInfo = {
    name: 'TechCorp Solutions',
    legalName: 'TechCorp Solutions Inc.',
    industry: 'Technology',
    founded: '2015',
    employees: '150-250',
    website: 'https://techcorp.com',
    description: 'Leading technology solutions provider specializing in enterprise software and digital transformation.',
    logo: null
  };

  const contactInfo = {
    email: 'info@techcorp.com',
    phone: '+1 (555) 123-4567',
    fax: '+1 (555) 123-4568',
    address: {
      street: '123 Tech Street',
      city: 'San Francisco',
      state: 'California',
      zipCode: '94105',
      country: 'United States'
    }
  };

  const businessSettings = {
    fiscalYearStart: 'January',
    currency: 'USD',
    timezone: 'America/Los_Angeles',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12-hour',
    language: 'English',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workingHours: {
      start: '09:00',
      end: '17:00'
    }
  };

  const integrationSettings = {
    emailProvider: 'Gmail',
    calendarSync: true,
    ssoEnabled: true,
    ssoProvider: 'Google Workspace',
    apiEnabled: true,
    webhooksEnabled: false,
    slackIntegration: true,
    teamsIntegration: false
  };

  const securitySettings = {
    passwordPolicy: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: true,
      maxAge: 90
    },
    loginAttempts: 5,
    sessionTimeout: 30,
    twoFactorAuth: 'optional',
    ipWhitelisting: false,
    auditLogging: true
  };

  const toggleEdit = (section) => {
    setIsEditing(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const renderGeneralTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Company Information</h3>
          <button 
            onClick={() => toggleEdit('company')}
            className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
          >
            <Icon name="PencilIcon" className="h-4 w-4 mr-1" />
            {isEditing.company ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
              {isEditing.company ? (
                <input 
                  type="text" 
                  defaultValue={companyInfo.name}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{companyInfo.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Legal Name</label>
              {isEditing.company ? (
                <input 
                  type="text" 
                  defaultValue={companyInfo.legalName}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{companyInfo.legalName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industry</label>
              {isEditing.company ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{companyInfo.industry}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
              {isEditing.company ? (
                <input 
                  type="url" 
                  defaultValue={companyInfo.website}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <a href={companyInfo.website} className="text-blue-600 dark:text-blue-400 hover:underline">{companyInfo.website}</a>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Founded</label>
              {isEditing.company ? (
                <input 
                  type="number" 
                  defaultValue={companyInfo.founded}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{companyInfo.founded}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Employee Count</label>
              {isEditing.company ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-250">101-250</option>
                  <option value="251-500">251-500</option>
                  <option value="500+">500+</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{companyInfo.employees}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Logo</label>
              <div className="mt-1 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Icon name="BuildingOfficeIcon" className="w-8 h-8 text-gray-400" />
                </div>
                {isEditing.company && (
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Upload Logo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          {isEditing.company ? (
            <textarea 
              rows={3}
              defaultValue={companyInfo.description}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          ) : (
            <p className="text-gray-900 dark:text-white">{companyInfo.description}</p>
          )}
        </div>

        {isEditing.company && (
          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Save Changes
            </button>
            <button 
              onClick={() => toggleEdit('company')}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Information</h3>
          <button 
            onClick={() => toggleEdit('contact')}
            className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
          >
            <Icon name="PencilIcon" className="h-4 w-4 mr-1" />
            {isEditing.contact ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              {isEditing.contact ? (
                <input 
                  type="email" 
                  defaultValue={contactInfo.email}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{contactInfo.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              {isEditing.contact ? (
                <input 
                  type="tel" 
                  defaultValue={contactInfo.phone}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{contactInfo.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fax</label>
              {isEditing.contact ? (
                <input 
                  type="tel" 
                  defaultValue={contactInfo.fax}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{contactInfo.fax}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Street Address</label>
              {isEditing.contact ? (
                <input 
                  type="text" 
                  defaultValue={contactInfo.address.street}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{contactInfo.address.street}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                {isEditing.contact ? (
                  <input 
                    type="text" 
                    defaultValue={contactInfo.address.city}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{contactInfo.address.city}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State</label>
                {isEditing.contact ? (
                  <input 
                    type="text" 
                    defaultValue={contactInfo.address.state}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{contactInfo.address.state}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ZIP Code</label>
                {isEditing.contact ? (
                  <input 
                    type="text" 
                    defaultValue={contactInfo.address.zipCode}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{contactInfo.address.zipCode}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Country</label>
                {isEditing.contact ? (
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                ) : (
                  <p className="text-gray-900 dark:text-white">{contactInfo.address.country}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {isEditing.contact && (
          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Save Changes
            </button>
            <button 
              onClick={() => toggleEdit('contact')}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </Card>
    </div>
  );

  const renderBusinessTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Configuration</h3>
          <button 
            onClick={() => toggleEdit('business')}
            className="flex items-center px-3 py-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition-colors"
          >
            <Icon name="PencilIcon" className="h-4 w-4 mr-1" />
            {isEditing.business ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fiscal Year Start</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="January">January</option>
                  <option value="April">April</option>
                  <option value="July">July</option>
                  <option value="October">October</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.fiscalYearStart}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.currency}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timezone</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.timezone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date Format</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.dateFormat}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Format</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="12-hour">12-hour</option>
                  <option value="24-hour">24-hour</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.timeFormat}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
              {isEditing.business ? (
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              ) : (
                <p className="text-gray-900 dark:text-white">{businessSettings.language}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Working Hours</label>
              {isEditing.business ? (
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="time" 
                    defaultValue={businessSettings.workingHours.start}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <input 
                    type="time" 
                    defaultValue={businessSettings.workingHours.end}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              ) : (
                <p className="text-gray-900 dark:text-white">
                  {businessSettings.workingHours.start} - {businessSettings.workingHours.end}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Working Days</label>
          <div className="flex flex-wrap gap-2">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
              <label key={day} className="flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={businessSettings.workingDays.includes(day)}
                  disabled={!isEditing.business}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{day}</span>
              </label>
            ))}
          </div>
        </div>

        {isEditing.business && (
          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Save Changes
            </button>
            <button 
              onClick={() => toggleEdit('business')}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </Card>
    </div>
  );

  const renderIntegrationTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Integration Settings</h3>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Email Provider</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Configure email service for notifications</p>
              </div>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                <option value="Gmail">Gmail</option>
                <option value="Outlook">Outlook</option>
                <option value="SendGrid">SendGrid</option>
                <option value="AWS SES">AWS SES</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Calendar Sync</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sync events with external calendar</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={integrationSettings.calendarSync} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Single Sign-On (SSO)</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable SSO authentication</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={integrationSettings.ssoEnabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="ml-4">
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
                <option value="Google Workspace">Google Workspace</option>
                <option value="Microsoft 365">Microsoft 365</option>
                <option value="Okta">Okta</option>
                <option value="Auth0">Auth0</option>
              </select>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">API Access</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Enable API for third-party integrations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={integrationSettings.apiEnabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Slack</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Team communication</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={integrationSettings.slackIntegration} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Teams</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Microsoft Teams</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={integrationSettings.teamsIntegration} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Save Integration Settings
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Test Connections
          </button>
        </div>
      </Card>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Security Settings</h3>
        
        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Password Policy</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Minimum Length</label>
                <input 
                  type="number" 
                  defaultValue={securitySettings.passwordPolicy.minLength}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Age (days)</label>
                <input 
                  type="number" 
                  defaultValue={securitySettings.passwordPolicy.maxAge}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={securitySettings.passwordPolicy.requireUppercase}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Require uppercase letters</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={securitySettings.passwordPolicy.requireLowercase}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Require lowercase letters</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={securitySettings.passwordPolicy.requireNumbers}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Require numbers</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  defaultChecked={securitySettings.passwordPolicy.requireSpecialChars}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Require special characters</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Login Security</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Login Attempts</label>
                  <input 
                    type="number" 
                    defaultValue={securitySettings.loginAttempts}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Session Timeout (minutes)</label>
                  <input 
                    type="number" 
                    defaultValue={securitySettings.sessionTimeout}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Two-Factor Auth</label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="disabled">Disabled</option>
                    <option value="optional">Optional</option>
                    <option value="required">Required</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Advanced Security</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">IP Whitelisting</span>
                  <input type="checkbox" defaultChecked={securitySettings.ipWhitelisting} className="h-4 w-4 text-blue-600" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Audit Logging</span>
                  <input type="checkbox" defaultChecked={securitySettings.auditLogging} className="h-4 w-4 text-blue-600" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Save Security Settings
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Force Password Reset
          </button>
        </div>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'general', label: 'General', icon: 'BuildingOfficeIcon', component: renderGeneralTab },
    { id: 'business', label: 'Business', icon: 'BriefcaseIcon', component: renderBusinessTab },
    { id: 'integration', label: 'Integrations', icon: 'CogIcon', component: renderIntegrationTab },
    { id: 'security', label: 'Security', icon: 'ShieldCheckIcon', component: renderSecurityTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Company Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">Configure company information and system settings</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowPathIcon" className="h-4 w-4 mr-2" />
              Reset
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="CheckIcon" className="h-4 w-4 mr-2" />
              Save All
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
    </DashboardLayout>
  );
};

export default CompanySettings;