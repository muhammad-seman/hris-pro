import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';
import Chart from '../../components/Dashboard/Chart';

const TaxManagement = () => {
  const [selectedTab, setSelectedTab] = useState('calculation');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showTaxModal, setShowTaxModal] = useState(false);
  const [selectedTaxPeriod, setSelectedTaxPeriod] = useState('2024-03');
  const [selectedTaxBracket, setSelectedTaxBracket] = useState(null);
  const [showBracketModal, setShowBracketModal] = useState(false);

  const taxPeriods = [
    { value: '2024-03', label: 'March 2024' },
    { value: '2024-02', label: 'February 2024' },
    { value: '2024-01', label: 'January 2024' }
  ];

  const taxBrackets = [
    {
      id: 1,
      range: '0 - 60,000,000',
      rate: 5,
      description: 'Tax bracket 1 - Basic income tax',
      type: 'progressive',
      minAmount: 0,
      maxAmount: 60000000,
      baseAmount: 0,
      status: 'active',
      effectiveDate: '2024-01-01',
      lastUpdated: '2024-01-01'
    },
    {
      id: 2,
      range: '60,000,001 - 250,000,000',
      rate: 15,
      description: 'Tax bracket 2 - Middle income tax',
      type: 'progressive',
      minAmount: 60000001,
      maxAmount: 250000000,
      baseAmount: 3000000,
      status: 'active',
      effectiveDate: '2024-01-01',
      lastUpdated: '2024-01-01'
    },
    {
      id: 3,
      range: '250,000,001 - 500,000,000',
      rate: 25,
      description: 'Tax bracket 3 - High income tax',
      type: 'progressive',
      minAmount: 250000001,
      maxAmount: 500000000,
      baseAmount: 31500000,
      status: 'active',
      effectiveDate: '2024-01-01',
      lastUpdated: '2024-01-01'
    },
    {
      id: 4,
      range: '500,000,001+',
      rate: 30,
      description: 'Tax bracket 4 - Maximum income tax',
      type: 'progressive',
      minAmount: 500000001,
      maxAmount: null,
      baseAmount: 94000000,
      status: 'active',
      effectiveDate: '2024-01-01',
      lastUpdated: '2024-01-01'
    }
  ];

  const employeeTaxData = [
    {
      employeeId: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      annualGrossIncome: 456000000,
      taxableIncome: 406000000,
      nonTaxableIncome: 50000000,
      taxBracket: 3,
      ptkpStatus: 'TK/0',
      ptkpAmount: 54000000,
      monthlyTaxDeduction: 31800000,
      annualTaxLiability: 381600000,
      taxPaid: 286200000,
      taxOwed: 95400000,
      taxRefund: 0,
      lastCalculated: '2024-03-26',
      status: 'calculated'
    },
    {
      employeeId: 'EMP002',
      name: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      annualGrossIncome: 306000000,
      taxableIncome: 276000000,
      nonTaxableIncome: 30000000,
      taxBracket: 2,
      ptkpStatus: 'TK/1',
      ptkpAmount: 58500000,
      monthlyTaxDeduction: 18100000,
      annualTaxLiability: 217200000,
      taxPaid: 162900000,
      taxOwed: 54300000,
      taxRefund: 0,
      lastCalculated: '2024-03-26',
      status: 'calculated'
    },
    {
      employeeId: 'EMP003',
      name: 'Michael Chen',
      department: 'Engineering',
      position: 'Backend Developer',
      annualGrossIncome: 270000000,
      taxableIncome: 240000000,
      nonTaxableIncome: 30000000,
      taxBracket: 2,
      ptkpStatus: 'K/0',
      ptkpAmount: 58500000,
      monthlyTaxDeduction: 15150000,
      annualTaxLiability: 181800000,
      taxPaid: 136350000,
      taxOwed: 45450000,
      taxRefund: 0,
      lastCalculated: '2024-03-26',
      status: 'calculated'
    },
    {
      employeeId: 'EMP004',
      name: 'Emma Davis',
      department: 'Sales',
      position: 'Account Manager',
      annualGrossIncome: 192000000,
      taxableIncome: 162000000,
      nonTaxableIncome: 30000000,
      taxBracket: 2,
      ptkpStatus: 'K/1',
      ptkpAmount: 63000000,
      monthlyTaxDeduction: 8250000,
      annualTaxLiability: 99000000,
      taxPaid: 74250000,
      taxOwed: 24750000,
      taxRefund: 0,
      lastCalculated: '2024-03-26',
      status: 'calculated'
    },
    {
      employeeId: 'EMP005',
      name: 'James Rodriguez',
      department: 'Marketing',
      position: 'Marketing Specialist',
      annualGrossIncome: 168000000,
      taxableIncome: 148000000,
      nonTaxableIncome: 20000000,
      taxBracket: 2,
      ptkpStatus: 'TK/0',
      ptkpAmount: 54000000,
      monthlyTaxDeduction: 7850000,
      annualTaxLiability: 94200000,
      taxPaid: 47100000,
      taxOwed: 47100000,
      taxRefund: 0,
      lastCalculated: '2024-03-25',
      status: 'pending'
    }
  ];

  const taxReports = [
    {
      id: 1,
      reportType: 'Monthly PPh 21 Report',
      period: 'March 2024',
      totalEmployees: 156,
      totalTaxWithheld: 2450000000,
      totalTaxLiability: 2890000000,
      status: 'generated',
      generatedDate: '2024-03-31',
      dueDate: '2024-04-20',
      filedDate: null
    },
    {
      id: 2,
      reportType: 'Annual Tax Summary',
      period: '2023',
      totalEmployees: 148,
      totalTaxWithheld: 28500000000,
      totalTaxLiability: 31200000000,
      status: 'filed',
      generatedDate: '2024-01-15',
      dueDate: '2024-03-31',
      filedDate: '2024-03-15'
    },
    {
      id: 3,
      reportType: 'Quarterly Report Q1',
      period: 'Q1 2024',
      totalEmployees: 156,
      totalTaxWithheld: 7350000000,
      totalTaxLiability: 8670000000,
      status: 'pending',
      generatedDate: null,
      dueDate: '2024-04-30',
      filedDate: null
    }
  ];

  const tabs = [
    { id: 'calculation', label: 'Tax Calculation', icon: 'CalculatorIcon' },
    { id: 'brackets', label: 'Tax Brackets', icon: 'Bars3BottomLeftIcon' },
    { id: 'employees', label: 'Employee Tax Data', icon: 'UsersIcon' },
    { id: 'reports', label: 'Tax Reports', icon: 'DocumentTextIcon' }
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
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'generated':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'filed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTaxBracketColor = (rate) => {
    if (rate <= 5) return 'bg-green-500';
    if (rate <= 15) return 'bg-yellow-500';
    if (rate <= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const calculateTotalTax = () => {
    return employeeTaxData.reduce((sum, emp) => sum + emp.monthlyTaxDeduction, 0);
  };

  const calculateTotalLiability = () => {
    return employeeTaxData.reduce((sum, emp) => sum + emp.annualTaxLiability, 0);
  };

  const CalculationTab = () => (
    <div className="space-y-6">
      {/* Tax Calculation Summary */}
      <Card title="Tax Calculation Summary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Period</p>
            <p className="text-xl font-bold text-gray-800 dark:text-white">
              {taxPeriods.find(p => p.value === selectedTaxPeriod)?.label}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
            <p className="text-xl font-bold text-gray-800 dark:text-white">
              {employeeTaxData.length}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Tax Witheld</p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              {formatCurrency(calculateTotalTax())}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Annual Tax Liability</p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {formatCurrency(calculateTotalLiability())}
            </p>
          </div>
        </div>
      </Card>

      {/* Calculation Process */}
      <Card title="Tax Calculation Process">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="CalculatorIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="font-medium text-blue-800 dark:text-blue-400">Calculate Monthly Tax</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">Process PPh 21 calculation for all employees</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Calculate Now
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <div>
                <h3 className="font-medium text-yellow-800 dark:text-yellow-400">Generate Tax Reports</h3>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">Create monthly and annual tax reports</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
              Generate
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="CloudArrowUpIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="font-medium text-green-800 dark:text-green-400">Submit to Tax Authority</h3>
                <p className="text-sm text-green-600 dark:text-green-300">File monthly PPh 21 report</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </Card>

      {/* Tax Calculation Rules */}
      <Card title="Tax Calculation Configuration">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">PTKP (Tax Free Income) Rates</h4>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">TK/0 (Single, no dependents)</span>
                <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(54000000)}</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">TK/1 (Single, 1 dependent)</span>
                <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(58500000)}</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">K/0 (Married, no dependents)</span>
                <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(58500000)}</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">K/1 (Married, 1 dependent)</span>
                <span className="font-medium text-gray-800 dark:text-white">{formatCurrency(63000000)}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Non-Taxable Income Components</h4>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Transport Allowance</span>
                <span className="font-medium text-gray-800 dark:text-white">Non-taxable up to 50%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Meal Allowance</span>
                <span className="font-medium text-gray-800 dark:text-white">Non-taxable</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Medical Benefits</span>
                <span className="font-medium text-gray-800 dark:text-white">Non-taxable</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">JHT/JP Contribution</span>
                <span className="font-medium text-gray-800 dark:text-white">Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const BracketsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tax Brackets Configuration</h3>
        <button
          onClick={() => {
            setSelectedTaxBracket(null);
            setShowBracketModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Add Tax Bracket</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {taxBrackets.map(bracket => (
          <Card 
            key={bracket.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer" 
            onClick={() => {
              setSelectedTaxBracket(bracket);
              setShowBracketModal(true);
            }}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${getTaxBracketColor(bracket.rate)} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{bracket.rate}%</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Tax Rate {bracket.rate}%
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {bracket.range}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bracket.status)}`}>
                    {bracket.status.charAt(0).toUpperCase() + bracket.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {bracket.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Min Amount</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(bracket.minAmount)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Base Tax</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(bracket.baseAmount)}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                  Effective: {formatDate(bracket.effectiveDate)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tax Bracket Visualization */}
      <Card title="Tax Bracket Visualization">
        <Chart
          title="Progressive Tax Rates"
          type="bar"
          data={taxBrackets.map(bracket => ({
            label: `${bracket.rate}%`,
            value: bracket.rate,
            color: getTaxBracketColor(bracket.rate)
          }))}
          height="300px"
        />
      </Card>
    </div>
  );

  const EmployeesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Tax Data</h3>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTaxPeriod}
            onChange={(e) => setSelectedTaxPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {taxPeriods.map(period => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Icon name="CalculatorIcon" className="w-4 h-4" />
            <span>Recalculate All</span>
          </button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Gross Income</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Taxable Income</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Tax Bracket</th>
                <th className="text-left py-4 px-4 font-semibent text-gray-700 dark:text-gray-300">PTKP Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Monthly Tax</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeTaxData.map(employee => (
                <tr key={employee.employeeId} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{employee.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {employee.employeeId} • {employee.department}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{formatCurrency(employee.annualGrossIncome)}</p>
                      <p className="text-xs text-gray-500">annual</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="font-medium">{formatCurrency(employee.taxableIncome)}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Non-taxable: {formatCurrency(employee.nonTaxableIncome)}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`w-8 h-8 ${getTaxBracketColor(taxBrackets[employee.taxBracket - 1]?.rate)} rounded flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{employee.taxBracket}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{employee.ptkpStatus}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {formatCurrency(employee.ptkpAmount)}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {formatCurrency(employee.monthlyTaxDeduction)}
                    </p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                      {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      <button 
                        className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        title="View Tax Details"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowTaxModal(true);
                        }}
                      >
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </button>
                      <button 
                        className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                        title="Recalculate Tax"
                      >
                        <Icon name="CalculatorIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </button>
                      <button 
                        className="p-1 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        title="Generate Tax Report"
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

  const ReportsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Tax Reports & Compliance</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Generate New Report</span>
        </button>
      </div>

      <div className="space-y-4">
        {taxReports.map(report => (
          <Card key={report.id}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {report.reportType}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Period: {report.period}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Employees</p>
                      <p className="font-medium text-gray-800 dark:text-white">{report.totalEmployees}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tax Withheld</p>
                      <p className="font-medium text-green-600 dark:text-green-400">
                        {formatCurrency(report.totalTaxWithheld)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tax Liability</p>
                      <p className="font-medium text-blue-600 dark:text-blue-400">
                        {formatCurrency(report.totalTaxLiability)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                  {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                </span>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {report.generatedDate && (
                    <p>Generated: {formatDate(report.generatedDate)}</p>
                  )}
                  <p>Due: {formatDate(report.dueDate)}</p>
                  {report.filedDate && (
                    <p>Filed: {formatDate(report.filedDate)}</p>
                  )}
                </div>
                <div className="flex space-x-2 mt-3">
                  {report.status === 'generated' && (
                    <button className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                      <Icon name="CloudArrowUpIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </button>
                  )}
                  <button className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Icon name="DocumentArrowDownIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </button>
                  <button className="p-1 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <Icon name="EyeIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tax Compliance Calendar */}
      <Card title="Tax Compliance Calendar">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="CalendarDaysIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <div>
                <h4 className="font-medium text-yellow-800 dark:text-yellow-400">Monthly Filing</h4>
                <p className="text-sm text-yellow-600 dark:text-yellow-300">PPh 21 Report due 20th</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="ClockIcon" className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              <div>
                <h4 className="font-medium text-orange-800 dark:text-orange-400">Quarterly Report</h4>
                <p className="text-sm text-orange-600 dark:text-orange-300">Due end of following month</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
              <div>
                <h4 className="font-medium text-red-800 dark:text-red-400">Annual Summary</h4>
                <p className="text-sm text-red-600 dark:text-red-300">Due March 31st</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const TaxModal = () => {
    if (!showTaxModal || !selectedEmployee) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Tax Details - {selectedEmployee.name}
            </h2>
            <button
              onClick={() => setShowTaxModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-3">Employee Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Employee ID:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.employeeId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Department:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Position:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.position}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">PTKP Status:</span>
                    <span className="font-medium text-gray-800 dark:text-white">{selectedEmployee.ptkpStatus}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-3">Tax Calculation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Annual Gross Income:</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(selectedEmployee.annualGrossIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Non-Taxable Income:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      -{formatCurrency(selectedEmployee.nonTaxableIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">PTKP Deduction:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      -{formatCurrency(selectedEmployee.ptkpAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-600 dark:text-gray-400">Taxable Income:</span>
                    <span className="font-bold text-gray-800 dark:text-white">
                      {formatCurrency(selectedEmployee.taxableIncome)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 dark:text-white mb-3">Tax Liability Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Monthly Tax Withholding</h4>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatCurrency(selectedEmployee.monthlyTaxDeduction)}
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-400 mb-2">Annual Tax Liability</h4>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(selectedEmployee.annualTaxLiability)}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 dark:text-white mb-3">Tax Status Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tax Paid</p>
                  <p className="font-bold text-gray-800 dark:text-white">
                    {formatCurrency(selectedEmployee.taxPaid)}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tax Owed</p>
                  <p className="font-bold text-red-600 dark:text-red-400">
                    {formatCurrency(selectedEmployee.taxOwed)}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tax Refund</p>
                  <p className="font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(selectedEmployee.taxRefund)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowTaxModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Recalculate Tax
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BracketModal = () => {
    if (!showBracketModal) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {selectedTaxBracket ? 'Edit Tax Bracket' : 'Add New Tax Bracket'}
            </h2>
            <button
              onClick={() => setShowBracketModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {selectedTaxBracket ? (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                  Tax Rate {selectedTaxBracket.rate}%
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{selectedTaxBracket.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Range: {selectedTaxBracket.range}
                </p>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowBracketModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Edit Bracket
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">Add new tax bracket form would be here...</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowBracketModal(false)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Create Bracket
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
      case 'calculation':
        return <CalculationTab />;
      case 'brackets':
        return <BracketsTab />;
      case 'employees':
        return <EmployeesTab />;
      case 'reports':
        return <ReportsTab />;
      default:
        return <CalculationTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Tax Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage employee income tax calculation and compliance reporting
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={selectedTaxPeriod}
              onChange={(e) => setSelectedTaxPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {taxPeriods.map(period => (
                <option key={period.value} value={period.value}>
                  {period.label}
                </option>
              ))}
            </select>
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export Tax Data"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Calculate Tax"
            >
              <Icon name="CalculatorIcon" className="w-5 h-5" />
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
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{employeeTaxData.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Employees</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">
                {(calculateTotalTax() / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Tax</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {taxReports.filter(r => r.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Reports</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {employeeTaxData.filter(e => e.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Calculations</p>
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

      {/* Modals */}
      <TaxModal />
      <BracketModal />
    </DashboardLayout>
  );
};

export default TaxManagement;