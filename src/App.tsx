import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import   Login from './auth/login.tsx'
import Landing from './pages/Landing.tsx'
import Register from './auth/register.tsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
