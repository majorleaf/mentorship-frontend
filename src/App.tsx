import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import   Login from './auth/login.tsx'
import Landing from './pages/Landing.tsx'
import Register from './auth/register.tsx'
import Dashboard from './pages/Dashboard.tsx'
import { useShopContext } from './context.tsx'

function ProtectedRoute({ children }: {
  children: React.ReactNode
}) {
  const { token } = useShopContext();
  return token ? <>{children}</> : <Navigate to="/login" />;
} 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
        } />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App
