import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import AdminNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import AddAppointments from './pages/Admin/AddAppointments';
import DoctorsList from './pages/Admin/DoctorsList';
import AdminHome from './pages/Admin/AdminHome';

const App = () => {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <AdminNavbar />
      <div className='flex items-start'>
        <Sidebar />

        <Routes>

          <Route path='/' element={<AdminHome />} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/add-appointments' element={<AddAppointments />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorsList />} />

        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App