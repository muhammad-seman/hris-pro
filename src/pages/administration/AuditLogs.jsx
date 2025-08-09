import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const AuditLogs = () => {
  const [activeTab, setActiveTab] = useState('logs');
  const [selectedLog, setSelectedLog] = useState(null);
  const [filterModule, setFilterModule] = useState('all');
  const [filterAction, setFilterAction] = useState('all');
  const [filterUser, setFilterUser] = useState('all');
  const [dateRange, setDateRange] = useState('7');

  const auditLogs = [
    {
      id: 1,
      timestamp: '2024-01-22 14:30:25',
      user: 'Sarah Johnson',
      userId: 'EMP001',
      userRole: 'HR Manager',
      action: 'UPDATE',
      module: 'Employee Management',
      entity: 'Employee Profile',
      entityId: 'EMP025',
      description: 'Updated employee salary information',
      ipAddress: '192.168.1.105',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      severity: 'medium',
      changes: {
        field: 'salary',
        oldValue: '$75,000',
        newValue: '$80,000'
      },
      additionalData: {
        reason: 'Annual salary review',
        approvedBy: 'Jennifer Lee'
      }
    },
    {
      id: 2,
      timestamp: '2024-01-22 13:15:42',
      user: 'Mike Chen',
      userId: 'EMP002',
      userRole: 'IT Administrator',
      action: 'CREATE',
      module: 'User Management',
      entity: 'User Account',
      entityId: 'EMP028',
      description: 'Created new user account for John Smith',
      ipAddress: '192.168.1.112',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      severity: 'low',
      changes: {
        field: 'user_creation',
        oldValue: null,
        newValue: 'john.smith@company.com'
      },
      additionalData: {
        initialRole: 'Employee',
        department: 'Marketing'
      }
    },
    {
      id: 3,
      timestamp: '2024-01-22 12:45:18',
      user: 'System',
      userId: 'SYSTEM',
      userRole: 'System',
      action: 'LOGIN_FAILED',
      module: 'Authentication',
      entity: 'Login Attempt',
      entityId: null,
      description: 'Failed login attempt for user emily.rodriguez@company.com',
      ipAddress: '203.0.113.45',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)',
      severity: 'high',
      changes: {
        field: 'login_status',
        oldValue: null,
        newValue: 'failed'
      },
      additionalData: {
        reason: 'Invalid password',
        attemptCount: 3
      }
    },
    {
      id: 4,
      timestamp: '2024-01-22 11:20:33',
      user: 'Jennifer Lee',
      userId: 'EMP003',
      userRole: 'HR Director',
      action: 'DELETE',
      module: 'Policy Management',
      entity: 'Policy Document',
      entityId: 'POL-015',
      description: 'Deleted obsolete workplace policy document',
      ipAddress: '192.168.1.108',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      severity: 'medium',
      changes: {
        field: 'policy_status',
        oldValue: 'active',
        newValue: 'deleted'
      },
      additionalData: {
        policyTitle: 'Remote Work Guidelines v1.0',
        replacedBy: 'POL-018'
      }
    },
    {
      id: 5,
      timestamp: '2024-01-22 10:55:17',
      user: 'Lisa Wong',
      userId: 'EMP004',
      userRole: 'Super Admin',
      action: 'UPDATE',
      module: 'System Configuration',
      entity: 'Security Settings',
      entityId: 'SEC-001',
      description: 'Modified password policy requirements',
      ipAddress: '192.168.1.101',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      severity: 'high',
      changes: {
        field: 'min_password_length',
        oldValue: '8',
        newValue: '12'
      },
      additionalData: {
        affectedUsers: 145,
        effectiveDate: '2024-02-01'
      }
    },
    {
      id: 6,
      timestamp: '2024-01-22 09:30:44',
      user: 'David Kim',
      userId: 'EMP006',
      userRole: 'Department Manager',
      action: 'EXPORT',
      module: 'Reports',
      entity: 'Employee Report',
      entityId: 'RPT-2024-001',
      description: 'Exported quarterly employee performance report',
      ipAddress: '192.168.1.120',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      severity: 'low',
      changes: {
        field: 'data_export',
        oldValue: null,
        newValue: 'performance_q1_2024.xlsx'
      },
      additionalData: {
        recordCount: 87,
        reportType: 'performance'
      }
    },
    {
      id: 7,
      timestamp: '2024-01-21 16:22:11',
      user: 'System',
      userId: 'SYSTEM',
      userRole: 'System',
      action: 'BACKUP',
      module: 'System Maintenance',
      entity: 'Database Backup',
      entityId: 'BACKUP-20240121',
      description: 'Automated daily database backup completed successfully',
      ipAddress: '127.0.0.1',
      userAgent: 'System Process',
      severity: 'low',
      changes: {
        field: 'backup_status',
        oldValue: null,
        newValue: 'completed'
      },
      additionalData: {
        backupSize: '2.1GB',
        duration: '45 minutes'
      }
    },
    {
      id: 8,
      timestamp: '2024-01-21 15:10:28',
      user: 'Tom Anderson',
      userId: 'EMP007',
      userRole: 'Finance Manager',
      action: 'VIEW',
      module: 'Payroll',
      entity: 'Salary Information',
      entityId: 'PAY-2024-001',
      description: 'Accessed confidential payroll data for department review',
      ipAddress: '192.168.1.115',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      severity: 'medium',
      changes: {
        field: 'data_access',
        oldValue: null,
        newValue: 'payroll_january_2024'
      },
      additionalData: {
        department: 'Engineering',
        employeeCount: 45
      }
    }
  ];

  const modules = [...new Set(auditLogs.map(log => log.module))];
  const actions = [...new Set(auditLogs.map(log => log.action))];
  const users = [...new Set(auditLogs.map(log => log.user))].filter(user => user !== 'System');

  const filteredLogs = auditLogs.filter(log => {
    const matchesModule = filterModule === 'all' || log.module === filterModule;
    const matchesAction = filterAction === 'all' || log.action === filterAction;
    const matchesUser = filterUser === 'all' || log.user === filterUser;
    
    // Date filtering
    const logDate = new Date(log.timestamp);
    const now = new Date();
    const daysAgo = parseInt(dateRange);
    const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));
    const matchesDate = logDate >= cutoffDate;
    
    return matchesModule && matchesAction && matchesUser && matchesDate;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case 'CREATE': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'UPDATE': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'VIEW': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'EXPORT': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'LOGIN_FAILED': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'BACKUP': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const totalLogs = auditLogs.length;
  const highSeverityLogs = auditLogs.filter(log => log.severity === 'high').length;
  const systemActions = auditLogs.filter(log => log.user === 'System').length;
  const failedLogins = auditLogs.filter(log => log.action === 'LOGIN_FAILED').length;

  const renderLogsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Events</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalLogs}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="DocumentIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">High Severity</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{highSeverityLogs}</p>
            </div>
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <Icon name="ExclamationTriangleIcon" className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">System Events</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{systemActions}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="ComputerDesktopIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Failed Logins</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{failedLogins}</p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="ShieldExclamationIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Trail</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="1">Last 24 hours</option>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>

            <select
              value={filterModule}
              onChange={(e) => setFilterModule(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Modules</option>
              {modules.map(module => (
                <option key={module} value={module}>{module}</option>
              ))}
            </select>

            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Actions</option>
              {actions.map(action => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>

            <select
              value={filterUser}
              onChange={(e) => setFilterUser(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Users</option>
              {users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {log.user === 'System' ? (
                          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                            <Icon name="ComputerDesktopIcon" className="h-4 w-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                            {log.user.split(' ').map(n => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{log.user}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{log.userRole}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getActionColor(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {log.module}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    <div className="max-w-xs truncate" title={log.description}>
                      {log.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(log.severity)}`}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => setSelectedLog(log)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Icon name="EyeIcon" className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Activity by Module</h3>
          <div className="space-y-4">
            {modules.map((module, index) => {
              const moduleCount = auditLogs.filter(log => log.module === module).length;
              const percentage = Math.round((moduleCount / totalLogs) * 100);
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500'];
              
              return (
                <div key={module} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{module}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${colors[index % colors.length]} h-2 rounded-full`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                      {moduleCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Activity by Action Type</h3>
          <div className="space-y-4">
            {actions.map((action, index) => {
              const actionCount = auditLogs.filter(log => log.action === action).length;
              const percentage = Math.round((actionCount / totalLogs) * 100);
              const colors = ['bg-green-500', 'bg-blue-500', 'bg-red-500', 'bg-gray-500', 'bg-purple-500', 'bg-yellow-500', 'bg-indigo-500'];
              
              return (
                <div key={action} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{action}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${colors[index % colors.length]} h-2 rounded-full`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                      {actionCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Security Events</h3>
        <div className="space-y-4">
          {auditLogs
            .filter(log => log.severity === 'high' || log.action === 'LOGIN_FAILED')
            .slice(0, 10)
            .map(log => (
              <div key={log.id} className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center space-x-3">
                  <Icon name="ExclamationTriangleIcon" className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{log.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {log.user} • {new Date(log.timestamp).toLocaleString()} • {log.ipAddress}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(log.severity)}`}>
                  {log.severity}
                </span>
              </div>
            ))}
        </div>
      </Card>
    </div>
  );

  const renderReportsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Activity Report</h3>
            <Icon name="CalendarIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Generate comprehensive daily activity reports with detailed breakdowns by user, module, and action type.
          </p>
          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Generate Report
          </button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Audit</h3>
            <Icon name="ShieldCheckIcon" className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Security-focused audit report highlighting failed login attempts, permission changes, and suspicious activities.
          </p>
          <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
            Generate Report
          </button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Compliance Report</h3>
            <Icon name="DocumentCheckIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Compliance audit report for regulatory requirements, data access tracking, and policy adherence.
          </p>
          <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
            Generate Report
          </button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Reports</h3>
        <div className="space-y-3">
          {[
            { name: 'Security Audit - January 2024', date: '2024-01-22', type: 'Security', size: '2.4 MB' },
            { name: 'Daily Activity - January 21, 2024', date: '2024-01-21', type: 'Activity', size: '1.1 MB' },
            { name: 'Compliance Report - Q4 2023', date: '2024-01-15', type: 'Compliance', size: '5.8 MB' },
            { name: 'User Access Review - December 2023', date: '2024-01-10', type: 'Access', size: '3.2 MB' }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="DocumentIcon" className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">{report.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {report.type} • {new Date(report.date).toLocaleDateString()} • {report.size}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  <Icon name="EyeIcon" className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                  <Icon name="ArrowDownTrayIcon" className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'logs', label: 'Audit Logs', icon: 'DocumentIcon', component: renderLogsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: renderAnalyticsTab },
    { id: 'reports', label: 'Reports', icon: 'ClipboardDocumentListIcon', component: renderReportsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Audit Logs</h1>
            <p className="text-gray-600 dark:text-gray-400">Monitor system activity and security events</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export Logs
            </button>
            <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              <Icon name="ExclamationTriangleIcon" className="h-4 w-4 mr-2" />
              Security Alert
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

      {selectedLog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="DocumentIcon" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Audit Log Details</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedLog.module} • {selectedLog.action}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {new Date(selectedLog.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Event Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>User:</strong> {selectedLog.user}</div>
                    <div><strong>User ID:</strong> {selectedLog.userId}</div>
                    <div><strong>Role:</strong> {selectedLog.userRole}</div>
                    <div><strong>Action:</strong> 
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getActionColor(selectedLog.action)}`}>
                        {selectedLog.action}
                      </span>
                    </div>
                    <div><strong>Severity:</strong> 
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded ${getSeverityColor(selectedLog.severity)}`}>
                        {selectedLog.severity}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>IP Address:</strong> {selectedLog.ipAddress}</div>
                    <div><strong>Entity:</strong> {selectedLog.entity}</div>
                    <div><strong>Entity ID:</strong> {selectedLog.entityId || 'N/A'}</div>
                    <div><strong>Module:</strong> {selectedLog.module}</div>
                    <div><strong>Timestamp:</strong> {new Date(selectedLog.timestamp).toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{selectedLog.description}</p>
                </div>
              </div>

              {selectedLog.changes && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Changes Made</h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm">
                      <div><strong>Field:</strong> {selectedLog.changes.field}</div>
                      {selectedLog.changes.oldValue && (
                        <div><strong>Old Value:</strong> {selectedLog.changes.oldValue}</div>
                      )}
                      {selectedLog.changes.newValue && (
                        <div><strong>New Value:</strong> {selectedLog.changes.newValue}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {selectedLog.additionalData && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Additional Information</h4>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-sm space-y-1">
                      {Object.entries(selectedLog.additionalData).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">User Agent</h4>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                    {selectedLog.userAgent}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Export Entry
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  View Related
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  Flag as Suspicious
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AuditLogs;