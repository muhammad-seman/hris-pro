import React, { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Clock, DollarSign, Target, Filter, Calendar, Download, RefreshCw, Eye, AlertCircle, CheckCircle, UserCheck, Briefcase } from 'lucide-react';

function RecruitmentAnalytics() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('last_6_months');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const overviewMetrics = [
    {
      title: 'Total Applications',
      value: '1,247',
      change: '+23%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Positions Filled',
      value: '89',
      change: '+15%',
      trend: 'up',
      icon: UserCheck,
      color: 'green'
    },
    {
      title: 'Time to Hire',
      value: '18 days',
      change: '-3 days',
      trend: 'up',
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Cost per Hire',
      value: '$3,250',
      change: '-8%',
      trend: 'up',
      icon: DollarSign,
      color: 'yellow'
    }
  ];

  const applicationsByMonth = [
    { month: 'Jul', applications: 95, hires: 8, interviews: 34 },
    { month: 'Aug', applications: 120, hires: 12, interviews: 42 },
    { month: 'Sep', applications: 108, hires: 9, interviews: 38 },
    { month: 'Oct', applications: 145, hires: 15, interviews: 52 },
    { month: 'Nov', applications: 132, hires: 11, interviews: 46 },
    { month: 'Dec', applications: 178, hires: 18, interviews: 64 }
  ];

  const pipelineData = [
    { stage: 'Applied', count: 456, percentage: 100 },
    { stage: 'Screening', count: 234, percentage: 51 },
    { stage: 'First Interview', count: 125, percentage: 27 },
    { stage: 'Technical', count: 87, percentage: 19 },
    { stage: 'Final Interview', count: 52, percentage: 11 },
    { stage: 'Offer', count: 34, percentage: 7 },
    { stage: 'Hired', count: 28, percentage: 6 }
  ];

  const departmentData = [
    { name: 'Engineering', applications: 425, hires: 32, fill_rate: 7.5 },
    { name: 'Design', applications: 189, hires: 15, fill_rate: 7.9 },
    { name: 'Product', applications: 156, hires: 12, fill_rate: 7.7 },
    { name: 'Marketing', applications: 234, hires: 18, fill_rate: 7.7 },
    { name: 'Sales', applications: 198, hires: 22, fill_rate: 11.1 },
    { name: 'Operations', applications: 145, hires: 14, fill_rate: 9.7 }
  ];

  const sourceData = [
    { name: 'LinkedIn', value: 35, applications: 437 },
    { name: 'Company Website', value: 28, applications: 349 },
    { name: 'Indeed', value: 15, applications: 187 },
    { name: 'Referrals', value: 12, applications: 150 },
    { name: 'Glassdoor', value: 6, applications: 75 },
    { name: 'Other', value: 4, applications: 49 }
  ];

  const timeToHireData = [
    { department: 'Engineering', avg_time: 22, target: 20 },
    { department: 'Design', avg_time: 18, target: 18 },
    { department: 'Product', avg_time: 19, target: 18 },
    { department: 'Marketing', avg_time: 15, target: 16 },
    { department: 'Sales', avg_time: 12, target: 14 },
    { department: 'Operations', avg_time: 16, target: 15 }
  ];

  const costPerHireData = [
    { month: 'Jul', internal_cost: 2800, external_cost: 3200, total: 6000 },
    { month: 'Aug', internal_cost: 2900, external_cost: 3100, total: 6000 },
    { month: 'Sep', internal_cost: 2700, external_cost: 2800, total: 5500 },
    { month: 'Oct', internal_cost: 2600, external_cost: 2900, total: 5500 },
    { month: 'Nov', internal_cost: 2500, external_cost: 2700, total: 5200 },
    { month: 'Dec', internal_cost: 2400, external_cost: 2600, total: 5000 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6B7280'];

  const renderOverviewTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {overviewMetrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
              </div>
              <div className={`p-3 bg-${metric.color}-100 dark:bg-${metric.color}-900 rounded-lg`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-600 dark:text-${metric.color}-400`} />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <span className={`${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {metric.change}
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs last period</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Application Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={applicationsByMonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="applications" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="interviews" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="hires" stackId="3" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recruitment Pipeline</h3>
          <div className="space-y-4">
            {pipelineData.map((stage, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{stage.stage}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{stage.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${stage.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stage.percentage}% conversion
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={departmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="applications" fill="#3B82F6" name="Applications" />
            <Bar yAxisId="left" dataKey="hires" fill="#10B981" name="Hires" />
            <Bar yAxisId="right" dataKey="fill_rate" fill="#F59E0B" name="Fill Rate %" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );

  const renderSourcesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Application Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Source Performance</h3>
          <div className="space-y-4">
            {sourceData.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{source.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{source.applications} applications</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{source.value}%</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">of total</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Source Quality Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applications
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Interview Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Hire Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Quality Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">LinkedIn</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">437</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">28%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">12%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Company Website</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">349</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">35%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">18%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    High
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Referrals</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">150</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">45%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">28%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Excellent
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Indeed</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">187</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">22%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">8%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Medium
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Glassdoor</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">75</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">18%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">6%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Medium
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderEfficiencyTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Time to Hire by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeToHireData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avg_time" fill="#3B82F6" name="Average Time (days)" />
              <Bar dataKey="target" fill="#10B981" name="Target (days)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Cost per Hire Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={costPerHireData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="internal_cost" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
              <Area type="monotone" dataKey="external_cost" stackId="1" stroke="#10B981" fill="#10B981" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recruitment Efficiency Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Interview-to-Hire Ratio</p>
                <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">3.2:1</p>
              </div>
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 text-sm">↓ 0.3</span>
                <span className="text-blue-600 dark:text-blue-400 text-sm ml-2">vs target: 4:1</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Offer Acceptance Rate</p>
                <p className="text-3xl font-bold text-green-900 dark:text-green-100">89%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 text-sm">↑ 4%</span>
                <span className="text-green-600 dark:text-green-400 text-sm ml-2">vs target: 85%</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Quality of Hire Score</p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">4.3</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 text-sm">↑ 0.2</span>
                <span className="text-purple-600 dark:text-purple-400 text-sm ml-2">out of 5.0</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Recruiter Efficiency</p>
                <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">7.2</p>
              </div>
              <Briefcase className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 text-sm">↑ 0.8</span>
                <span className="text-yellow-600 dark:text-yellow-400 text-sm ml-2">hires per month</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Benchmarks</h3>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Time to Fill</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">18 days (Target: 20 days)</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Application Completion Rate</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">76% (Target: 80%)</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '76%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Candidate Experience Score</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">4.4/5.0 (Target: 4.2/5.0)</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Diversity Hiring Rate</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">42% (Target: 40%)</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">90-Day Retention Rate</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">94% (Target: 90%)</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Recruitment Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Comprehensive insights into recruitment performance</p>
          </div>
          
          <div className="flex space-x-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="last_30_days">Last 30 Days</option>
              <option value="last_3_months">Last 3 Months</option>
              <option value="last_6_months">Last 6 Months</option>
              <option value="last_year">Last Year</option>
            </select>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="all">All Departments</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
            </select>

            <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'sources'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Sources Analysis
          </button>
          <button
            onClick={() => setActiveTab('efficiency')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'efficiency'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Efficiency Metrics
          </button>
        </div>

        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'sources' && renderSourcesTab()}
        {activeTab === 'efficiency' && renderEfficiencyTab()}
      </div>
    </DashboardLayout>
  );
}

export default RecruitmentAnalytics;