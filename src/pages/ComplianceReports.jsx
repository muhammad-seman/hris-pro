import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const ComplianceReports = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedFramework, setSelectedFramework] = useState('all');

  const complianceReports = [
    {
      id: 1,
      name: 'GDPR Data Privacy Audit',
      framework: 'GDPR',
      category: 'Data Privacy',
      description: 'Comprehensive audit of personal data processing and storage compliance',
      lastGenerated: '2024-01-20',
      nextDue: '2024-04-20',
      status: 'compliant',
      complianceScore: 96,
      findings: {
        passed: 28,
        warnings: 2,
        critical: 0
      },
      requirements: [
        'Data minimization principles',
        'Consent management',
        'Right to be forgotten',
        'Data breach notification'
      ],
      responsible: 'Jennifer Lee',
      frequency: 'quarterly'
    },
    {
      id: 2,
      name: 'Equal Employment Opportunity Report',
      framework: 'EEO',
      category: 'Employment Equity',
      description: 'EEO-1 compliance reporting for workforce demographics and diversity',
      lastGenerated: '2024-01-15',
      nextDue: '2024-09-30',
      status: 'compliant',
      complianceScore: 88,
      findings: {
        passed: 25,
        warnings: 4,
        critical: 1
      },
      requirements: [
        'Demographic data collection',
        'Job category classification',
        'Compensation equity analysis',
        'Hiring practices review'
      ],
      responsible: 'Sarah Johnson',
      frequency: 'annually'
    },
    {
      id: 3,
      name: 'OSHA Safety Compliance Audit',
      framework: 'OSHA',
      category: 'Workplace Safety',
      description: 'Occupational safety and health compliance assessment',
      lastGenerated: '2024-01-10',
      nextDue: '2024-02-10',
      status: 'needs_attention',
      complianceScore: 73,
      findings: {
        passed: 18,
        warnings: 7,
        critical: 3
      },
      requirements: [
        'Incident reporting procedures',
        'Safety training records',
        'Hazard communication',
        'Personal protective equipment'
      ],
      responsible: 'Mike Chen',
      frequency: 'monthly'
    },
    {
      id: 4,
      name: 'SOX Internal Controls Assessment',
      framework: 'SOX',
      category: 'Financial Controls',
      description: 'Sarbanes-Oxley compliance for HR-related financial controls',
      lastGenerated: '2024-01-05',
      nextDue: '2024-07-05',
      status: 'compliant',
      complianceScore: 92,
      findings: {
        passed: 22,
        warnings: 3,
        critical: 0
      },
      requirements: [
        'Payroll controls',
        'Expense management',
        'Segregation of duties',
        'Documentation standards'
      ],
      responsible: 'Lisa Wong',
      frequency: 'semi-annually'
    },
    {
      id: 5,
      name: 'FLSA Wage & Hour Compliance',
      framework: 'FLSA',
      category: 'Labor Standards',
      description: 'Fair Labor Standards Act compliance for wage and hour practices',
      lastGenerated: '2024-01-22',
      nextDue: '2024-02-22',
      status: 'non_compliant',
      complianceScore: 65,
      findings: {
        passed: 15,
        warnings: 8,
        critical: 5
      },
      requirements: [
        'Overtime calculations',
        'Minimum wage compliance',
        'Break time documentation',
        'Exempt vs non-exempt classification'
      ],
      responsible: 'David Kim',
      frequency: 'monthly'
    }
  ];

  const frameworks = [
    'all',
    'GDPR',
    'EEO',
    'OSHA',
    'SOX',
    'FLSA',
    'ADA',
    'FMLA'
  ];

  const complianceMetrics = {
    overallScore: 85,
    compliantReports: 3,
    needsAttention: 1,
    nonCompliant: 1,
    totalFindings: 158,
    criticalIssues: 9,
    overdueReports: 2
  };

  const upcomingDeadlines = [
    {
      reportName: 'OSHA Safety Compliance Audit',
      dueDate: '2024-02-10',
      daysLeft: 19,
      priority: 'high'
    },
    {
      reportName: 'FLSA Wage & Hour Compliance',
      dueDate: '2024-02-22',
      daysLeft: 31,
      priority: 'critical'
    },
    {
      reportName: 'GDPR Data Privacy Audit',
      dueDate: '2024-04-20',
      daysLeft: 88,
      priority: 'medium'
    },
    {
      reportName: 'SOX Internal Controls Assessment',
      dueDate: '2024-07-05',
      daysLeft: 164,
      priority: 'low'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'compliant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'needs_attention': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'non_compliant': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'compliant': return 'CheckCircleIcon';
      case 'needs_attention': return 'ExclamationTriangleIcon';
      case 'non_compliant': return 'XCircleIcon';
      default: return 'ClockIcon';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredReports = selectedFramework === 'all' 
    ? complianceReports 
    : complianceReports.filter(report => report.framework === selectedFramework);

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Score</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{complianceMetrics.overallScore}%</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="ShieldCheckIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Compliant Reports</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{complianceMetrics.compliantReports}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="CheckCircleIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Critical Issues</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{complianceMetrics.criticalIssues}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <Icon name="ExclamationTriangleIcon" className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Overdue Reports</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{complianceMetrics.overdueReports}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="ClockIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Reports</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <select
              value={selectedFramework}
              onChange={(e) => setSelectedFramework(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              {frameworks.map(framework => (
                <option key={framework} value={framework}>
                  {framework === 'all' ? 'All Frameworks' : framework}
                </option>
              ))}
            </select>
            
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
              Generate Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredReports.map(report => (
            <div key={report.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{report.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1 ${getStatusColor(report.status)}`}>
                      <Icon name={getStatusIcon(report.status)} className="h-3 w-3" />
                      <span>{report.status.replace('_', ' ')}</span>
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                      {report.framework}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{report.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>Category: {report.category}</span>
                    <span>•</span>
                    <span>Responsible: {report.responsible}</span>
                    <span>•</span>
                    <span>Frequency: {report.frequency}</span>
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
                    <Icon name="ArrowDownTrayIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                    <Icon name="ArrowPathIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="ChartBarIcon" className="h-4 w-4 text-gray-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Score</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{report.complianceScore}%</span>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="CheckCircleIcon" className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Passed</span>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">{report.findings.passed}</span>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="ExclamationTriangleIcon" className="h-4 w-4 text-yellow-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Warnings</span>
                  </div>
                  <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{report.findings.warnings}</span>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="XCircleIcon" className="h-4 w-4 text-red-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">Critical</span>
                  </div>
                  <span className="text-lg font-bold text-red-600 dark:text-red-400">{report.findings.critical}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Last Generated:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{new Date(report.lastGenerated).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Next Due:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{new Date(report.nextDue).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDashboardTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Upcoming Deadlines</h3>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{deadline.reportName}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Due: {new Date(deadline.dueDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {deadline.daysLeft} days
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(deadline.priority)}`}>
                    {deadline.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Compliance by Framework</h3>
          <div className="space-y-4">
            {frameworks.slice(1).map((framework, index) => {
              const frameworkReports = complianceReports.filter(r => r.framework === framework);
              const avgScore = frameworkReports.length > 0 
                ? Math.round(frameworkReports.reduce((sum, r) => sum + r.complianceScore, 0) / frameworkReports.length)
                : 0;
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500', 'bg-pink-500'];
              
              return (
                <div key={framework} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{framework}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{frameworkReports.length} reports</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`${colors[index % colors.length]} h-2 rounded-full`}
                        style={{ width: `${avgScore}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white w-10 text-right">
                      {avgScore}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              action: 'Generated GDPR Data Privacy Audit report',
              user: 'Jennifer Lee',
              time: '2 hours ago',
              status: 'completed'
            },
            {
              action: 'Updated OSHA Safety Compliance checklist',
              user: 'Mike Chen',
              time: '1 day ago',
              status: 'updated'
            },
            {
              action: 'Critical finding identified in FLSA report',
              user: 'System Alert',
              time: '2 days ago',
              status: 'alert'
            },
            {
              action: 'SOX Internal Controls assessment scheduled',
              user: 'Lisa Wong',
              time: '3 days ago',
              status: 'scheduled'
            }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
              <div className={`p-2 rounded-full ${
                activity.status === 'completed' ? 'bg-green-100 dark:bg-green-900' :
                activity.status === 'alert' ? 'bg-red-100 dark:bg-red-900' :
                activity.status === 'updated' ? 'bg-blue-100 dark:bg-blue-900' :
                'bg-yellow-100 dark:bg-yellow-900'
              }`}>
                <Icon 
                  name={
                    activity.status === 'completed' ? 'CheckCircleIcon' :
                    activity.status === 'alert' ? 'ExclamationTriangleIcon' :
                    activity.status === 'updated' ? 'PencilIcon' :
                    'CalendarIcon'
                  } 
                  className={`h-4 w-4 ${
                    activity.status === 'completed' ? 'text-green-600 dark:text-green-400' :
                    activity.status === 'alert' ? 'text-red-600 dark:text-red-400' :
                    activity.status === 'updated' ? 'text-blue-600 dark:text-blue-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.user} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAuditsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Audit Schedule</h3>
        
        <div className="text-center py-12">
          <Icon name="CalendarIcon" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Scheduled Audits</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Set up automated compliance audits and assessments
          </p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Schedule Audit
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'reports', label: 'Compliance Reports', icon: 'DocumentCheckIcon', component: renderReportsTab },
    { id: 'dashboard', label: 'Dashboard', icon: 'ChartPieIcon', component: renderDashboardTab },
    { id: 'audits', label: 'Audit Schedule', icon: 'CalendarDaysIcon', component: renderAuditsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Compliance Reports</h1>
            <p className="text-gray-600 dark:text-gray-400">Monitor regulatory compliance and generate audit reports</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="Cog6ToothIcon" className="h-4 w-4 mr-2" />
              Settings
            </button>
            <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              <Icon name="ExclamationTriangleIcon" className="h-4 w-4 mr-2" />
              Alert Management
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
                  <p className="text-gray-600 dark:text-gray-400">{selectedReport.framework} • {selectedReport.category}</p>
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
                    <div><strong>Framework:</strong> {selectedReport.framework}</div>
                    <div><strong>Category:</strong> {selectedReport.category}</div>
                    <div><strong>Responsible:</strong> {selectedReport.responsible}</div>
                    <div><strong>Frequency:</strong> {selectedReport.frequency}</div>
                    <div><strong>Status:</strong> 
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(selectedReport.status)}`}>
                        {selectedReport.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Compliance Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Overall Score:</strong> {selectedReport.complianceScore}%</div>
                    <div><strong>Passed Checks:</strong> {selectedReport.findings.passed}</div>
                    <div><strong>Warnings:</strong> {selectedReport.findings.warnings}</div>
                    <div><strong>Critical Issues:</strong> {selectedReport.findings.critical}</div>
                    <div><strong>Last Generated:</strong> {new Date(selectedReport.lastGenerated).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  {selectedReport.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedReport.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <Icon name="CheckCircleIcon" className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Generate Report
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  View History
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ComplianceReports;