import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Dashboard from "./pages/Dashboard";
import SecondDashboard from "./pages/SecondDashboard";

// Course Detail Pages
import ProjectManagement from "./pages/Courses/ProjectManagement";
import Aiml from "./pages/Courses/Aiml";
import DigitalMarketing from "./pages/Courses/DigitalMarketing";

// Dropdown Pages
import Profile from "./pages/Profile";
import Purchases from "./pages/Purchases";
import MyCourses from "./pages/MyCourses";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Invoice from "./pages/Invoice";

// Modals
import AuthModal from "./Components/AuthModal";
import LogoutModal from "./Components/LogoutModal";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // login or register
  const [user, setUser] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Load user from localStorage 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUser && isLoggedIn === "true") {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login success handler
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");
    setShowAuthModal(false);

    navigate("/"); 
  };

  // Open login/register modal
  const openAuthModal = (mode = "login") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  // Open logout modal
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  // Confirm logout
  const confirmLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setShowLogoutModal(false);

    navigate("/"); 
  };

  // Protected Route Wrapper
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/" />; 
    }
    return children;
  };

  return (
    <div>
      {/* Navbar — hidden only on /second-dashboard */}
      {location.pathname !== "/second-dashboard" && (
        <Navbar user={user} onLogout={handleLogoutClick} onOpenAuth={openAuthModal} />
      )}

      {/* Routes */}
      <div className={location.pathname !== "/second-dashboard" ? "pt-20" : ""}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/project-management" element={<ProjectManagement />} />
          <Route path="/courses/aiml" element={<Aiml />} />
          <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/second-dashboard" element={<SecondDashboard />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/purchases"
            element={
              <ProtectedRoute user={user}>
                <Purchases />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-courses"
            element={
              <ProtectedRoute user={user}>
                <MyCourses />
              </ProtectedRoute>
            }
          />

          {/* Other Pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/invoice/:id" element={<Invoice />} />
        </Routes>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleLoginSuccess}
        />
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal onCancel={() => setShowLogoutModal(false)} onConfirm={confirmLogout} />
      )}

      <Footer />
    </div>
  );
}

export default App;
