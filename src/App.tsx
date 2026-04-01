import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { Header } from './components/Header';
import { SessionSelector } from './components/SessionSelector';
import { Navigation } from './components/Navigation';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import { Cases } from './pages/Cases';
import { Reports } from './pages/Reports';
import { Rules } from './pages/Rules';
import { AdminSettings } from './pages/AdminSettings';
import { AuditLogs } from './pages/AuditLogs';

export default function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-canvas">
          <Header />
          <SessionSelector />

          <div className="flex">
            <Navigation />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                <Route path="/dashboard" element={<ProtectedRoute feature="dashboard"><Dashboard /></ProtectedRoute>} />
                <Route path="/cases" element={<ProtectedRoute feature="cases"><Cases /></ProtectedRoute>} />
                <Route path="/reports" element={<ProtectedRoute feature="reports"><Reports /></ProtectedRoute>} />
                <Route path="/rules" element={<ProtectedRoute feature="rules"><Rules /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute feature="admin-settings"><AdminSettings /></ProtectedRoute>} />
                <Route path="/audit" element={<ProtectedRoute feature="audit-logs"><AuditLogs /></ProtectedRoute>} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}
