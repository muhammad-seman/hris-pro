import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';
import Chart from '../../components/Dashboard/Chart';

const SalaryStructure = () => {
  const [selectedTab, setSelectedTab] = useState('structure');
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [showComponentModal, setShowComponentModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];

  const salaryGrades = [
    {
      id: 1,
      grade: 'Grade 1',
      level: 'Entry Level',
      minSalary: 8000000,
      maxSalary: 12000000,
      midpoint: 10000000,
      employeeCount: 25,
      departments: ['Engineering', 'Design', 'Marketing'],
      description: 'Fresh graduates and entry-level positions',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      grade: 'Grade 2',
      level: 'Junior',
      minSalary: 12000000,
      maxSalary: 18000000,
      midpoint: 15000000,
      employeeCount: 38,
      departments: ['Engineering', 'Design', 'Sales', 'Marketing'],
      description: '1-2 years experience, junior professionals',
      lastUpdated: '2024-01-15'
    },
    {
      id: 3,
      grade: 'Grade 3',
      level: 'Mid-Level',
      minSalary: 18000000,
      maxSalary: 28000000,
      midpoint: 23000000,
      employeeCount: 42,
      departments: ['Engineering', 'Design', 'Sales', 'Marketing', 'HR'],
      description: '3-5 years experience, mid-level professionals',
      lastUpdated: '2024-01-15'
    },
    {
      id: 4,
      grade: 'Grade 4',
      level: 'Senior',
      minSalary: 28000000,
      maxSalary: 40000000,
      midpoint: 34000000,
      employeeCount: 32,
      departments: ['Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'],
      description: '5-8 years experience, senior professionals',
      lastUpdated: '2024-01-15'
    },
    {
      id: 5,
      grade: 'Grade 5',
      level: 'Lead/Manager',
      minSalary: 40000000,
      maxSalary: 60000000,
      midpoint: 50000000,
      employeeCount: 15,
      departments: ['Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'],
      description: '8+ years experience, team leads and managers',
      lastUpdated: '2024-01-15'
    },
    {
      id: 6,
      grade: 'Grade 6',
      level: 'Director',
      minSalary: 60000000,
      maxSalary: 100000000,
      midpoint: 80000000,
      employeeCount: 4,
      departments: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'],
      description: 'Director level, department heads',
      lastUpdated: '2024-01-15'
    }
  ];

  const salaryComponents = [
    {
      id: 1,
      name: 'Basic Salary',
      type: 'fixed',
      category: 'earnings',
      description: 'Base monthly salary based on grade and position',
      taxable: true,
      mandatory: true,
      calculationType: 'percentage',
      calculationValue: 70,
      applicableGrades: ['all'],
      order: 1
    },
    {
      id: 2,
      name: 'Position Allowance',
      type: 'fixed',
      category: 'earnings',
      description: 'Additional allowance based on job position',
      taxable: true,
      mandatory: true,
      calculationType: 'percentage',
      calculationValue: 15,
      applicableGrades: ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      order: 2
    },
    {
      id: 3,
      name: 'Transport Allowance',
      type: 'fixed',
      category: 'earnings',
      description: 'Monthly transportation allowance',
      taxable: true,
      mandatory: false,
      calculationType: 'fixed',
      calculationValue: 1000000,
      applicableGrades: ['all'],
      order: 3
    },
    {
      id: 4,
      name: 'Meal Allowance',
      type: 'fixed',
      category: 'earnings',
      description: 'Daily meal allowance',
      taxable: false,
      mandatory: false,
      calculationType: 'fixed',
      calculationValue: 50000,
      applicableGrades: ['all'],
      order: 4
    },
    {
      id: 5,
      name: 'Performance Bonus',
      type: 'variable',
      category: 'earnings',
      description: 'Monthly performance-based bonus',
      taxable: true,
      mandatory: false,
      calculationType: 'percentage',
      calculationValue: 20,
      applicableGrades: ['Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      order: 5
    },
    {
      id: 6,
      name: 'Overtime Pay',
      type: 'variable',
      category: 'earnings',
      description: 'Overtime compensation based on hours worked',
      taxable: true,
      mandatory: false,
      calculationType: 'hourly',
      calculationValue: 50000,
      applicableGrades: ['Grade 1', 'Grade 2', 'Grade 3'],
      order: 6
    },
    {
      id: 7,
      name: 'BPJS Kesehatan',
      type: 'deduction',
      category: 'deductions',
      description: 'Health insurance contribution (employee portion)',
      taxable: false,
      mandatory: true,
      calculationType: 'percentage',
      calculationValue: 1,
      applicableGrades: ['all'],
      order: 7
    },
    {
      id: 8,
      name: 'BPJS Ketenagakerjaan',
      type: 'deduction',
      category: 'deductions',
      description: 'Employment social security contribution',
      taxable: false,
      mandatory: true,
      calculationType: 'percentage',
      calculationValue: 2,
      applicableGrades: ['all'],
      order: 8
    },
    {
      id: 9,
      name: 'Pension Fund',
      type: 'deduction',
      category: 'deductions',
      description: 'Pension fund contribution',
      taxable: false,
      mandatory: false,
      calculationType: 'percentage',
      calculationValue: 3,
      applicableGrades: ['Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      order: 9
    },
    {
      id: 10,
      name: 'Income Tax (PPh 21)',
      type: 'deduction',
      category: 'tax',
      description: 'Monthly income tax deduction',
      taxable: false,
      mandatory: true,
      calculationType: 'progressive',
      calculationValue: 0,
      applicableGrades: ['all'],
      order: 10
    }
  ];

  const employeeSalaryData = [
    {
      employeeId: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      grade: 'Grade 4',
      basicSalary: 32000000,
      components: {
        'Position Allowance': 4800000,
        'Transport Allowance': 1000000,
        'Meal Allowance': 1100000,
        'Performance Bonus': 6400000,
        'BPJS Kesehatan': -320000,
        'BPJS Ketenagakerjaan': -640000,
        'Pension Fund': -960000,
        'Income Tax (PPh 21)': -5200000
      },
      totalEarnings: 45300000,
      totalDeductions: 7120000,
      netSalary: 38180000,
      lastUpdated: '2024-03-01'
    },
    {
      employeeId: 'EMP002',
      name: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      grade: 'Grade 3',
      basicSalary: 22000000,
      components: {
        'Position Allowance': 3300000,
        'Transport Allowance': 1000000,
        'Meal Allowance': 1100000,
        'Performance Bonus': 4400000,
        'BPJS Kesehatan': -220000,
        'BPJS Ketenagakerjaan': -440000,
        'Pension Fund': -660000,
        'Income Tax (PPh 21)': -3100000
      },
      totalEarnings: 31800000,
      totalDeductions: 4420000,
      netSalary: 27380000,
      lastUpdated: '2024-03-01'
    }
  ];

  const tabs = [
    { id: 'structure', label: 'Salary Grades', icon: 'Bars3BottomLeftIcon' },
    { id: 'components', label: 'Salary Components', icon: 'CubeIcon' },
    { id: 'employees', label: 'Employee Salaries', icon: 'UsersIcon' },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getGradeColor = (grade) => {
    const colors = {
      'Grade 1': 'bg-gray-500',
      'Grade 2': 'bg-green-500',
      'Grade 3': 'bg-blue-500',
      'Grade 4': 'bg-purple-500',
      'Grade 5': 'bg-orange-500',
      'Grade 6': 'bg-red-500'
    };
    return colors[grade] || 'bg-gray-500';
  };

  const getComponentTypeColor = (type) => {
    switch (type) {
      case 'fixed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'variable':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'deduction':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
    setIsEditing(false);
    setShowGradeModal(true);
  };

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    setIsEditing(false);
    setShowComponentModal(true);
  };

  const StructureTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Salary Grade Structure</h3>
        <button
          onClick={() => {
            setSelectedGrade(null);
            setIsEditing(true);
            setShowGradeModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Add Grade</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {salaryGrades.map(grade => (
          <Card key={grade.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleGradeClick(grade)}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${getGradeColor(grade.grade)} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{grade.grade.split(' ')[1]}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {grade.grade}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {grade.level}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                    {grade.employeeCount} employees
                  </span>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Range:</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(grade.minSalary)} - {formatCurrency(grade.maxSalary)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Midpoint:</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(grade.midpoint)}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Departments:</p>
                  <div className="flex flex-wrap gap-1">
                    {grade.departments.slice(0, 3).map(dept => (
                      <span key={dept} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {dept}
                      </span>
                    ))}
                    {grade.departments.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{grade.departments.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Updated: {formatDate(grade.lastUpdated)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const ComponentsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Salary Components</h3>
        <button
          onClick={() => {
            setSelectedComponent(null);
            setIsEditing(true);
            setShowComponentModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Add Component</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {['earnings', 'deductions', 'tax'].map(category => (
          <Card key={category} title={`${category.charAt(0).toUpperCase() + category.slice(1)}`}>
            <div className="space-y-3">
              {salaryComponents
                .filter(component => component.category === category)
                .sort((a, b) => a.order - b.order)
                .map(component => (
                  <div 
                    key={component.id}
                    className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                    onClick={() => handleComponentClick(component)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-medium text-gray-800 dark:text-white">{component.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComponentTypeColor(component.type)}`}>
                          {component.type}
                        </span>
                        {component.mandatory && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full text-xs font-medium">
                            Mandatory
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{component.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500 dark:text-gray-500">
                        <span>
                          {component.calculationType === 'percentage' 
                            ? `${component.calculationValue}% of base`
                            : component.calculationType === 'fixed'
                              ? formatCurrency(component.calculationValue)
                              : `${formatCurrency(component.calculationValue)}/hour`
                          }
                        </span>
                        <span>{component.taxable ? 'Taxable' : 'Non-taxable'}</span>
                      </div>
                    </div>
                    <Icon name="ChevronRightIcon" className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const EmployeesTab = () => {
    const filteredEmployees = selectedDepartment === 'all' 
      ? employeeSalaryData 
      : employeeSalaryData.filter(emp => emp.department === selectedDepartment);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Salary Structure</h3>
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
        </div>

        <div className="space-y-6">
          {filteredEmployees.map(employee => (
            <Card key={employee.employeeId}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{employee.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {employee.employeeId} • {employee.position} • {employee.department}
                    </p>
                    <span className={`inline-block mt-1 px-2 py-1 ${getGradeColor(employee.grade)} text-white rounded text-xs font-medium`}>
                      {employee.grade}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Net Salary</p>
                    <p className="text-xl font-bold text-gray-800 dark:text-white">
                      {formatCurrency(employee.netSalary)}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Basic Salary</h4>
                    <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                      {formatCurrency(employee.basicSalary)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Total Earnings</h4>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {formatCurrency(employee.totalEarnings)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-2">Total Deductions</h4>
                    <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                      {formatCurrency(employee.totalDeductions)}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-3">Salary Breakdown</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(employee.components).map(([component, amount]) => (
                      <div key={component} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{component}</span>
                        <span className={`font-medium ${
                          amount > 0 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          {formatCurrency(Math.abs(amount))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500">
                  <span>Last updated: {formatDate(employee.lastUpdated)}</span>
                  <div className="flex space-x-2">
                    <button className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <Icon name="PencilIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                    <button className="p-1 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <Icon name="DocumentTextIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="Bars3BottomLeftIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{salaryGrades.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Salary Grades</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CubeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{salaryComponents.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">22.8M</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Salary</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUpIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">8.5%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Annual Increase</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Salary Distribution by Grade"
          type="bar"
          data={salaryGrades.map(grade => ({
            label: grade.grade,
            value: grade.employeeCount
          }))}
          height="300px"
        />

        <Chart
          title="Average Salary by Department"
          type="pie"
          data={[
            { label: 'Engineering', value: 32, color: 'bg-blue-500' },
            { label: 'Sales', value: 25, color: 'bg-green-500' },
            { label: 'Marketing', value: 20, color: 'bg-yellow-500' },
            { label: 'Design', value: 15, color: 'bg-purple-500' },
            { label: 'HR & Finance', value: 8, color: 'bg-red-500' }
          ]}
          height="300px"
        />
      </div>

      <Card title="Salary Ranges by Grade">
        <div className="space-y-4">
          {salaryGrades.map(grade => (
            <div key={grade.id} className="flex items-center space-x-4">
              <div className={`w-8 h-8 ${getGradeColor(grade.grade)} rounded flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{grade.grade.split(' ')[1]}</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-800 dark:text-white">{grade.grade}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {formatCurrency(grade.minSalary)} - {formatCurrency(grade.maxSalary)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getGradeColor(grade.grade)}`}
                    style={{ width: `${(grade.employeeCount / Math.max(...salaryGrades.map(g => g.employeeCount))) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                  <span>{grade.employeeCount} employees</span>
                  <span>Midpoint: {formatCurrency(grade.midpoint)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const GradeModal = () => {
    if (!showGradeModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {isEditing ? (selectedGrade ? 'Edit Salary Grade' : 'Add New Salary Grade') : 'Salary Grade Details'}
            </h2>
            <button
              onClick={() => setShowGradeModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {selectedGrade && !isEditing ? (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 ${getGradeColor(selectedGrade.grade)} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{selectedGrade.grade.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {selectedGrade.grade} - {selectedGrade.level}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedGrade.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Salary Range</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Minimum:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(selectedGrade.minSalary)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Midpoint:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(selectedGrade.midpoint)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Maximum:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(selectedGrade.maxSalary)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Employee Count</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedGrade.employeeCount}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">employees in this grade</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Applicable Departments</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedGrade.departments.map(dept => (
                    <span key={dept} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowGradeModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Grade
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Grade Name *
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedGrade?.grade || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Grade 1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Level *
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedGrade?.level || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Entry Level"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Min Salary *
                    </label>
                    <input
                      type="number"
                      defaultValue={selectedGrade?.minSalary || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Max Salary *
                    </label>
                    <input
                      type="number"
                      defaultValue={selectedGrade?.maxSalary || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Midpoint
                    </label>
                    <input
                      type="number"
                      defaultValue={selectedGrade?.midpoint || ''}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Auto-calculated"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    defaultValue={selectedGrade?.description || ''}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Describe this grade level..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Applicable Departments
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {departments.filter(d => d !== 'all').map(dept => (
                      <label key={dept} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          defaultChecked={selectedGrade?.departments.includes(dept)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {selectedGrade ? 'Update Grade' : 'Create Grade'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ComponentModal = () => {
    if (!showComponentModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {isEditing ? (selectedComponent ? 'Edit Component' : 'Add New Component') : 'Component Details'}
            </h2>
            <button
              onClick={() => setShowComponentModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {selectedComponent && !isEditing ? (
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {selectedComponent.name}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComponentTypeColor(selectedComponent.type)}`}>
                    {selectedComponent.type}
                  </span>
                  {selectedComponent.mandatory && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400 rounded-full text-xs font-medium">
                      Mandatory
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{selectedComponent.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Calculation</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedComponent.calculationType === 'percentage' 
                      ? `${selectedComponent.calculationValue}% of base salary`
                      : selectedComponent.calculationType === 'fixed'
                        ? formatCurrency(selectedComponent.calculationValue)
                        : `${formatCurrency(selectedComponent.calculationValue)} per hour`
                    }
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Tax Status</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedComponent.taxable ? 'Taxable' : 'Non-taxable'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Applicable Grades</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedComponent.applicableGrades.includes('all') ? (
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm">
                      All Grades
                    </span>
                  ) : (
                    selectedComponent.applicableGrades.map(grade => (
                      <span key={grade} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-sm">
                        {grade}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowComponentModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Component
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400">Component form would be here...</p>
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowComponentModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  {selectedComponent ? 'Update Component' : 'Create Component'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'structure':
        return <StructureTab />;
      case 'components':
        return <ComponentsTab />;
      case 'employees':
        return <EmployeesTab />;
      case 'analytics':
        return <AnalyticsTab />;
      default:
        return <StructureTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Salary Structure
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage salary grades, components and employee compensation structure
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export Structure"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Import Data"
            >
              <Icon name="ArrowUpTrayIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="Bars3BottomLeftIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{salaryGrades.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Salary Grades</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CubeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{salaryComponents.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {salaryGrades.reduce((sum, grade) => sum + grade.employeeCount, 0)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">32.8M</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Total Compensation</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Grade Modal */}
      <GradeModal />

      {/* Component Modal */}
      <ComponentModal />
    </DashboardLayout>
  );
};

export default SalaryStructure;