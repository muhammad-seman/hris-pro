import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const LeavePolicies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const leavePolicies = [
    {
      id: 1,
      type: 'Annual Leave',
      entitlement: 21,
      period: 'Calendar Year',
      carryOver: 5,
      maxCarryOver: 'Up to 5 days can be carried over to next year',
      eligibility: 'All permanent employees after probation',
      notice: '14 days advance notice required',
      restrictions: [
        'Maximum 10 consecutive days without management approval',
        'Cannot be taken during year-end closing period (Dec 25 - Jan 5)',
        'Subject to operational requirements'
      ],
      accrual: 'Monthly accrual (1.75 days per month)',
      color: 'bg-blue-500',
      icon: 'CalendarIcon',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      type: 'Sick Leave',
      entitlement: 14,
      period: 'Calendar Year',
      carryOver: 0,
      maxCarryOver: 'Cannot be carried over',
      eligibility: 'All employees from day one',
      notice: 'As soon as possible, within 24 hours',
      restrictions: [
        'Medical certificate required for 3+ consecutive days',
        'Subject to medical verification for frequent usage',
        'Cannot be converted to cash'
      ],
      accrual: 'Monthly accrual (1.17 days per month)',
      color: 'bg-red-500',
      icon: 'HeartIcon',
      lastUpdated: '2024-01-15'
    },
    {
      id: 3,
      type: 'Personal Leave',
      entitlement: 5,
      period: 'Calendar Year',
      carryOver: 0,
      maxCarryOver: 'Cannot be carried over',
      eligibility: 'All permanent employees after 6 months service',
      notice: '7 days advance notice required',
      restrictions: [
        'Cannot be combined with annual leave',
        'Subject to manager approval',
        'Maximum 2 days per occurrence'
      ],
      accrual: 'Annual grant on employment anniversary',
      color: 'bg-green-500',
      icon: 'UserIcon',
      lastUpdated: '2024-01-15'
    },
    {
      id: 4,
      type: 'Maternity Leave',
      entitlement: 90,
      period: 'Per pregnancy',
      carryOver: 0,
      maxCarryOver: 'Not applicable',
      eligibility: 'Female employees after 12 months continuous service',
      notice: '4 weeks advance notice with medical certificate',
      restrictions: [
        'Must provide medical certificate',
        'Return to work certificate required',
        'Can be extended with medical recommendation'
      ],
      accrual: 'Available upon eligibility',
      color: 'bg-pink-500',
      icon: 'HeartIcon',
      lastUpdated: '2024-01-15'
    },
    {
      id: 5,
      type: 'Paternity Leave',
      entitlement: 14,
      period: 'Per child birth',
      carryOver: 0,
      maxCarryOver: 'Not applicable',
      eligibility: 'Male employees after 12 months continuous service',
      notice: '2 weeks advance notice with birth certificate',
      restrictions: [
        'Must be taken within 6 months of child birth',
        'Birth certificate required',
        'Cannot be taken in parts'
      ],
      accrual: 'Available upon eligibility',
      color: 'bg-indigo-500',
      icon: 'UserIcon',
      lastUpdated: '2024-01-15'
    },
    {
      id: 6,
      type: 'Bereavement Leave',
      entitlement: 3,
      period: 'Per occurrence',
      carryOver: 0,
      maxCarryOver: 'Not applicable',
      eligibility: 'All employees from day one',
      notice: 'As soon as possible',
      restrictions: [
        'For immediate family members only',
        'Death certificate may be required',
        'Extended leave subject to approval'
      ],
      accrual: 'Available when needed',
      color: 'bg-gray-500',
      icon: 'HeartIcon',
      lastUpdated: '2024-01-15'
    }
  ];

  const generalPolicies = [
    {
      title: 'Application Process',
      content: [
        'All leave requests must be submitted through the HRIS system',
        'Applications should be submitted to direct supervisor',
        'Supporting documents must be attached where required',
        'Emergency leave can be applied retrospectively within 48 hours'
      ]
    },
    {
      title: 'Approval Hierarchy',
      content: [
        'Up to 5 days: Direct supervisor approval required',
        '6-14 days: Department head approval required',
        '15+ days: HR and senior management approval required',
        'Medical leave: HR approval required regardless of duration'
      ]
    },
    {
      title: 'Leave Balance Management',
      content: [
        'Leave balances are calculated monthly',
        'Employees can check balances through HRIS system',
        'Accruals are prorated for partial months',
        'Negative leave balances require HR approval'
      ]
    },
    {
      title: 'Public Holidays',
      content: [
        'All public holidays as declared by government',
        'Replacement holidays for weekend public holidays',
        'Religious holidays subject to company calendar',
        'Additional holidays may be granted at company discretion'
      ]
    }
  ];

  const PolicyCard = ({ policy, onClick }) => (
    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer" onClick={() => onClick(policy)}>
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${policy.color} rounded-lg flex items-center justify-center`}>
          <Icon name={policy.icon} className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {policy.type}
            </h3>
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              {policy.entitlement}
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">days</span>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Accrual Method</p>
              <p className="font-medium text-gray-800 dark:text-white">{policy.accrual}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Notice Required</p>
              <p className="font-medium text-gray-800 dark:text-white">{policy.notice}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Carry Over</p>
              <p className="font-medium text-gray-800 dark:text-white">
                {policy.carryOver > 0 ? `${policy.carryOver} days` : 'Not allowed'}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Last Updated</p>
              <p className="font-medium text-gray-800 dark:text-white">
                {new Date(policy.lastUpdated).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  const PolicyDetailModal = ({ policy, isOpen, onClose }) => {
    if (!isOpen || !policy) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${policy.color} rounded-lg flex items-center justify-center`}>
                <Icon name={policy.icon} className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {policy.type} Policy
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Entitlement</h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {policy.entitlement} days
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      per {policy.period.toLowerCase()}
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Accrual Method</h4>
                  <p className="text-gray-600 dark:text-gray-400">{policy.accrual}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Notice Period</h4>
                  <p className="text-gray-600 dark:text-gray-400">{policy.notice}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Eligibility</h4>
                  <p className="text-gray-600 dark:text-gray-400">{policy.eligibility}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Carry Over</h4>
                  <p className="text-gray-600 dark:text-gray-400">{policy.maxCarryOver}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Last Updated</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {new Date(policy.lastUpdated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Restrictions */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Policy Restrictions</h3>
              <div className="space-y-2">
                {policy.restrictions.map((restriction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="ExclamationTriangleIcon" className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400">{restriction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Download Policy
              </button>
            </div>
          </div>
        </div>
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
              Leave Policies
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Company leave policies and guidelines
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
              title="Download All Policies"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Edit Policies"
            >
              <Icon name="PencilIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Policy Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="DocumentTextIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">6</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Leave Types</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CalendarDaysIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">147</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Days Available</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Policy Rules</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">Jan 2024</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Leave Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {leavePolicies.map(policy => (
          <PolicyCard
            key={policy.id}
            policy={policy}
            onClick={setSelectedPolicy}
          />
        ))}
      </div>

      {/* General Policies */}
      <Card title="General Leave Policies">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {generalPolicies.map((policy, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center space-x-2">
                <Icon name="Cog6ToothIcon" className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span>{policy.title}</span>
              </h3>
              <div className="space-y-2">
                {policy.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Policy Detail Modal */}
      {selectedPolicy && (
        <PolicyDetailModal
          policy={selectedPolicy}
          isOpen={!!selectedPolicy}
          onClose={() => setSelectedPolicy(null)}
        />
      )}
    </DashboardLayout>
  );
};

export default LeavePolicies;