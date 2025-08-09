import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const CustomReports = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showCreateReport, setShowCreateReport] = useState(false);
  const [reportBuilder, setReportBuilder] = useState({
    name: '',
    description: '',
    dataSource: '',
    fields: [],
    filters: [],
    groupBy: [],
    sortBy: []
  });

  const reports = [
    {
      id: 1,
      name: 'Employee Performance Summary',
      description: 'Comprehensive performance metrics by department and role',
      category: 'Performance',
      dataSource: 'Performance Management',
      createdBy: 'Sarah Johnson',
      createdAt: '2024-01-15',
      lastRun: '2024-01-22 09:30',
      runCount: 45,
      status: 'active',
      fields: ['Employee Name', 'Department', 'Performance Score', 'Goals Completed', 'Last Review Date'],
      filters: [
        { field: 'Department', operator: 'in', value: ['Engineering', 'Sales'] },
        { field: 'Performance Score', operator: '>=', value: 3.0 }
      ],
      schedule: 'weekly',
      format: 'excel',
      recipients: ['hr@company.com', 'managers@company.com']
    },
    {
      id: 2,
      name: 'Attendance Analysis',
      description: 'Monthly attendance patterns and absenteeism tracking',
      category: 'Attendance',
      dataSource: 'Time & Attendance',
      createdBy: 'Mike Chen',
      createdAt: '2024-01-10',
      lastRun: '2024-01-21 15:45',
      runCount: 23,
      status: 'active',
      fields: ['Employee ID', 'Name', 'Department', 'Days Present', 'Days Absent', 'Attendance Rate'],
      filters: [
        { field: 'Date Range', operator: 'between', value: ['2024-01-01', '2024-01-31'] }
      ],
      schedule: 'monthly',
      format: 'pdf',
      recipients: ['operations@company.com']
    },
    {
      id: 3,
      name: 'Recruitment Pipeline Report',
      description: 'Current recruitment status and hiring funnel analysis',
      category: 'Recruitment',
      dataSource: 'Recruitment',
      createdBy: 'Jennifer Lee',
      createdAt: '2024-01-08',
      lastRun: '2024-01-22 11:15',
      runCount: 67,
      status: 'active',
      fields: ['Job Title', 'Applications', 'Interviews', 'Offers', 'Hires', 'Conversion Rate'],
      filters: [
        { field: 'Status', operator: '!=', value: 'closed' }
      ],
      schedule: 'daily',
      format: 'excel',
      recipients: ['recruitment@company.com', 'hr@company.com']
    },
    {
      id: 4,
      name: 'Training Completion Dashboard',
      description: 'Training program completion rates and certification tracking',
      category: 'Learning',
      dataSource: 'Learning & Development',
      createdBy: 'David Kim',
      createdAt: '2024-01-05',
      lastRun: '2024-01-20 16:20',
      runCount: 34,
      status: 'draft',
      fields: ['Employee Name', 'Training Program', 'Completion Status', 'Completion Date', 'Certificate ID'],
      filters: [
        { field: 'Enrollment Date', operator: '>=', value: '2024-01-01' }
      ],
      schedule: 'weekly',
      format: 'csv',
      recipients: ['training@company.com']
    },
    {
      id: 5,
      name: 'Payroll Summary by Department',
      description: 'Monthly payroll breakdown with cost center analysis',
      category: 'Payroll',
      dataSource: 'Payroll & Benefits',
      createdBy: 'Lisa Wong',
      createdAt: '2024-01-03',
      lastRun: '2024-01-22 08:00',
      runCount: 12,
      status: 'active',
      fields: ['Department', 'Employee Count', 'Total Salary', 'Benefits Cost', 'Total Cost'],
      filters: [
        { field: 'Pay Period', operator: '=', value: 'current_month' }
      ],
      schedule: 'monthly',
      format: 'excel',
      recipients: ['finance@company.com', 'hr@company.com']
    }
  ];

  const templates = [
    {
      id: 1,
      name: 'Employee Roster',
      description: 'Basic employee information and contact details',
      category: 'Employee Management',
      fields: 8,
      popularity: 95
    },
    {
      id: 2,
      name: 'Performance Review Summary',
      description: 'Performance ratings and review completion status',
      category: 'Performance',
      fields: 12,
      popularity: 87
    },
    {
      id: 3,
      name: 'Leave Balance Report',
      description: 'Current leave balances and usage patterns',
      category: 'Leave Management',
      fields: 10,
      popularity: 78
    },
    {
      id: 4,
      name: 'Salary Analysis',
      description: 'Compensation analysis by role and department',
      category: 'Payroll',
      fields: 15,
      popularity: 65
    },
    {
      id: 5,
      name: 'Training Enrollment',
      description: 'Training program enrollment and completion tracking',
      category: 'Learning',
      fields: 9,
      popularity: 72
    },
    {
      id: 6,
      name: 'Recruitment Metrics',
      description: 'Hiring pipeline and recruitment effectiveness',
      category: 'Recruitment',
      fields: 14,
      popularity: 58
    }
  ];

  const dataSources = [
    'Employee Management',
    'Performance Management', 
    'Time & Attendance',
    'Leave Management',
    'Payroll & Benefits',
    'Learning & Development',
    'Recruitment'
  ];

  const availableFields = {
    'Employee Management': [
      'Employee ID', 'Full Name', 'Email', 'Phone', 'Department', 'Position', 'Manager', 'Hire Date', 'Status'
    ],
    'Performance Management': [
      'Employee Name', 'Performance Score', 'Goals Completed', 'Review Date', 'Reviewer', 'Comments'
    ],
    'Time & Attendance': [
      'Employee ID', 'Name', 'Date', 'Check In', 'Check Out', 'Hours Worked', 'Overtime Hours'
    ],
    'Leave Management': [
      'Employee Name', 'Leave Type', 'Start Date', 'End Date', 'Days Taken', 'Balance Remaining'
    ],
    'Payroll & Benefits': [
      'Employee Name', 'Base Salary', 'Bonus', 'Benefits', 'Deductions', 'Net Pay'
    ],
    'Learning & Development': [
      'Employee Name', 'Course Name', 'Enrollment Date', 'Completion Date', 'Status', 'Score'
    ],
    'Recruitment': [
      'Job Title', 'Candidate Name', 'Application Date', 'Status', 'Interview Date', 'Offer Date'
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Custom Reports</h3>
          <button 
            onClick={() => setShowCreateReport(true)}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Create Report
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {reports.map(report => (
            <div key={report.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{report.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{report.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>Category: {report.category}</span>
                    <span>•</span>
                    <span>Source: {report.dataSource}</span>
                    <span>•</span>
                    <span>Created by {report.createdBy}</span>
                    <span>•</span>
                    <span>{report.runCount} runs</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button 
                    onClick={() => setSelectedReport(report)}
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon name="EyeIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Icon name="PencilIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                    <Icon name="PlayIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Icon name="TrashIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="CalendarIcon" className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Schedule</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">{report.schedule}</span>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="ClockIcon" className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Last Run</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(report.lastRun).toLocaleDateString()}
                  </span>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="DocumentIcon" className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Format</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white uppercase">{report.format}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplatesTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Report Templates</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="DocumentTextIcon" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{template.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{template.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="StarIcon" className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{template.popularity}%</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{template.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">{template.fields} fields</span>
                <span className="text-xs text-blue-600 dark:text-blue-400">Popular</span>
              </div>

              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBuilderTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Report Builder</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Report Name
              </label>
              <input
                type="text"
                value={reportBuilder.name}
                onChange={(e) => setReportBuilder({...reportBuilder, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter report name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={reportBuilder.description}
                onChange={(e) => setReportBuilder({...reportBuilder, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-20"
                placeholder="Enter report description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Data Source
              </label>
              <select
                value={reportBuilder.dataSource}
                onChange={(e) => setReportBuilder({...reportBuilder, dataSource: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select data source</option>
                {dataSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Available Fields
              </label>
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 h-40 overflow-y-auto">
                {reportBuilder.dataSource && availableFields[reportBuilder.dataSource] ? (
                  <div className="space-y-1">
                    {availableFields[reportBuilder.dataSource].map(field => (
                      <div key={field} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={field}
                          className="rounded border-gray-300 dark:border-gray-600"
                        />
                        <label htmlFor={field} className="text-sm text-gray-700 dark:text-gray-300">
                          {field}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select a data source to see available fields
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Output Format
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="excel">Excel (.xlsx)</option>
                  <option value="csv">CSV (.csv)</option>
                  <option value="pdf">PDF (.pdf)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Schedule
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="manual">Manual</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
              Preview
            </button>
            <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
              Save as Draft
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Create Report
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'reports', label: 'My Reports', icon: 'DocumentTextIcon', component: renderReportsTab },
    { id: 'templates', label: 'Templates', icon: 'DocumentDuplicateIcon', component: renderTemplatesTab },
    { id: 'builder', label: 'Report Builder', icon: 'WrenchScrewdriverIcon', component: renderBuilderTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Custom Reports</h1>
            <p className="text-gray-600 dark:text-gray-400">Create and manage custom reports and analytics</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export All
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowPathIcon" className="h-4 w-4 mr-2" />
              Refresh Data
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

      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedReport.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedReport.description}</p>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Report Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Category:</strong> {selectedReport.category}</div>
                    <div><strong>Data Source:</strong> {selectedReport.dataSource}</div>
                    <div><strong>Created By:</strong> {selectedReport.createdBy}</div>
                    <div><strong>Created:</strong> {new Date(selectedReport.createdAt).toLocaleDateString()}</div>
                    <div><strong>Status:</strong> 
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(selectedReport.status)}`}>
                        {selectedReport.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Execution Info</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Schedule:</strong> {selectedReport.schedule}</div>
                    <div><strong>Format:</strong> {selectedReport.format.toUpperCase()}</div>
                    <div><strong>Last Run:</strong> {new Date(selectedReport.lastRun).toLocaleString()}</div>
                    <div><strong>Total Runs:</strong> {selectedReport.runCount}</div>
                    <div><strong>Recipients:</strong> {selectedReport.recipients.length} users</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Fields</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedReport.fields.map(field => (
                    <span 
                      key={field}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Filters</h4>
                <div className="space-y-2">
                  {selectedReport.filters.map((filter, index) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm">
                      <strong>{filter.field}</strong> {filter.operator} <em>{Array.isArray(filter.value) ? filter.value.join(', ') : filter.value}</em>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Run Report
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  Edit Report
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default CustomReports;