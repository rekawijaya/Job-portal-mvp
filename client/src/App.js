
import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import LoginEmployers from "./pages/LoginEmployers"
import RegisterEmployers from "./pages/RegisterEmployers"
import UserInfo from "./pages/UserInfo"
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { AuthProvider } from './utility/Auth';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login/employers' element={<LoginEmployers/>}/>
      <Route path='/register/employers' element={<RegisterEmployers/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/user/info' element={<UserInfo/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
