import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const Payslips = () => {
  const [selectedTab, setSelectedTab] = useState('payslips');
  const [selectedPayslip, setSelectedPayslip] = useState(null);
  const [showPayslipModal, setShowPayslipModal] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2024-03');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedEmployee, setSelectedEmployee] = useState('all');

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];
  const periods = [
    { value: '2024-03', label: 'March 2024' },
    { value: '2024-02', label: 'February 2024' },
    { value: '2024-01', label: 'January 2024' }
  ];

  const payslips = [
    {
      id: 1,
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      grade: 'Grade 4',
      period: '2024-03',
      payDate: '2024-03-30',
      basicSalary: 25000000,
      allowances: {
        transport: 1000000,
        meal: 1100000,
        position: 3750000,
        overtime: 1200000
      },
      bonuses: {
        performance: 3750000,
        achievement: 2000000
      },
      deductions: {
        bpjsKesehatan: 250000,
        bpjsKetenagakerjaan: 500000,
        pensionFund: 750000,
        incomeTax: 4200000,
        other: 0
      },
      grossSalary: 37800000,
      totalDeductions: 5700000,
      netSalary: 32100000,
      status: 'generated',
      generatedDate: '2024-03-28',
      sentDate: '2024-03-30',
      downloadedDate: '2024-03-30'
    },
    {
      id: 2,
      employeeId: 'EMP002',
      employeeName: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      grade: 'Grade 3',
      period: '2024-03',
      payDate: '2024-03-30',
      basicSalary: 18000000,
      allowances: {
        transport: 1000000,
        meal: 1100000,
        position: 2700000,
        overtime: 0
      },
      bonuses: {
        performance: 2700000,
        achievement: 2000000
      },
      deductions: {
        bpjsKesehatan: 180000,
        bpjsKetenagakerjaan: 360000,
        pensionFund: 540000,
        incomeTax: 2850000,
        other: 0
      },
      grossSalary: 27500000,
      totalDeductions: 3930000,
      netSalary: 23570000,
      status: 'sent',
      generatedDate: '2024-03-28',
      sentDate: '2024-03-30',
      downloadedDate: null
    },
    {
      id: 3,
      employeeId: 'EMP003',
      employeeName: 'Michael Chen',
      department: 'Engineering',
      position: 'Backend Developer',
      grade: 'Grade 3',
      period: '2024-03',
      payDate: '2024-03-30',
      basicSalary: 22000000,
      allowances: {
        transport: 1000000,
        meal: 1100000,
        position: 3300000,
        overtime: 800000
      },
      bonuses: {
        performance: 3300000,
        achievement: 2000000
      },
      deductions: {
        bpjsKesehatan: 220000,
        bpjsKetenagakerjaan: 440000,
        pensionFund: 660000,
        incomeTax: 3500000,
        other: 0
      },
      grossSalary: 33500000,
      totalDeductions: 4820000,
      netSalary: 28680000,
      status: 'generated',
      generatedDate: '2024-03-28',
      sentDate: null,
      downloadedDate: null
    },
    {
      id: 4,
      employeeId: 'EMP004',
      employeeName: 'Emma Davis',
      department: 'Sales',
      position: 'Account Manager',
      grade: 'Grade 3',
      period: '2024-03',
      payDate: '2024-03-30',
      basicSalary: 16000000,
      allowances: {
        transport: 1000000,
        meal: 1100000,
        position: 2400000,
        overtime: 600000
      },
      bonuses: {
        performance: 2400000,
        commission: 5000000
      },
      deductions: {
        bpjsKesehatan: 160000,
        bpjsKetenagakerjaan: 320000,
        pensionFund: 480000,
        incomeTax: 3200000,
        other: 0
      },
      grossSalary: 28500000,
      totalDeductions: 4160000,
      netSalary: 24340000,
      status: 'draft',
      generatedDate: null,
      sentDate: null,
      downloadedDate: null
    }
  ];

  const payslipTemplates = [
    {
      id: 1,
      name: 'Standard Payslip Template',
      type: 'standard',
      description: 'Default payslip template for all employees',
      sections: ['employee_info', 'earnings', 'deductions', 'net_pay', 'company_info'],
      language: 'english',
      format: 'pdf',
      status: 'active',
      usageCount: 156,
      lastModified: '2024-01-15'
    },
    {
      id: 2,
      name: 'Executive Payslip Template',
      type: 'executive',
      description: 'Enhanced template for executive level employees',
      sections: ['employee_info', 'detailed_earnings', 'benefits', 'deductions', 'tax_breakdown', 'net_pay', 'ytd_summary'],
      language: 'english',
      format: 'pdf',
      status: 'active',
      usageCount: 12,
      lastModified: '2024-02-01'
    },
    {
      id: 3,
      name: 'Sales Commission Template',
      type: 'sales',
      description: 'Specialized template with commission breakdown',
      sections: ['employee_info', 'base_salary', 'commission_details', 'bonuses', 'deductions', 'net_pay'],
      language: 'english',
      format: 'pdf',
      status: 'active',
      usageCount: 24,
      lastModified: '2024-02-15'
    }
  ];

  const tabs = [
    { id: 'payslips', label: 'Payslips', icon: 'DocumentTextIcon' },
    { id: 'templates', label: 'Templates', icon: 'DocumentDuplicateIcon' },
    { id: 'distribution', label: 'Distribution', icon: 'PaperAirplaneIcon' },
    { id: 'reports', label: 'Reports', icon: 'ChartBarIcon' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'generated':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'sent':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'downloaded':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getEmployeeList = () => {
    const uniqueEmployees = [...new Map(payslips.map(p => [p.employeeId, p])).values()];
    return uniqueEmployees.map(emp => ({
      value: emp.employeeId,
      label: `${emp.employeeName} (${emp.employeeId})`
    }));
  };

  const filteredPayslips = () => {
    let filtered = payslips.filter(payslip => payslip.period === selectedPeriod);
    
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(payslip => payslip.department === selectedDepartment);
    }
    
    if (selectedEmployee !== 'all') {
      filtered = filtered.filter(payslip => payslip.employeeId === selectedEmployee);
    }
    
    return filtered;
  };

  const handlePayslipClick = (payslip) => {
    setSelectedPayslip(payslip);
    setShowPayslipModal(true);
  };

  const PayslipsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Payslips</h3>
        <div className="flex items-center space-x-3">
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
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Employees</option>
            {getEmployeeList().map(emp => (
              <option key={emp.value} value={emp.value}>
                {emp.label}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Icon name="DocumentArrowDownIcon" className="w-4 h-4" />
            <span>Bulk Download</span>
          </button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Period</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Gross Salary</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Deductions</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Net Salary</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayslips().map(payslip => (
                <tr key={payslip.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{payslip.employeeName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {payslip.employeeId} • {payslip.department}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {periods.find(p => p.value === payslip.period)?.label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pay date: {formatDate(payslip.payDate)}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    <p className="font-medium">{formatCurrency(payslip.grossSalary)}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    <p className="font-medium text-red-600 dark:text-red-400">
                      -{formatCurrency(payslip.totalDeductions)}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {formatCurrency(payslip.netSalary)}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payslip.status)}`}>
                      {payslip.status.charAt(0).toUpperCase() + payslip.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Payslip"
                        onClick={() => handlePayslipClick(payslip)}
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button 
                        className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        title="Download PDF"
                      >
                        <Icon name="ArrowDownTrayIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </button>
                      <button 
                        className="p-1 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                        title="Send Email"
                      >
                        <Icon name="EnvelopeIcon" className="w-4 h-4 text-purple-600 dark:text-purple-400" />
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

  const TemplatesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Payslip Templates</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Create Template</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {payslipTemplates.map(template => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Icon name="DocumentDuplicateIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm capitalize">
                      {template.type} • {template.format.toUpperCase()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                    {template.status.charAt(0).toUpperCase() + template.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {template.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Usage Count</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {template.usageCount} employees
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Language</p>
                    <p className="font-medium text-gray-800 dark:text-white capitalize">
                      {template.language}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Template Sections</p>
                  <div className="flex flex-wrap gap-1">
                    {template.sections.slice(0, 3).map(section => (
                      <span key={section} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {section.replace('_', ' ')}
                      </span>
                    ))}
                    {template.sections.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{template.sections.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Last modified: {formatDate(template.lastModified)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const DistributionTab = () => (
    <div className="space-y-6">
      <Card title="Payslip Distribution Status">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {payslips.filter(p => p.status === 'generated').length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Generated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {payslips.filter(p => p.status === 'sent').length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sent</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {payslips.filter(p => p.downloadedDate).length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Downloaded</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {payslips.filter(p => p.status === 'draft').length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Distribution Progress</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Generated</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {Math.round((payslips.filter(p => p.status !== 'draft').length / payslips.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${(payslips.filter(p => p.status !== 'draft').length / payslips.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Email Delivery</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Sent via Email</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {Math.round((payslips.filter(p => p.status === 'sent').length / payslips.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${(payslips.filter(p => p.status === 'sent').length / payslips.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Distribution Actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Generate All Payslips</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create payslips for all employees</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="EnvelopeIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Send Email to All</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email payslips to employees</p>
              </div>
            </div>
          </button>

          <button className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <Icon name="ArchiveBoxIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Archive Period</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Archive completed payslips</p>
              </div>
            </div>
          </button>
        </div>
      </Card>
    </div>
  );

  const ReportsTab = () => (
    <div className="space-y-6">
      <Card title="Payslip Generation Reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Monthly Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Payslips Generated</span>
                <span className="font-medium text-gray-800 dark:text-white">{payslips.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Gross Amount</span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {formatCurrency(payslips.reduce((sum, p) => sum + p.grossSalary, 0))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Deductions</span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {formatCurrency(payslips.reduce((sum, p) => sum + p.totalDeductions, 0))}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-600 dark:text-gray-400">Total Net Amount</span>
                <span className="font-bold text-gray-800 dark:text-white">
                  {formatCurrency(payslips.reduce((sum, p) => sum + p.netSalary, 0))}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Department Breakdown</h4>
            <div className="space-y-3">
              {departments.filter(d => d !== 'all').map(dept => {
                const deptPayslips = payslips.filter(p => p.department === dept);
                const deptTotal = deptPayslips.reduce((sum, p) => sum + p.netSalary, 0);
                const totalAmount = payslips.reduce((sum, p) => sum + p.netSalary, 0);
                const percentage = totalAmount > 0 ? (deptTotal / totalAmount) * 100 : 0;
                
                return (
                  <div key={dept} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">{dept}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-blue-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white w-16 text-right">
                        {deptPayslips.length}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Processing Timeline">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-800 dark:text-white">Payroll Calculated</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 28, 2024 - 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Icon name="DocumentTextIcon" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-800 dark:text-white">Payslips Generated</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 28, 2024 - 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Icon name="EnvelopeIcon" className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div className="flex-1">
                <p className="font-medium text-gray-800 dark:text-white">Email Distribution</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 30, 2024 - 8:00 AM</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Template Usage">
          <div className="space-y-3">
            {payslipTemplates.map(template => (
              <div key={template.id} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{template.name}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: `${(template.usageCount / 200) * 100}%` }}
                    />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                    {template.usageCount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const PayslipModal = () => {
    if (!showPayslipModal || !selectedPayslip) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Payslip - {selectedPayslip.employeeName}
            </h2>
            <button
              onClick={() => setShowPayslipModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-3">Employee Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPayslip.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Employee ID:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPayslip.employeeId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPayslip.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPayslip.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Grade:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedPayslip.grade}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-3">Pay Period</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Period:</span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {periods.find(p => p.value === selectedPayslip.period)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Pay Date:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedPayslip.payDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Generated:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{formatDate(selectedPayslip.generatedDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedPayslip.status)}`}>
                        {selectedPayslip.status.charAt(0).toUpperCase() + selectedPayslip.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-3">Earnings</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Basic Salary</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(selectedPayslip.basicSalary)}
                    </span>
                  </div>
                  {Object.entries(selectedPayslip.allowances).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()} Allowance
                      </span>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {formatCurrency(value)}
                      </span>
                    </div>
                  ))}
                  {Object.entries(selectedPayslip.bonuses).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400 capitalize">
                        {key} Bonus
                      </span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {formatCurrency(value)}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold text-gray-800 dark:text-white">Gross Salary</span>
                    <span className="font-bold text-gray-800 dark:text-white">
                      {formatCurrency(selectedPayslip.grossSalary)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-3">Deductions</h3>
                <div className="space-y-2">
                  {Object.entries(selectedPayslip.deductions).map(([key, value]) => 
                    value > 0 ? (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-medium text-red-600 dark:text-red-400">
                          -{formatCurrency(value)}
                        </span>
                      </div>
                    ) : null
                  )}
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold text-gray-800 dark:text-white">Total Deductions</span>
                    <span className="font-bold text-red-600 dark:text-red-400">
                      -{formatCurrency(selectedPayslip.totalDeductions)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-800 dark:text-blue-400">Net Salary</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(selectedPayslip.netSalary)}
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowPayslipModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Download PDF
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'payslips':
        return <PayslipsTab />;
      case 'templates':
        return <TemplatesTab />;
      case 'distribution':
        return <DistributionTab />;
      case 'reports':
        return <ReportsTab />;
      default:
        return <PayslipsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Payslips
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Generate, manage, and distribute employee payslips
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {periods.map(period => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export All Payslips"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Generate Payslips"
            >
              <Icon name="DocumentTextIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{payslips.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Payslips</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="PaperAirplaneIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {payslips.filter(p => p.status === 'sent').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sent</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ArrowDownTrayIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {payslips.filter(p => p.downloadedDate).length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Downloaded</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {payslips.filter(p => p.status === 'draft').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
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

      {/* Payslip Modal */}
      <PayslipModal />
    </DashboardLayout>
  );
};

export default Payslips;