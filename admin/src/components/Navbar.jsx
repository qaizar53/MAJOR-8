import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from "../context/DoctorContext";

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { aToken, setAToken } = useContext(AdminContext)
    const { dToken, setDToken } = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="flex items-center justify-between px-6 py-4">

                {/* Logo / Title */}
                {/* <h1 className="text-xl font-bold">Admin Panel</h1> */}
                <div onClick={() => navigate("/")} className="flex items-center gap-2 text-xs">

                    <img className="w-36 sm:w-40 cursor-pointer" src={assets.admin_logo} alt="" />

                    <p className="border px-2.5 py-0.5 rounded-full border-gray-500"> {aToken ? "Admin" : "Doctor"} </p>
                </div>


                {/* Desktop Menu */}
                {/* <div className="hidden md:flex space-x-6">
                    <a href="/admin/dashboard" className="hover:text-gray-300">Dashboard</a>
                    <a href="/admin/doctors" className="hover:text-gray-300">Doctors</a>
                    <a href="/admin/patients" className="hover:text-gray-300">Patients</a>
                    <a href="/admin/appointments" className="hover:text-gray-300">Appointments</a>
                </div> */}

                {/* Logout Button */}
                <button onClick={logout} className="hidden md:block bg-blue-500 px-4 py-2 rounded hover:bg-red-600">
                    Logout
                </button>

                {/* Mobile Menu Button */}
                {/* <div className="md:hidden">
                    <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div> */}
            </div>

            {/* Mobile Menu */}
            {/* {isOpen && (
                <div className="md:hidden px-6 pb-4 space-y-3">
                    <a href="/admin/dashboard" className="block">Dashboard</a>
                    <a href="/admin/doctors" className="block">Doctors</a>
                    <a href="/admin/patients" className="block">Patients</a>
                    <a href="/admin/appointments" className="block">Appointments</a>
                    <button className="w-full bg-red-500 py-2 rounded mt-2">
                        Logout
                    </button>
                </div>
            )} */}
        </nav>
    );
};

export default AdminNavbar;