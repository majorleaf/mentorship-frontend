import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import   Login from './auth/login.tsx'
import Landing from './pages/Landing.tsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
