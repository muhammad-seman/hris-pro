export const menuData = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'ChartBarIcon',
    path: '/dashboard',
    children: [
      { id: 'overview', title: 'Overview', path: '/dashboard/overview' },
      { id: 'analytics', title: 'Analytics & Reports', path: '/dashboard/analytics' },
      { id: 'kpi', title: 'KPI Dashboard', path: '/dashboard/kpi' },
      { id: 'executive', title: 'Executive Summary', path: '/dashboard/executive' },
    ]
  },
  {
    id: 'employees',
    title: 'Employee Management',
    icon: 'UsersIcon',
    path: '/employees',
    children: [
      { id: 'directory', title: 'Employee Directory', path: '/employee-directory' },
      { id: 'profiles', title: 'Employee Profiles', path: '/employee-profiles' },
      { id: 'onboarding', title: 'Onboarding Process', path: '/onboarding-process' },
      { id: 'offboarding', title: 'Offboarding Process', path: '/offboarding-process' },
      { id: 'hierarchy', title: 'Employee Hierarchy', path: '/employee-hierarchy' },
      { id: 'skills', title: 'Skills Management', path: '/skills-management' },
    ]
  },
  {
    id: 'attendance',
    title: 'Time & Attendance',
    icon: 'ClockIcon',
    path: '/attendance',
    children: [
      { id: 'tracking', title: 'Time Tracking', path: '/attendance/tracking' },
      { id: 'reports', title: 'Attendance Reports', path: '/attendance/reports' },
      { id: 'shifts', title: 'Shift Management', path: '/attendance/shifts' },
      { id: 'overtime', title: 'Overtime Management', path: '/attendance/overtime' },
      { id: 'clockin', title: 'Clock In/Out', path: '/attendance/clockin' },
    ]
  },
  {
    id: 'leave',
    title: 'Leave Management',
    icon: 'CalendarIcon',
    path: '/leave',
    children: [
      { id: 'requests', title: 'Leave Requests', path: '/leave/requests' },
      { id: 'calendar', title: 'Leave Calendar', path: '/leave/calendar' },
      { id: 'policies', title: 'Leave Policies', path: '/leave/policies' },
      { id: 'balance', title: 'Leave Balance', path: '/leave/balance' },
      { id: 'approvals', title: 'Leave Approvals', path: '/leave/approvals' },
      { id: 'holidays', title: 'Holiday Management', path: '/leave/holidays' },
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll & Benefits',
    icon: 'CurrencyDollarIcon',
    path: '/payroll',
    children: [
      { id: 'processing', title: 'Payroll Processing', path: '/payroll/processing' },
      { id: 'structure', title: 'Salary Structure', path: '/payroll/structure' },
      { id: 'benefits', title: 'Benefits Administration', path: '/payroll/benefits' },
      { id: 'tax', title: 'Tax Management', path: '/payroll/tax' },
      { id: 'bonus', title: 'Bonus & Incentives', path: '/payroll/bonus' },
      { id: 'payslips', title: 'Payslips', path: '/payroll/payslips' },
    ]
  },
  {
    id: 'performance',
    title: 'Performance Management',
    icon: 'TrendingUpIcon',
    path: '/performance',
    children: [
      { id: 'goals', title: 'Goal Setting', path: '/performance/goals' },
      { id: 'reviews', title: 'Performance Reviews', path: '/performance/reviews' },
      { id: 'kpi-tracking', title: 'KPI Tracking', path: '/performance/kpi' },
      { id: 'feedback', title: '360° Feedback', path: '/performance/feedback' },
      { id: 'development', title: 'Career Development', path: '/performance/career' },
      { id: 'training-records', title: 'Training Records', path: '/performance/training' },
    ]
  },
  {
    id: 'learning',
    title: 'Learning & Development',
    icon: 'AcademicCapIcon',
    path: '/learning',
    children: [
      { id: 'programs', title: 'Training Programs', path: '/learning/programs' },
      { id: 'catalog', title: 'Course Catalog', path: '/learning/catalog' },
      { id: 'certifications', title: 'Certifications', path: '/learning/certifications' },
      { id: 'assessment', title: 'Skills Assessment', path: '/learning/assessment' },
      { id: 'paths', title: 'Learning Paths', path: '/learning/paths' },
      { id: 'training-calendar', title: 'Training Calendar', path: '/learning/training-calendar' },
    ]
  },
  {
    id: 'recruitment',
    title: 'Recruitment',
    icon: 'BriefcaseIcon',
    path: '/recruitment',
    children: [
      { id: 'job-postings', title: 'Job Postings', path: '/recruitment/job-postings' },
      { id: 'candidate-pipeline', title: 'Candidate Pipeline', path: '/recruitment/candidate-pipeline' },
      { id: 'interview-scheduling', title: 'Interview Scheduling', path: '/recruitment/interview-scheduling' },
      { id: 'offer-management', title: 'Offer Management', path: '/recruitment/offer-management' },
      { id: 'applicant-tracking', title: 'Applicant Tracking', path: '/recruitment/applicant-tracking' },
      { id: 'recruitment-analytics', title: 'Recruitment Analytics', path: '/recruitment/analytics' },
    ]
  },
  {
    id: 'administration',
    title: 'Administration',
    icon: 'CogIcon',
    path: '/administration',
    children: [
      { id: 'users', title: 'User Management', path: '/administration/users' },
      { id: 'roles', title: 'Role & Permissions', path: '/administration/roles' },
      { id: 'company', title: 'Company Settings', path: '/administration/company' },
      { id: 'departments', title: 'Department Management', path: '/administration/departments' },
      { id: 'policies', title: 'Policy Management', path: '/administration/policies' },
      { id: 'audit', title: 'Audit Logs', path: '/administration/audit' },
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    icon: 'ChartPieIcon',
    path: '/reports',
    children: [
      { id: 'hr-analytics', title: 'HR Analytics', path: '/reports/hr-analytics' },
      { id: 'custom', title: 'Custom Reports', path: '/reports/custom' },
      { id: 'export', title: 'Data Export', path: '/reports/export' },
      { id: 'compliance', title: 'Compliance Reports', path: '/reports/compliance' },
      { id: 'trends', title: 'Trend Analysis', path: '/reports/trends' },
      { id: 'predictive', title: 'Predictive Analytics', path: '/reports/predictive' },
    ]
  },
];