import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';
import AddTransaction from './pages/addTransaction/AddTransaction';
import Transactions from './pages/transactions/Transactions';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/add-transaction" element={<AddTransaction/>}/>
        <Route path ="/transactions" element={<Transactions/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
