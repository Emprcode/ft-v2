import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
