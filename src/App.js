import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/dashboard/Dashboard';
import AddTransaction from './pages/addTransaction/AddTransaction';
import Transactions from './pages/transactions/Transactions';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from "react";
import { getTransactions } from './components/helper/axiosHelper';

function App() {
  const [user, setuser] = useState({});

  const [tranactions, setTransactions] = useState([]);

  useEffect(() => {
    userStorge();
    fetchTransactions();

  }, []);

  const userStorge = () => {
    const userStr = sessionStorage.getItem("user");
    if (userStr) {
      const userObj = JSON.parse(userStr);
      setuser(userObj);
    }
  };
  const fetchTransactions = async () => {
    const { status, message, result } = await getTransactions();
    console.log(status, message);

    status === "success" && setTransactions(result);
  };

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/dashboard" element={<Dashboard user={user} tranactions={tranactions}/>}/>
        <Route path ="/add-transaction" element={<AddTransaction/>}/>
        <Route path ="/transactions" element={<Transactions tranactions={tranactions} fetchTransactions={fetchTransactions} />}/>
        <Route path="*" element={<h1 className='text-center p-5'>404 page not found...</h1>} />
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
     
    </div>
  );
}

export default App;
