import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const EmployeeHierarchy = () => {
  const [selectedView, setSelectedView] = useState('tree');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [expandedNodes, setExpandedNodes] = useState(new Set(['ceo', 'eng-head', 'sales-head']));

  const organizationData = {
    id: 'ceo',
    name: 'John Anderson',
    position: 'Chief Executive Officer',
    department: 'Executive',
    email: 'john.anderson@company.com',
    level: 1,
    avatar: null,
    directReports: 4,
    totalTeamSize: 248,
    children: [
      {
        id: 'cto',
        name: 'Sarah Wilson',
        position: 'Chief Technology Officer',
        department: 'Engineering',
        email: 'sarah.wilson@company.com',
        level: 2,
        avatar: null,
        directReports: 3,
        totalTeamSize: 85,
        children: [
          {
            id: 'eng-head',
            name: 'Michael Chen',
            position: 'VP Engineering',
            department: 'Engineering',
            email: 'michael.chen@company.com',
            level: 3,
            avatar: null,
            directReports: 4,
            totalTeamSize: 45,
            children: [
              {
                id: 'fe-lead',
                name: 'Emma Davis',
                position: 'Frontend Team Lead',
                department: 'Engineering',
                email: 'emma.davis@company.com',
                level: 4,
                avatar: null,
                directReports: 6,
                totalTeamSize: 6,
                children: [
                  { id: 'fe1', name: 'Alex Johnson', position: 'Senior Frontend Developer', department: 'Engineering', level: 5, directReports: 0 },
                  { id: 'fe2', name: 'Lisa Wang', position: 'Frontend Developer', department: 'Engineering', level: 5, directReports: 0 },
                  { id: 'fe3', name: 'Tom Brown', position: 'Frontend Developer', department: 'Engineering', level: 5, directReports: 0 }
                ]
              },
              {
                id: 'be-lead',
                name: 'James Rodriguez',
                position: 'Backend Team Lead',
                department: 'Engineering',
                email: 'james.rodriguez@company.com',
                level: 4,
                avatar: null,
                directReports: 8,
                totalTeamSize: 8,
                children: [
                  { id: 'be1', name: 'David Kim', position: 'Senior Backend Developer', department: 'Engineering', level: 5, directReports: 0 },
                  { id: 'be2', name: 'Maria Garcia', position: 'Backend Developer', department: 'Engineering', level: 5, directReports: 0 },
                  { id: 'be3', name: 'Peter Lee', position: 'Backend Developer', department: 'Engineering', level: 5, directReports: 0 }
                ]
              }
            ]
          },
          {
            id: 'devops-head',
            name: 'Robert Taylor',
            position: 'DevOps Manager',
            department: 'Engineering',
            email: 'robert.taylor@company.com',
            level: 3,
            avatar: null,
            directReports: 5,
            totalTeamSize: 5,
            children: [
              { id: 'do1', name: 'Chris Martinez', position: 'Senior DevOps Engineer', department: 'Engineering', level: 4, directReports: 0 },
              { id: 'do2', name: 'Jenny Liu', position: 'DevOps Engineer', department: 'Engineering', level: 4, directReports: 0 }
            ]
          }
        ]
      },
      {
        id: 'cmo',
        name: 'Patricia Brown',
        position: 'Chief Marketing Officer',
        department: 'Marketing',
        email: 'patricia.brown@company.com',
        level: 2,
        avatar: null,
        directReports: 2,
        totalTeamSize: 28,
        children: [
          {
            id: 'marketing-head',
            name: 'Robert Lee',
            position: 'Marketing Director',
            department: 'Marketing',
            email: 'robert.lee@company.com',
            level: 3,
            avatar: null,
            directReports: 6,
            totalTeamSize: 15,
            children: [
              { id: 'm1', name: 'Anna Foster', position: 'Content Marketing Manager', department: 'Marketing', level: 4, directReports: 2 },
              { id: 'm2', name: 'Kevin Park', position: 'Digital Marketing Specialist', department: 'Marketing', level: 4, directReports: 0 }
            ]
          }
        ]
      },
      {
        id: 'cso',
        name: 'Lisa Johnson',
        position: 'Chief Sales Officer',
        department: 'Sales',
        email: 'lisa.johnson@company.com',
        level: 2,
        avatar: null,
        directReports: 3,
        totalTeamSize: 45,
        children: [
          {
            id: 'sales-head',
            name: 'Mark Thompson',
            position: 'Sales Director',
            department: 'Sales',
            email: 'mark.thompson@company.com',
            level: 3,
            avatar: null,
            directReports: 8,
            totalTeamSize: 25,
            children: [
              { id: 's1', name: 'Jennifer White', position: 'Senior Account Manager', department: 'Sales', level: 4, directReports: 3 },
              { id: 's2', name: 'Ryan Miller', position: 'Account Manager', department: 'Sales', level: 4, directReports: 2 },
              { id: 's3', name: 'Sophie Clark', position: 'Sales Representative', department: 'Sales', level: 4, directReports: 0 }
            ]
          }
        ]
      },
      {
        id: 'chro',
        name: 'Amanda Foster',
        position: 'Chief Human Resources Officer',
        department: 'HR',
        email: 'amanda.foster@company.com',
        level: 2,
        avatar: null,
        directReports: 4,
        totalTeamSize: 12,
        children: [
          {
            id: 'hr-head',
            name: 'Daniel Wilson',
            position: 'HR Director',
            department: 'HR',
            email: 'daniel.wilson@company.com',
            level: 3,
            avatar: null,
            directReports: 3,
            totalTeamSize: 8,
            children: [
              { id: 'hr1', name: 'Rachel Green', position: 'HR Business Partner', department: 'HR', level: 4, directReports: 0 },
              { id: 'hr2', name: 'Steven Adams', position: 'Talent Acquisition Manager', department: 'HR', level: 4, directReports: 2 }
            ]
          }
        ]
      }
    ]
  };

  const departments = ['all', 'Engineering', 'Marketing', 'Sales', 'HR', 'Executive'];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getDepartmentColor = (department) => {
    switch (department) {
      case 'Engineering':
        return 'from-blue-500 to-indigo-600';
      case 'Marketing':
        return 'from-green-500 to-emerald-600';
      case 'Sales':
        return 'from-purple-500 to-violet-600';
      case 'HR':
        return 'from-orange-500 to-red-600';
      case 'Executive':
        return 'from-gray-700 to-gray-900';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 2:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 3:
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 4:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const filterByDepartment = (node) => {
    if (selectedDepartment === 'all') return true;
    if (node.department === selectedDepartment) return true;
    if (node.children) {
      return node.children.some(child => filterByDepartment(child));
    }
    return false;
  };

  const TreeNode = ({ node, level = 0 }) => {
    if (!filterByDepartment(node)) return null;

    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const showChildren = hasChildren && isExpanded && (selectedDepartment === 'all' || node.children.some(child => filterByDepartment(child)));

    return (
      <div className="mb-4" style={{ marginLeft: `${level * 24}px` }}>
        {/* Employee Card */}
        <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
          <div className={`w-12 h-12 bg-gradient-to-br ${getDepartmentColor(node.department)} rounded-full flex items-center justify-center`}>
            <span className="text-white text-sm font-bold">
              {getInitials(node.name)}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {node.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {node.position}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {node.department} • {node.email}
                </p>
              </div>
              <div className="flex flex-col items-end space-y-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(node.level)}`}>
                  Level {node.level}
                </span>
                {node.directReports > 0 && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {node.directReports} direct reports
                  </span>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-1">
                <Icon name="UsersIcon" className="w-3 h-3" />
                <span>Team: {node.totalTeamSize || 0}</span>
              </span>
              {hasChildren && (
                <button
                  onClick={() => toggleNode(node.id)}
                  className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <Icon 
                    name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
                    className="w-3 h-3" 
                  />
                  <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Children */}
        {showChildren && (
          <div className="mt-4">
            {node.children
              .filter(child => filterByDepartment(child))
              .map((child) => (
                <TreeNode
                  key={child.id}
                  node={child}
                  level={level + 1}
                />
              ))}
          </div>
        )}
      </div>
    );
  };

  const DepartmentView = () => {
    const getDepartmentStats = () => {
      const departments = {};
      
      const traverseNode = (node) => {
        if (!departments[node.department]) {
          departments[node.department] = {
            name: node.department,
            employees: [],
            totalEmployees: 0,
            levels: new Set()
          };
        }
        
        departments[node.department].employees.push(node);
        departments[node.department].totalEmployees++;
        departments[node.department].levels.add(node.level);
        
        if (node.children) {
          node.children.forEach(child => traverseNode(child));
        }
      };
      
      traverseNode(organizationData);
      
      return Object.values(departments).map(dept => ({
        ...dept,
        levels: Array.from(dept.levels).sort()
      }));
    };

    const departmentStats = getDepartmentStats();

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {departmentStats.map(dept => (
          <Card key={dept.name} title={dept.name}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Total Employees</span>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {dept.totalEmployees}
                </span>
              </div>
              
              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Organizational Levels</span>
                <div className="flex flex-wrap gap-1">
                  {dept.levels.map(level => (
                    <span key={level} className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}>
                      Level {level}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Recent Employees</span>
                <div className="space-y-2">
                  {dept.employees.slice(0, 3).map(emp => (
                    <div key={emp.id} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${getDepartmentColor(emp.department)} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">
                          {getInitials(emp.name)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                          {emp.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {emp.position}
                        </p>
                      </div>
                    </div>
                  ))}
                  {dept.employees.length > 3 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      +{dept.employees.length - 3} more employees
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Employee Hierarchy
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Visualize organizational structure and reporting relationships
            </p>
          </div>
          <button 
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Add Position"
          >
            <Icon name="PlusIcon" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Controls */}
      <Card className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setSelectedView('tree')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedView === 'tree'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                <Icon name="Squares2X2Icon" className="w-4 h-4 inline mr-2" />
                Tree View
              </button>
              <button
                onClick={() => setSelectedView('department')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedView === 'department'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                <Icon name="BuildingOfficeIcon" className="w-4 h-4 inline mr-2" />
                Department View
              </button>
            </div>

            {/* Department Filter */}
            {selectedView === 'tree' && (
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
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-purple-100 dark:bg-purple-900/20 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">C-Level</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-blue-100 dark:bg-blue-900/20 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">VP/Director</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-100 dark:bg-green-900/20 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Manager</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-100 dark:bg-yellow-900/20 rounded"></div>
              <span className="text-gray-600 dark:text-gray-400">Individual Contributor</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Content */}
      {selectedView === 'tree' ? (
        <Card title={`Organization Chart ${selectedDepartment !== 'all' ? `- ${selectedDepartment}` : ''}`}>
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <TreeNode node={organizationData} />
            </div>
          </div>
        </Card>
      ) : (
        <DepartmentView />
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">248</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BuildingOfficeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Departments</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Org Levels</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UserGroupIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">6.2</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Team Size</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeHierarchy;