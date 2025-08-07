import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const LeaveRequests = () => {
  const [selectedTab, setSelectedTab] = useState('my-requests');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const myRequests = [
    {
      id: 1,
      type: 'Annual Leave',
      startDate: '2024-03-15',
      endDate: '2024-03-18',
      days: 4,
      reason: 'Family vacation trip to Bali',
      status: 'pending',
      appliedDate: '2024-02-25',
      approver: 'John Anderson',
      attachment: null
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2024-02-10',
      endDate: '2024-02-10',
      days: 1,
      reason: 'Medical appointment',
      status: 'approved',
      appliedDate: '2024-02-08',
      approver: 'Sarah Wilson',
      attachment: 'medical-cert.pdf'
    },
    {
      id: 3,
      type: 'Personal Leave',
      startDate: '2024-01-22',
      endDate: '2024-01-22',
      days: 1,
      reason: 'Personal matter',
      status: 'rejected',
      appliedDate: '2024-01-15',
      approver: 'Michael Chen',
      attachment: null,
      rejectReason: 'Insufficient notice period'
    }
  ];

  const teamRequests = [
    {
      id: 4,
      employeeName: 'Emma Davis',
      employeeId: 'EMP003',
      department: 'Design',
      type: 'Annual Leave',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      days: 3,
      reason: 'Wedding ceremony',
      status: 'pending',
      appliedDate: '2024-02-28',
      urgency: 'normal'
    },
    {
      id: 5,
      employeeName: 'James Rodriguez',
      employeeId: 'EMP004',
      department: 'Engineering',
      type: 'Sick Leave',
      startDate: '2024-02-15',
      endDate: '2024-02-16',
      days: 2,
      reason: 'Flu symptoms',
      status: 'approved',
      appliedDate: '2024-02-14',
      urgency: 'urgent'
    }
  ];

  const leaveTypes = [
    { value: 'annual', label: 'Annual Leave', available: 15, used: 5 },
    { value: 'sick', label: 'Sick Leave', available: 12, used: 2 },
    { value: 'personal', label: 'Personal Leave', available: 3, used: 1 },
    { value: 'maternity', label: 'Maternity/Paternity', available: 90, used: 0 },
    { value: 'emergency', label: 'Emergency Leave', available: 5, used: 0 }
  ];

  const tabs = [
    { id: 'my-requests', label: 'My Requests', icon: 'UserIcon' },
    { id: 'team-requests', label: 'Team Requests', icon: 'UsersIcon' },
    { id: 'new-request', label: 'New Request', icon: 'PlusIcon' }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'urgent':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'high':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'normal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const MyRequestsTab = () => (
    <div className="space-y-6">
      {myRequests.map(request => (
        <Card key={request.id}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="CalendarIcon" className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {request.type}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {formatDate(request.startDate)} - {formatDate(request.endDate)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.days} {request.days > 1 ? 'days' : 'day'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Applied Date</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {formatDate(request.appliedDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Approver</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {request.approver}
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reason</p>
                    <p className="text-gray-800 dark:text-white">{request.reason}</p>
                  </div>
                  {request.rejectReason && (
                    <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rejection Reason</p>
                      <p className="text-red-800 dark:text-red-400">{request.rejectReason}</p>
                    </div>
                  )}
                  {request.attachment && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="DocumentTextIcon" className="w-4 h-4 text-gray-500" />
                      <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                        {request.attachment}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <button 
                className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                title="View Details"
                onClick={() => setSelectedRequest(request)}
              >
                <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
              {request.status === 'pending' && (
                <button 
                  className="p-1 bg-red-50 dark:bg-red-900/20 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  title="Cancel Request"
                >
                  <Icon name="XMarkIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const TeamRequestsTab = () => (
    <div className="space-y-6">
      {teamRequests.map(request => (
        <Card key={request.id}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {getInitials(request.employeeName)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {request.employeeName}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {request.employeeId} • {request.department}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                      {request.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                      {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {formatDate(request.startDate)} - {formatDate(request.endDate)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {request.days} {request.days > 1 ? 'days' : 'day'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Applied Date</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {formatDate(request.appliedDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Reason</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {request.reason}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              {request.status === 'pending' && (
                <>
                  <button 
                    className="p-1 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    title="Approve"
                  >
                    <Icon name="CheckIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </button>
                  <button 
                    className="p-1 bg-red-50 dark:bg-red-900/20 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    title="Reject"
                  >
                    <Icon name="XMarkIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </>
              )}
              <button 
                className="p-1 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                title="View Details"
              >
                <Icon name="EyeIcon" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const NewRequestTab = () => {
    const [formData, setFormData] = useState({
      type: '',
      startDate: '',
      endDate: '',
      reason: '',
      attachment: null
    });

    return (
      <Card title="Submit New Leave Request">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Leave Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select leave type...</option>
                {leaveTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label} (Available: {type.available - type.used} days)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Reason for Leave
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
              rows={4}
              placeholder="Please provide the reason for your leave request..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Supporting Documents (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
              <div className="text-center">
                <Icon name="DocumentTextIcon" className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* Leave Balance Summary */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Your Leave Balance</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {leaveTypes.slice(0, 3).map(type => (
                <div key={type.value} className="text-center">
                  <div className="text-lg font-bold text-gray-800 dark:text-white">
                    {type.available - type.used}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {type.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    of {type.available} days
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </Card>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'my-requests':
        return <MyRequestsTab />;
      case 'team-requests':
        return <TeamRequestsTab />;
      case 'new-request':
        return <NewRequestTab />;
      default:
        return <MyRequestsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Leave Requests
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your leave requests and approvals
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Quick Request"
              onClick={() => setSelectedTab('new-request')}
            >
              <Icon name="PlusIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">3</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Requests</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Approved This Year</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CalendarDaysIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">18</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Days Available</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="UsersIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Requests</p>
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
    </DashboardLayout>
  );
};

export default LeaveRequests;