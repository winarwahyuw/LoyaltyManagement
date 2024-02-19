import './App.css'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home, History, VoucherDetail, LoginPage, RegisterPage, OtpPage } from './pages';

function App() {
  const user = useSelector((state) => state.user);

  console.log(user)
  return (<>
    <Router>
     <Routes>
       {/* <Route path='/' element={<UnAuthLayout />}> */}
       <Route path="/" element={<Navigate to="/signin" replace />} />
       <Route path='/signin' element={<LoginPage />} />
       <Route path='/signup' element={<RegisterPage />}/>
       <Route path='/otp' element={<OtpPage />}/>

       <Route path='/home' element={user?.name === undefined? <Navigate to="/signin" replace /> : <MainLayout />}>
         <Route index element={<Home />} />
         <Route path='/home/history' element={<History />} />
         {/* <Route path='/home/voucher' element={<VoucherDetail />} /> */}
       </Route>

       <Route path='/voucher' element={user?.name === undefined? <Navigate to="/signin" replace /> : <MainLayout />}>
         <Route index element={<VoucherDetail />} />
         <Route path=':voucherId' element={<VoucherDetail />} />
       </Route>
     </Routes>
   </Router>
  </>)
}

export default App
