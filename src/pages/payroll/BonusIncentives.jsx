import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';
import Chart from '../../components/Dashboard/Chart';

const BonusIncentives = () => {
  const [selectedTab, setSelectedTab] = useState('programs');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isEditing, setIsEditing] = useState(false);

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];
  const periods = [
    { value: '2024-Q1', label: 'Q1 2024' },
    { value: '2023-Q4', label: 'Q4 2023' },
    { value: '2023-Q3', label: 'Q3 2023' }
  ];

  const bonusPrograms = [
    {
      id: 1,
      name: 'Performance Bonus',
      type: 'performance',
      category: 'individual',
      description: 'Individual performance-based bonus calculated quarterly',
      frequency: 'quarterly',
      baseAmount: 5000000,
      calculationMethod: 'percentage',
      calculationValue: 15,
      eligibility: 'All permanent employees after probation',
      kpiWeight: {
        individual: 60,
        team: 25,
        company: 15
      },
      status: 'active',
      budget: 2500000000,
      allocated: 1875000000,
      remaining: 625000000,
      participants: 125,
      lastCalculated: '2024-03-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 2,
      name: 'Sales Commission',
      type: 'commission',
      category: 'individual',
      description: 'Commission based on sales achievement and targets',
      frequency: 'monthly',
      baseAmount: 0,
      calculationMethod: 'tiered',
      calculationValue: 0,
      tiers: [
        { min: 0, max: 50000000, rate: 2 },
        { min: 50000001, max: 100000000, rate: 3 },
        { min: 100000001, max: null, rate: 5 }
      ],
      eligibility: 'Sales team members only',
      status: 'active',
      budget: 1200000000,
      allocated: 890000000,
      remaining: 310000000,
      participants: 24,
      lastCalculated: '2024-03-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 3,
      name: 'Team Achievement Bonus',
      type: 'achievement',
      category: 'team',
      description: 'Team-based bonus for achieving quarterly objectives',
      frequency: 'quarterly',
      baseAmount: 3000000,
      calculationMethod: 'fixed',
      calculationValue: 100,
      eligibility: 'All team members when team objectives are met',
      achievementCriteria: [
        'Meet quarterly revenue targets',
        'Achieve customer satisfaction score > 4.5',
        'Complete all project deliverables on time'
      ],
      status: 'active',
      budget: 800000000,
      allocated: 600000000,
      remaining: 200000000,
      participants: 156,
      lastCalculated: '2024-03-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 4,
      name: 'Annual Excellence Bonus',
      type: 'excellence',
      category: 'individual',
      description: 'Annual bonus for outstanding performance and contributions',
      frequency: 'annually',
      baseAmount: 10000000,
      calculationMethod: 'multiplier',
      calculationValue: 2,
      eligibility: 'Top 20% performers company-wide',
      criteria: [
        'Exceptional performance rating (4.5+)',
        'Significant contribution to company goals',
        'Leadership and innovation demonstration'
      ],
      status: 'active',
      budget: 1000000000,
      allocated: 750000000,
      remaining: 250000000,
      participants: 31,
      lastCalculated: '2023-12-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 5,
      name: 'Referral Bonus',
      type: 'referral',
      category: 'individual',
      description: 'One-time bonus for successful employee referrals',
      frequency: 'ad-hoc',
      baseAmount: 2500000,
      calculationMethod: 'fixed',
      calculationValue: 100,
      eligibility: 'All permanent employees',
      requirements: [
        'Referred candidate must be hired',
        'Referred employee must pass probation',
        'Both referrer and referred must be active'
      ],
      status: 'active',
      budget: 300000000,
      allocated: 175000000,
      remaining: 125000000,
      participants: 70,
      lastCalculated: '2024-03-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    },
    {
      id: 6,
      name: 'Innovation Incentive',
      type: 'innovation',
      category: 'project',
      description: 'Incentive for innovative ideas and successful implementations',
      frequency: 'quarterly',
      baseAmount: 5000000,
      calculationMethod: 'fixed',
      calculationValue: 100,
      eligibility: 'All employees with approved innovation projects',
      evaluationCriteria: [
        'Idea feasibility and innovation level',
        'Implementation success rate',
        'Business impact and ROI'
      ],
      status: 'active',
      budget: 600000000,
      allocated: 350000000,
      remaining: 250000000,
      participants: 45,
      lastCalculated: '2024-03-31',
      effectiveDate: '2024-01-01',
      endDate: '2024-12-31'
    }
  ];

  const employeeBonusData = [
    {
      employeeId: 'EMP001',
      name: 'John Smith',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      grade: 'Grade 4',
      bonuses: [
        {
          programId: 1,
          programName: 'Performance Bonus',
          period: '2024-Q1',
          amount: 7500000,
          calculationBase: 50000000,
          multiplier: 15,
          kpiScore: 4.2,
          status: 'calculated'
        },
        {
          programId: 3,
          programName: 'Team Achievement Bonus',
          period: '2024-Q1',
          amount: 3000000,
          calculationBase: 3000000,
          multiplier: 100,
          teamScore: 4.8,
          status: 'calculated'
        }
      ],
      totalBonus: 10500000,
      ytdBonus: 10500000,
      lastCalculated: '2024-03-31'
    },
    {
      employeeId: 'EMP002',
      name: 'Sarah Wilson',
      department: 'Design',
      position: 'UX Designer',
      grade: 'Grade 3',
      bonuses: [
        {
          programId: 1,
          programName: 'Performance Bonus',
          period: '2024-Q1',
          amount: 5400000,
          calculationBase: 36000000,
          multiplier: 15,
          kpiScore: 4.0,
          status: 'calculated'
        },
        {
          programId: 3,
          programName: 'Team Achievement Bonus',
          period: '2024-Q1',
          amount: 3000000,
          calculationBase: 3000000,
          multiplier: 100,
          teamScore: 4.8,
          status: 'calculated'
        }
      ],
      totalBonus: 8400000,
      ytdBonus: 8400000,
      lastCalculated: '2024-03-31'
    },
    {
      employeeId: 'EMP003',
      name: 'Michael Chen',
      department: 'Sales',
      position: 'Senior Account Manager',
      grade: 'Grade 4',
      bonuses: [
        {
          programId: 2,
          programName: 'Sales Commission',
          period: '2024-Q1',
          amount: 12500000,
          calculationBase: 125000000,
          salesAchievement: 125,
          commissionRate: 4.2,
          status: 'calculated'
        },
        {
          programId: 1,
          programName: 'Performance Bonus',
          period: '2024-Q1',
          amount: 7500000,
          calculationBase: 50000000,
          multiplier: 15,
          kpiScore: 4.5,
          status: 'calculated'
        }
      ],
      totalBonus: 20000000,
      ytdBonus: 20000000,
      lastCalculated: '2024-03-31'
    },
    {
      employeeId: 'EMP004',
      name: 'Emma Davis',
      department: 'Marketing',
      position: 'Marketing Manager',
      grade: 'Grade 4',
      bonuses: [
        {
          programId: 1,
          programName: 'Performance Bonus',
          period: '2024-Q1',
          amount: 6750000,
          calculationBase: 45000000,
          multiplier: 15,
          kpiScore: 4.1,
          status: 'calculated'
        },
        {
          programId: 6,
          programName: 'Innovation Incentive',
          period: '2024-Q1',
          amount: 5000000,
          calculationBase: 5000000,
          multiplier: 100,
          innovationScore: 4.7,
          status: 'approved'
        }
      ],
      totalBonus: 11750000,
      ytdBonus: 11750000,
      lastCalculated: '2024-03-31'
    }
  ];

  const bonusDistribution = [
    {
      period: '2024-Q1',
      totalBudget: 6400000000,
      totalAllocated: 4640000000,
      totalPaid: 4640000000,
      remainingBudget: 1760000000,
      participantsEligible: 156,
      participantsReceived: 125,
      averageBonus: 37120000,
      topBonus: 20000000,
      processingStatus: 'completed'
    },
    {
      period: '2023-Q4',
      totalBudget: 6400000000,
      totalAllocated: 5120000000,
      totalPaid: 5120000000,
      remainingBudget: 1280000000,
      participantsEligible: 148,
      participantsReceived: 142,
      averageBonus: 36056000,
      topBonus: 25000000,
      processingStatus: 'completed'
    }
  ];

  const tabs = [
    { id: 'programs', label: 'Bonus Programs', icon: 'GiftIcon' },
    { id: 'employees', label: 'Employee Bonuses', icon: 'UsersIcon' },
    { id: 'distribution', label: 'Bonus Distribution', icon: 'ChartBarIcon' },
    { id: 'analytics', label: 'Analytics & Reports', icon: 'PresentationChartBarIcon' }
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
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'calculated':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'approved':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'paid':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getBonusTypeColor = (type) => {
    const colors = {
      performance: 'bg-blue-500',
      commission: 'bg-green-500',
      achievement: 'bg-purple-500',
      excellence: 'bg-yellow-500',
      referral: 'bg-pink-500',
      innovation: 'bg-indigo-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setIsEditing(false);
    setShowProgramModal(true);
  };

  const ProgramsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bonus & Incentive Programs</h3>
        <button
          onClick={() => {
            setSelectedProgram(null);
            setIsEditing(true);
            setShowProgramModal(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Icon name="PlusIcon" className="w-4 h-4" />
          <span>Create Program</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bonusPrograms.map(program => (
          <Card key={program.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleProgramClick(program)}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${getBonusTypeColor(program.type)} rounded-lg flex items-center justify-center`}>
                <Icon name="GiftIcon" className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm capitalize">
                      {program.frequency} • {program.category}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                    {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Budget</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {formatCurrency(program.budget)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Allocated</p>
                    <p className="font-medium text-blue-600 dark:text-blue-400">
                      {formatCurrency(program.allocated)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Participants</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {program.participants}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Base Amount</p>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {program.baseAmount > 0 ? formatCurrency(program.baseAmount) : 'Variable'}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Budget Utilization</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getBonusTypeColor(program.type)}`}
                      style={{ width: `${(program.allocated / program.budget) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <span>{Math.round((program.allocated / program.budget) * 100)}% used</span>
                    <span>Remaining: {formatCurrency(program.remaining)}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Last calculated: {formatDate(program.lastCalculated)}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const EmployeesTab = () => {
    const filteredEmployees = selectedDepartment === 'all' 
      ? employeeBonusData 
      : employeeBonusData.filter(emp => emp.department === selectedDepartment);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Bonus Details</h3>
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Bonus ({selectedPeriod})</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {formatCurrency(employee.totalBonus)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      YTD: {formatCurrency(employee.ytdBonus)}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-3">Bonus Breakdown</h4>
                  <div className="space-y-3">
                    {employee.bonuses.map((bonus, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <Icon name="GiftIcon" className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 dark:text-white">{bonus.programName}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Period: {bonus.period}
                              {bonus.kpiScore && ` • KPI Score: ${bonus.kpiScore}/5.0`}
                              {bonus.salesAchievement && ` • Sales Achievement: ${bonus.salesAchievement}%`}
                              {bonus.teamScore && ` • Team Score: ${bonus.teamScore}/5.0`}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800 dark:text-white">
                            {formatCurrency(bonus.amount)}
                          </p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bonus.status)}`}>
                            {bonus.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span>Last calculated: {formatDate(employee.lastCalculated)}</span>
                  <div className="flex space-x-2">
                    <button className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      <Icon name="CalculatorIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </button>
                    <button className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                      <Icon name="BanknotesIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
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

  const DistributionTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bonus Distribution Overview</h3>
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
      </div>

      {bonusDistribution
        .filter(dist => dist.period === selectedPeriod)
        .map(distribution => (
          <Card key={distribution.period} title={`Bonus Distribution - ${distribution.period}`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(distribution.totalBudget)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Budget</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(distribution.totalAllocated)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Allocated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {distribution.participantsReceived}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recipients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {formatCurrency(distribution.averageBonus)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average Bonus</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Budget Utilization</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Allocated</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Math.round((distribution.totalAllocated / distribution.totalBudget) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: `${(distribution.totalAllocated / distribution.totalBudget) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Used: {formatCurrency(distribution.totalAllocated)}</span>
                    <span>Remaining: {formatCurrency(distribution.remainingBudget)}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Participation Rate</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Eligible vs Received</span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {Math.round((distribution.participantsReceived / distribution.participantsEligible) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                    <div 
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${(distribution.participantsReceived / distribution.participantsEligible) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Received: {distribution.participantsReceived}</span>
                    <span>Eligible: {distribution.participantsEligible}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Highest Bonus</p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {formatCurrency(distribution.topBonus)}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Processing Status</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(distribution.processingStatus)}`}>
                    {distribution.processingStatus}
                  </span>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Period</p>
                  <p className="font-semibold text-gray-800 dark:text-white">{distribution.period}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Utilization Rate</p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {Math.round((distribution.totalAllocated / distribution.totalBudget) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}

      {/* Program-wise Distribution */}
      <Card title="Program-wise Budget Allocation">
        <div className="space-y-4">
          {bonusPrograms.map(program => (
            <div key={program.id} className="flex items-center space-x-4">
              <div className={`w-8 h-8 ${getBonusTypeColor(program.type)} rounded flex items-center justify-center`}>
                <Icon name="GiftIcon" className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-800 dark:text-white">{program.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {formatCurrency(program.allocated)} / {formatCurrency(program.budget)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getBonusTypeColor(program.type)}`}
                    style={{ width: `${(program.allocated / program.budget) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mt-1">
                  <span>{program.participants} participants</span>
                  <span>{Math.round((program.allocated / program.budget) * 100)}% allocated</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Bonus Distribution by Program"
          type="pie"
          data={bonusPrograms.map(program => ({
            label: program.name,
            value: program.allocated / 1000000,
            color: getBonusTypeColor(program.type)
          }))}
          height="300px"
        />

        <Chart
          title="Quarterly Bonus Trend"
          type="line"
          data={[
            { label: '2023-Q1', value: 4200000000 / 1000000 },
            { label: '2023-Q2', value: 4800000000 / 1000000 },
            { label: '2023-Q3', value: 5400000000 / 1000000 },
            { label: '2023-Q4', value: 5120000000 / 1000000 },
            { label: '2024-Q1', value: 4640000000 / 1000000 }
          ]}
          height="300px"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Department Performance">
          <div className="space-y-4">
            {['Engineering', 'Sales', 'Marketing', 'Design', 'HR'].map(dept => {
              const deptEmployees = employeeBonusData.filter(emp => emp.department === dept);
              const avgBonus = deptEmployees.reduce((sum, emp) => sum + emp.totalBonus, 0) / (deptEmployees.length || 1);
              const maxBonus = Math.max(...employeeBonusData.map(emp => emp.totalBonus));
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${(avgBonus / maxBonus) * 100}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-20 text-right">
                      {(avgBonus / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Bonus Metrics Summary">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {Math.round((bonusDistribution[0]?.participantsReceived / bonusDistribution[0]?.participantsEligible) * 100)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Participation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {Math.round((bonusDistribution[0]?.totalAllocated / bonusDistribution[0]?.totalBudget) * 100)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Budget Utilization</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {bonusPrograms.filter(p => p.status === 'active').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">4.2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg KPI Score</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Bonus ROI Analysis">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">+18%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Performance Improvement</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">vs previous quarter</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">+12%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Employee Retention</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">vs previous year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">+25%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Growth</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">attributed to incentives</div>
          </div>
        </div>
      </Card>
    </div>
  );

  const ProgramModal = () => {
    if (!showProgramModal || !selectedProgram) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${getBonusTypeColor(selectedProgram.type)} rounded-lg flex items-center justify-center`}>
                <Icon name="GiftIcon" className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {selectedProgram.name}
              </h2>
            </div>
            <button
              onClick={() => setShowProgramModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProgram.description}</p>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProgram.status)}`}>
                  {selectedProgram.status.charAt(0).toUpperCase() + selectedProgram.status.slice(1)}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {selectedProgram.frequency} • {selectedProgram.category}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Total Budget</h4>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(selectedProgram.budget)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Allocated</h4>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(selectedProgram.allocated)}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Participants</h4>
                <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  {selectedProgram.participants}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-1">Base Amount</h4>
                <p className="text-xl font-bold text-gray-800 dark:text-white">
                  {selectedProgram.baseAmount > 0 ? formatCurrency(selectedProgram.baseAmount) : 'Variable'}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-3">Eligibility & Requirements</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{selectedProgram.eligibility}</p>
              
              {selectedProgram.criteria && (
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white mb-2">Criteria</h5>
                  <div className="space-y-2">
                    {selectedProgram.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-400">{criterion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProgram.achievementCriteria && (
                <div className="mt-4">
                  <h5 className="font-medium text-gray-800 dark:text-white mb-2">Achievement Criteria</h5>
                  <div className="space-y-2">
                    {selectedProgram.achievementCriteria.map((criterion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 dark:text-gray-400">{criterion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedProgram.kpiWeight && (
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">KPI Weighting</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {selectedProgram.kpiWeight.individual}%
                    </div>
                    <div className="text-sm text-blue-800 dark:text-blue-400">Individual</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {selectedProgram.kpiWeight.team}%
                    </div>
                    <div className="text-sm text-green-800 dark:text-green-400">Team</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {selectedProgram.kpiWeight.company}%
                    </div>
                    <div className="text-sm text-purple-800 dark:text-purple-400">Company</div>
                  </div>
                </div>
              </div>
            )}

            {selectedProgram.tiers && (
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Commission Tiers</h4>
                <div className="space-y-3">
                  {selectedProgram.tiers.map((tier, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-300">
                        {formatCurrency(tier.min)} - {tier.max ? formatCurrency(tier.max) : 'Above'}
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-white">
                        {tier.rate}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-medium text-gray-800 dark:text-white mb-3">Budget Utilization</h4>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 mb-2">
                <div 
                  className={`h-4 rounded-full ${getBonusTypeColor(selectedProgram.type)}`}
                  style={{ width: `${(selectedProgram.allocated / selectedProgram.budget) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Allocated: {formatCurrency(selectedProgram.allocated)}</span>
                <span>Remaining: {formatCurrency(selectedProgram.remaining)}</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowProgramModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Edit Program
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'programs':
        return <ProgramsTab />;
      case 'employees':
        return <EmployeesTab />;
      case 'distribution':
        return <DistributionTab />;
      case 'analytics':
        return <AnalyticsTab />;
      default:
        return <ProgramsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Bonus & Incentives
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage employee bonus programs, incentives, and performance rewards
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
              title="Export Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Calculate Bonuses"
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
              <Icon name="GiftIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{bonusPrograms.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Programs</p>
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
                {(bonusPrograms.reduce((sum, p) => sum + p.budget, 0) / 1000000000).toFixed(1)}B
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Budget</p>
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
                {employeeBonusData.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Participants</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUpIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {Math.round((bonusPrograms.reduce((sum, p) => sum + p.allocated, 0) / bonusPrograms.reduce((sum, p) => sum + p.budget, 0)) * 100)}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Budget Utilized</p>
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

      {/* Program Modal */}
      <ProgramModal />
    </DashboardLayout>
  );
};

export default BonusIncentives;