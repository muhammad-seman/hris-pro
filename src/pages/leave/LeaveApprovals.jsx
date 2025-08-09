import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const LeaveApprovals = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalAction, setApprovalAction] = useState(null);
  const [approvalNotes, setApprovalNotes] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'Engineering', 'Design', 'Sales', 'Marketing', 'HR', 'Finance'];

  const pendingRequests = [
    {
      id: 1,
      employeeName: 'Emma Davis',
      employeeId: 'EMP003',
      department: 'Design',
      position: 'UX Designer',
      type: 'Annual Leave',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      days: 3,
      reason: 'Wedding ceremony preparation',
      appliedDate: '2024-02-28',
      urgency: 'normal',
      balance: { available: 15, used: 6 },
      manager: 'Sarah Wilson',
      attachment: 'wedding-invite.pdf',
      previousLeave: '2024-01-15',
      avatar: 'ED',
      priority: 2
    },
    {
      id: 2,
      employeeName: 'Michael Rodriguez',
      employeeId: 'EMP007',
      department: 'Engineering',
      position: 'Backend Developer',
      type: 'Sick Leave',
      startDate: '2024-03-18',
      endDate: '2024-03-20',
      days: 3,
      reason: 'Medical procedure - surgery recovery',
      appliedDate: '2024-03-15',
      urgency: 'urgent',
      balance: { available: 11, used: 3 },
      manager: 'John Anderson',
      attachment: 'medical-cert.pdf',
      previousLeave: '2024-02-08',
      avatar: 'MR',
      priority: 1
    },
    {
      id: 3,
      employeeName: 'Lisa Chen',
      employeeId: 'EMP012',
      department: 'Marketing',
      position: 'Marketing Manager',
      type: 'Personal Leave',
      startDate: '2024-03-25',
      endDate: '2024-03-26',
      days: 2,
      reason: 'Family emergency - urgent family matter',
      appliedDate: '2024-03-22',
      urgency: 'high',
      balance: { available: 3, used: 2 },
      manager: 'David Kim',
      attachment: null,
      previousLeave: '2024-01-20',
      avatar: 'LC',
      priority: 1
    },
    {
      id: 4,
      employeeName: 'James Wilson',
      employeeId: 'EMP015',
      department: 'Sales',
      position: 'Account Executive',
      type: 'Annual Leave',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      days: 5,
      reason: 'Family vacation to Europe',
      appliedDate: '2024-03-10',
      urgency: 'normal',
      balance: { available: 18, used: 3 },
      manager: 'Robert Chen',
      attachment: null,
      previousLeave: '2023-12-20',
      avatar: 'JW',
      priority: 3
    }
  ];

  const approvedRequests = [
    {
      id: 5,
      employeeName: 'Sarah Kim',
      employeeId: 'EMP008',
      department: 'HR',
      position: 'HR Specialist',
      type: 'Maternity Leave',
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      days: 90,
      reason: 'Maternity leave for childbirth',
      appliedDate: '2024-01-15',
      approvedDate: '2024-01-18',
      approver: 'Jennifer Taylor',
      approverNotes: 'Approved as per company maternity policy',
      avatar: 'SK'
    },
    {
      id: 6,
      employeeName: 'David Park',
      employeeId: 'EMP010',
      department: 'Engineering',
      position: 'Senior Developer',
      type: 'Annual Leave',
      startDate: '2024-03-01',
      endDate: '2024-03-08',
      days: 8,
      reason: 'Honeymoon trip',
      appliedDate: '2024-02-10',
      approvedDate: '2024-02-12',
      approver: 'John Anderson',
      approverNotes: 'Approved - adequate coverage arranged',
      avatar: 'DP'
    }
  ];

  const rejectedRequests = [
    {
      id: 7,
      employeeName: 'Alex Thompson',
      employeeId: 'EMP014',
      department: 'Engineering',
      position: 'Frontend Developer',
      type: 'Annual Leave',
      startDate: '2024-03-15',
      endDate: '2024-03-25',
      days: 10,
      reason: 'Extended vacation',
      appliedDate: '2024-03-10',
      rejectedDate: '2024-03-12',
      rejector: 'John Anderson',
      rejectionReason: 'Insufficient advance notice and critical project deadlines',
      avatar: 'AT'
    }
  ];

  const tabs = [
    { id: 'pending', label: 'Pending Approval', icon: 'ClockIcon', count: pendingRequests.length },
    { id: 'approved', label: 'Approved', icon: 'CheckCircleIcon', count: approvedRequests.length },
    { id: 'rejected', label: 'Rejected', icon: 'XCircleIcon', count: rejectedRequests.length }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
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

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 1:
        return 'ExclamationTriangleIcon';
      case 2:
        return 'ExclamationCircleIcon';
      default:
        return 'InformationCircleIcon';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1:
        return 'text-red-600 dark:text-red-400';
      case 2:
        return 'text-orange-600 dark:text-orange-400';
      default:
        return 'text-blue-600 dark:text-blue-400';
    }
  };

  const handleApprovalAction = (request, action) => {
    setSelectedRequest(request);
    setApprovalAction(action);
    setShowApprovalModal(true);
    setApprovalNotes('');
  };

  const filteredRequests = (requests) => {
    if (selectedDepartment === 'all') return requests;
    return requests.filter(request => request.department === selectedDepartment);
  };

  const PendingRequestsTab = () => (
    <div className="space-y-6">
      {filteredRequests(pendingRequests)
        .sort((a, b) => a.priority - b.priority)
        .map(request => (
        <Card key={request.id} className="hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {getInitials(request.employeeName)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {request.employeeName}
                    </h3>
                    <Icon 
                      name={getPriorityIcon(request.priority)} 
                      className={`w-4 h-4 ${getPriorityColor(request.priority)}`} 
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {request.employeeId} • {request.position}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                      {request.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                      {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)} Priority
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {request.department}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">Balance</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {request.balance.available} available
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {request.balance.used} used this year
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manager</p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {request.manager}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reason</p>
                    <p className="text-gray-800 dark:text-white">{request.reason}</p>
                  </div>

                  {request.attachment && (
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="DocumentTextIcon" className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                        {request.attachment}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>Last leave: {formatDate(request.previousLeave)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleApprovalAction(request, 'approve')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                title="Approve Request"
              >
                <Icon name="CheckIcon" className="w-4 h-4" />
                <span>Approve</span>
              </button>
              <button 
                onClick={() => handleApprovalAction(request, 'reject')}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                title="Reject Request"
              >
                <Icon name="XMarkIcon" className="w-4 h-4" />
                <span>Reject</span>
              </button>
              <button 
                className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                title="View Details"
              >
                <Icon name="EyeIcon" className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const ApprovedRequestsTab = () => (
    <div className="space-y-6">
      {filteredRequests(approvedRequests).map(request => (
        <Card key={request.id}>
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
                <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
                  Approved
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Leave Type & Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(request.startDate)} - {formatDate(request.endDate)} ({request.days} days)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Approved By</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.approver}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(request.approvedDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.department}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Reason</p>
                <p className="text-gray-800 dark:text-white">{request.reason}</p>
              </div>

              {request.approverNotes && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Approval Notes</p>
                  <p className="text-green-800 dark:text-green-400">{request.approverNotes}</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const RejectedRequestsTab = () => (
    <div className="space-y-6">
      {filteredRequests(rejectedRequests).map(request => (
        <Card key={request.id}>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {getInitials(request.employeeName)}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {request.employeeName}
                </h3>
                <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 rounded-full text-xs font-medium">
                  Rejected
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Leave Type & Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(request.startDate)} - {formatDate(request.endDate)} ({request.days} days)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rejected By</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.rejector}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(request.rejectedDate)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Department</p>
                  <p className="font-medium text-gray-800 dark:text-white">{request.department}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">Original Reason</p>
                <p className="text-gray-800 dark:text-white">{request.reason}</p>
              </div>

              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-gray-600 dark:text-gray-400">Rejection Reason</p>
                <p className="text-red-800 dark:text-red-400">{request.rejectionReason}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const ApprovalModal = () => {
    if (!showApprovalModal || !selectedRequest) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 m-4 max-w-lg w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {approvalAction === 'approve' ? 'Approve' : 'Reject'} Leave Request
            </h2>
            <button
              onClick={() => setShowApprovalModal(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="XMarkIcon" className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {getInitials(selectedRequest.employeeName)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {selectedRequest.employeeName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedRequest.employeeId} • {selectedRequest.department}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Leave Type</p>
                  <p className="font-medium text-gray-800 dark:text-white">{selectedRequest.type}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {selectedRequest.days} {selectedRequest.days > 1 ? 'days' : 'day'}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {approvalAction === 'approve' ? 'Approval Notes' : 'Rejection Reason'} *
              </label>
              <textarea
                value={approvalNotes}
                onChange={(e) => setApprovalNotes(e.target.value)}
                rows={3}
                placeholder={
                  approvalAction === 'approve' 
                    ? 'Add any notes or conditions for the approval...' 
                    : 'Provide a clear reason for rejection...'
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowApprovalModal(false)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              className={`px-6 py-2 text-white rounded-lg transition-colors ${
                approvalAction === 'approve'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {approvalAction === 'approve' ? 'Approve Request' : 'Reject Request'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'pending':
        return <PendingRequestsTab />;
      case 'approved':
        return <ApprovedRequestsTab />;
      case 'rejected':
        return <RejectedRequestsTab />;
      default:
        return <PendingRequestsTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Leave Approvals
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Review and approve team leave requests
            </p>
          </div>
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
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Export Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5" />
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
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {pendingRequests.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Approval</p>
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
                {pendingRequests.filter(r => r.urgency === 'urgent').length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Urgent Requests</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircleIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {approvedRequests.length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Approved Today</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ChartBarIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">95%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Approval Rate</p>
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
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Approval Modal */}
      <ApprovalModal />
    </DashboardLayout>
  );
};

export default LeaveApprovals;