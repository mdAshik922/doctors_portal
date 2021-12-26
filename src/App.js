import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Payment from './Pages/Payment/Payment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}> 
            
            <Route exact path="/dashboard" element={  <DashboardHome></DashboardHome>}>
          
        </Route>
        <Route path={`/dashboard/payment/:appointmentId`}
         element={ <Payment></Payment>}> </Route>
         
        <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin></MakeAdmin></AdminRoute>}>
           
        </Route>
        <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor/></AdminRoute>}>
        
        </Route>
        </Route>
         
         

            <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />

                
           
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
