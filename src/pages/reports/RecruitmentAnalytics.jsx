import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const RecruitmentAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024-Q1');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const recruitmentMetrics = {
    totalJobPostings: 24,
    totalApplications: 456,
    averageApplicationsPerJob: 19,
    applicationConversionRate: 12.5,
    timeToFill: 28,
    costPerHire: 3200,
    offerAcceptanceRate: 85,
    newHiresThisMonth: 12
  };

  const topPerformingJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      applications: 45,
      conversionRate: 15.6,
      timeToFill: 21,
      status: 'active'
    },
    {
      id: 2,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      applications: 38,
      conversionRate: 13.2,
      timeToFill: 32,
      status: 'filled'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Recruitment Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Track recruitment performance and hiring metrics</p>
          </div>
          <div className="flex space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="2024-Q1">Q1 2024</option>
              <option value="2023-Q4">Q4 2023</option>
              <option value="2023-Q3">Q3 2023</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Icon name="DocumentArrowDownIcon" className="w-4 h-4 inline mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Icon name="BriefcaseIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{recruitmentMetrics.totalJobPostings}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Job Postings</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Icon name="UsersIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{recruitmentMetrics.totalApplications}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Applications</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                <Icon name="ClockIcon" className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{recruitmentMetrics.timeToFill}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Days to Fill</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Icon name="CurrencyDollarIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">${recruitmentMetrics.costPerHire}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cost per Hire</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Top Performing Jobs */}
        <Card title="Top Performing Job Postings">
          <div className="space-y-4">
            {topPerformingJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">{job.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{job.department}</p>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="font-bold text-gray-800 dark:text-white">{job.applications}</p>
                    <p className="text-gray-600 dark:text-gray-400">Applications</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-800 dark:text-white">{job.conversionRate}%</p>
                    <p className="text-gray-600 dark:text-gray-400">Conversion</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-800 dark:text-white">{job.timeToFill} days</p>
                    <p className="text-gray-600 dark:text-gray-400">Time to Fill</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RecruitmentAnalytics;