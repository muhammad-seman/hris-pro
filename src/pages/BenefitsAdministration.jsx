import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const BenefitsAdministration = () => {
  const [selectedTab, setSelectedTab] = useState('benefits');
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const [showBenefitModal, setShowBenefitModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];

  const benefitPlans = [
    {
      id: 1,
      name: 'Health Insurance Premium',
      type: 'health',
      category: 'insurance',
      description: 'Comprehensive health insurance coverage including inpatient, outpatient, and dental',
      provider: 'XYZ Insurance',
      employerContribution: 80,
      employeeContribution: 20,
      monthlyCost: 2500000,
      coverage: 'Individual + Family',
      eligibility: 'All permanent employees after probation',
      enrolledCount: 142,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      features: [
        'Inpatient care up to IDR 500M per year',
        'Outpatient care up to IDR 50M per year', 
        'Dental care up to IDR 10M per year',
        'Maternity care up to IDR 25M',
        'Emergency coverage worldwide'
      ]
    },
    {
      id: 2,
      name: 'Life Insurance',
      type: 'life',
      category: 'insurance',
      description: 'Basic life insurance coverage for all employees',
      provider: 'ABC Life Insurance',
      employerContribution: 100,
      employeeContribution: 0,
      monthlyCost: 150000,
      coverage: '24x monthly salary',
      eligibility: 'All employees from day one',
      enrolledCount: 156,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      features: [
        'Death benefit: 24x monthly basic salary',
        'Accidental death: 2x death benefit',
        'Permanent disability coverage',
        'No medical checkup required',
        'Automatic enrollment'
      ]
    },
    {
      id: 3,
      name: 'Flexible Spending Account',
      type: 'flexible',
      category: 'financial',
      description: 'Pre-tax account for medical and dependent care expenses',
      provider: 'Internal',
      employerContribution: 0,
      employeeContribution: 100,
      monthlyCost: 0,
      coverage: 'Up to IDR 12M per year',
      eligibility: 'All employees after 6 months',
      enrolledCount: 78,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      features: [
        'Pre-tax contribution up to IDR 12M annually',
        'Medical expenses reimbursement',
        'Dependent care expenses',
        'Unused funds carry over (up to IDR 2.5M)',
        'Mobile app for easy claims'
      ]
    },
    {
      id: 4,
      name: 'Professional Development Fund',
      type: 'development',
      category: 'professional',
      description: 'Annual budget for employee training and development',
      provider: 'Internal',
      employerContribution: 100,
      employeeContribution: 0,
      monthlyCost: 500000,
      coverage: 'IDR 6M per employee per year',
      eligibility: 'All employees after 1 year',
      enrolledCount: 98,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      features: [
        'Training courses and certifications',
        'Conference attendance',
        'Online learning platforms',
        'Books and educational materials',
        'Skill-related workshops'
      ]
    },
    {
      id: 5,
      name: 'Wellness Program',
      type: 'wellness',
      category: 'health',
      description: 'Comprehensive wellness program including gym membership and health screenings',
      provider: 'Multiple providers',
      employerContribution: 70,
      employeeContribution: 30,
      monthlyCost: 800000,
      coverage: 'Gym + Health screenings',
      eligibility: 'All employees after probation',
      enrolledCount: 89,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      features: [
        'Premium gym membership',
        'Annual health screening',
        'Nutrition counseling',
        'Mental health support',
        'Corporate wellness challenges'
      ]
    },
    {
      id: 6,
      name: 'Stock Option Plan',
      type: 'equity',
      category: 'financial',
      description: 'Employee stock ownership program',
      provider: 'Internal',
      employerContribution: 100,
      employeeContribution: 0,
      monthlyCost: 0,
      coverage: 'Based on grade and performance',
      eligibility: 'Grade 3 and above after 2 years',
      enrolledCount: 45,
      totalEmployees: 156,
      startDate: '2024-01-01',
      endDate: '2027-12-31',
      status: 'active',
      features: [
        'Stock options based on performance',
        '4-year vesting schedule',
        '1-year cliff period',
        'Exercise price at grant date',
        'Annual performance review for grants'
      ]
    }
  ];

  const employeeBenefits = [
    {
      employeeId: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      grade: 'Grade 4',
      enrolledBenefits: [
        {
          benefitId: 1,
          benefitName: 'Health Insurance Premium',
          enrollmentDate: '2024-01-01',
          status: 'active',
          employeeContribution: 500000,
          dependents: ['spouse', 'child1', 'child2'],
          coverageLevel: 'family'
        },
        {
          benefitId: 2,
          benefitName: 'Life Insurance',
          enrollmentDate: '2024-01-01',
          status: 'active',
          employeeContribution: 0,
          dependents: [],
          coverageLevel: 'individual'
        },
        {
          benefitId: 3,
          benefitName: 'Flexible Spending Account',
          enrollmentDate: '2024-02-01',
          status: 'active',
          employeeContribution: 1000000,
          dependents: [],
          coverageLevel: 'individual'
        },
        {
          benefitId: 4,
          benefitName: 'Professional Development Fund',
          enrollmentDate: '2024-01-01',
          status: 'active',
          employeeContribution: 0,
          dependents: [],
          coverageLevel: 'individual'
        }
      ],
      totalMonthlyContribution: 1500000,
      lastUpdated: '2024-03-01'
    },
    {
      employeeId: 'EMP002',
      name: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      grade: 'Grade 3',
      enrolledBenefits: [
        {
          benefitId: 1,
          benefitName: 'Health Insurance Premium',
          enrollmentDate: '2024-01-01',
          status: 'active',
          employeeContribution: 500000,
          dependents: [],
          coverageLevel: 'individual'
        },
        {
          benefitId: 2,
          benefitName: 'Life Insurance',
          enrollmentDate: '2024-01-01',
          status: 'active',
          employeeContribution: 0,
          dependents: [],
          coverageLevel: 'individual'
        },
        {
          benefitId: 5,
          benefitName: 'Wellness Program',
          enrollmentDate: '2024-02-15',
          status: 'active',
          employeeContribution: 240000,
          dependents: [],
          coverageLevel: 'individual'
        }
      ],
      totalMonthlyContribution: 740000,
      lastUpdated: '2024-02-15'
    }
  ];

  const benefitRequests = [
    {
      id: 1,
      employeeId: 'EMP003',
      employeeName: 'Michael Chen',
      department: 'Engineering',
      benefitName: 'Health Insurance Premium',
      requestType: 'enrollment',
      requestDate: '2024-03-20',
      effectiveDate: '2024-04-01',
      status: 'pending',
      dependents: ['spouse'],
      coverageLevel: 'spouse',
      reason: 'New hire enrollment',
      documents: ['marriage_certificate.pdf']
    },
    {
      id: 2,
      employeeId: 'EMP004',
      employeeName: 'Emma Davis',
      department: 'Sales',
      benefitName: 'Flexible Spending Account',
      requestType: 'change',
      requestDate: '2024-03-18',
      effectiveDate: '2024-04-01',
      status: 'approved',
      dependents: [],
      coverageLevel: 'individual',
      reason: 'Increase contribution amount',
      documents: []
    },
    {
      id: 3,
      employeeId: 'EMP005',
      employeeName: 'James Rodriguez',
      department: 'Marketing',
      benefitName: 'Wellness Program',
      requestType: 'termination',
      requestDate: '2024-03-15',
      effectiveDate: '2024-03-31',
      status: 'processing',
      dependents: [],
      coverageLevel: 'individual',
      reason: 'Relocating to different city',
      documents: []
    }
  ];

  const tabs = [
    { id: 'benefits', label: 'Benefit Plans', icon: 'HeartIcon' },
    { id: 'enrollment', label: 'Employee Enrollment', icon: 'UsersIcon' },
    { id: 'requests', label: 'Benefit Requests', icon: 'DocumentTextIcon' },
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

  const getBenefitTypeColor = (type) => {
    const colors = {
      health: 'bg-green-500',
      life: 'bg-blue-500',
      flexible: 'bg-purple-500',
      development: 'bg-yellow-500',
      wellness: 'bg-pink-500',
      equity: 'bg-indigo-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'approved':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'processing':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleBenefitClick = (benefit) => {
    setSelectedBenefit(benefit);
    setIsEditing(false);
    setShowBenefitModal(true);
  };

  const handleEnrollEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowEnrollmentModal(true);
  };

  const BenefitsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Available Benefit Plans</h3>
        <button
          onClick={() => {
            setSelectedBenefit(null);
            setIsEditing(true);
            setShowBenefitModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Add Benefit Plan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {benefitPlans.map(benefit => (
          <Card key={benefit.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleBenefitClick(benefit)}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${getBenefitTypeColor(benefit.type)} rounded-lg flex items-center justify-center`}>
                <Icon name="HeartIcon" className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {benefit.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {benefit.provider}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(benefit.status)}`}>
                      {benefit.status.charAt(0).toUpperCase() + benefit.status.slice(1)}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {benefit.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Monthly Cost</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(benefit.monthlyCost)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Coverage</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {benefit.coverage}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Employer Share</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {benefit.employerContribution}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Enrollment</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {benefit.enrolledCount}/{benefit.totalEmployees}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Enrollment Rate</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getBenefitTypeColor(benefit.type)}`}
                      style={{ width: `${(benefit.enrolledCount / benefit.totalEmployees) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>{Math.round((benefit.enrolledCount / benefit.totalEmployees) * 100)}% enrolled</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Effective: {formatDate(benefit.startDate)} - {formatDate(benefit.endDate)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const EnrollmentTab = () => {
    const filteredEmployees = selectedDepartment === 'all' 
      ? employeeBenefits 
      : employeeBenefits.filter(emp => emp.department === selectedDepartment);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Benefit Enrollment</h3>
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Icon name="PlusIcon" className="w-4 h-4" />
              <span>Bulk Enrollment</span>
            </button>
          </div>
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
                    <span className="inline-block mt-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded text-xs font-medium">
                      {employee.grade}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Contribution</p>
                    <p className="text-xl font-bold text-gray-800 dark:text-white">
                      {formatCurrency(employee.totalMonthlyContribution)}
                    </p>
                    <button
                      onClick={() => handleEnrollEmployee(employee)}
                      className="mt-2 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                    >
                      Manage Benefits
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-3">Enrolled Benefits</h4>
                  <div className="space-y-3">
                    {employee.enrolledBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                            <Icon name="CheckIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 dark:text-white">{benefit.benefitName}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {benefit.coverageLevel} • Enrolled: {formatDate(benefit.enrollmentDate)}
                            </p>
                            {benefit.dependents.length > 0 && (
                              <p className="text-xs text-blue-600 dark:text-blue-400">
                                Dependents: {benefit.dependents.join(', ')}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-800 dark:text-white">
                            {formatCurrency(benefit.employeeContribution)}
                          </p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(benefit.status)}`}>
                            {benefit.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 pt-3 border-t border-gray-200 dark:border-gray-700">
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

  const RequestsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Benefit Change Requests</h3>
        <div className="flex items-center space-x-3">
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Processing</option>
            <option>Rejected</option>
          </select>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Icon name="CheckIcon" className="w-4 h-4" />
            <span>Bulk Approve</span>
          </button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Employee</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Benefit</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Request Type</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Effective Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {benefitRequests.map(request => (
                <tr key={request.id} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{request.employeeName}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.employeeId} • {request.department}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-800 dark:text-white">{request.benefitName}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{request.coverageLevel}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.requestType === 'enrollment' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : request.requestType === 'change'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {request.requestType.charAt(0).toUpperCase() + request.requestType.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                    {formatDate(request.effectiveDate)}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      {request.status === 'pending' && (
                        <>
                          <button className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                            <Icon name="CheckIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </button>
                          <button className="p-1 bg-red-50 dark:bg-red-900/20 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                            <Icon name="XMarkIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />
                          </button>
                        </>
                      )}
                      <button className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="HeartIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{benefitPlans.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Plans</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">91%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Enrollment</p>
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
                {benefitRequests.filter(r => r.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="BanknotesIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-800 dark:text-white">4.2B</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Annual Cost</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Enrollment by Benefit Type">
          <div className="space-y-4">
            {benefitPlans.map(benefit => {
              const enrollmentRate = (benefit.enrolledCount / benefit.totalEmployees) * 100;
              return (
                <div key={benefit.id} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 ${getBenefitTypeColor(benefit.type)} rounded flex items-center justify-center`}>
                    <Icon name="HeartIcon" className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800 dark:text-white">{benefit.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {Math.round(enrollmentRate)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getBenefitTypeColor(benefit.type)}`}
                        style={{ width: `${enrollmentRate}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <span>{benefit.enrolledCount}/{benefit.totalEmployees} employees</span>
                      <span>{formatCurrency(benefit.monthlyCost)}/mo</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Monthly Cost Breakdown">
          <div className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-3xl font-bold text-gray-800 dark:text-white">
                {formatCurrency(benefitPlans.reduce((sum, benefit) => 
                  sum + (benefit.monthlyCost * benefit.enrolledCount), 0))}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Monthly Cost</p>
            </div>
            
            {['insurance', 'financial', 'health', 'professional'].map(category => {
              const categoryBenefits = benefitPlans.filter(b => b.category === category);
              const categoryCost = categoryBenefits.reduce((sum, benefit) => 
                sum + (benefit.monthlyCost * benefit.enrolledCount), 0);
              const totalCost = benefitPlans.reduce((sum, benefit) => 
                sum + (benefit.monthlyCost * benefit.enrolledCount), 0);
              const percentage = totalCost > 0 ? (categoryCost / totalCost) * 100 : 0;

              return (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 capitalize">{category}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-20 text-right">
                      {formatCurrency(categoryCost).slice(0, -3)}K
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card title="Benefit Utilization Trends">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">+15%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Health Insurance Enrollment</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">vs last year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+8%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Professional Development</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">vs last year</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">+22%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Wellness Program</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">vs last year</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const BenefitModal = () => {
    if (!showBenefitModal || !selectedBenefit) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${getBenefitTypeColor(selectedBenefit.type)} rounded-lg flex items-center justify-center`}>
                <Icon name="HeartIcon" className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedBenefit.name}
              </h2>
            </div>
            <button
              onClick={() => setShowBenefitModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedBenefit.description}</p>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedBenefit.status)}`}>
                  {selectedBenefit.status.charAt(0).toUpperCase() + selectedBenefit.status.slice(1)}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Provider: {selectedBenefit.provider}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Monthly Cost</h4>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(selectedBenefit.monthlyCost)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Coverage</h4>
                <p className="text-gray-600 dark:text-gray-400">{selectedBenefit.coverage}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Employer Share</h4>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  {selectedBenefit.employerContribution}%
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Enrollment</h4>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {selectedBenefit.enrolledCount}/{selectedBenefit.totalEmployees}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ({Math.round((selectedBenefit.enrolledCount / selectedBenefit.totalEmployees) * 100)}%)
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-3">Eligibility</h4>
              <p className="text-gray-600 dark:text-gray-400">{selectedBenefit.eligibility}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-3">Plan Features</h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedBenefit.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-3">Cost Sharing</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 dark:text-green-400 font-medium">Employer</span>
                    <span className="text-green-800 dark:text-green-400 font-bold text-lg">
                      {selectedBenefit.employerContribution}%
                    </span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-300 mt-1">
                    {formatCurrency(selectedBenefit.monthlyCost * selectedBenefit.employerContribution / 100)}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-400 font-medium">Employee</span>
                    <span className="text-blue-800 dark:text-blue-400 font-bold text-lg">
                      {selectedBenefit.employeeContribution}%
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                    {formatCurrency(selectedBenefit.monthlyCost * selectedBenefit.employeeContribution / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowBenefitModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Edit Benefit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EnrollmentModal = () => {
    if (!showEnrollmentModal || !selectedEmployee) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Manage Benefits - {selectedEmployee.name}
            </h2>
            <button
              onClick={() => setShowEnrollmentModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Employee ID</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedEmployee.employeeId}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Department</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedEmployee.department}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Position</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedEmployee.position}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Grade</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedEmployee.grade}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 dark:text-white mb-3">Available Benefits</h3>
              <div className="space-y-3">
                {benefitPlans.map(benefit => {
                  const isEnrolled = selectedEmployee.enrolledBenefits.some(eb => eb.benefitName === benefit.name);
                  return (
                    <div key={benefit.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${getBenefitTypeColor(benefit.type)} rounded flex items-center justify-center`}>
                          <Icon name="HeartIcon" className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 dark:text-white">{benefit.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {formatCurrency(benefit.monthlyCost * benefit.employeeContribution / 100)}/month
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {isEnrolled && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
                            Enrolled
                          </span>
                        )}
                        <button className={`px-3 py-1 rounded text-xs font-medium ${
                          isEnrolled 
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30'
                        } transition-colors`}>
                          {isEnrolled ? 'Unenroll' : 'Enroll'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowEnrollmentModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'benefits':
        return <BenefitsTab />;
      case 'enrollment':
        return <EnrollmentTab />;
      case 'requests':
        return <RequestsTab />;
      case 'analytics':
        return <AnalyticsTab />;
      default:
        return <BenefitsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Benefits Administration
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage employee benefit plans, enrollment, and administration
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Export Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Open Enrollment"
            >
              <Icon name="UsersIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="HeartIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{benefitPlans.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Plans</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round(benefitPlans.reduce((sum, plan) => sum + (plan.enrolledCount / plan.totalEmployees), 0) / benefitPlans.length * 100)}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Enrollment</p>
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
                {benefitRequests.filter(r => r.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</p>
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
                {(benefitPlans.reduce((sum, plan) => sum + (plan.monthlyCost * plan.enrolledCount), 0) * 12 / 1000000000).toFixed(1)}B
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Annual Cost</p>
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
      <BenefitModal />
      <EnrollmentModal />
    </DashboardLayout>
  );
};

export default BenefitsAdministration;