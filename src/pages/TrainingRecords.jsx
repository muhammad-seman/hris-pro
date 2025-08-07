import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const TrainingRecords = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const trainingRecords = [
    {
      id: 1,
      employee: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Engineering',
        position: 'Senior Software Engineer'
      },
      program: {
        id: 1,
        name: 'AWS Cloud Practitioner',
        category: 'technical',
        provider: 'Amazon Web Services',
        type: 'certification',
        duration: '40 hours'
      },
      enrollment: {
        date: '2024-01-15',
        status: 'completed',
        progress: 100,
        score: 92,
        completionDate: '2024-02-28',
        certificateUrl: '/certificates/emp001-aws-cp.pdf'
      },
      cost: 299,
      priority: 'high',
      manager: {
        employeeName: 'Sarah Johnson',
        position: 'Engineering Manager'
      }
    },
    {
      id: 2,
      employee: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Sales',
        position: 'Senior Account Manager'
      },
      program: {
        id: 2,
        name: 'Advanced Sales Techniques',
        category: 'sales',
        provider: 'Sales Institute',
        type: 'course',
        duration: '24 hours'
      },
      enrollment: {
        date: '2024-02-01',
        status: 'in_progress',
        progress: 65,
        score: null,
        completionDate: null,
        certificateUrl: null
      },
      cost: 199,
      priority: 'medium',
      manager: {
        employeeName: 'David Wilson',
        position: 'Sales Director'
      }
    },
    {
      id: 3,
      employee: {
        employeeId: 'EMP003',
        employeeName: 'Robert Chen',
        department: 'Marketing',
        position: 'Marketing Manager'
      },
      program: {
        id: 3,
        name: 'Digital Marketing Fundamentals',
        category: 'marketing',
        provider: 'Marketing Academy',
        type: 'workshop',
        duration: '16 hours'
      },
      enrollment: {
        date: '2024-01-20',
        status: 'pending',
        progress: 0,
        score: null,
        completionDate: null,
        certificateUrl: null
      },
      cost: 149,
      priority: 'low',
      manager: {
        employeeName: 'Lisa Wong',
        position: 'Marketing Director'
      }
    },
    {
      id: 4,
      employee: {
        employeeId: 'EMP004',
        employeeName: 'Emma Davis',
        department: 'HR',
        position: 'HR Manager'
      },
      program: {
        id: 4,
        name: 'Leadership Development Program',
        category: 'leadership',
        provider: 'Leadership Institute',
        type: 'program',
        duration: '80 hours'
      },
      enrollment: {
        date: '2024-01-10',
        status: 'expired',
        progress: 25,
        score: null,
        completionDate: null,
        certificateUrl: null
      },
      cost: 499,
      priority: 'high',
      manager: {
        employeeName: 'Michael Brown',
        position: 'VP Human Resources'
      }
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      name: 'AWS Cloud Practitioner',
      category: 'technical',
      provider: 'Amazon Web Services',
      type: 'certification',
      duration: '40 hours',
      cost: 299,
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology',
      prerequisites: 'Basic IT knowledge',
      difficulty: 'beginner',
      status: 'active',
      enrollments: 15,
      completions: 12,
      avgScore: 87,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Advanced Sales Techniques',
      category: 'sales',
      provider: 'Sales Institute',
      type: 'course',
      duration: '24 hours',
      cost: 199,
      description: 'Advanced strategies for closing deals and building client relationships',
      prerequisites: 'Basic sales experience',
      difficulty: 'intermediate',
      status: 'active',
      enrollments: 8,
      completions: 6,
      avgScore: 91,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Digital Marketing Fundamentals',
      category: 'marketing',
      provider: 'Marketing Academy',
      type: 'workshop',
      duration: '16 hours',
      cost: 149,
      description: 'Essential digital marketing strategies and tools',
      prerequisites: 'None',
      difficulty: 'beginner',
      status: 'active',
      enrollments: 12,
      completions: 10,
      avgScore: 83,
      rating: 4.4
    },
    {
      id: 4,
      name: 'Leadership Development Program',
      category: 'leadership',
      provider: 'Leadership Institute',
      type: 'program',
      duration: '80 hours',
      cost: 499,
      description: 'Comprehensive leadership skills development for managers',
      prerequisites: '2+ years management experience',
      difficulty: 'advanced',
      status: 'active',
      enrollments: 6,
      completions: 4,
      avgScore: 89,
      rating: 4.9
    }
  ];

  const certifications = [
    {
      id: 1,
      employeeId: 'EMP001',
      employeeName: 'John Smith',
      certificateName: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      issueDate: '2024-02-28',
      expiryDate: '2027-02-28',
      status: 'active',
      credentialId: 'AWS-CP-2024-001',
      verificationUrl: 'https://aws.amazon.com/verification/001'
    },
    {
      id: 2,
      employeeId: 'EMP005',
      employeeName: 'Alice Johnson',
      certificateName: 'Project Management Professional (PMP)',
      provider: 'PMI',
      issueDate: '2023-12-15',
      expiryDate: '2026-12-15',
      status: 'active',
      credentialId: 'PMP-2023-005',
      verificationUrl: 'https://pmi.org/verification/005'
    },
    {
      id: 3,
      employeeId: 'EMP006',
      employeeName: 'Tom Wilson',
      certificateName: 'Google Analytics Certified',
      provider: 'Google',
      issueDate: '2023-11-20',
      expiryDate: '2024-11-20',
      status: 'expiring_soon',
      credentialId: 'GA-2023-006',
      verificationUrl: 'https://skillshop.withgoogle.com/verification/006'
    }
  ];

  const departments = ['all', 'Engineering', 'Sales', 'Marketing', 'HR', 'Operations'];
  const statuses = ['all', 'pending', 'in_progress', 'completed', 'expired'];
  const categories = ['all', 'technical', 'sales', 'marketing', 'leadership', 'compliance'];

  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      expired: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      expiring_soon: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
    };
    return colors[status] || colors.pending;
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    };
    return colors[priority] || colors.medium;
  };

  const getCategoryColor = (category) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      sales: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      marketing: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      leadership: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      compliance: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    };
    return colors[category] || colors.technical;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'text-green-600 dark:text-green-400',
      intermediate: 'text-yellow-600 dark:text-yellow-400',
      advanced: 'text-red-600 dark:text-red-400'
    };
    return colors[difficulty] || colors.beginner;
  };

  const filteredRecords = trainingRecords.filter(record => {
    if (selectedDepartment !== 'all' && record.employee.department !== selectedDepartment) return false;
    if (selectedStatus !== 'all' && record.enrollment.status !== selectedStatus) return false;
    return true;
  });

  const RecordsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Training Records</h3>
        <div className="flex space-x-3">
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'all' ? 'All Departments' : dept}
              </option>
            ))}
          </select>
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status.replace('_', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            Enroll Employee
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedRecord(record)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="UserIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{record.employee.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{record.employee.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{record.employee.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.enrollment.status)}`}>
                    {record.enrollment.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${getPriorityColor(record.priority)}`}>
                    {record.priority.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">{record.program.name}</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(record.program.category)}`}>
                    {record.program.category.toUpperCase()}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">{record.program.duration}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{record.program.provider}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enrollment Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(record.enrollment.date)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cost</p>
                  <p className="font-medium text-gray-800 dark:text-white">${record.cost}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${record.enrollment.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{record.enrollment.progress}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {record.enrollment.score ? `${record.enrollment.score}%` : 'N/A'}
                  </p>
                </div>
              </div>

              {record.enrollment.completionDate && (
                <div className="flex items-center justify-between bg-green-50 dark:bg-green-900 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm text-green-800 dark:text-green-200">
                      Completed on {formatDate(record.enrollment.completionDate)}
                    </span>
                  </div>
                  {record.enrollment.certificateUrl && (
                    <button className="text-sm text-green-600 dark:text-green-400 hover:underline">
                      View Certificate
                    </button>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {selectedRecord && (
        <Card title={`Training Details - ${selectedRecord.employee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Employee Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedRecord.employee.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">ID:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedRecord.employee.employeeId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedRecord.employee.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedRecord.employee.department}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Program Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Name:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedRecord.program.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Provider:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedRecord.program.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Type:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200 capitalize">{selectedRecord.program.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Duration:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedRecord.program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Progress</h4>
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="w-full h-full rounded-full border-8 border-green-200 dark:border-green-700"></div>
                    <div 
                      className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500"
                      style={{ 
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((selectedRecord.enrollment.progress / 100 * 360 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((selectedRecord.enrollment.progress / 100 * 360 - 90) * Math.PI / 180)}%, 50% 50%)`
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {selectedRecord.enrollment.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Enrollment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Enrollment Date:</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">{formatDate(selectedRecord.enrollment.date)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedRecord.enrollment.status)}`}>
                        {selectedRecord.enrollment.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Cost:</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">${selectedRecord.cost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700 dark:text-purple-300">Manager:</span>
                      <span className="font-medium text-purple-800 dark:text-purple-200">{selectedRecord.manager.employeeName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const ProgramsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Training Programs</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Add Program
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {trainingPrograms.map((program) => (
          <Card key={program.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProgram(program)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{program.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{program.provider}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                  {program.status.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{program.description}</p>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(program.category)}`}>
                  {program.category.toUpperCase()}
                </span>
                <span className="text-sm font-medium text-gray-800 dark:text-white capitalize">{program.type}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-medium text-gray-800 dark:text-white">{program.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Cost</p>
                  <p className="font-medium text-gray-800 dark:text-white">${program.cost}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Difficulty</p>
                  <p className={`font-medium capitalize ${getDifficultyColor(program.difficulty)}`}>{program.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Rating</p>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-gray-800 dark:text-white">{program.rating}</span>
                    <Icon name="StarIcon" className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  {program.enrollments} enrolled • {program.completions} completed
                </span>
                <span className="font-medium text-gray-800 dark:text-white">
                  {program.avgScore}% avg score
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedProgram && (
        <Card title={`Program Details - ${selectedProgram.name}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Program Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Provider:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="font-medium text-gray-800 dark:text-white capitalize">{selectedProgram.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                      <span className="font-medium text-gray-800 dark:text-white">${selectedProgram.cost}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prerequisites</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProgram.prerequisites}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Enrollments:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.enrollments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Completions:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.completions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Success Rate:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">
                        {Math.round((selectedProgram.completions / selectedProgram.enrollments) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Avg Score:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.avgScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Rating:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.rating}/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const CertificationsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Certifications</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Add Certification
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <Icon name="AcademicCapIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.employeeId}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                  {cert.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">{cert.certificateName}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Issue Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(cert.issueDate)}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Expiry Date</p>
                  <p className="font-medium text-gray-800 dark:text-white">{formatDate(cert.expiryDate)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600 dark:text-gray-400">Credential ID</p>
                  <p className="font-medium text-gray-800 dark:text-white text-xs">{cert.credentialId}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors text-sm">
                  View Certificate
                </button>
                <button className="flex-1 px-3 py-2 bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 transition-colors text-sm">
                  Verify
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Training Analytics Overview">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="BookOpenIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{trainingRecords.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Enrollments</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {trainingRecords.filter(r => r.enrollment.status === 'completed').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Completed</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg text-center">
            <Icon name="ClockIcon" className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {trainingRecords.filter(r => r.enrollment.status === 'in_progress').length}
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-300">In Progress</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="CurrencyDollarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              ${trainingRecords.reduce((sum, r) => sum + r.cost, 0).toLocaleString()}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Total Investment</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Training by Department">
          <div className="space-y-4">
            {departments.filter(d => d !== 'all').map(dept => {
              const deptRecords = trainingRecords.filter(r => r.employee.department === dept);
              const completions = deptRecords.filter(r => r.enrollment.status === 'completed').length;
              const percentage = deptRecords.length > 0 ? (completions / deptRecords.length) * 100 : 0;
              
              return (
                <div key={dept} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{dept}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-16 text-right">
                      {deptRecords.length} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Training Categories">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryRecords = trainingRecords.filter(r => r.program.category === category);
              const count = categoryRecords.length;
              const percentage = trainingRecords.length > 0 ? (count / trainingRecords.length) * 100 : 0;
              
              return (
                <div key={category} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                      {category.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-purple-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                      {count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );

  const tabs = [
    { id: 'records', label: 'Training Records', icon: 'BookOpenIcon', component: RecordsTab },
    { id: 'programs', label: 'Programs', icon: 'AcademicCapIcon', component: ProgramsTab },
    { id: 'certifications', label: 'Certifications', icon: 'ShieldCheckIcon', component: CertificationsTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || RecordsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Training Records</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage employee training programs, certifications, and development records</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Records
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              New Training
            </button>
          </div>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <ActiveComponent />
      </div>
    </DashboardLayout>
  );
};

export default TrainingRecords;