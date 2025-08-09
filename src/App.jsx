import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Dashboard, Login } from './pages';
import { Overview, Analytics, KPI, Executive } from './components/Dashboard';
import ProfileSettings from './pages/ProfileSettings';
import AccountSettings from './pages/AccountSettings';
import HelpSupport from './pages/HelpSupport';
import {
  EmployeeDirectory,
  EmployeeProfiles,
  OnboardingProcess,
  OffboardingProcess,
  EmployeeHierarchy,
  SkillsManagement
} from './pages/employees';
import {
  TimeTracking,
  AttendanceReports,
  ShiftManagement,
  OvertimeManagement,
  ClockInOut
} from './pages/attendance';
import {
  LeaveRequests,
  LeaveCalendar,
  LeavePolicies,
  LeaveBalance,
  LeaveApprovals,
  HolidayManagement
} from './pages/leave';
import {
  PayrollProcessing,
  SalaryStructure,
  BenefitsAdministration,
  TaxManagement,
  BonusIncentives,
  Payslips
} from './pages/payroll';
import {
  GoalSetting,
  PerformanceReviews,
  KPITracking,
  FeedbackManagement,
  CareerDevelopment,
  TrainingRecords
} from './pages/performance';
import {
  TrainingPrograms,
  CourseCatalog,
  Certifications,
  SkillsAssessment,
  LearningPaths,
  TrainingCalendar
} from './pages/learning';
import {
  JobPostings,
  CandidatePipeline,
  InterviewScheduling,
  OfferManagement,
  ApplicantTracking,
  RecruitmentAnalytics
} from './pages/recruitment';
import {
  UserManagement,
  RolePermissions,
  CompanySettings,
  DepartmentManagement,
  PolicyManagement,
  AuditLogs
} from './pages/administration';
import {
  HRAnalytics,
  CustomReports,
  DataExport,
  ComplianceReports,
  TrendAnalysis,
  PredictiveAnalytics
} from './pages/reports';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/kpi" element={<KPI />} />
          <Route path="/dashboard/executive" element={<Executive />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
          <Route path="/employee-profiles" element={<EmployeeProfiles />} />
          <Route path="/onboarding-process" element={<OnboardingProcess />} />
          <Route path="/offboarding-process" element={<OffboardingProcess />} />
          <Route path="/employee-hierarchy" element={<EmployeeHierarchy />} />
          <Route path="/skills-management" element={<SkillsManagement />} />
          <Route path="/attendance/tracking" element={<TimeTracking />} />
          <Route path="/attendance/reports" element={<AttendanceReports />} />
          <Route path="/attendance/shifts" element={<ShiftManagement />} />
          <Route path="/attendance/overtime" element={<OvertimeManagement />} />
          <Route path="/attendance/clockin" element={<ClockInOut />} />
          <Route path="/leave/requests" element={<LeaveRequests />} />
          <Route path="/leave/calendar" element={<LeaveCalendar />} />
          <Route path="/leave/policies" element={<LeavePolicies />} />
          <Route path="/leave/balance" element={<LeaveBalance />} />
          <Route path="/leave/approvals" element={<LeaveApprovals />} />
          <Route path="/leave/holidays" element={<HolidayManagement />} />
          <Route path="/payroll/processing" element={<PayrollProcessing />} />
          <Route path="/payroll/structure" element={<SalaryStructure />} />
          <Route path="/payroll/benefits" element={<BenefitsAdministration />} />
          <Route path="/payroll/tax" element={<TaxManagement />} />
          <Route path="/payroll/bonus" element={<BonusIncentives />} />
          <Route path="/payroll/payslips" element={<Payslips />} />
          <Route path="/performance/goals" element={<GoalSetting />} />
          <Route path="/performance/reviews" element={<PerformanceReviews />} />
          <Route path="/performance/kpi" element={<KPITracking />} />
          <Route path="/performance/feedback" element={<FeedbackManagement />} />
          <Route path="/performance/career" element={<CareerDevelopment />} />
          <Route path="/performance/training" element={<TrainingRecords />} />
          <Route path="/learning/programs" element={<TrainingPrograms />} />
          <Route path="/learning/catalog" element={<CourseCatalog />} />
          <Route path="/learning/certifications" element={<Certifications />} />
          <Route path="/learning/assessment" element={<SkillsAssessment />} />
          <Route path="/learning/paths" element={<LearningPaths />} />
          <Route path="/learning/training-calendar" element={<TrainingCalendar />} />
          <Route path="/recruitment/job-postings" element={<JobPostings />} />
          <Route path="/recruitment/candidate-pipeline" element={<CandidatePipeline />} />
          <Route path="/recruitment/interview-scheduling" element={<InterviewScheduling />} />
          <Route path="/recruitment/offer-management" element={<OfferManagement />} />
          <Route path="/recruitment/applicant-tracking" element={<ApplicantTracking />} />
          <Route path="/recruitment/analytics" element={<RecruitmentAnalytics />} />
          <Route path="/administration/users" element={<UserManagement />} />
          <Route path="/administration/roles" element={<RolePermissions />} />
          <Route path="/administration/company" element={<CompanySettings />} />
          <Route path="/administration/departments" element={<DepartmentManagement />} />
          <Route path="/administration/policies" element={<PolicyManagement />} />
          <Route path="/administration/audit" element={<AuditLogs />} />
          <Route path="/reports/hr-analytics" element={<HRAnalytics />} />
          <Route path="/reports/custom" element={<CustomReports />} />
          <Route path="/reports/export" element={<DataExport />} />
          <Route path="/reports/compliance" element={<ComplianceReports />} />
          <Route path="/reports/trends" element={<TrendAnalysis />} />
          <Route path="/reports/predictive" element={<PredictiveAnalytics />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;