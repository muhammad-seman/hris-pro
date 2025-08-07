import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';
import Chart from '../components/Dashboard/Chart';

const PayrollProcessing = () => {
  const [selectedTab, setSelectedTab] = useState('current-cycle');
  const [selectedPeriod, setSelectedPeriod] = useState('2024-03');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [processingStep, setProcessingStep] = useState('review');

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];
  
  const payrollPeriods = [
    { value: '2024-03', label: 'March 2024', status: 'processing' },
    { value: '2024-02', label: 'February 2024', status: 'completed' },
    { value: '2024-01', label: 'January 2024', status: 'completed' }
  ];

  const processingSteps = [
    { id: 'review', label: 'Review Data', icon: 'DocumentMagnifyingGlassIcon', completed: true },
    { id: 'calculate', label: 'Calculate Payroll', icon: 'CalculatorIcon', completed: true },
    { id: 'validate', label: 'Validate Results', icon: 'CheckCircleIcon', completed: false },
    { id: 'approve', label: 'Management Approval', icon: 'HandThumbUpIcon', completed: false },
    { id: 'process', label: 'Process Payment', icon: 'CreditCardIcon', completed: false }
  ];

  const currentCycleData = {
    period: 'March 2024',
    status: 'processing',
    totalEmployees: 156,
    processed: 134,
    pending: 22,
    totalAmount: 2450000000,
    cutoffDate: '2024-03-25',
    paymentDate: '2024-03-30',
    approvedBy: null,
    lastUpdate: '2024-03-26 14:30:00'
  };

  const employeePayrollData = [
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      baseSalary: 25000000,
      allowances: 3500000,
      overtime: 1200000,
      deductions: 2100000,
      tax: 3800000,
      netSalary: 23800000,
      status: 'calculated',
      lastProcessed: '2024-03-26 10:15:00'
    },
    {
      id: 2,
      employeeId: 'EMP002',
      name: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      baseSalary: 18000000,
      allowances: 2200000,
      overtime: 0,
      deductions: 1500000,
      tax: 2450000,
      netSalary: 16250000,
      status: 'calculated',
      lastProcessed: '2024-03-26 10:20:00'
    },
    {
      id: 3,
      employeeId: 'EMP003',
      name: 'Michael Chen',
      department: 'Engineering',
      position: 'Backend Developer',
      baseSalary: 22000000,
      allowances: 2800000,
      overtime: 800000,
      deductions: 1800000,
      tax: 3200000,
      netSalary: 20600000,
      status: 'pending',
      lastProcessed: null
    },
    {
      id: 4,
      employeeId: 'EMP004',
      name: 'Emma Davis',
      department: 'Sales',
      position: 'Account Manager',
      baseSalary: 16000000,
      allowances: 2000000,
      overtime: 600000,
      deductions: 1400000,
      tax: 2100000,
      netSalary: 15100000,
      status: 'calculated',
      lastProcessed: '2024-03-26 09:45:00'
    },
    {
      id: 5,
      employeeId: 'EMP005',
      name: 'James Rodriguez',
      department: 'Marketing',
      position: 'Marketing Specialist',
      baseSalary: 14000000,
      allowances: 1800000,
      overtime: 400000,
      deductions: 1200000,
      tax: 1750000,
      netSalary: 13250000,
      status: 'error',
      lastProcessed: '2024-03-26 11:30:00',
      errorMessage: 'Tax calculation error - missing tax bracket data'
    }
  ];

  const payrollHistory = [
    {
      period: 'February 2024',
      totalAmount: 2380000000,
      employeeCount: 154,
      processedDate: '2024-02-28',
      status: 'completed'
    },
    {
      period: 'January 2024',
      totalAmount: 2420000000,
      employeeCount: 152,
      processedDate: '2024-01-31',
      status: 'completed'
    },
    {
      period: 'December 2023',
      totalAmount: 2650000000,
      employeeCount: 150,
      processedDate: '2023-12-29',
      status: 'completed'
    }
  ];

  const tabs = [
    { id: 'current-cycle', label: 'Current Cycle', icon: 'ClockIcon' },
    { id: 'employee-details', label: 'Employee Details', icon: 'UsersIcon' },
    { id: 'history', label: 'Processing History', icon: 'DocumentTextIcon' },
    { id: 'reports', label: 'Reports & Analytics', icon: 'ChartBarIcon' }
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'calculated':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const filteredEmployeeData = () => {
    if (selectedDepartment === 'all') return employeePayrollData;
    return employeePayrollData.filter(emp => emp.department === selectedDepartment);
  };

  const CurrentCycleTab = () => (
    <div className="space-y-6">
      {/* Current Cycle Overview */}
      <Card title="Current Payroll Cycle">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Period</p>
                <p className="font-semibold text-gray-800 dark:text-white">{currentCycleData.period}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(currentCycleData.status)}`}>
                  {currentCycleData.status.charAt(0).toUpperCase() + currentCycleData.status.slice(1)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cut-off Date</p>
                <p className="font-semibold text-gray-800 dark:text-white">{formatDate(currentCycleData.cutoffDate)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Payment Date</p>
                <p className="font-semibold text-gray-800 dark:text-white">{formatDate(currentCycleData.paymentDate)}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Processing Progress</p>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${(currentCycleData.processed / currentCycleData.totalEmployees) * 100}%` }}
                >
                  <span className="text-white text-xs font-medium">
                    {Math.round((currentCycleData.processed / currentCycleData.totalEmployees) * 100)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span>{currentCycleData.processed} processed</span>
                <span>{currentCycleData.pending} pending</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Payroll Amount</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {formatCurrency(currentCycleData.totalAmount)}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {currentCycleData.totalEmployees}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowProcessModal(true)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Icon name="PlayIcon" className="w-4 h-4" />
                <span>Continue Processing</span>
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Processing Steps */}
      <Card title="Processing Steps">
        <div className="space-y-4">
          {processingSteps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.completed 
                  ? 'bg-green-100 dark:bg-green-900/20' 
                  : processingStep === step.id
                    ? 'bg-blue-100 dark:bg-blue-900/20'
                    : 'bg-gray-100 dark:bg-gray-700'
              }`}>
                <Icon 
                  name={step.completed ? 'CheckIcon' : step.icon} 
                  className={`w-5 h-5 ${
                    step.completed 
                      ? 'text-green-600 dark:text-green-400' 
                      : processingStep === step.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400'
                  }`} 
                />
              </div>
              <div className="flex-1">
                <h3 className={`font-medium ${
                  step.completed 
                    ? 'text-green-800 dark:text-green-400' 
                    : processingStep === step.id
                      ? 'text-blue-800 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {step.label}
                </h3>
              </div>
              {step.completed && (
                <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Generate Reports</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Export payroll summary</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Process Payments</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Execute bank transfers</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="EnvelopeIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Send Payslips</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email to employees</p>
              </div>
            </div>
          </button>
        </div>
      </Card>
    </div>
  );

  const EmployeeDetailsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Payroll Details</h3>
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

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Base Salary</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Allowances</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Deductions</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Tax</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Net Salary</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployeeData().map(employee => (
                <tr key={employee.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{employee.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {employee.employeeId} • {employee.department}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatCurrency(employee.baseSalary)}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatCurrency(employee.allowances)}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatCurrency(employee.deductions)}
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatCurrency(employee.tax)}
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {formatCurrency(employee.netSalary)}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                      {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                    </span>
                    {employee.errorMessage && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">{employee.errorMessage}</p>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Details"
                        onClick={() => setSelectedEmployee(employee)}
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button 
                        className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        title="Recalculate"
                      >
                        <Icon name="CalculatorIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </button>
                      <button 
                        className="p-1 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        title="Generate Payslip"
                      >
                        <Icon name="DocumentTextIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const HistoryTab = () => (
    <div className="space-y-6">
      <Card title="Processing History">
        <div className="space-y-4">
          {payrollHistory.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{record.period}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {record.employeeCount} employees • Processed on {formatDate(record.processedDate)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {formatCurrency(record.totalAmount)}
                </p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const ReportsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Monthly Payroll Trend"
          type="line"
          data={[
            { label: 'Oct 2023', value: 2300000000 },
            { label: 'Nov 2023', value: 2380000000 },
            { label: 'Dec 2023', value: 2650000000 },
            { label: 'Jan 2024', value: 2420000000 },
            { label: 'Feb 2024', value: 2380000000 },
            { label: 'Mar 2024', value: 2450000000 }
          ]}
          height="300px"
        />

        <Chart
          title="Department Payroll Distribution"
          type="pie"
          data={[
            { label: 'Engineering', value: 45, color: 'bg-blue-500' },
            { label: 'Sales', value: 25, color: 'bg-green-500' },
            { label: 'Marketing', value: 15, color: 'bg-yellow-500' },
            { label: 'Design', value: 10, color: 'bg-purple-500' },
            { label: 'HR', value: 5, color: 'bg-red-500' }
          ]}
          height="300px"
        />
      </div>

      <Card title="Payroll Summary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {formatCurrency(2450000000)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Payroll (Current)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {formatCurrency(15700000)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Salary</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">2.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Month-over-Month Growth</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const ProcessModal = () => {
    if (!showProcessModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-lg w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Continue Payroll Processing</h2>
            <button
              onClick={() => setShowProcessModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Next Step: Validate Results</h3>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                Review calculated payroll amounts and resolve any errors before proceeding to approval.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Processed Employees:</span>
                <span className="font-medium text-gray-800 dark:text-white">{currentCycleData.processed}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Pending Employees:</span>
                <span className="font-medium text-yellow-600 dark:text-yellow-400">{currentCycleData.pending}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {formatCurrency(currentCycleData.totalAmount)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowProcessModal(false)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Validation
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'current-cycle':
        return <CurrentCycleTab />;
      case 'employee-details':
        return <EmployeeDetailsTab />;
      case 'history':
        return <HistoryTab />;
      case 'reports':
        return <ReportsTab />;
      default:
        return <CurrentCycleTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Payroll Processing
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage and process employee payroll cycles
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {payrollPeriods.map(period => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export Data"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={() => setShowProcessModal(true)}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Process Payroll"
            >
              <Icon name="PlayIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{currentCycleData.totalEmployees}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{currentCycleData.processed}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Processed</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{currentCycleData.pending}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {formatCurrency(currentCycleData.totalAmount).replace(/\D/g, '').slice(0, -6)}M
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
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

      {/* Process Modal */}
      <ProcessModal />
    </DashboardLayout>
  );
};

export default PayrollProcessing;