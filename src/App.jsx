import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Dashboard, Login } from './pages';
import Overview from './pages/Dashboard/Overview';
import Analytics from './pages/Dashboard/Analytics';
import KPI from './pages/Dashboard/KPI';
import Executive from './pages/Dashboard/Executive';
import ProfileSettings from './pages/ProfileSettings';
import AccountSettings from './pages/AccountSettings';
import HelpSupport from './pages/HelpSupport';
import EmployeeDirectory from './pages/EmployeeDirectory';
import EmployeeProfiles from './pages/EmployeeProfiles';
import OnboardingProcess from './pages/OnboardingProcess';
import OffboardingProcess from './pages/OffboardingProcess';
import EmployeeHierarchy from './pages/EmployeeHierarchy';
import SkillsManagement from './pages/SkillsManagement';
import TimeTracking from './pages/TimeTracking';
import AttendanceReports from './pages/AttendanceReports';
import ShiftManagement from './pages/ShiftManagement';
import OvertimeManagement from './pages/OvertimeManagement';
import ClockInOut from './pages/ClockInOut';
import LeaveRequests from './pages/LeaveRequests';
import LeaveCalendar from './pages/LeaveCalendar';
import LeavePolicies from './pages/LeavePolicies';
import LeaveBalance from './pages/LeaveBalance';
import LeaveApprovals from './pages/LeaveApprovals';
import HolidayManagement from './pages/HolidayManagement';
import PayrollProcessing from './pages/PayrollProcessing';
import SalaryStructure from './pages/SalaryStructure';
import BenefitsAdministration from './pages/BenefitsAdministration';
import TaxManagement from './pages/TaxManagement';
import BonusIncentives from './pages/BonusIncentives';
import Payslips from './pages/Payslips';
import GoalSetting from './pages/GoalSetting';
import PerformanceReviews from './pages/PerformanceReviews';
import KPITracking from './pages/KPITracking';
import FeedbackManagement from './pages/FeedbackManagement';
import CareerDevelopment from './pages/CareerDevelopment';
import TrainingRecords from './pages/TrainingRecords';
import TrainingPrograms from './pages/TrainingPrograms';
import CourseCatalog from './pages/CourseCatalog';
import CertificationsPage from './pages/CertificationsPage';
import SkillsAssessment from './pages/SkillsAssessment';
import LearningPaths from './pages/LearningPaths';
import TrainingCalendar from './pages/TrainingCalendar';

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
          <Route path="/learning/certifications" element={<CertificationsPage />} />
          <Route path="/learning/assessment" element={<SkillsAssessment />} />
          <Route path="/learning/paths" element={<LearningPaths />} />
          <Route path="/learning/training-calendar" element={<TrainingCalendar />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;