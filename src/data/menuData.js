export const menuData = [
  // Dashboard Section
  { 
    id: 'dashboard-header', 
    title: 'Dashboard', 
    type: 'header',
    category: true 
  },
  { id: 'overview', title: 'Overview', icon: 'ChartPieIcon', path: '/dashboard/overview' },
  { id: 'kpi', title: 'KPI Dashboard', icon: 'ChartBarIcon', path: '/dashboard/kpi' },
  { id: 'executive', title: 'Executive Summary', icon: 'DocumentTextIcon', path: '/dashboard/executive' },
  
  // Employee Management Section
  { 
    id: 'employees-header', 
    title: 'Employee Management', 
    type: 'header',
    category: true 
  },
  { id: 'directory', title: 'Employee Directory', icon: 'UsersIcon', path: '/employee-directory' },
  { id: 'profiles', title: 'Employee Profiles', icon: 'UserIcon', path: '/employee-profiles' },
  { id: 'onboarding', title: 'Onboarding Process', icon: 'UserPlusIcon', path: '/onboarding-process' },
  { id: 'offboarding', title: 'Offboarding Process', icon: 'UserMinusIcon', path: '/offboarding-process' },
  
  // Time & Attendance Section
  { 
    id: 'attendance-header', 
    title: 'Time & Attendance', 
    type: 'header',
    category: true 
  },
  { id: 'clockin', title: 'Clock In/Out', icon: 'ClockIcon', path: '/attendance/clockin' },
  { id: 'attendance-reports', title: 'Attendance Reports', icon: 'DocumentTextIcon', path: '/attendance/reports' },
  { id: 'shifts', title: 'Shift Management', icon: 'CalendarDaysIcon', path: '/attendance/shifts' },
  { id: 'overtime', title: 'Overtime Management', icon: 'ClockIcon', path: '/attendance/overtime' },
  
  // Leave Management Section
  { 
    id: 'leave-header', 
    title: 'Leave Management', 
    type: 'header',
    category: true 
  },
  { id: 'leave-requests', title: 'Leave Requests', icon: 'CalendarIcon', path: '/leave/requests' },
  { id: 'leave-calendar', title: 'Leave Calendar', icon: 'CalendarDaysIcon', path: '/leave/calendar' },
  { id: 'leave-policies', title: 'Leave Policies', icon: 'DocumentTextIcon', path: '/leave/policies' },
  { id: 'holidays', title: 'Holiday Management', icon: 'CalendarIcon', path: '/leave/holidays' },
  
  // Payroll & Benefits Section
  { 
    id: 'payroll-header', 
    title: 'Payroll & Benefits', 
    type: 'header',
    category: true 
  },
  { id: 'payroll-processing', title: 'Payroll Processing', icon: 'CurrencyDollarIcon', path: '/payroll/processing' },
  { id: 'salary-structure', title: 'Salary Structure', icon: 'CurrencyDollarIcon', path: '/payroll/structure' },
  { id: 'benefits', title: 'Benefits Administration', icon: 'HeartIcon', path: '/payroll/benefits' },
  { id: 'tax', title: 'Tax Management', icon: 'DocumentTextIcon', path: '/payroll/tax' },
  { id: 'bonus', title: 'Bonus & Incentives', icon: 'StarIcon', path: '/payroll/bonus' },
  { id: 'payslips', title: 'Payslips', icon: 'DocumentTextIcon', path: '/payroll/payslips' },
  
  // Performance & Development Section
  { 
    id: 'performance-header', 
    title: 'Performance & Development', 
    type: 'header',
    category: true 
  },
  { id: 'goals', title: 'Goals & KPIs', icon: 'ChartBarIcon', path: '/performance/goals' },
  { id: 'performance-reviews', title: 'Performance Reviews', icon: 'DocumentTextIcon', path: '/performance/reviews' },
  { id: '360-feedback', title: '360° Feedback', icon: 'MessageCircleIcon', path: '/performance/feedback' },
  { id: 'career-development', title: 'Career Development', icon: 'TrendingUpIcon', path: '/performance/career' },
  { id: 'skills-management', title: 'Skills Management', icon: 'AcademicCapIcon', path: '/performance/skills' },
  
  // Learning & Training Section
  { 
    id: 'learning-header', 
    title: 'Learning & Training', 
    type: 'header',
    category: true 
  },
  { id: 'training-programs', title: 'Training Programs', icon: 'AcademicCapIcon', path: '/learning/programs' },
  { id: 'course-catalog', title: 'Course Catalog', icon: 'AcademicCapIcon', path: '/learning/catalog' },
  { id: 'certifications', title: 'Certifications', icon: 'AcademicCapIcon', path: '/learning/certifications' },
  { id: 'learning-paths', title: 'Learning Paths', icon: 'ArrowPathIcon', path: '/learning/paths' },
  
  // Recruitment Section
  { 
    id: 'recruitment-header', 
    title: 'Recruitment', 
    type: 'header',
    category: true 
  },
  { id: 'job-postings', title: 'Job Postings', icon: 'BriefcaseIcon', path: '/recruitment/job-postings' },
  { id: 'candidate-pipeline', title: 'Candidate Pipeline', icon: 'UserGroupIcon', path: '/recruitment/candidate-pipeline' },
  { id: 'interview-scheduling', title: 'Interview Scheduling', icon: 'CalendarIcon', path: '/recruitment/interview-scheduling' },
  { id: 'offer-management', title: 'Offer Management', icon: 'DocumentTextIcon', path: '/recruitment/offer-management' },
  { id: 'applicant-tracking', title: 'Applicant Tracking', icon: 'UsersIcon', path: '/recruitment/applicant-tracking' },
  
  // Administration Section
  { 
    id: 'administration-header', 
    title: 'Administration', 
    type: 'header',
    category: true 
  },
  { id: 'user-management', title: 'User Management', icon: 'UsersIcon', path: '/administration/users' },
  { id: 'roles', title: 'Role & Permissions', icon: 'UserGroupIcon', path: '/administration/roles' },
  { id: 'company-settings', title: 'Company Settings', icon: 'BuildingOfficeIcon', path: '/administration/company' },
  { id: 'departments', title: 'Department Management', icon: 'BuildingOfficeIcon', path: '/administration/departments' },
  { id: 'policies', title: 'Policy Management', icon: 'DocumentTextIcon', path: '/administration/policies' },
  { id: 'audit-logs', title: 'Audit Logs', icon: 'DocumentTextIcon', path: '/administration/audit' },
  
  // Reports & Analytics Section
  { 
    id: 'reports-header', 
    title: 'Reports & Analytics', 
    type: 'header',
    category: true 
  },
  { id: 'hr-analytics', title: 'HR Analytics', icon: 'ChartPieIcon', path: '/reports/hr-analytics' },
  { id: 'custom-reports', title: 'Custom Reports', icon: 'ChartBarIcon', path: '/reports/custom' },
  { id: 'data-export', title: 'Data Export', icon: 'ArrowDownTrayIcon', path: '/reports/export' },
  { id: 'compliance-reports', title: 'Compliance Reports', icon: 'DocumentTextIcon', path: '/reports/compliance' },
  { id: 'trend-analysis', title: 'Trend Analysis', icon: 'TrendingUpIcon', path: '/reports/trends' },
  { id: 'predictive-analytics', title: 'Predictive Analytics', icon: 'CubeIcon', path: '/reports/predictive' },
  { id: 'recruitment-analytics', title: 'Recruitment Analytics', icon: 'ChartBarIcon', path: '/reports/recruitment-analytics' },
];