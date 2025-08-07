import DashboardLayout from '../../components/Layout/DashboardLayout';
import Chart from '../../components/Dashboard/Chart';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const Executive = () => {
  const executiveMetrics = [
    {
      title: 'Total Workforce Cost',
      value: '$12.4M',
      change: '+8.2%',
      changeType: 'positive',
      icon: 'CurrencyDollarIcon',
      color: 'blue',
      description: 'Annual payroll & benefits'
    },
    {
      title: 'Revenue per Employee',
      value: '$285K',
      change: '+12%',
      changeType: 'positive',
      icon: 'TrendingUpIcon',
      color: 'green',
      description: 'Productivity indicator'
    },
    {
      title: 'Employee Engagement',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      icon: 'UsersIcon',
      color: 'purple',
      description: 'Company-wide satisfaction'
    },
    {
      title: 'Talent Pipeline',
      value: '156',
      change: '+24%',
      changeType: 'positive',
      icon: 'BriefcaseIcon',
      color: 'orange',
      description: 'Qualified candidates'
    }
  ];

  const strategicInitiatives = [
    {
      initiative: 'Digital Transformation Program',
      progress: 78,
      budget: '$2.1M',
      timeline: 'Q4 2024',
      status: 'on-track',
      impact: 'High',
      owner: 'CTO'
    },
    {
      initiative: 'Diversity & Inclusion Enhancement',
      progress: 65,
      budget: '$850K',
      timeline: 'Q2 2025',
      status: 'at-risk',
      impact: 'High',
      owner: 'CHRO'
    },
    {
      initiative: 'Remote Work Optimization',
      progress: 92,
      budget: '$450K',
      timeline: 'Q1 2024',
      status: 'completed',
      impact: 'Medium',
      owner: 'COO'
    },
    {
      initiative: 'Leadership Development Program',
      progress: 43,
      budget: '$1.2M',
      timeline: 'Q3 2025',
      status: 'on-track',
      impact: 'High',
      owner: 'CHRO'
    }
  ];

  const businessImpact = [
    { metric: 'Employee Productivity', q1: 82, q2: 85, q3: 87, q4: 89, target: 90 },
    { metric: 'Customer Satisfaction', q1: 78, q2: 80, q3: 83, q4: 85, target: 88 },
    { metric: 'Innovation Index', q1: 65, q2: 68, q3: 72, q4: 75, target: 80 },
    { metric: 'Market Share Growth', q1: 12, q2: 14, q3: 16, q4: 18, target: 20 }
  ];

  const riskAssessment = [
    {
      risk: 'Talent Shortage in Key Roles',
      probability: 'High',
      impact: 'High',
      severity: 'critical',
      mitigation: '65% complete',
      owner: 'CHRO'
    },
    {
      risk: 'Employee Burnout',
      probability: 'Medium',
      impact: 'High',
      severity: 'high',
      mitigation: '40% complete',
      owner: 'HR Director'
    },
    {
      risk: 'Skills Gap in Emerging Technologies',
      probability: 'High',
      impact: 'Medium',
      severity: 'high',
      mitigation: '78% complete',
      owner: 'CTO'
    },
    {
      risk: 'Regulatory Compliance Changes',
      probability: 'Medium',
      impact: 'Medium',
      severity: 'medium',
      mitigation: '90% complete',
      owner: 'Legal'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 dark:text-green-400';
      case 'on-track': return 'text-blue-600 dark:text-blue-400';
      case 'at-risk': return 'text-yellow-600 dark:text-yellow-400';
      case 'delayed': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400';
      case 'high': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low': return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400';
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Executive Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Strategic overview and key business metrics for leadership decisions
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Download Report
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Schedule Review
            </button>
          </div>
        </div>
      </div>

      {/* Executive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {executiveMetrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${
                metric.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20' :
                metric.color === 'green' ? 'bg-green-50 dark:bg-green-900/20' :
                metric.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20' :
                'bg-orange-50 dark:bg-orange-900/20'
              }`}>
                <Icon name={metric.icon} className={`w-6 h-6 ${
                  metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                  metric.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                  'text-orange-600 dark:text-orange-400'
                }`} />
              </div>
              <span className="text-sm text-green-600 font-medium">{metric.change}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {metric.value}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
              {metric.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Workforce Growth */}
        <Chart
          title="Workforce & Revenue Growth"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 1180 },
              { label: 'Tue', value: 825 },
              { label: 'Wed', value: 1485 },
              { label: 'Thu', value: 795 },
              { label: 'Fri', value: 1568 },
              { label: 'Sat', value: 745 },
              { label: 'Sun', value: 1348 }
            ],
            '30d': [
              { label: 'Week 1', value: 645 },
              { label: 'Week 2', value: 1385 },
              { label: 'Week 3', value: 575 },
              { label: 'Week 4', value: 1468 }
            ],
            '3m': [
              { label: 'Month 1', value: 545 },
              { label: 'Month 2', value: 1285 },
              { label: 'Month 3', value: 681 }
            ],
            '1y': [
              { label: 'Q1', value: 480 },
              { label: 'Q2', value: 1405 },
              { label: 'Q3', value: 525 },
              { label: 'Q4', value: 1548 }
            ]
          }}
          height="300px"
        />

        {/* Cost Distribution */}
        <Chart
          title="Workforce Cost Distribution"
          type="pie"
          data={[
            { label: 'Salaries', value: 65, color: 'bg-blue-500' },
            { label: 'Benefits', value: 20, color: 'bg-green-500' },
            { label: 'Training', value: 8, color: 'bg-purple-500' },
            { label: 'Recruitment', value: 7, color: 'bg-orange-500' }
          ]}
          height="300px"
        />
      </div>

      {/* Strategic Initiatives */}
      <Card title="Strategic HR Initiatives">
        <div className="space-y-4">
          {strategicInitiatives.map((initiative, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {initiative.initiative}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                      <span className="font-medium text-gray-800 dark:text-white ml-2">
                        {initiative.budget}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
                      <span className="font-medium text-gray-800 dark:text-white ml-2">
                        {initiative.timeline}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                      <span className={`font-medium ml-2 ${
                        initiative.impact === 'High' ? 'text-red-600 dark:text-red-400' :
                        initiative.impact === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-green-600 dark:text-green-400'
                      }`}>
                        {initiative.impact}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">Owner:</span>
                      <span className="font-medium text-gray-800 dark:text-white ml-2">
                        {initiative.owner}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(initiative.status)} ${
                    initiative.status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' :
                    initiative.status === 'on-track' ? 'bg-blue-50 dark:bg-blue-900/20' :
                    initiative.status === 'at-risk' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                    'bg-red-50 dark:bg-red-900/20'
                  }`}>
                    {initiative.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{initiative.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      initiative.progress >= 90 ? 'bg-green-500' :
                      initiative.progress >= 70 ? 'bg-blue-500' :
                      initiative.progress >= 50 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${initiative.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Business Impact & Risk Assessment */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        {/* Business Impact */}
        <Card title="Business Impact Metrics">
          <div className="space-y-4">
            {businessImpact.map((metric, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-800 dark:text-white">{metric.metric}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Target: {metric.target}</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Q1</div>
                    <div className="text-lg font-bold text-gray-800 dark:text-white">{metric.q1}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Q2</div>
                    <div className="text-lg font-bold text-gray-800 dark:text-white">{metric.q2}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Q3</div>
                    <div className="text-lg font-bold text-gray-800 dark:text-white">{metric.q3}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Q4</div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{metric.q4}</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: `${(metric.q4 / metric.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Risk Assessment */}
        <Card title="Strategic Risk Assessment">
          <div className="space-y-4">
            {riskAssessment.map((risk, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-800 dark:text-white flex-1">
                    {risk.risk}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(risk.severity)}`}>
                    {risk.severity.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Probability:</span>
                    <span className="font-medium text-gray-800 dark:text-white ml-2">{risk.probability}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                    <span className="font-medium text-gray-800 dark:text-white ml-2">{risk.impact}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Mitigation Progress</span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{risk.mitigation}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Owner: {risk.owner}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Executive Summary */}
      <Card title="Executive Summary & Recommendations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                <span>Employee productivity increased by 12% year-over-year</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                <span>Successfully completed remote work optimization initiative</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                <span>Talent pipeline strengthened with 24% increase in candidates</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                <span>Revenue per employee grew to $285K</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Strategic Recommendations</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                <span>Accelerate digital transformation program to meet Q4 targets</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                <span>Address talent shortage in key roles through targeted recruitment</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                <span>Implement employee burnout prevention strategies</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                <span>Increase investment in leadership development programs</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Executive;