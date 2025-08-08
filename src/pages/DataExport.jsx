import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const DataExport = () => {
  const [activeTab, setActiveTab] = useState('export');
  const [selectedExport, setSelectedExport] = useState(null);
  const [exportConfig, setExportConfig] = useState({
    dataType: '',
    format: 'excel',
    dateRange: 'last_month',
    customDateFrom: '',
    customDateTo: '',
    departments: [],
    includeFields: [],
    filters: []
  });

  const exportHistory = [
    {
      id: 1,
      name: 'Employee Data Export',
      dataType: 'Employee Management',
      format: 'excel',
      dateRange: 'last_month',
      createdBy: 'Sarah Johnson',
      createdAt: '2024-01-22 14:30:00',
      status: 'completed',
      fileSize: '2.4 MB',
      downloadCount: 5,
      expiresAt: '2024-02-22 14:30:00',
      recordCount: 156
    },
    {
      id: 2,
      name: 'Attendance Records',
      dataType: 'Time & Attendance',
      format: 'csv',
      dateRange: 'last_week',
      createdBy: 'Mike Chen',
      createdAt: '2024-01-21 09:15:00',
      status: 'completed',
      fileSize: '8.7 MB',
      downloadCount: 12,
      expiresAt: '2024-02-21 09:15:00',
      recordCount: 2340
    },
    {
      id: 3,
      name: 'Payroll Summary',
      dataType: 'Payroll & Benefits',
      format: 'pdf',
      dateRange: 'current_month',
      createdBy: 'Lisa Wong',
      createdAt: '2024-01-20 16:45:00',
      status: 'processing',
      fileSize: null,
      downloadCount: 0,
      expiresAt: null,
      recordCount: null
    },
    {
      id: 4,
      name: 'Performance Data',
      dataType: 'Performance Management',
      format: 'json',
      dateRange: 'last_quarter',
      createdBy: 'David Kim',
      createdAt: '2024-01-19 11:20:00',
      status: 'failed',
      fileSize: null,
      downloadCount: 0,
      expiresAt: null,
      recordCount: null,
      errorMessage: 'Data source temporarily unavailable'
    },
    {
      id: 5,
      name: 'Training Records Export',
      dataType: 'Learning & Development',
      format: 'excel',
      dateRange: 'last_6_months',
      createdBy: 'Jennifer Lee',
      createdAt: '2024-01-18 13:10:00',
      status: 'completed',
      fileSize: '1.2 MB',
      downloadCount: 3,
      expiresAt: '2024-02-18 13:10:00',
      recordCount: 89
    }
  ];

  const dataTypes = [
    {
      id: 'employee_management',
      name: 'Employee Management',
      description: 'Employee profiles, contact information, and organizational data',
      fields: ['Employee ID', 'Full Name', 'Email', 'Department', 'Position', 'Manager', 'Hire Date', 'Status'],
      recordCount: 156
    },
    {
      id: 'time_attendance',
      name: 'Time & Attendance',
      description: 'Clock in/out records, work hours, and attendance patterns',
      fields: ['Employee ID', 'Date', 'Clock In', 'Clock Out', 'Hours Worked', 'Break Time', 'Overtime'],
      recordCount: 4680
    },
    {
      id: 'leave_management',
      name: 'Leave Management',
      description: 'Leave requests, balances, and absence tracking',
      fields: ['Employee ID', 'Leave Type', 'Start Date', 'End Date', 'Days', 'Status', 'Approver'],
      recordCount: 234
    },
    {
      id: 'payroll_benefits',
      name: 'Payroll & Benefits',
      description: 'Salary information, benefits enrollment, and payroll data',
      fields: ['Employee ID', 'Base Salary', 'Bonus', 'Benefits', 'Deductions', 'Net Pay', 'Pay Period'],
      recordCount: 156
    },
    {
      id: 'performance',
      name: 'Performance Management',
      description: 'Performance reviews, goals, and evaluation data',
      fields: ['Employee ID', 'Review Period', 'Overall Score', 'Goals Met', 'Reviewer', 'Comments'],
      recordCount: 89
    },
    {
      id: 'learning',
      name: 'Learning & Development',
      description: 'Training records, certifications, and skill assessments',
      fields: ['Employee ID', 'Course Name', 'Completion Date', 'Score', 'Certification', 'Trainer'],
      recordCount: 312
    },
    {
      id: 'recruitment',
      name: 'Recruitment',
      description: 'Job postings, applications, and hiring pipeline data',
      fields: ['Job ID', 'Position', 'Candidate Name', 'Application Date', 'Status', 'Interview Date'],
      recordCount: 67
    }
  ];

  const departments = ['All Departments', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations'];
  const formats = [
    { value: 'excel', label: 'Excel (.xlsx)', icon: 'DocumentIcon' },
    { value: 'csv', label: 'CSV (.csv)', icon: 'DocumentTextIcon' },
    { value: 'json', label: 'JSON (.json)', icon: 'CodeBracketIcon' },
    { value: 'pdf', label: 'PDF (.pdf)', icon: 'DocumentIcon' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircleIcon';
      case 'processing': return 'ArrowPathIcon';
      case 'failed': return 'XCircleIcon';
      default: return 'ClockIcon';
    }
  };

  const renderExportTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Data Export Configuration</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Data Type
              </label>
              <div className="space-y-2">
                {dataTypes.map(type => (
                  <div key={type.id} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      id={type.id}
                      name="dataType"
                      value={type.id}
                      checked={exportConfig.dataType === type.id}
                      onChange={(e) => setExportConfig({...exportConfig, dataType: e.target.value})}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <label htmlFor={type.id} className="cursor-pointer">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">{type.name}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{type.recordCount} records</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{type.description}</p>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Export Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                {formats.map(format => (
                  <div key={format.value} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      id={format.value}
                      name="format"
                      value={format.value}
                      checked={exportConfig.format === format.value}
                      onChange={(e) => setExportConfig({...exportConfig, format: e.target.value})}
                      className="mr-3"
                    />
                    <Icon name={format.icon} className="h-5 w-5 text-gray-500 mr-2" />
                    <label htmlFor={format.value} className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                      {format.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Date Range
              </label>
              <select
                value={exportConfig.dateRange}
                onChange={(e) => setExportConfig({...exportConfig, dateRange: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-3"
              >
                <option value="last_week">Last Week</option>
                <option value="last_month">Last Month</option>
                <option value="last_quarter">Last Quarter</option>
                <option value="last_6_months">Last 6 Months</option>
                <option value="last_year">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>

              {exportConfig.dateRange === 'custom' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">From Date</label>
                    <input
                      type="date"
                      value={exportConfig.customDateFrom}
                      onChange={(e) => setExportConfig({...exportConfig, customDateFrom: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">To Date</label>
                    <input
                      type="date"
                      value={exportConfig.customDateTo}
                      onChange={(e) => setExportConfig({...exportConfig, customDateTo: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Department Filter
              </label>
              <select
                multiple
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-32"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple departments</p>
            </div>

            {exportConfig.dataType && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Include Fields
                </label>
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-700 max-h-40 overflow-y-auto">
                  {dataTypes.find(type => type.id === exportConfig.dataType)?.fields.map(field => (
                    <div key={field} className="flex items-center space-x-2 mb-2">
                      <input
                        type="checkbox"
                        id={field}
                        defaultChecked
                        className="rounded border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor={field} className="text-sm text-gray-700 dark:text-gray-300">
                        {field}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="includeHeaders"
                className="rounded border-gray-300 dark:border-gray-600"
                defaultChecked
              />
              <label htmlFor="includeHeaders" className="text-sm text-gray-700 dark:text-gray-300">
                Include column headers
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="compressFile"
                className="rounded border-gray-300 dark:border-gray-600"
              />
              <label htmlFor="compressFile" className="text-sm text-gray-700 dark:text-gray-300">
                Compress file (.zip)
              </label>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
              Preview
            </button>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Start Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Export History</h3>
          <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
            <Icon name="TrashIcon" className="h-4 w-4 mr-2" />
            Clear History
          </button>
        </div>

        <div className="space-y-4">
          {exportHistory.map(export_item => (
            <div key={export_item.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{export_item.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1 ${getStatusColor(export_item.status)}`}>
                      <Icon name={getStatusIcon(export_item.status)} className="h-3 w-3" />
                      <span>{export_item.status}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{export_item.dataType}</span>
                    <span>•</span>
                    <span>{export_item.format.toUpperCase()}</span>
                    <span>•</span>
                    <span>By {export_item.createdBy}</span>
                    <span>•</span>
                    <span>{new Date(export_item.createdAt).toLocaleDateString()}</span>
                  </div>
                  {export_item.errorMessage && (
                    <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                      <Icon name="ExclamationTriangleIcon" className="h-4 w-4 inline mr-1" />
                      {export_item.errorMessage}
                    </p>
                  )}
                </div>
                <div className="flex space-x-2 ml-4">
                  {export_item.status === 'completed' && (
                    <button 
                      onClick={() => setSelectedExport(export_item)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Icon name="EyeIcon" className="h-4 w-4" />
                    </button>
                  )}
                  {export_item.status === 'completed' && (
                    <button className="text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                      <Icon name="ArrowDownTrayIcon" className="h-4 w-4" />
                    </button>
                  )}
                  {export_item.status === 'failed' && (
                    <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Icon name="ArrowPathIcon" className="h-4 w-4" />
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Icon name="TrashIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {export_item.status === 'completed' && (
                  <>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="DocumentIcon" className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">File Size</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{export_item.fileSize}</span>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="TableCellsIcon" className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Records</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{export_item.recordCount}</span>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="ArrowDownTrayIcon" className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Downloads</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{export_item.downloadCount}</span>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="ClockIcon" className="h-4 w-4 text-gray-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Expires</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(export_item.expiresAt).toLocaleDateString()}
                      </span>
                    </div>
                  </>
                )}

                {export_item.status === 'processing' && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded col-span-full">
                    <div className="flex items-center space-x-2">
                      <Icon name="ArrowPathIcon" className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin" />
                      <span className="text-sm text-blue-700 dark:text-blue-300">Export in progress... This may take a few minutes.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderScheduledTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scheduled Exports</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Schedule Export
          </button>
        </div>

        <div className="text-center py-12">
          <Icon name="CalendarIcon" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Scheduled Exports</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Set up automated exports to run on a regular schedule
          </p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Create Schedule
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'export', label: 'New Export', icon: 'ArrowDownTrayIcon', component: renderExportTab },
    { id: 'history', label: 'Export History', icon: 'ClockIcon', component: renderHistoryTab },
    { id: 'scheduled', label: 'Scheduled Exports', icon: 'CalendarIcon', component: renderScheduledTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Data Export</h1>
            <p className="text-gray-600 dark:text-gray-400">Export HR data in various formats for reporting and analysis</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="Cog6ToothIcon" className="h-4 w-4 mr-2" />
              Settings
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="DocumentIcon" className="h-4 w-4 mr-2" />
              Export Templates
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

      {selectedExport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedExport.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Export Details</p>
                </div>
                <button
                  onClick={() => setSelectedExport(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Export Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Data Type:</strong> {selectedExport.dataType}</div>
                    <div><strong>Format:</strong> {selectedExport.format.toUpperCase()}</div>
                    <div><strong>Date Range:</strong> {selectedExport.dateRange.replace('_', ' ')}</div>
                    <div><strong>Created By:</strong> {selectedExport.createdBy}</div>
                    <div><strong>Created:</strong> {new Date(selectedExport.createdAt).toLocaleString()}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">File Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>File Size:</strong> {selectedExport.fileSize}</div>
                    <div><strong>Records:</strong> {selectedExport.recordCount}</div>
                    <div><strong>Downloads:</strong> {selectedExport.downloadCount}</div>
                    <div><strong>Expires:</strong> {new Date(selectedExport.expiresAt).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <Icon name="ArrowDownTrayIcon" className="h-4 w-4 inline mr-2" />
                  Download File
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  Share Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DataExport;