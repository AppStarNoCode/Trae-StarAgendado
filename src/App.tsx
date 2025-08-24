import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Plans from "./pages/Plans";
import Stores from "./pages/Stores";
import Users from "./pages/Users";
import StoreLogin from "./pages/StoreLogin";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerBooking from "./pages/CustomerBooking";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerHistory from "./pages/CustomerHistory";
import StoreAdmin from "./pages/StoreAdmin";
import StoreSettings from "./pages/StoreSettings";
import StoreProfessionals from "./pages/StoreProfessionals";
import StoreServices from "./pages/StoreServices";
import StoreSchedule from "./pages/StoreSchedule";
import StoreReports from "./pages/StoreReports";
import StoreCustomers from "./pages/StoreCustomers";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/store-login" element={<StoreLogin />} />
              <Route path="/customer-login" element={<CustomerLogin />} />
              
              {/* Protected Admin Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
              <Route path="/plans" element={
                <ProtectedRoute>
                  <Plans />
                </ProtectedRoute>
              } />
              <Route path="/stores" element={
                <ProtectedRoute>
                  <Stores />
                </ProtectedRoute>
              } />
              <Route path="/users" element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              } />
              
              {/* Store Admin Routes */}
              <Route path="/store-admin" element={
                <ProtectedRoute>
                  <StoreAdmin />
                </ProtectedRoute>
              } />
              <Route path="/store-settings" element={
                <ProtectedRoute>
                  <StoreSettings />
                </ProtectedRoute>
              } />
              <Route path="/store-professionals" element={
                <ProtectedRoute>
                  <StoreProfessionals />
                </ProtectedRoute>
              } />
              <Route path="/store-services" element={
                <ProtectedRoute>
                  <StoreServices />
                </ProtectedRoute>
              } />
              <Route path="/store-schedule" element={
                <ProtectedRoute>
                  <StoreSchedule />
                </ProtectedRoute>
              } />
              <Route path="/store-reports" element={
                <ProtectedRoute>
                  <StoreReports />
                </ProtectedRoute>
              } />
              <Route path="/store-customers" element={
                <ProtectedRoute>
                  <StoreCustomers />
                </ProtectedRoute>
              } />
              
              {/* Customer Routes */}
              <Route path="/customer-dashboard" element={
                <ProtectedRoute>
                  <CustomerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/customer-booking" element={
                <ProtectedRoute>
                  <CustomerBooking />
                </ProtectedRoute>
              } />
              <Route path="/customer-profile" element={
                <ProtectedRoute>
                  <CustomerProfile />
                </ProtectedRoute>
              } />
              <Route path="/customer-history" element={
                <ProtectedRoute>
                  <CustomerHistory />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;