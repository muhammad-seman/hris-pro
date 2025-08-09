import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const RolePermissions = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const [selectedRole, setSelectedRole] = useState(null);
  const [showCreateRole, setShowCreateRole] = useState(false);

  const permissions = [
    {
      category: 'User Management',
      permissions: [
        { id: 'user_read', name: 'View Users', description: 'View user profiles and information' },
        { id: 'user_write', name: 'Edit Users', description: 'Create and edit user accounts' },
        { id: 'user_delete', name: 'Delete Users', description: 'Delete user accounts' },
      ]
    },
    {
      category: 'Employee Management',
      permissions: [
        { id: 'employee_read', name: 'View Employees', description: 'View employee profiles and data' },
        { id: 'employee_write', name: 'Edit Employees', description: 'Create and edit employee records' },
        { id: 'employee_delete', name: 'Delete Employees', description: 'Delete employee records' },
      ]
    },
    {
      category: 'Payroll & Benefits',
      permissions: [
        { id: 'payroll_read', name: 'View Payroll', description: 'View payroll information' },
        { id: 'payroll_write', name: 'Process Payroll', description: 'Create and process payroll' },
        { id: 'benefits_read', name: 'View Benefits', description: 'View benefits information' },
        { id: 'benefits_write', name: 'Manage Benefits', description: 'Manage employee benefits' },
      ]
    },
    {
      category: 'Reports & Analytics',
      permissions: [
        { id: 'report_read', name: 'View Reports', description: 'Access reports and analytics' },
        { id: 'report_write', name: 'Create Reports', description: 'Create custom reports' },
        { id: 'analytics_read', name: 'View Analytics', description: 'Access analytics dashboards' },
      ]
    },
    {
      category: 'System Administration',
      permissions: [
        { id: 'system_admin', name: 'System Admin', description: 'Full system administration access' },
        { id: 'audit_read', name: 'View Audit Logs', description: 'Access audit logs and history' },
        { id: 'audit_write', name: 'Manage Audit', description: 'Configure audit settings' },
        { id: 'backup_manage', name: 'Manage Backups', description: 'Create and restore backups' },
      ]
    },
    {
      category: 'Recruitment',
      permissions: [
        { id: 'recruitment_read', name: 'View Recruitment', description: 'View recruitment data' },
        { id: 'recruitment_write', name: 'Manage Recruitment', description: 'Manage recruitment process' },
        { id: 'job_posting_write', name: 'Create Job Postings', description: 'Create and edit job postings' },
      ]
    }
  ];

  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      userCount: 1,
      permissions: ['system_admin', 'user_read', 'user_write', 'user_delete', 'employee_read', 'employee_write', 'employee_delete', 'payroll_read', 'payroll_write', 'benefits_read', 'benefits_write', 'report_read', 'report_write', 'analytics_read', 'audit_read', 'audit_write', 'backup_manage', 'recruitment_read', 'recruitment_write', 'job_posting_write'],
      color: 'bg-red-500',
      isSystem: true,
      createdAt: '2022-01-01',
      lastModified: '2023-06-15'
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Human resources management with employee access',
      userCount: 3,
      permissions: ['user_read', 'user_write', 'employee_read', 'employee_write', 'payroll_read', 'benefits_read', 'benefits_write', 'report_read', 'recruitment_read', 'recruitment_write', 'job_posting_write'],
      color: 'bg-blue-500',
      isSystem: false,
      createdAt: '2022-02-15',
      lastModified: '2023-11-20'
    },
    {
      id: 3,
      name: 'IT Administrator',
      description: 'System administration and user management',
      userCount: 2,
      permissions: ['user_read', 'user_write', 'user_delete', 'system_admin', 'audit_read', 'backup_manage'],
      color: 'bg-green-500',
      isSystem: false,
      createdAt: '2022-03-10',
      lastModified: '2023-09-05'
    },
    {
      id: 4,
      name: 'Department Manager',
      description: 'Department-level management access',
      userCount: 5,
      permissions: ['user_read', 'employee_read', 'employee_write', 'report_read', 'analytics_read'],
      color: 'bg-purple-500',
      isSystem: false,
      createdAt: '2022-04-20',
      lastModified: '2023-12-01'
    },
    {
      id: 5,
      name: 'Payroll Specialist',
      description: 'Payroll and benefits management',
      userCount: 2,
      permissions: ['employee_read', 'payroll_read', 'payroll_write', 'benefits_read', 'benefits_write', 'report_read'],
      color: 'bg-yellow-500',
      isSystem: false,
      createdAt: '2022-05-10',
      lastModified: '2023-10-15'
    },
    {
      id: 6,
      name: 'Employee',
      description: 'Basic employee access',
      userCount: 25,
      permissions: ['user_read', 'employee_read'],
      color: 'bg-gray-500',
      isSystem: true,
      createdAt: '2022-01-01',
      lastModified: '2023-03-12'
    }
  ];

  const renderRolesTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Role Management</h3>
          <button 
            onClick={() => setShowCreateRole(true)}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Create Role
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roles.map(role => (
            <div key={role.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${role.color} rounded-lg flex items-center justify-center`}>
                    <Icon name="UsersIcon" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{role.name}</h4>
                      {role.isSystem && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs rounded">
                          System
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.userCount} users assigned</p>
                  </div>
                </div>
                {!role.isSystem && (
                  <div className="flex space-x-1">
                    <button 
                      onClick={() => setSelectedRole(role)}
                      className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Icon name="EyeIcon" className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Icon name="PencilIcon" className="h-4 w-4" />
                    </button>
                    <button className="text-red-400 hover:text-red-600 dark:hover:text-red-300">
                      <Icon name="TrashIcon" className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{role.description}</p>

              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                    Permissions ({role.permissions.length})
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.slice(0, 3).map(permission => (
                      <span 
                        key={permission}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {permission.replace('_', ' ')}
                      </span>
                    ))}
                    {role.permissions.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded">
                        +{role.permissions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Created: {new Date(role.createdAt).toLocaleDateString()}</span>
                    <span>Modified: {new Date(role.lastModified).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPermissionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Permission Catalog</h3>
        
        <div className="space-y-6">
          {permissions.map((category, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{category.category}</h4>
              <div className="space-y-3">
                {category.permissions.map(permission => (
                  <div key={permission.id} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900 dark:text-white">{permission.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{permission.description}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        {permission.id}
                      </span>
                    </div>
                    <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                      {roles.filter(role => role.permissions.includes(permission.id)).length} roles
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

  const renderMatrixTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Role-Permission Matrix</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 sticky left-0 bg-white dark:bg-gray-800 min-w-[200px]">
                  Permission
                </th>
                {roles.map(role => (
                  <th key={role.id} className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300 min-w-[120px]">
                    <div className="flex flex-col items-center space-y-1">
                      <div className={`w-6 h-6 ${role.color} rounded`}></div>
                      <span className="text-xs">{role.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissions.map(category => 
                category.permissions.map(permission => (
                  <tr key={permission.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4 text-sm text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      <div>
                        <div className="font-medium">{permission.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{category.category}</div>
                      </div>
                    </td>
                    {roles.map(role => (
                      <td key={role.id} className="py-3 px-4 text-center">
                        {role.permissions.includes(permission.id) ? (
                          <Icon name="CheckCircleIcon" className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <Icon name="XCircleIcon" className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'roles', label: 'Roles', icon: 'UserGroupIcon', component: renderRolesTab },
    { id: 'permissions', label: 'Permissions', icon: 'CogIcon', component: renderPermissionsTab },
    { id: 'matrix', label: 'Matrix View', icon: 'Squares2X2Icon', component: renderMatrixTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Role & Permissions</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage roles, permissions and access control</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowPathIcon" className="h-4 w-4 mr-2" />
              Sync Permissions
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

      {selectedRole && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${selectedRole.color} rounded-lg flex items-center justify-center`}>
                    <Icon name="UsersIcon" className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedRole.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedRole.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{selectedRole.userCount} users assigned</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Role Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Created:</strong> {new Date(selectedRole.createdAt).toLocaleDateString()}</div>
                    <div><strong>Last Modified:</strong> {new Date(selectedRole.lastModified).toLocaleDateString()}</div>
                    <div><strong>Users Assigned:</strong> {selectedRole.userCount}</div>
                    <div><strong>Type:</strong> {selectedRole.isSystem ? 'System Role' : 'Custom Role'}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Permission Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Total Permissions:</strong> {selectedRole.permissions.length}</div>
                    {permissions.map(category => {
                      const categoryPerms = category.permissions.filter(p => selectedRole.permissions.includes(p.id));
                      if (categoryPerms.length > 0) {
                        return (
                          <div key={category.category}>
                            <strong>{category.category}:</strong> {categoryPerms.length}/{category.permissions.length}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Detailed Permissions</h4>
                <div className="space-y-4">
                  {permissions.map(category => {
                    const categoryPerms = category.permissions.filter(p => selectedRole.permissions.includes(p.id));
                    if (categoryPerms.length === 0) return null;
                    
                    return (
                      <div key={category.category} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">{category.category}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {categoryPerms.map(permission => (
                            <div key={permission.id} className="flex items-center space-x-2 text-sm">
                              <Icon name="CheckCircleIcon" className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700 dark:text-gray-300">{permission.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Edit Role
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  Clone Role
                </button>
                {!selectedRole.isSystem && (
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                    Delete Role
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default RolePermissions;