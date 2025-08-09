import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const PredictiveAnalytics = () => {
  const [activeTab, setActiveTab] = useState('turnover');
  const [selectedModel, setSelectedModel] = useState(null);
  const [predictionPeriod, setPredictionPeriod] = useState('6months');

  const turnoverPredictions = {
    riskEmployees: [
      {
        id: 1,
        name: 'Alex Thompson',
        department: 'Engineering',
        riskScore: 87,
        riskLevel: 'high',
        keyFactors: ['Low satisfaction score', 'Missed recent promotion', 'High workload'],
        tenure: '2.3 years',
        lastReview: '3.2/5',
        probability: '85%'
      },
      {
        id: 2,
        name: 'Maria Garcia',
        department: 'Marketing',
        riskScore: 76,
        riskLevel: 'high',
        keyFactors: ['Below market salary', 'Limited growth opportunities', 'Team conflicts'],
        tenure: '1.8 years',
        lastReview: '3.8/5',
        probability: '72%'
      },
      {
        id: 3,
        name: 'James Wilson',
        department: 'Sales',
        riskScore: 64,
        riskLevel: 'medium',
        keyFactors: ['Remote work challenges', 'Performance pressure', 'Work-life balance'],
        tenure: '3.5 years',
        lastReview: '4.1/5',
        probability: '58%'
      },
      {
        id: 4,
        name: 'Lisa Chen',
        department: 'HR',
        riskScore: 58,
        riskLevel: 'medium',
        keyFactors: ['Career plateau', 'Salary concerns', 'Workload increase'],
        tenure: '4.2 years',
        lastReview: '4.0/5',
        probability: '54%'
      },
      {
        id: 5,
        name: 'David Brown',
        department: 'Finance',
        riskScore: 45,
        riskLevel: 'low',
        keyFactors: ['Routine work', 'Limited learning opportunities'],
        tenure: '1.2 years',
        lastReview: '3.9/5',
        probability: '42%'
      }
    ],
    departmentRisk: [
      { department: 'Engineering', riskScore: 72, expectedTurnover: 12, currentSize: 45 },
      { department: 'Marketing', riskScore: 68, expectedTurnover: 8, currentSize: 25 },
      { department: 'Sales', riskScore: 61, expectedTurnover: 9, currentSize: 30 },
      { department: 'HR', riskScore: 54, expectedTurnover: 3, currentSize: 12 },
      { department: 'Finance', riskScore: 48, expectedTurnover: 2, currentSize: 15 },
      { department: 'Operations', riskScore: 52, expectedTurnover: 4, currentSize: 18 }
    ]
  };

  const performancePredictions = {
    riskEmployees: [
      {
        id: 1,
        name: 'John Martinez',
        department: 'Sales',
        currentScore: 3.2,
        predictedScore: 2.8,
        riskLevel: 'high',
        factors: ['Declining sales numbers', 'Missed targets', 'Low activity metrics'],
        recommendation: 'Immediate coaching and support needed'
      },
      {
        id: 2,
        name: 'Sarah Kim',
        department: 'Engineering',
        currentScore: 3.8,
        predictedScore: 3.4,
        riskLevel: 'medium',
        factors: ['Code quality issues', 'Deadline pressure', 'Technical debt'],
        recommendation: 'Additional training on best practices'
      },
      {
        id: 3,
        name: 'Robert Taylor',
        department: 'Marketing',
        currentScore: 4.1,
        predictedScore: 3.9,
        riskLevel: 'low',
        factors: ['Campaign performance variance', 'Resource constraints'],
        recommendation: 'Monitor and provide additional resources'
      }
    ],
    improvementCandidates: [
      {
        name: 'Emma Johnson',
        department: 'HR',
        currentScore: 3.6,
        predictedScore: 4.2,
        potential: 'high',
        factors: ['Strong learning curve', 'Positive feedback', 'Initiative taking']
      },
      {
        name: 'Michael Wong',
        department: 'Finance',
        currentScore: 3.9,
        predictedScore: 4.3,
        potential: 'high',
        factors: ['Consistent improvement', 'Skill development', 'Leadership qualities']
      }
    ]
  };

  const hiringPredictions = {
    demandForecast: [
      { department: 'Engineering', currentNeeds: 5, predictedNeeds: 8, timeframe: '6 months', confidence: 82 },
      { department: 'Sales', currentNeeds: 3, predictedNeeds: 6, timeframe: '6 months', confidence: 75 },
      { department: 'Marketing', currentNeeds: 2, predictedNeeds: 4, timeframe: '6 months', confidence: 68 },
      { department: 'Operations', currentNeeds: 1, predictedNeeds: 3, timeframe: '6 months', confidence: 71 }
    ],
    skillGaps: [
      {
        skill: 'Machine Learning',
        currentGap: 'High',
        departments: ['Engineering', 'Analytics'],
        urgency: 'Critical',
        timeToFill: '4-6 months'
      },
      {
        skill: 'Digital Marketing',
        currentGap: 'Medium',
        departments: ['Marketing'],
        urgency: 'High',
        timeToFill: '2-3 months'
      },
      {
        skill: 'Data Analysis',
        currentGap: 'Medium',
        departments: ['Finance', 'Operations'],
        urgency: 'Medium',
        timeToFill: '3-4 months'
      }
    ]
  };

  const models = [
    {
      id: 1,
      name: 'Employee Turnover Prediction',
      type: 'Classification',
      accuracy: 87.3,
      lastTrained: '2024-01-15',
      status: 'active',
      description: 'Predicts employee turnover risk using performance, engagement, and demographic data.',
      features: ['Performance score', 'Tenure', 'Salary satisfaction', 'Manager relationship', 'Career growth'],
      dataPoints: 2456
    },
    {
      id: 2,
      name: 'Performance Forecasting',
      type: 'Regression',
      accuracy: 82.1,
      lastTrained: '2024-01-12',
      status: 'active',
      description: 'Forecasts future performance ratings based on historical trends and current factors.',
      features: ['Past performance', 'Goal completion', 'Training hours', 'Peer feedback', 'Workload'],
      dataPoints: 1834
    },
    {
      id: 3,
      name: 'Hiring Demand Forecasting',
      type: 'Time Series',
      accuracy: 79.5,
      lastTrained: '2024-01-10',
      status: 'training',
      description: 'Predicts future hiring needs based on business growth, turnover, and seasonal patterns.',
      features: ['Revenue growth', 'Project pipeline', 'Turnover rate', 'Seasonal factors', 'Team workload'],
      dataPoints: 1567
    },
    {
      id: 4,
      name: 'Promotion Readiness',
      type: 'Classification',
      accuracy: 84.7,
      lastTrained: '2024-01-08',
      status: 'active',
      description: 'Identifies employees ready for promotion based on performance and leadership indicators.',
      features: ['Leadership skills', 'Performance consistency', 'Team impact', 'Skill development', 'Mentoring'],
      dataPoints: 1203
    }
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getModelStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'training': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const renderTurnoverTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">High-Risk Employees</h3>
          <div className="space-y-4">
            {turnoverPredictions.riskEmployees.slice(0, 3).map((employee) => (
              <div key={employee.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{employee.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{employee.department} • {employee.tenure}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(employee.riskLevel)}`}>
                      {employee.riskLevel} risk
                    </span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">{employee.probability}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600 dark:text-gray-400">Risk Score</span>
                    <span className="text-xs font-medium text-gray-900 dark:text-white">{employee.riskScore}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        employee.riskScore >= 70 ? 'bg-red-500' : 
                        employee.riskScore >= 50 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${employee.riskScore}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Key Risk Factors:</h5>
                  <div className="flex flex-wrap gap-1">
                    {employee.keyFactors.map((factor, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-xs rounded"
                      >
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Department Risk Assessment</h3>
          <div className="space-y-4">
            {turnoverPredictions.departmentRisk.map((dept, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{dept.department}</h4>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {Math.round((dept.expectedTurnover / dept.currentSize) * 100)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{dept.expectedTurnover} expected exits of {dept.currentSize}</span>
                    <span>Risk: {dept.riskScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${
                        dept.riskScore >= 70 ? 'bg-red-500' : 
                        dept.riskScore >= 50 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${dept.riskScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Turnover Risk Analysis</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="UserMinusIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Turnover risk visualization</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Risk factors and prediction timeline chart</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Risk Alerts</h3>
          <div className="space-y-4">
            {performancePredictions.riskEmployees.map((employee, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{employee.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{employee.department}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(employee.riskLevel)}`}>
                    {employee.riskLevel} risk
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Current Score</span>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{employee.currentScore}/5</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Predicted Score</span>
                    <div className={`text-lg font-bold ${
                      employee.predictedScore < employee.currentScore ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                    }`}>
                      {employee.predictedScore}/5
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Risk Factors:</h5>
                  <div className="space-y-1">
                    {employee.factors.map((factor, idx) => (
                      <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <Icon name="ExclamationTriangleIcon" className="h-3 w-3 text-yellow-500 mr-1" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <h5 className="text-xs font-medium text-blue-900 dark:text-blue-200 mb-1">Recommendation</h5>
                  <p className="text-xs text-blue-800 dark:text-blue-300">{employee.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">High-Potential Employees</h3>
          <div className="space-y-4">
            {performancePredictions.improvementCandidates.map((employee, index) => (
              <div key={index} className="border border-green-200 dark:border-green-700 rounded-lg p-4 bg-green-50 dark:bg-green-900/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{employee.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{employee.department}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {employee.potential} potential
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Current Score</span>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{employee.currentScore}/5</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Predicted Score</span>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">{employee.predictedScore}/5</div>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Growth Indicators:</h5>
                  <div className="space-y-1">
                    {employee.factors.map((factor, idx) => (
                      <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <Icon name="CheckCircleIcon" className="h-3 w-3 text-green-500 mr-1" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Trend Forecast</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="ChartLineIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Performance prediction visualization</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Individual and team performance forecasts</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderHiringTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Hiring Demand Forecast</h3>
          <div className="space-y-4">
            {hiringPredictions.demandForecast.map((forecast, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{forecast.department}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{forecast.confidence}% confidence</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{forecast.currentNeeds}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Current</div>
                  </div>
                  <div className="text-center">
                    <Icon name="ArrowRightIcon" className="h-5 w-5 text-gray-400 mx-auto mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{forecast.predictedNeeds}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Predicted</div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {forecast.timeframe}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Critical Skill Gaps</h3>
          <div className="space-y-4">
            {hiringPredictions.skillGaps.map((gap, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{gap.skill}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    gap.urgency === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    gap.urgency === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {gap.urgency}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Gap Level</div>
                  <div className={`text-lg font-bold ${
                    gap.currentGap === 'High' ? 'text-red-600 dark:text-red-400' :
                    gap.currentGap === 'Medium' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-green-600 dark:text-green-400'
                  }`}>
                    {gap.currentGap}
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Affected Departments</div>
                  <div className="flex flex-wrap gap-1">
                    {gap.departments.map((dept, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <Icon name="ClockIcon" className="h-3 w-3 inline mr-1" />
                  Estimated time to fill: {gap.timeToFill}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Hiring Forecast Dashboard</h3>
        <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="UserPlusIcon" className="h-16 w-16 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">Hiring demand visualization</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Department needs and skill gap analysis</p>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderModelsTab = () => (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ML Models</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Icon name="PlusIcon" className="h-4 w-4 mr-2" />
            Train New Model
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {models.map(model => (
            <div key={model.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{model.name}</h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{model.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getModelStatusColor(model.status)}`}>
                    {model.status}
                  </span>
                  <button 
                    onClick={() => setSelectedModel(model)}
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon name="EyeIcon" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{model.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{model.accuracy}%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{model.dataPoints}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Data Points</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Key Features</div>
                <div className="flex flex-wrap gap-1">
                  {model.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {model.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{model.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Last trained: {new Date(model.lastTrained).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'turnover', label: 'Turnover Risk', icon: 'UserMinusIcon', component: renderTurnoverTab },
    { id: 'performance', label: 'Performance', icon: 'ChartLineIcon', component: renderPerformanceTab },
    { id: 'hiring', label: 'Hiring Demand', icon: 'UserPlusIcon', component: renderHiringTab },
    { id: 'models', label: 'ML Models', icon: 'CpuChipIcon', component: renderModelsTab },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Predictive Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Forecast HR trends and identify risks using machine learning</p>
          </div>
          
          <div className="flex space-x-3">
            <select
              value={predictionPeriod}
              onChange={(e) => setPredictionPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="3months">Next 3 Months</option>
              <option value="6months">Next 6 Months</option>
              <option value="12months">Next 12 Months</option>
            </select>

            <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Icon name="ArrowPathIcon" className="h-4 w-4 mr-2" />
              Refresh Predictions
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

      {selectedModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedModel.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{selectedModel.type} Model</p>
                </div>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Icon name="XCircleIcon" className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Model Description</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{selectedModel.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedModel.accuracy}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedModel.dataPoints}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Training Data</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className={`text-sm font-medium px-2 py-1 rounded ${getModelStatusColor(selectedModel.status)}`}>
                    {selectedModel.status}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Status</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Features Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModel.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Training History</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Last trained on {new Date(selectedModel.lastTrained).toLocaleDateString()} with {selectedModel.dataPoints} data points.
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Retrain Model
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors">
                  View Metrics
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PredictiveAnalytics;