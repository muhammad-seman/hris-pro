import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const CertificationsPage = () => {
  const [activeTab, setActiveTab] = useState('employee_certs');
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const employeeCertifications = [
    {
      id: 1,
      employee: {
        employeeId: 'EMP001',
        employeeName: 'John Smith',
        department: 'Engineering',
        position: 'Senior Software Engineer',
        avatar: null
      },
      certification: {
        name: 'AWS Solutions Architect Professional',
        provider: 'Amazon Web Services',
        category: 'cloud',
        level: 'professional',
        credentialId: 'AWS-SAP-2024-001',
        verificationUrl: 'https://aws.amazon.com/verification/001'
      },
      status: 'active',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      score: 92,
      validFor: '3 years',
      renewalRequired: true,
      nextRenewalDate: '2026-10-15',
      cost: 300,
      studyHours: 120,
      attempts: 1
    },
    {
      id: 2,
      employee: {
        employeeId: 'EMP002',
        employeeName: 'Maria Garcia',
        department: 'Marketing',
        position: 'Digital Marketing Manager',
        avatar: null
      },
      certification: {
        name: 'Google Analytics Certified',
        provider: 'Google',
        category: 'analytics',
        level: 'intermediate',
        credentialId: 'GA-2024-002',
        verificationUrl: 'https://skillshop.withgoogle.com/verification/002'
      },
      status: 'expiring_soon',
      issueDate: '2023-11-20',
      expiryDate: '2024-11-20',
      score: 89,
      validFor: '1 year',
      renewalRequired: true,
      nextRenewalDate: '2024-09-20',
      cost: 0,
      studyHours: 40,
      attempts: 2
    },
    {
      id: 3,
      employee: {
        employeeId: 'EMP003',
        employeeName: 'Robert Chen',
        department: 'Engineering',
        position: 'DevOps Engineer',
        avatar: null
      },
      certification: {
        name: 'Certified Kubernetes Administrator',
        provider: 'Cloud Native Computing Foundation',
        category: 'devops',
        level: 'advanced',
        credentialId: 'CKA-2024-003',
        verificationUrl: 'https://cncf.io/verification/003'
      },
      status: 'active',
      issueDate: '2024-02-10',
      expiryDate: '2027-02-10',
      score: 95,
      validFor: '3 years',
      renewalRequired: true,
      nextRenewalDate: '2026-11-10',
      cost: 395,
      studyHours: 80,
      attempts: 1
    },
    {
      id: 4,
      employee: {
        employeeId: 'EMP004',
        employeeName: 'Emma Davis',
        department: 'HR',
        position: 'HR Manager',
        avatar: null
      },
      certification: {
        name: 'Professional in Human Resources',
        provider: 'HR Certification Institute',
        category: 'hr',
        level: 'professional',
        credentialId: 'PHR-2023-004',
        verificationUrl: 'https://hrci.org/verification/004'
      },
      status: 'expired',
      issueDate: '2020-12-05',
      expiryDate: '2023-12-05',
      score: 88,
      validFor: '3 years',
      renewalRequired: true,
      nextRenewalDate: null,
      cost: 450,
      studyHours: 100,
      attempts: 1
    }
  ];

  const availablePrograms = [
    {
      id: 1,
      name: 'AWS Solutions Architect Professional',
      provider: 'Amazon Web Services',
      category: 'cloud',
      level: 'professional',
      description: 'Validate advanced technical skills and experience in designing distributed applications and systems on the AWS platform',
      duration: '180 minutes',
      passingScore: 750,
      cost: 300,
      validFor: '3 years',
      prerequisites: ['AWS Solutions Architect Associate', '2+ years hands-on experience'],
      skills: ['Advanced AWS Services', 'Architecture Design', 'Cost Optimization', 'Security Best Practices'],
      examFormat: 'Multiple choice and multiple response',
      nextAvailableDate: '2024-04-15',
      popularity: 'high',
      successRate: 68,
      averageStudyTime: 120
    },
    {
      id: 2,
      name: 'Certified Kubernetes Administrator',
      provider: 'Cloud Native Computing Foundation',
      category: 'devops',
      level: 'advanced',
      description: 'Demonstrates the skills, knowledge, and competence to perform the job of a Kubernetes Administrator',
      duration: '120 minutes',
      passingScore: 66,
      cost: 395,
      validFor: '3 years',
      prerequisites: ['Basic understanding of Kubernetes', 'Command line experience'],
      skills: ['Cluster Architecture', 'Installation & Configuration', 'Workloads & Scheduling', 'Services & Networking'],
      examFormat: 'Performance-based',
      nextAvailableDate: '2024-04-20',
      popularity: 'high',
      successRate: 71,
      averageStudyTime: 80
    },
    {
      id: 3,
      name: 'Google Analytics Certified',
      provider: 'Google',
      category: 'analytics',
      level: 'intermediate',
      description: 'Demonstrates proficiency in Google Analytics and the ability to use data to make marketing decisions',
      duration: '90 minutes',
      passingScore: 80,
      cost: 0,
      validFor: '1 year',
      prerequisites: ['Basic understanding of web analytics'],
      skills: ['Data Analysis', 'Reporting', 'Conversion Tracking', 'Audience Analysis'],
      examFormat: 'Multiple choice',
      nextAvailableDate: 'Available anytime',
      popularity: 'very_high',
      successRate: 85,
      averageStudyTime: 40
    },
    {
      id: 4,
      name: 'Project Management Professional (PMP)',
      provider: 'Project Management Institute',
      category: 'project_management',
      level: 'professional',
      description: 'Recognizes competence to perform in the role of a project manager',
      duration: '230 minutes',
      passingScore: 'Above Target',
      cost: 555,
      validFor: '3 years',
      prerequisites: ['4-year degree + 36 months PM experience OR High school + 60 months PM experience', '35 hours PM education'],
      skills: ['Project Integration', 'Scope Management', 'Schedule Management', 'Cost Management'],
      examFormat: 'Multiple choice, multiple response, matching, hotspot',
      nextAvailableDate: '2024-04-25',
      popularity: 'high',
      successRate: 79,
      averageStudyTime: 150
    }
  ];

  const certificationProviders = [
    {
      id: 1,
      name: 'Amazon Web Services',
      shortName: 'AWS',
      category: 'cloud',
      description: 'Leading cloud computing certification provider',
      website: 'https://aws.amazon.com/certification/',
      totalCertifications: 12,
      activeCertifications: 8,
      logo: null,
      accreditation: 'Industry Standard',
      foundedYear: 2006,
      globalRecognition: true
    },
    {
      id: 2,
      name: 'Google',
      shortName: 'Google',
      category: 'technology',
      description: 'Technology and digital marketing certifications',
      website: 'https://skillshop.withgoogle.com/',
      totalCertifications: 25,
      activeCertifications: 18,
      logo: null,
      accreditation: 'Industry Standard',
      foundedYear: 1998,
      globalRecognition: true
    },
    {
      id: 3,
      name: 'Cloud Native Computing Foundation',
      shortName: 'CNCF',
      category: 'devops',
      description: 'Kubernetes and cloud-native technology certifications',
      website: 'https://www.cncf.io/certification/',
      totalCertifications: 5,
      activeCertifications: 3,
      logo: null,
      accreditation: 'Linux Foundation',
      foundedYear: 2015,
      globalRecognition: true
    },
    {
      id: 4,
      name: 'Project Management Institute',
      shortName: 'PMI',
      category: 'project_management',
      description: 'Project management and agile certifications',
      website: 'https://www.pmi.org/certifications',
      totalCertifications: 8,
      activeCertifications: 6,
      logo: null,
      accreditation: 'ANSI/ISO 17024',
      foundedYear: 1969,
      globalRecognition: true
    }
  ];

  const statuses = ['all', 'active', 'expiring_soon', 'expired', 'in_progress'];
  const providers = ['all', 'Amazon Web Services', 'Google', 'Cloud Native Computing Foundation', 'Project Management Institute'];
  const categories = ['all', 'cloud', 'analytics', 'devops', 'hr', 'project_management', 'security', 'marketing'];

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      expiring_soon: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      expired: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      in_progress: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    };
    return colors[status] || colors.active;
  };

  const getCategoryColor = (category) => {
    const colors = {
      cloud: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      analytics: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      devops: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      hr: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      project_management: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    };
    return colors[category] || colors.cloud;
  };

  const getLevelColor = (level) => {
    const colors = {
      foundational: 'text-green-600 dark:text-green-400',
      intermediate: 'text-yellow-600 dark:text-yellow-400',
      advanced: 'text-orange-600 dark:text-orange-400',
      professional: 'text-red-600 dark:text-red-400'
    };
    return colors[level] || colors.intermediate;
  };

  const getPopularityColor = (popularity) => {
    const colors = {
      low: 'text-gray-600 dark:text-gray-400',
      medium: 'text-blue-600 dark:text-blue-400',
      high: 'text-orange-600 dark:text-orange-400',
      very_high: 'text-red-600 dark:text-red-400'
    };
    return colors[popularity] || colors.medium;
  };

  const filteredCertifications = employeeCertifications.filter(cert => {
    if (selectedStatus !== 'all' && cert.status !== selectedStatus) return false;
    if (selectedProvider !== 'all' && cert.certification.provider !== selectedProvider) return false;
    return true;
  });

  const EmployeeCertificationsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Certifications</h3>
        <div className="flex space-x-3">
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
          <select 
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {providers.map(provider => (
              <option key={provider} value={provider}>
                {provider === 'all' ? 'All Providers' : provider}
              </option>
            ))}
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
            Add Certification
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCertifications.map((cert) => (
          <Card key={cert.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCertification(cert)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon name="AcademicCapIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{cert.employee.employeeName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.employee.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.employee.department}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                  {cert.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">{cert.certification.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.certification.provider}</p>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.certification.category)}`}>
                    {cert.certification.category.toUpperCase()}
                  </span>
                  <span className={`font-medium capitalize ${getLevelColor(cert.certification.level)}`}>
                    {cert.certification.level}
                  </span>
                </div>
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
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Score</p>
                  <p className="font-medium text-gray-800 dark:text-white">{cert.score}%</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Cost</p>
                  <p className="font-medium text-gray-800 dark:text-white">${cert.cost}</p>
                </div>
              </div>

              {cert.status === 'expiring_soon' && (
                <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="ExclamationTriangleIcon" className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm text-orange-800 dark:text-orange-200">
                      Expires in {Math.ceil((new Date(cert.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))} days
                    </span>
                  </div>
                  {cert.nextRenewalDate && (
                    <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                      Renewal due: {formatDate(cert.nextRenewalDate)}
                    </p>
                  )}
                </div>
              )}

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

      {selectedCertification && (
        <Card title={`Certification Details - ${selectedCertification.employee.employeeName}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Employee Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Name:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.employee.employeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">ID:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.employee.employeeId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Position:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.employee.position}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Department:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.employee.department}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Study Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Study Hours:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.studyHours}h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Attempts:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedCertification.attempts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                      <span className="font-medium text-gray-800 dark:text-white">${selectedCertification.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Certification Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Name:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedCertification.certification.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Provider:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedCertification.certification.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Level:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200 capitalize">{selectedCertification.certification.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Credential ID:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedCertification.certification.credentialId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Valid For:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedCertification.validFor}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Score</h4>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">{selectedCertification.score}%</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );

  const AvailableProgramsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Available Certification Programs</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Add Program
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {availablePrograms.map((program) => (
          <Card key={program.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProgram(program)}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{program.provider}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{program.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(program.category)}`}>
                    {program.category.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className={`font-medium capitalize text-sm ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                </div>
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
                  <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p className="font-medium text-gray-800 dark:text-white">{program.successRate}%</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Study Time</p>
                  <p className="font-medium text-gray-800 dark:text-white">{program.averageStudyTime}h avg</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Popularity: </span>
                  <span className={`font-medium ${getPopularityColor(program.popularity)}`}>
                    {program.popularity.replace('_', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Next: {program.nextAvailableDate}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Passing Score: {program.passingScore}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Employee
                  </button>
                </div>
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
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Program Description</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedProgram.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Prerequisites</h4>
                  <ul className="space-y-1">
                    {selectedProgram.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <Icon name="CheckCircleIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Exam Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Format:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.examFormat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Passing Score:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.passingScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Valid For:</span>
                      <span className="font-medium text-gray-800 dark:text-white">{selectedProgram.validFor}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Success Rate:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Avg Study Time:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">{selectedProgram.averageStudyTime} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700 dark:text-blue-300">Cost:</span>
                      <span className="font-medium text-blue-800 dark:text-blue-200">${selectedProgram.cost}</span>
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

  const ProvidersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Certification Providers</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
          Add Provider
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {certificationProviders.map((provider) => (
          <Card key={provider.id} className="hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="BuildingOfficeIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{provider.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">({provider.shortName})</p>
              </div>

              <div className="text-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(provider.category)}`}>
                  {provider.category.replace('_', ' ').toUpperCase()}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{provider.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{provider.totalCertifications}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Total Certifications</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{provider.activeCertifications}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Active Programs</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Founded:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{provider.foundedYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Accreditation:</span>
                  <span className="font-medium text-gray-800 dark:text-white">{provider.accreditation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Global Recognition:</span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {provider.globalRecognition ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <a 
                  href={provider.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-blue-600 text-white text-sm text-center rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const AnalyticsTab = () => (
    <div className="space-y-6">
      <Card title="Certifications Analytics">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg text-center">
            <Icon name="AcademicCapIcon" className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{employeeCertifications.length}</p>
            <p className="text-sm text-blue-800 dark:text-blue-300">Total Certifications</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
            <Icon name="CheckCircleIcon" className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {employeeCertifications.filter(c => c.status === 'active').length}
            </p>
            <p className="text-sm text-green-800 dark:text-green-300">Active</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg text-center">
            <Icon name="ExclamationTriangleIcon" className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {employeeCertifications.filter(c => c.status === 'expiring_soon').length}
            </p>
            <p className="text-sm text-orange-800 dark:text-orange-300">Expiring Soon</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg text-center">
            <Icon name="CurrencyDollarIcon" className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              ${employeeCertifications.reduce((sum, c) => sum + c.cost, 0).toLocaleString()}
            </p>
            <p className="text-sm text-purple-800 dark:text-purple-300">Total Investment</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Certifications by Category">
          <div className="space-y-4">
            {categories.filter(c => c !== 'all').map(category => {
              const categoryCount = employeeCertifications.filter(c => c.certification.category === category).length;
              const percentage = employeeCertifications.length > 0 ? (categoryCount / employeeCertifications.length) * 100 : 0;
              
              return (
                <div key={category} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                      {category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white w-8 text-right">
                      {categoryCount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Certification Status Distribution">
          <div className="space-y-4">
            {[
              { status: 'active', label: 'Active', color: 'bg-green-500' },
              { status: 'expiring_soon', label: 'Expiring Soon', color: 'bg-orange-500' },
              { status: 'expired', label: 'Expired', color: 'bg-red-500' },
              { status: 'in_progress', label: 'In Progress', color: 'bg-blue-500' }
            ].map(item => {
              const count = employeeCertifications.filter(c => c.status === item.status).length;
              const percentage = employeeCertifications.length > 0 ? (count / employeeCertifications.length) * 100 : 0;
              
              return (
                <div key={item.status} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
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
    { id: 'employee_certs', label: 'Employee Certifications', icon: 'AcademicCapIcon', component: EmployeeCertificationsTab },
    { id: 'programs', label: 'Available Programs', icon: 'BookOpenIcon', component: AvailableProgramsTab },
    { id: 'providers', label: 'Providers', icon: 'BuildingOfficeIcon', component: ProvidersTab },
    { id: 'analytics', label: 'Analytics', icon: 'ChartBarIcon', component: AnalyticsTab }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || EmployeeCertificationsTab;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage employee certifications, programs, and certification providers</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Report
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="PlusIcon" className="w-4 h-4 inline mr-2" />
              New Certification
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

export default CertificationsPage;