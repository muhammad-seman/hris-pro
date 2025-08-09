import { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { Card } from '../../components';
import Icon from '../../components/Icon';
import Chart from '../../components/Dashboard/Chart';

const SkillsManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'frontend', name: 'Frontend Development', color: 'bg-blue-500', skills: 28 },
    { id: 'backend', name: 'Backend Development', color: 'bg-green-500', skills: 22 },
    { id: 'mobile', name: 'Mobile Development', color: 'bg-purple-500', skills: 15 },
    { id: 'devops', name: 'DevOps & Infrastructure', color: 'bg-red-500', skills: 18 },
    { id: 'design', name: 'UI/UX Design', color: 'bg-pink-500', skills: 12 },
    { id: 'data', name: 'Data Science', color: 'bg-indigo-500', skills: 16 },
    { id: 'management', name: 'Management & Leadership', color: 'bg-yellow-500', skills: 10 },
    { id: 'marketing', name: 'Marketing & Sales', color: 'bg-orange-500', skills: 14 }
  ];

  const skills = [
    {
      id: 1,
      name: 'React',
      category: 'frontend',
      proficiencyLevels: {
        beginner: 12,
        intermediate: 25,
        advanced: 18,
        expert: 8
      },
      totalEmployees: 63,
      trending: 'up',
      demandLevel: 'high',
      averageRating: 3.2,
      certifications: ['React Developer Certification', 'Advanced React Patterns'],
      learningPaths: 3,
      mentors: 8
    },
    {
      id: 2,
      name: 'Node.js',
      category: 'backend',
      proficiencyLevels: {
        beginner: 18,
        intermediate: 22,
        advanced: 15,
        expert: 6
      },
      totalEmployees: 61,
      trending: 'up',
      demandLevel: 'high',
      averageRating: 3.1,
      certifications: ['Node.js Developer Certification'],
      learningPaths: 2,
      mentors: 6
    },
    {
      id: 3,
      name: 'Python',
      category: 'backend',
      proficiencyLevels: {
        beginner: 15,
        intermediate: 28,
        advanced: 20,
        expert: 12
      },
      totalEmployees: 75,
      trending: 'stable',
      demandLevel: 'high',
      averageRating: 3.4,
      certifications: ['Python Institute Certification', 'Django Developer'],
      learningPaths: 4,
      mentors: 10
    },
    {
      id: 4,
      name: 'AWS',
      category: 'devops',
      proficiencyLevels: {
        beginner: 25,
        intermediate: 18,
        advanced: 12,
        expert: 4
      },
      totalEmployees: 59,
      trending: 'up',
      demandLevel: 'critical',
      averageRating: 2.8,
      certifications: ['AWS Solutions Architect', 'AWS DevOps Professional'],
      learningPaths: 5,
      mentors: 4
    },
    {
      id: 5,
      name: 'Docker',
      category: 'devops',
      proficiencyLevels: {
        beginner: 20,
        intermediate: 15,
        advanced: 8,
        expert: 3
      },
      totalEmployees: 46,
      trending: 'up',
      demandLevel: 'medium',
      averageRating: 2.6,
      certifications: ['Docker Certified Associate'],
      learningPaths: 2,
      mentors: 3
    },
    {
      id: 6,
      name: 'Machine Learning',
      category: 'data',
      proficiencyLevels: {
        beginner: 8,
        intermediate: 12,
        advanced: 6,
        expert: 3
      },
      totalEmployees: 29,
      trending: 'up',
      demandLevel: 'high',
      averageRating: 3.0,
      certifications: ['Google ML Engineer', 'AWS ML Specialty'],
      learningPaths: 3,
      mentors: 3
    }
  ];

  const employees = [
    {
      id: 1,
      name: 'Sarah Wilson',
      position: 'Senior Software Engineer',
      department: 'Engineering',
      skills: [
        { name: 'React', level: 4, category: 'frontend' },
        { name: 'Node.js', level: 4, category: 'backend' },
        { name: 'Python', level: 3, category: 'backend' },
        { name: 'AWS', level: 3, category: 'devops' },
        { name: 'Docker', level: 3, category: 'devops' }
      ],
      skillGaps: ['Kubernetes', 'GraphQL'],
      recommendedLearning: ['Advanced React Patterns', 'AWS Solutions Architect'],
      mentoring: ['React', 'Node.js']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Data Scientist',
      department: 'Engineering',
      skills: [
        { name: 'Python', level: 4, category: 'backend' },
        { name: 'Machine Learning', level: 4, category: 'data' },
        { name: 'SQL', level: 4, category: 'data' },
        { name: 'TensorFlow', level: 3, category: 'data' }
      ],
      skillGaps: ['Deep Learning', 'MLOps'],
      recommendedLearning: ['Advanced ML Techniques', 'Kubernetes for ML'],
      mentoring: ['Python', 'Machine Learning']
    },
    {
      id: 3,
      name: 'Emma Davis',
      position: 'UX Designer',
      department: 'Design',
      skills: [
        { name: 'Figma', level: 4, category: 'design' },
        { name: 'User Research', level: 4, category: 'design' },
        { name: 'Prototyping', level: 3, category: 'design' },
        { name: 'HTML/CSS', level: 2, category: 'frontend' }
      ],
      skillGaps: ['Advanced Animation', 'Design Systems'],
      recommendedLearning: ['Advanced Figma', 'Design System Creation'],
      mentoring: ['UX Design', 'User Research']
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Skills Overview', icon: 'ChartBarIcon' },
    { id: 'skills', label: 'Skill Directory', icon: 'CubeIcon' },
    { id: 'employees', label: 'Employee Skills', icon: 'UsersIcon' },
    { id: 'gaps', label: 'Skill Gaps', icon: 'ExclamationTriangleIcon' },
    { id: 'development', label: 'Learning & Development', icon: 'AcademicCapIcon' }
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getTrendingIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <Icon name="TrendingUpIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case 'down':
        return <Icon name="TrendingDownIcon" className="w-4 h-4 text-red-600 dark:text-red-400" />;
      default:
        return <Icon name="MinusIcon" className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'high':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getSkillLevelColor = (level) => {
    switch (level) {
      case 4:
        return 'bg-purple-500';
      case 3:
        return 'bg-blue-500';
      case 2:
        return 'bg-green-500';
      case 1:
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSkillLevelName = (level) => {
    switch (level) {
      case 4:
        return 'Expert';
      case 3:
        return 'Advanced';
      case 2:
        return 'Intermediate';
      case 1:
        return 'Beginner';
      default:
        return 'Unknown';
    }
  };

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Skill Categories */}
      <Card title="Skill Categories">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map(category => (
            <div key={category.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                  <Icon name="CubeIcon" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.skills} skills
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Skills Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Chart
          title="Most In-Demand Skills"
          type="bar"
          data={skills.slice(0, 6).map(skill => ({
            label: skill.name,
            value: skill.totalEmployees
          }))}
          height="300px"
        />

        <Chart
          title="Skill Proficiency Distribution"
          type="pie"
          data={[
            { label: 'Expert', value: 15, color: 'bg-purple-500' },
            { label: 'Advanced', value: 25, color: 'bg-blue-500' },
            { label: 'Intermediate', value: 35, color: 'bg-green-500' },
            { label: 'Beginner', value: 25, color: 'bg-yellow-500' }
          ]}
          height="300px"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Icon name="CubeIcon" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">135</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Skills</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUpIcon" className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">23</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">High Demand Skills</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Icon name="ExclamationTriangleIcon" className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">8</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Critical Gaps</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Icon name="AcademicCapIcon" className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">45</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Learners</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const SkillsTab = () => (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              {skillCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button 
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="Add Skill"
          >
            <Icon name="PlusIcon" className="w-5 h-5" />
          </button>
        </div>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map(skill => (
          <Card key={skill.id} className="hover:shadow-lg transition-all duration-200">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {skill.category.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getTrendingIcon(skill.trending)}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(skill.demandLevel)}`}>
                    {skill.demandLevel.toUpperCase()}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Employee Count</span>
                  <span className="text-xl font-bold text-gray-800 dark:text-white">
                    {skill.totalEmployees}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-white">
                      {skill.averageRating.toFixed(1)}
                    </span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Icon
                          key={star}
                          name="StarIcon"
                          className={`w-3 h-3 ${
                            star <= skill.averageRating
                              ? 'text-yellow-500'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                  Proficiency Distribution
                </span>
                <div className="space-y-1">
                  {Object.entries(skill.proficiencyLevels).map(([level, count]) => (
                    <div key={level} className="flex items-center space-x-2 text-xs">
                      <span className="w-16 capitalize text-gray-600 dark:text-gray-400">
                        {level}
                      </span>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(count / skill.totalEmployees) * 100}%` }}
                        />
                      </div>
                      <span className="w-6 text-gray-600 dark:text-gray-400">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>{skill.learningPaths} learning paths</span>
                  <span>{skill.mentors} mentors</span>
                  <span>{skill.certifications.length} certifications</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const EmployeesTab = () => (
    <div className="space-y-6">
      <Card title="Employee Skills Matrix">
        {employees.map(employee => (
          <div key={employee.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {getInitials(employee.name)}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {employee.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {employee.position} • {employee.department}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {employee.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-3">Current Skills</h4>
                    <div className="space-y-2">
                      {employee.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 ${getSkillLevelColor(skill.level)} rounded-full`} />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                              {getSkillLevelName(skill.level)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-3">Skill Gaps</h4>
                    <div className="space-y-2">
                      {employee.skillGaps.map((gap, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="ExclamationCircleIcon" className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {gap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white mb-3">Mentoring</h4>
                    <div className="space-y-2">
                      {employee.mentoring.map((skill, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="AcademicCapIcon" className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );

  const GapsTab = () => (
    <div className="space-y-6">
      <Card title="Critical Skill Gaps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { skill: 'Kubernetes', gap: 'High', demand: 85, supply: 25, category: 'DevOps' },
            { skill: 'GraphQL', gap: 'High', demand: 72, supply: 18, category: 'Backend' },
            { skill: 'TypeScript', gap: 'Medium', demand: 68, supply: 35, category: 'Frontend' },
            { skill: 'Machine Learning', gap: 'Critical', demand: 45, supply: 8, category: 'Data Science' },
            { skill: 'Cloud Security', gap: 'High', demand: 55, supply: 12, category: 'Security' },
            { skill: 'React Native', gap: 'Medium', demand: 38, supply: 15, category: 'Mobile' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {item.skill}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.category}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.gap === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  item.gap === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                }`}>
                  {item.gap} Gap
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Demand</span>
                  <span className="font-medium text-gray-800 dark:text-white">{item.demand}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${item.demand}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Supply</span>
                  <span className="font-medium text-gray-800 dark:text-white">{item.supply}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${item.supply}%` }}
                  />
                </div>
                
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-3">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Gap: {item.demand - item.supply}% shortage
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const DevelopmentTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Learning Paths">
          <div className="space-y-4">
            {[
              { name: 'Full-Stack Development', enrolled: 25, duration: '6 months', level: 'Intermediate' },
              { name: 'Cloud Architecture', enrolled: 18, duration: '4 months', level: 'Advanced' },
              { name: 'Data Science Fundamentals', enrolled: 22, duration: '8 months', level: 'Beginner' },
              { name: 'DevOps Engineering', enrolled: 15, duration: '5 months', level: 'Intermediate' },
              { name: 'Mobile Development', enrolled: 12, duration: '7 months', level: 'Intermediate' }
            ].map((path, idx) => (
              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      {path.name}
                    </h4>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Icon name="UsersIcon" className="w-4 h-4" />
                        <span>{path.enrolled} enrolled</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="ClockIcon" className="w-4 h-4" />
                        <span>{path.duration}</span>
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        path.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                        path.level === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                      }`}>
                        {path.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Mentorship Program">
          <div className="space-y-4">
            {[
              { mentor: 'Sarah Wilson', skill: 'React', mentees: 3, rating: 4.8 },
              { mentor: 'Michael Chen', skill: 'Python', mentees: 4, rating: 4.9 },
              { mentor: 'Emma Davis', skill: 'UX Design', mentees: 2, rating: 4.7 },
              { mentor: 'James Rodriguez', skill: 'Node.js', mentees: 3, rating: 4.6 },
              { mentor: 'Lisa Wang', skill: 'AWS', mentees: 2, rating: 4.5 }
            ].map((mentorship, idx) => (
              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {getInitials(mentorship.mentor)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        {mentorship.mentor}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {mentorship.skill} mentor
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Icon name="StarIcon" className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        {mentorship.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {mentorship.mentees} mentees
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'skills':
        return <SkillsTab />;
      case 'employees':
        return <EmployeesTab />;
      case 'gaps':
        return <GapsTab />;
      case 'development':
        return <DevelopmentTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Skills Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track, develop, and optimize employee skills across the organization
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="Export Report"
            >
              <Icon name="ArrowDownTrayIcon" className="w-5 h-5" />
            </button>
            <button 
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              title="Add Skill"
            >
              <Icon name="PlusIcon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
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

export default SkillsManagement;