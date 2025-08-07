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
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;