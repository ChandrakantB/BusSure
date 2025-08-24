import './App.css';
import Homepage from './components/Homepage';
import SearchResults from './components/SearchResults';
import Support from './components/Support';
import MyBookings from './components/MyBookings';
import Partner from './components/Partner';
import BusOwnerDashboard from './components/BusOwnerDashboard';
import SeatSelection from './components/SeatSelection';
import BookingSummary from './components/BookingSummary';

import AdminLogin from './admin/AdminLogin';
import AdminHome from './admin/pages/AdminHome';
import DashboardLayout from './admin/DashboardLayout';
import PendingApprovals from './admin/pages/PendingApprovals';
import AllBuses from './admin/pages/AllBuses';
import Reports from './admin/pages/Reports';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/support" element={<Support />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/partner/dashboard" element={<BusOwnerDashboard />} />
          <Route path="/select-seats/:busId" element={<SeatSelection />} />
          <Route path="/select-seats/summary" element={<BookingSummary />} />
          <Route path="/api/admin/login" element={<AdminLogin />} />

          {/* 🛠️ Admin Panel Routes (Nested Correctly) */}
          <Route path="/admin/dashboard" element={<DashboardLayout />}>
            <Route index element={<AdminHome />} /> {/* /admin/dashboard */}
            <Route path="approvals" element={<PendingApprovals />} /> {/* /admin/dashboard/approvals */}
            {/* Add more like buses, reports here */}
            <Route path="buses" element={<AllBuses />} />
            <Route path="reports" element={<Reports />} /> 

            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
