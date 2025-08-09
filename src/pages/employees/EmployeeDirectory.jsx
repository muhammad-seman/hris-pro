import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const EmployeeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('list'); // grid or list

  const employees = [
    {
      id: 1,
      name: 'Sarah Wilson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      email: 'sarah.wilson@company.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      status: 'active',
      avatar: null,
      employeeId: 'EMP001',
      joinDate: '2022-03-15',
      manager: 'John Smith',
      skills: ['React', 'Node.js', 'Python', 'AWS']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Sales Manager',
      department: 'Sales',
      email: 'michael.chen@company.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, CA',
      status: 'active',
      avatar: null,
      employeeId: 'EMP002',
      joinDate: '2021-08-20',
      manager: 'Lisa Johnson',
      skills: ['Sales Strategy', 'CRM', 'Negotiation', 'Team Leadership']
    },
    {
      id: 3,
      name: 'Emma Davis',
      position: 'Marketing Specialist',
      department: 'Marketing',
      email: 'emma.davis@company.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, IL',
      status: 'active',
      avatar: null,
      employeeId: 'EMP003',
      joinDate: '2023-01-10',
      manager: 'Robert Lee',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics']
    },
    {
      id: 4,
      name: 'James Rodriguez',
      position: 'HR Coordinator',
      department: 'HR',
      email: 'james.rodriguez@company.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      status: 'on-leave',
      avatar: null,
      employeeId: 'EMP004',
      joinDate: '2022-11-05',
      manager: 'Patricia Brown',
      skills: ['Recruitment', 'Employee Relations', 'HRIS', 'Compliance']
    },
    {
      id: 5,
      name: 'Olivia Taylor',
      position: 'Financial Analyst',
      department: 'Finance',
      email: 'olivia.taylor@company.com',
      phone: '+1 (555) 567-8901',
      location: 'Boston, MA',
      status: 'active',
      avatar: null,
      employeeId: 'EMP005',
      joinDate: '2021-06-12',
      manager: 'David Kim',
      skills: ['Financial Analysis', 'Excel', 'SQL', 'Data Visualization']
    },
    {
      id: 6,
      name: 'Alexander Johnson',
      position: 'DevOps Engineer',
      department: 'Engineering',
      email: 'alex.johnson@company.com',
      phone: '+1 (555) 678-9012',
      location: 'Seattle, WA',
      status: 'inactive',
      avatar: null,
      employeeId: 'EMP006',
      joinDate: '2020-09-08',
      manager: 'John Smith',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring']
    }
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];
  const statuses = ['all', 'active', 'inactive', 'on-leave'];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || employee.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'department':
        return a.department.localeCompare(b.department);
      case 'position':
        return a.position.localeCompare(b.position);
      case 'joinDate':
        return new Date(b.joinDate) - new Date(a.joinDate);
      default:
        return 0;
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'inactive':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'on-leave':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };


  const ListView = () => (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Position</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Location</th>
              <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {getInitials(employee.name)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{employee.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{employee.employeeId}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {employee.position}
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {employee.department}
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                    {employee.status.replace('-', ' ').toUpperCase()}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {employee.location}
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                    <button className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                      <Icon name="EnvelopeIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </button>
                    <button className="p-1 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                      <Icon name="PencilIcon" className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Employee Directory
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and browse all employees across the organization
            </p>
          </div>
          <button 
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Add Employee"
          >
            <Icon name="PlusIcon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 flex-1">
            {/* Search */}
            <div className="relative min-w-[300px]">
              <Icon name="MagnifyingGlassIcon" className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees, positions, or IDs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Statuses' : status.replace('-', ' ').toUpperCase()}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="department">Sort by Department</option>
              <option value="position">Sort by Position</option>
              <option value="joinDate">Sort by Join Date</option>
            </select>
          </div>

        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {sortedEmployees.length} of {employees.length} employees
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </Card>

      {/* Employee List */}
      <ListView />
    </DashboardLayout>
  );
};

export default EmployeeDirectory;