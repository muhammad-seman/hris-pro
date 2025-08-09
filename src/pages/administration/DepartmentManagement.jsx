import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const DepartmentManagement = () => {
  const [activeTab, setActiveTab] = useState('departments');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showCreateDepartment, setShowCreateDepartment] = useState(false);

  const departments = [
    {
      id: 1,
      name: 'Engineering',
      code: 'ENG',
      description: 'Software development and technical operations',
      manager: 'Sarah Johnson',
      managerId: 'EMP001',
      managerEmail: 'sarah.johnson@company.com',
      employeeCount: 45,
      budget: 2500000,
      location: 'San Francisco, CA',
      floor: '3rd Floor',
      costCenter: 'CC-001',
      status: 'active',
      createdAt: '2022-01-15',
      parentDepartment: null,
      subDepartments: ['Frontend Team', 'Backend Team', 'DevOps Team'],
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'AWS', 'Docker'],
      openPositions: 5,
      avgSalary: 95000
    },
    {
      id: 2,
      name: 'Human Resources',
      code: 'HR',
      description: 'Employee relations, recruitment, and HR operations',
      manager: 'Jennifer Lee',
      managerId: 'EMP002',
      managerEmail: 'jennifer.lee@company.com',
      employeeCount: 12,
      budget: 800000,
      location: 'New York, NY',
      floor: '2nd Floor',
      costCenter: 'CC-002',
      status: 'active',
      createdAt: '2022-01-10',
      parentDepartment: null,
      subDepartments: ['Recruitment', 'Employee Relations', 'Payroll'],
      skills: ['Recruitment', 'Employee Relations', 'Compensation', 'Training'],
      openPositions: 2,
      avgSalary: 75000
    },
    {
      id: 3,
      name: 'Marketing',
      code: 'MKT',
      description: 'Brand marketing, digital marketing, and communications',
      manager: 'David Kim',
      managerId: 'EMP003',
      managerEmail: 'david.kim@company.com',
      employeeCount: 25,
      budget: 1200000,
      location: 'Los Angeles, CA',
      floor: '4th Floor',
      costCenter: 'CC-003',
      status: 'active',
      createdAt: '2022-02-01',
      parentDepartment: null,
      subDepartments: ['Digital Marketing', 'Content Marketing', 'Brand Management'],
      skills: ['Digital Marketing', 'Content Creation', 'SEO', 'Social Media', 'Analytics'],
      openPositions: 3,
      avgSalary: 70000
    },
    {
      id: 4,
      name: 'Sales',
      code: 'SAL',
      description: 'Sales operations, business development, and client relations',
      manager: 'Lisa Wong',
      managerId: 'EMP004',
      managerEmail: 'lisa.wong@company.com',
      employeeCount: 30,
      budget: 1800000,
      location: 'Chicago, IL',
      floor: '1st Floor',
      costCenter: 'CC-004',
      status: 'active',
      createdAt: '2022-01-20',
      parentDepartment: null,
      subDepartments: ['Enterprise Sales', 'Inside Sales', 'Customer Success'],
      skills: ['Sales', 'CRM', 'Business Development', 'Customer Relations'],
      openPositions: 7,
      avgSalary: 80000
    },
    {
      id: 5,
      name: 'Finance',
      code: 'FIN',
      description: 'Financial planning, accounting, and business analysis',
      manager: 'Tom Anderson',
      managerId: 'EMP005',
      managerEmail: 'tom.anderson@company.com',
      employeeCount: 15,
      budget: 900000,
      location: 'Austin, TX',
      floor: '2nd Floor',
      costCenter: 'CC-005',
      status: 'active',
      createdAt: '2022-01-08',
      parentDepartment: null,
      subDepartments: ['Accounting', 'Financial Planning', 'Business Analysis'],
      skills: ['Accounting', 'Financial Analysis', 'Budgeting', 'Excel', 'SAP'],
      openPositions: 1,
      avgSalary: 85000
    },
    {
      id: 6,
      name: 'Operations',
      code: 'OPS',
      description: 'Business operations and process management',
      manager: 'Mike Chen',
      managerId: 'EMP006',
      managerEmail: 'mike.chen@company.com',
      employeeCount: 18,
      budget: 750000,
      location: 'Seattle, WA',
      floor: '3rd Floor',
      costCenter: 'CC-006',
      status: 'restructuring',
      createdAt: '2022-03-15',
      parentDepartment: null,
      subDepartments: ['Process Management', 'Quality Assurance'],
      skills: ['Operations Management', 'Process Improvement', 'Quality Control'],
      openPositions: 0,
      avgSalary: 72000
    }
  ];

  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employeeCount, 0);
  const totalBudget = departments.reduce((sum, dept) => sum + dept.budget, 0);
  const totalOpenPositions = departments.reduce((sum, dept) => sum + dept.openPositions, 0);

  const renderDepartmentsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Departments</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{departments.length}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Icon name="BuildingOfficeIcon" className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Employees</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalEmployees}</p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <Icon name="UsersIcon" className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Budget</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                ${(totalBudget / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <Icon name="CurrencyDollarIcon" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Open Positions</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalOpenPositions}</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Icon name="BriefcaseIcon" className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Department Overview</h3>
          <button 
            onClick={() => setShowCreateDepartment(true)}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Add Department
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {departments.map(department => (
            <div key={department.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{department.code}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{department.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{department.location}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button 
                    onClick={() => setSelectedDepartment(department)}
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon name="EyeIcon" className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <Icon name="PencilIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{department.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Manager:</span>
                  <span className="text-gray-900 dark:text-white">{department.manager}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Employees:</span>
                  <span className="text-gray-900 dark:text-white">{department.employeeCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                  <span className="text-gray-900 dark:text-white">
                    ${(department.budget / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Open Positions:</span>
                  <span className="text-gray-900 dark:text-white">{department.openPositions}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    department.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    department.status === 'restructuring' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {department.status}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Est. {new Date(department.createdAt).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHierarchyTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Organizational Hierarchy</h3>
        
        <div className="space-y-4">
          {departments.map(department => (
            <div key={department.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{department.code}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{department.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {department.manager} • {department.employeeCount} employees
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  department.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {department.status}
                </span>
              </div>

              {department.subDepartments.length > 0 && (
                <div className="ml-6 space-y-2">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sub-departments:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {department.subDepartments.map((subDept, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <Icon name="ChevronRightIcon" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{subDept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Distribution</h3>
          <div className="space-y-4">
            {departments.map((department, index) => {
              const percentage = (department.employeeCount / totalEmployees * 100).toFixed(1);
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500'];
              return (
                <div key={department.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{department.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{department.employeeCount}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Budget Allocation</h3>
          <div className="space-y-4">
            {departments.map((department, index) => {
              const percentage = (department.budget / totalBudget * 100).toFixed(1);
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-red-500', 'bg-indigo-500'];
              return (
                <div key={department.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${colors[index % colors.length]} rounded`}></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{department.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${(department.budget / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Department</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Employees</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Budget</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Avg Salary</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Open Positions</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {departments.map(department => (
                <tr key={department.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">{department.code}</span>
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{department.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{department.employeeCount}</td>
                  <td className="py-3 px-4 text-center text-gray-900 dark:text-white">
                    ${(department.budget / 1000000).toFixed(1)}M
                  </td>
                  <td className="py-3 px-4 text-center text-gray-900 dark:text-white">
                    ${department.avgSalary.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-900 dark:text-white">{department.openPositions}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      department.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {department.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'departments', label: 'Departments', icon: 'BuildingOfficeIcon', component: renderDepartmentsTab },
    { id: 'hierarchy', label: 'Hierarchy', icon: 'Squares2X2Icon', component: renderHierarchyTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: renderAnalyticsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Department Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage organizational structure and departments</p>
          </div>
          
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowPathIcon" className="h-4 w-4 mr-2" />
              Sync Structure
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

      {selectedDepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{selectedDepartment.code}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedDepartment.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{selectedDepartment.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{selectedDepartment.location}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDepartment(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Department Details</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Manager:</strong> {selectedDepartment.manager}</div>
                    <div><strong>Manager Email:</strong> {selectedDepartment.managerEmail}</div>
                    <div><strong>Cost Center:</strong> {selectedDepartment.costCenter}</div>
                    <div><strong>Floor:</strong> {selectedDepartment.floor}</div>
                    <div><strong>Status:</strong> 
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        selectedDepartment.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {selectedDepartment.status}
                      </span>
                    </div>
                    <div><strong>Created:</strong> {new Date(selectedDepartment.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Employee Count:</strong> {selectedDepartment.employeeCount}</div>
                    <div><strong>Budget:</strong> ${selectedDepartment.budget.toLocaleString()}</div>
                    <div><strong>Average Salary:</strong> ${selectedDepartment.avgSalary.toLocaleString()}</div>
                    <div><strong>Open Positions:</strong> {selectedDepartment.openPositions}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sub-departments</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {selectedDepartment.subDepartments.map((subDept, index) => (
                    <div key={index} className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                      {subDept}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDepartment.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Edit Department
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  View Employees
                </button>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  Budget Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DepartmentManagement;