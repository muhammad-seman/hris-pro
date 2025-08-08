import { useState } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { Card } from '../components';
import Icon from '../components/Icon';

const TrendAnalysis = () => {
  const [activeTab, setActiveTab] = useState('workforce');
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [selectedMetric, setSelectedMetric] = useState(null);

  // Sample trend data
  const workforceTrends = {
    headcount: [
      { period: 'Jan 2023', value: 142, growth: 0 },
      { period: 'Feb 2023', value: 145, growth: 2.1 },
      { period: 'Mar 2023', value: 149, growth: 2.8 },
      { period: 'Apr 2023', value: 151, growth: 1.3 },
      { period: 'May 2023', value: 148, growth: -2.0 },
      { period: 'Jun 2023', value: 152, growth: 2.7 },
      { period: 'Jul 2023', value: 155, growth: 2.0 },
      { period: 'Aug 2023', value: 157, growth: 1.3 },
      { period: 'Sep 2023', value: 159, growth: 1.3 },
      { period: 'Oct 2023', value: 161, growth: 1.3 },
      { period: 'Nov 2023', value: 158, growth: -1.9 },
      { period: 'Dec 2023', value: 156, growth: -1.3 },
      { period: 'Jan 2024', value: 160, growth: 2.6 }
    ],
    turnover: [
      { period: 'Jan 2023', value: 8.5, trend: 'stable' },
      { period: 'Feb 2023', value: 9.2, trend: 'up' },
      { period: 'Mar 2023', value: 7.8, trend: 'down' },
      { period: 'Apr 2023', value: 8.1, trend: 'up' },
      { period: 'May 2023', value: 9.8, trend: 'up' },
      { period: 'Jun 2023', value: 7.2, trend: 'down' },
      { period: 'Jul 2023', value: 8.9, trend: 'up' },
      { period: 'Aug 2023', value: 8.3, trend: 'down' },
      { period: 'Sep 2023', value: 7.6, trend: 'down' },
      { period: 'Oct 2023', value: 8.7, trend: 'up' },
      { period: 'Nov 2023', value: 9.1, trend: 'up' },
      { period: 'Dec 2023', value: 7.9, trend: 'down' },
      { period: 'Jan 2024', value: 8.5, trend: 'up' }
    ],
    hiring: [
      { period: 'Jan 2023', value: 12, timeToHire: 28 },
      { period: 'Feb 2023', value: 8, timeToHire: 32 },
      { period: 'Mar 2023', value: 15, timeToHire: 25 },
      { period: 'Apr 2023', value: 10, timeToHire: 30 },
      { period: 'May 2023', value: 6, timeToHire: 35 },
      { period: 'Jun 2023', value: 18, timeToHire: 22 },
      { period: 'Jul 2023', value: 14, timeToHire: 27 },
      { period: 'Aug 2023', value: 11, timeToHire: 29 },
      { period: 'Sep 2023', value: 13, timeToHire: 26 },
      { period: 'Oct 2023', value: 9, timeToHire: 31 },
      { period: 'Nov 2023', value: 7, timeToHire: 33 },
      { period: 'Dec 2023', value: 5, timeToHire: 28 },
      { period: 'Jan 2024', value: 16, timeToHire: 24 }
    ]
  };

  const performanceTrends = {
    overallScore: [
      { period: 'Q1 2023', value: 3.8, satisfaction: 3.6 },
      { period: 'Q2 2023', value: 3.9, satisfaction: 3.7 },
      { period: 'Q3 2023', value: 4.1, satisfaction: 3.9 },
      { period: 'Q4 2023', value: 4.2, satisfaction: 4.1 }
    ],
    goalCompletion: [
      { period: 'Q1 2023', value: 78.5 },
      { period: 'Q2 2023', value: 82.3 },
      { period: 'Q3 2023', value: 85.7 },
      { period: 'Q4 2023', value: 87.2 }
    ]
  };

  const engagementTrends = {
    satisfaction: [
      { period: 'Q1 2023', overall: 3.6, management: 3.4, culture: 3.8, growth: 3.3 },
      { period: 'Q2 2023', overall: 3.7, management: 3.5, culture: 3.9, growth: 3.5 },
      { period: 'Q3 2023', overall: 3.9, management: 3.7, culture: 4.0, growth: 3.7 },
      { period: 'Q4 2023', overall: 4.1, management: 3.9, culture: 4.2, growth: 3.9 }
    ],
    responseRate: [
      { period: 'Q1 2023', value: 76.5 },
      { period: 'Q2 2023', value: 81.2 },
      { period: 'Q3 2023', value: 85.7 },
      { period: 'Q4 2023', value: 89.3 }
    ]
  };

  const financialTrends = {
    costPerHire: [
      { period: 'Q1 2023', value: 4800, trend: 'up' },
      { period: 'Q2 2023', value: 4200, trend: 'down' },
      { period: 'Q3 2023', value: 3900, trend: 'down' },
      { period: 'Q4 2023', value: 4500, trend: 'up' }
    ],
    trainingCost: [
      { period: 'Q1 2023', value: 125000, hoursDelivered: 890 },
      { period: 'Q2 2023', value: 145000, hoursDelivered: 1120 },
      { period: 'Q3 2023', value: 135000, hoursDelivered: 980 },
      { period: 'Q4 2023', value: 158000, hoursDelivered: 1240 }
    ]
  };

  const trendInsights = [
    {
      title: 'Workforce Growth Stabilizing',
      category: 'Workforce',
      insight: 'Headcount growth has stabilized around 156-160 employees with seasonal variations.',
      trend: 'stable',
      confidence: 85,
      impact: 'medium',
      recommendation: 'Continue current hiring pace with focus on quality over quantity.'
    },
    {
      title: 'Turnover Rate Improving',
      category: 'Retention',
      insight: 'Average turnover has decreased from 9.2% to 7.9% over the last 6 months.',
      trend: 'positive',
      confidence: 78,
      impact: 'high',
      recommendation: 'Analyze retention strategies and replicate successful practices.'
    },
    {
      title: 'Performance Scores Rising',
      category: 'Performance',
      insight: 'Overall performance scores increased by 10.5% year-over-year.',
      trend: 'positive',
      confidence: 92,
      impact: 'high',
      recommendation: 'Maintain current performance management approach and expand successful programs.'
    },
    {
      title: 'Engagement Survey Participation Up',
      category: 'Engagement',
      insight: 'Survey response rates increased from 76.5% to 89.3% indicating higher engagement.',
      trend: 'positive',
      confidence: 88,
      impact: 'medium',
      recommendation: 'Continue engagement initiatives and address feedback promptly.'
    },
    {
      title: 'Cost Per Hire Fluctuating',
      category: 'Financial',
      insight: 'Recruiting costs vary significantly by quarter, ranging from $3,900 to $4,800.',
      trend: 'unstable',
      confidence: 72,
      impact: 'medium',
      recommendation: 'Analyze hiring sources and optimize recruitment strategy for cost efficiency.'
    }
  ];

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'positive': return 'text-green-600 dark:text-green-400';
      case 'negative': return 'text-red-600 dark:text-red-400';
      case 'stable': return 'text-blue-600 dark:text-blue-400';
      case 'unstable': return 'text-yellow-600 dark:text-yellow-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'positive': return 'TrendingUpIcon';
      case 'negative': return 'TrendingDownIcon';
      case 'stable': return 'ArrowRightIcon';
      case 'unstable': return 'ArrowsUpDownIcon';
      default: return 'MinusIcon';
    }
  };

  const renderWorkforceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Headcount Trend</h3>
          <div className="space-y-3">
            {workforceTrends.headcount.slice(-6).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
                  <span className={`text-xs ${item.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.growth >= 0 ? '+' : ''}{item.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {workforceTrends.headcount[workforceTrends.headcount.length - 1].value}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Headcount</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Turnover Rate</h3>
          <div className="space-y-3">
            {workforceTrends.turnover.slice(-6).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
                  <Icon 
                    name={item.trend === 'up' ? 'ArrowUpIcon' : item.trend === 'down' ? 'ArrowDownIcon' : 'ArrowRightIcon'} 
                    className={`h-3 w-3 ${
                      item.trend === 'up' ? 'text-red-500' : 
                      item.trend === 'down' ? 'text-green-500' : 
                      'text-gray-500'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {workforceTrends.turnover[workforceTrends.turnover.length - 1].value}%
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400">Current Rate</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hiring Activity</h3>
          <div className="space-y-3">
            {workforceTrends.hiring.slice(-6).map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{item.value} hires</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.timeToHire} days avg</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {workforceTrends.hiring[workforceTrends.hiring.length - 1].value}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400">New Hires This Month</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">12-Month Workforce Trends</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="ChartLineIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Interactive chart would be displayed here</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Headcount, Turnover, and Hiring trends visualization</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Score Trends</h3>
          <div className="space-y-4">
            {performanceTrends.overallScore.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Performance: {item.value}/5
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Satisfaction: {item.satisfaction}/5
                    </div>
                  </div>
                  <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(item.value / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Goal Completion Rate</h3>
          <div className="space-y-4">
            {performanceTrends.goalCompletion.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{item.value}%</span>
                  <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Metrics Comparison</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="ChartBarIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Performance analytics chart</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Quarterly performance scores and goal completion trends</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderEngagementTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Satisfaction Trends</h3>
          <div className="space-y-4">
            {engagementTrends.satisfaction.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.period}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    Overall: {item.overall}/5
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Management</span>
                    <div className="font-medium text-gray-900 dark:text-white">{item.management}</div>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Culture</span>
                    <div className="font-medium text-gray-900 dark:text-white">{item.culture}</div>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Growth</span>
                    <div className="font-medium text-gray-900 dark:text-white">{item.growth}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Survey Response Rate</h3>
          <div className="space-y-4">
            {engagementTrends.responseRate.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">{item.value}%</span>
                  <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Engagement Survey Trends</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="HeartIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Employee engagement visualization</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Satisfaction scores and response rate trends</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderFinancialTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cost Per Hire</h3>
          <div className="space-y-4">
            {financialTrends.costPerHire.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    ${item.value.toLocaleString()}
                  </span>
                  <Icon 
                    name={item.trend === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'} 
                    className={`h-3 w-3 ${item.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Training Investment</h3>
          <div className="space-y-4">
            {financialTrends.trainingCost.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.period}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    ${item.value.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.hoursDelivered} training hours delivered
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">HR Cost Analysis</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="CurrencyDollarIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Financial trends visualization</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Cost per hire and training investment analysis</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderInsightsTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Trend Insights & Recommendations</h3>
        
        <div className="space-y-6">
          {trendInsights.map((insight, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{insight.title}</h4>
                    <span className={`flex items-center space-x-1 ${getTrendColor(insight.trend)}`}>
                      <Icon name={getTrendIcon(insight.trend)} className="h-4 w-4" />
                      <span className="text-xs font-medium">{insight.trend}</span>
                    </span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded">
                    {insight.category}
                  </span>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{insight.confidence}%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Confidence</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-bold ${
                      insight.impact === 'high' ? 'text-red-600 dark:text-red-400' :
                      insight.impact === 'medium' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {insight.impact}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Impact</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{insight.insight}</p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-2">
                  <Icon name="LightBulbIcon" className="h-4 w-4 inline mr-1" />
                  Recommendation
                </h5>
                <p className="text-sm text-blue-800 dark:text-blue-300">{insight.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'workforce', label: 'Workforce', icon: 'UsersIcon', component: renderWorkforceTab },
    { id: 'performance', label: 'Performance', icon: 'TrophyIcon', component: renderPerformanceTab },
    { id: 'engagement', label: 'Engagement', icon: 'HeartIcon', component: renderEngagementTab },
    { id: 'financial', label: 'Financial', icon: 'CurrencyDollarIcon', component: renderFinancialTab },
    { id: 'insights', label: 'Insights', icon: 'LightBulbIcon', component: renderInsightsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trend Analysis</h1>
            <p className="text-gray-600 dark:text-gray-400">Analyze HR trends and identify patterns over time</p>
          </div>
          
          <div className="flex space-x-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="6months">Last 6 Months</option>
              <option value="12months">Last 12 Months</option>
              <option value="24months">Last 24 Months</option>
              <option value="custom">Custom Range</option>
            </select>

            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowDownTrayIcon" className="h-4 w-4 mr-2" />
              Export Analysis
            </button>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {tabs.find(tab => tab.id === activeTab)?.component()}
      </div>
    </DashboardLayout>
  );
};

export default TrendAnalysis;