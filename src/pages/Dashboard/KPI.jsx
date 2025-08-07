import DashboardLayout from '../../components/Layout/DashboardLayout';
import Chart from '../../components/Dashboard/Chart';
import { Card } from '../../components';
import Icon from '../../components/Icon';

const KPI = () => {
  const primaryKPIs = [
    {
      title: 'Employee Satisfaction',
      current: 87,
      target: 90,
      trend: '+5%',
      status: 'warning',
      description: '3% away from target'
    },
    {
      title: 'Employee Retention',
      current: 94,
      target: 95,
      trend: '+2%',
      status: 'success',
      description: '1% away from target'
    },
    {
      title: 'Time to Fill Positions',
      current: 28,
      target: 25,
      trend: '-10%',
      status: 'warning',
      description: '3 days above target',
      unit: 'days'
    },
    {
      title: 'Training Completion',
      current: 92,
      target: 95,
      trend: '+8%',
      status: 'warning',
      description: '3% away from target'
    }
  ];

  const departmentKPIs = [
    {
      department: 'Engineering',
      kpis: {
        productivity: { current: 94, target: 90, status: 'success' },
        satisfaction: { current: 89, target: 85, status: 'success' },
        retention: { current: 96, target: 95, status: 'success' },
        utilization: { current: 88, target: 85, status: 'success' }
      }
    },
    {
      department: 'Sales',
      kpis: {
        productivity: { current: 91, target: 90, status: 'success' },
        satisfaction: { current: 85, target: 85, status: 'success' },
        retention: { current: 87, target: 95, status: 'warning' },
        utilization: { current: 92, target: 85, status: 'success' }
      }
    },
    {
      department: 'Marketing',
      kpis: {
        productivity: { current: 88, target: 90, status: 'warning' },
        satisfaction: { current: 91, target: 85, status: 'success' },
        retention: { current: 94, target: 95, status: 'warning' },
        utilization: { current: 86, target: 85, status: 'success' }
      }
    },
    {
      department: 'HR',
      kpis: {
        productivity: { current: 87, target: 90, status: 'warning' },
        satisfaction: { current: 93, target: 85, status: 'success' },
        retention: { current: 98, target: 95, status: 'success' },
        utilization: { current: 84, target: 85, status: 'warning' }
      }
    }
  ];

  const monthlyTrends = [
    { month: 'Jan', satisfaction: 82, retention: 91, productivity: 88, engagement: 79 },
    { month: 'Feb', satisfaction: 79, retention: 89, productivity: 85, engagement: 76 },
    { month: 'Mar', satisfaction: 85, retention: 93, productivity: 91, engagement: 83 },
    { month: 'Apr', satisfaction: 83, retention: 92, productivity: 87, engagement: 81 },
    { month: 'May', satisfaction: 87, retention: 95, productivity: 92, engagement: 88 },
    { month: 'Jun', satisfaction: 85, retention: 93, productivity: 89, engagement: 85 },
    { month: 'Jul', satisfaction: 89, retention: 96, productivity: 94, engagement: 90 },
    { month: 'Aug', satisfaction: 86, retention: 94, productivity: 91, engagement: 87 },
    { month: 'Sep', satisfaction: 91, retention: 97, productivity: 96, engagement: 93 },
    { month: 'Oct', satisfaction: 88, retention: 95, productivity: 92, engagement: 89 },
    { month: 'Nov', satisfaction: 87, retention: 94, productivity: 93, engagement: 86 },
    { month: 'Dec', satisfaction: 90, retention: 96, productivity: 95, engagement: 92 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'danger': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'success': return 'bg-green-50 dark:bg-green-900/20';
      case 'warning': return 'bg-yellow-50 dark:bg-yellow-900/20';
      case 'danger': return 'bg-red-50 dark:bg-red-900/20';
      default: return 'bg-gray-50 dark:bg-gray-700';
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          HR KPI Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track and monitor key performance indicators across all HR functions
        </p>
      </div>

      {/* Primary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {primaryKPIs.map((kpi, index) => (
          <div key={index} className={`rounded-xl shadow-sm border p-6 ${getStatusBg(kpi.status)} border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center justify-between mb-4">
              <Icon 
                name={
                  kpi.title.includes('Satisfaction') ? 'UsersIcon' :
                  kpi.title.includes('Retention') ? 'TrendingUpIcon' :
                  kpi.title.includes('Time') ? 'ClockIcon' :
                  'AcademicCapIcon'
                } 
                className={`w-8 h-8 ${getStatusColor(kpi.status)}`} 
              />
              <span className={`text-sm font-medium ${getStatusColor(kpi.status)}`}>
                {kpi.trend}
              </span>
            </div>
            
            <div className="mb-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                  {kpi.current}
                </span>
                {kpi.unit && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {kpi.unit}
                  </span>
                )}
                <span className="text-lg text-gray-400 dark:text-gray-500">
                  / {kpi.target}{kpi.unit || '%'}
                </span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {kpi.title}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.round((kpi.current / kpi.target) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    kpi.status === 'success' ? 'bg-green-500' :
                    kpi.status === 'warning' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${Math.min((kpi.current / kpi.target) * 100, 100)}%` }}
                />
              </div>
            </div>
            
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {kpi.description}
            </p>
          </div>
        ))}
      </div>

      {/* KPI Trends Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        <Chart
          title="KPI Trends Over Time"
          type="line"
          periodData={{
            '7d': [
              { label: 'Mon', value: 87 },
              { label: 'Tue', value: 52 },
              { label: 'Wed', value: 95 },
              { label: 'Thu', value: 43 },
              { label: 'Fri', value: 91 },
              { label: 'Sat', value: 38 },
              { label: 'Sun', value: 89 }
            ],
            '30d': [
              { label: 'Week 1', value: 25 },
              { label: 'Week 2', value: 88 },
              { label: 'Week 3', value: 45 },
              { label: 'Week 4', value: 92 }
            ],
            '3m': [
              { label: 'Month 1', value: 35 },
              { label: 'Month 2', value: 88 },
              { label: 'Month 3', value: 51 }
            ],
            '1y': [
              { label: 'Q1', value: 25 },
              { label: 'Q2', value: 85 },
              { label: 'Q3', value: 42 },
              { label: 'Q4', value: 89 }
            ]
          }}
          height="350px"
        />

        <Chart
          title="Performance Distribution"
          type="bar"
          height="350px"
          periodData={{
            '7d': [
              { label: 'Excellent', value: 62 },
              { label: 'Good', value: 18 },
              { label: 'Average', value: 15 },
              { label: 'Below Avg', value: 5 }
            ],
            '30d': [
              { label: 'Excellent', value: 15 },
              { label: 'Good', value: 65 },
              { label: 'Average', value: 15 },
              { label: 'Below Avg', value: 5 }
            ],
            '3m': [
              { label: 'Excellent', value: 58 },
              { label: 'Good', value: 21 },
              { label: 'Average', value: 16 },
              { label: 'Below Avg', value: 5 }
            ],
            '1y': [
              { label: 'Excellent', value: 12 },
              { label: 'Good', value: 68 },
              { label: 'Average', value: 16 },
              { label: 'Below Avg', value: 4 }
            ]
          }}
        />
      </div>

      {/* Department KPI Matrix */}
      <Card title="Department KPI Performance Matrix">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Department</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Productivity</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Satisfaction</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Retention</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Utilization</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-700 dark:text-gray-300">Overall</th>
              </tr>
            </thead>
            <tbody>
              {departmentKPIs.map((dept, index) => {
                const kpis = dept.kpis;
                const overallScore = Math.round((
                  (kpis.productivity.current / kpis.productivity.target) +
                  (kpis.satisfaction.current / kpis.satisfaction.target) +
                  (kpis.retention.current / kpis.retention.target) +
                  (kpis.utilization.current / kpis.utilization.target)
                ) / 4 * 100);
                
                const overallStatus = overallScore >= 100 ? 'success' : overallScore >= 90 ? 'warning' : 'danger';

                return (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-4 px-4 font-medium text-gray-800 dark:text-white">
                      {dept.department}
                    </td>
                    {Object.entries(kpis).map(([key, kpi]) => (
                      <td key={key} className="py-4 px-4 text-center">
                        <div className="flex flex-col items-center space-y-1">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            kpi.status === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                            kpi.status === 'warning' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                            'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                            {kpi.current}%
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Target: {kpi.target}%
                          </span>
                        </div>
                      </td>
                    ))}
                    <td className="py-4 px-4 text-center">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        overallStatus === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        overallStatus === 'warning' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {overallScore}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card title="Achievement Summary">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">KPIs Above Target</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">6/12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">KPIs At Risk</span>
              <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">4/12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">KPIs Below Target</span>
              <span className="text-lg font-bold text-red-600 dark:text-red-400">2/12</span>
            </div>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Achievement</span>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">78%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Trend Analysis">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Improving KPIs</span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Stable KPIs</span>
              <span className="text-lg font-bold text-gray-600 dark:text-gray-400">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Declining KPIs</span>
              <span className="text-lg font-bold text-red-600 dark:text-red-400">1</span>
            </div>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Avg. Improvement</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">+5.2%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Action Items">
          <div className="space-y-3">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Critical</p>
              <p className="text-xs text-red-600 dark:text-red-300">Sales retention below 90%</p>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Warning</p>
              <p className="text-xs text-yellow-600 dark:text-yellow-300">Time to fill exceeding target</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Focus Area</p>
              <p className="text-xs text-blue-600 dark:text-blue-300">Training completion rates</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default KPI;