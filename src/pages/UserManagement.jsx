import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      avatar: 'SJ',
      role: 'HR Manager',
      department: 'Human Resources',
      status: 'active',
      lastLogin: '2024-01-22 09:30:00',
      createdAt: '2023-06-15',
      permissions: ['user_read', 'user_write', 'employee_read', 'employee_write', 'report_read'],
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      manager: 'Jennifer Lee',
      employeeId: 'EMP001'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@company.com',
      avatar: 'MC',
      role: 'IT Administrator',
      department: 'Information Technology',
      status: 'active',
      lastLogin: '2024-01-22 14:15:00',
      createdAt: '2023-03-10',
      permissions: ['user_read', 'user_write', 'user_delete', 'system_admin', 'audit_read'],
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      manager: 'David Kim',
      employeeId: 'EMP002'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@company.com',
      avatar: 'ER',
      role: 'Employee',
      department: 'Marketing',
      status: 'active',
      lastLogin: '2024-01-21 16:45:00',
      createdAt: '2023-09-20',
      permissions: ['user_read', 'employee_read'],
      phone: '+1 (555) 345-6789',
      location: 'Los Angeles, CA',
      manager: 'Lisa Wong',
      employeeId: 'EMP003'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@company.com',
      avatar: 'JW',
      role: 'Department Manager',
      department: 'Engineering',
      status: 'inactive',
      lastLogin: '2024-01-15 10:20:00',
      createdAt: '2023-01-08',
      permissions: ['user_read', 'employee_read', 'employee_write', 'report_read'],
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA',
      manager: 'Tom Anderson',
      employeeId: 'EMP004'
    },
    {
      id: 5,
      name: 'Lisa Wong',
      email: 'lisa.wong@company.com',
      avatar: 'LW',
      role: 'Super Admin',
      department: 'Administration',
      status: 'active',
      lastLogin: '2024-01-22 08:00:00',
      createdAt: '2022-11-01',
      permissions: ['user_read', 'user_write', 'user_delete', 'system_admin', 'audit_read', 'audit_write'],
      phone: '+1 (555) 567-8901',
      location: 'Austin, TX',
      manager: null,
      employeeId: 'EMP005'
    }
  ];

  const roles = [
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      userCount: 1,
      permissions: ['user_read', 'user_write', 'user_delete', 'system_admin', 'audit_read', 'audit_write'],
      color: 'bg-red-500'
    },
    {
      id: 2,
      name: 'HR Manager',
      description: 'Human resources management with employee access',
      userCount: 3,
      permissions: ['user_read', 'user_write', 'employee_read', 'employee_write', 'report_read'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'IT Administrator',
      description: 'System administration and user management',
      userCount: 2,
      permissions: ['user_read', 'user_write', 'user_delete', 'system_admin', 'audit_read'],
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Department Manager',
      description: 'Department-level management access',
      userCount: 5,
      permissions: ['user_read', 'employee_read', 'employee_write', 'report_read'],
      color: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Employee',
      description: 'Basic employee access',
      userCount: 25,
      permissions: ['user_read', 'employee_read'],
      color: 'bg-gray-500'
    }
  ];

  const departments = [...new Set(users.map(user => user.department))];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesDepartment = filterDepartment === 'all' || user.department === filterDepartment;
    
    return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
  });

  const renderUsersTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Accounts</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative">
              <Icon name="SearchIcon" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-full sm:w-64"
              />
            </div>
            
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Roles</option>
              {[...new Set(users.map(user => user.role))].map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>

            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role & Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">{user.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{user.role}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(user.lastLogin).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setSelectedUser(user)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Icon name="EyeIcon" className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <Icon name="PencilIcon" className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                        <Icon name="TrashIcon" className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRolesTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Roles</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Add Role
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roles.map(role => (
            <div key={role.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${role.color} rounded-lg flex items-center justify-center`}>
                    <Icon name="UsersIcon" className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{role.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.userCount} users</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Icon name="PencilIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-red-400 hover:text-red-600 dark:hover:text-red-300">
                    <Icon name="TrashIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{role.description}</p>

              <div className="space-y-2">
                <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">Permissions</h5>
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
                      +{role.permissions.length - 3}
                    </span>
                  )}
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
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Permission Matrix</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Permission</th>
                {roles.map(role => (
                  <th key={role.id} className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                    {role.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {['user_read', 'user_write', 'user_delete', 'employee_read', 'employee_write', 'system_admin', 'audit_read', 'audit_write', 'report_read'].map(permission => (
                <tr key={permission} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    {permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </td>
                  {roles.map(role => (
                    <td key={role.id} className="py-3 px-4 text-center">
                      {role.permissions.includes(permission) ? (
                        <Icon name="CheckCircleIcon" className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <Icon name="XCircleIcon" className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'users', label: 'Users', icon: 'UsersIcon', component: renderUsersTab },
    { id: 'roles', label: 'Roles', icon: 'UserGroupIcon', component: renderRolesTab },
    { id: 'permissions', label: 'Permissions', icon: 'CogIcon', component: renderPermissionsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage users, roles, and permissions</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
              Add User
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

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {selectedUser.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedUser.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedUser.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{selectedUser.employeeId}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Email:</strong> {selectedUser.email}</div>
                    <div><strong>Phone:</strong> {selectedUser.phone}</div>
                    <div><strong>Location:</strong> {selectedUser.location}</div>
                    <div><strong>Department:</strong> {selectedUser.department}</div>
                    {selectedUser.manager && <div><strong>Manager:</strong> {selectedUser.manager}</div>}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Account Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Status:</strong> 
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        selectedUser.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {selectedUser.status}
                      </span>
                    </div>
                    <div><strong>Created:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}</div>
                    <div><strong>Last Login:</strong> {new Date(selectedUser.lastLogin).toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.permissions.map(permission => (
                    <span 
                      key={permission}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {permission.replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Edit User
                </button>
                <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                  Reset Password
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default UserManagement;