import { useContext, useState } from "react";
import { AdminContext } from '../context/AdminContext'
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    Calendar,
    User,
    Menu,
    X,
} from "lucide-react";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = ({ role = "admin" }) => {

    const [open, setOpen] = useState(true);
    const { aToken } = useContext(AdminContext)
    const { dToken } = useContext(DoctorContext)

    const menuItems = {
        admin: [
            { name: "Dashboard", icon: <LayoutDashboard />, path: "/admin-dashboard" },
            { name: "Appointments", icon: <Calendar />, path: "/add-appointments" },
            { name: "Add-Doctor", icon: <Users />, path: "/add-doctor" },
            { name: "Doctors-List", icon: <Users />, path: "/doctor-list" },
        ],
    };

    const docItems = {
        admin: [
            { name: "Dashboard", icon: <LayoutDashboard />, path: "/doctor-dashboard" },
            { name: "Appointments", icon: <Calendar />, path: "/doctor-appointment" },
            { name: "Doctors-Profile", icon: <Users />, path: "/doctor-profile" },
        ],
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            {aToken &&
                <div className={`bg-cyan-600 min-h-screen p-4 transition-all duration-300 ${open ? "w-64" : "w-16"}`}>

                    {/* Toggle Button */}
                    <div className="flex justify-end items-center mb-6">

                        <button onClick={() => setOpen(!open)}>
                            {open ? <X /> : <Menu />}
                        </button>

                    </div>

                    {/* Menu */}

                    <ul className="space-y-4">
                        {menuItems[role].map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 p-2 rounded transition ${isActive
                                            ? "bg-white text-blue-700 font-semibold"
                                            : "hover:bg-blue-600 text-white"}`}>
                                    {item.icon}
                                    {open && <span>{item.name}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {dToken &&
                <div className={`bg-cyan-600 min-h-screen p-4 transition-all duration-300 ${open ? "w-64" : "w-16"}`}>

                    {/* Toggle Button */}
                    <div className="flex justify-end items-center mb-6">

                        <button onClick={() => setOpen(!open)}>
                            {open ? <X /> : <Menu />}
                        </button>

                    </div>

                    {/* Menu */}

                    <ul className="space-y-4">
                        {docItems[role].map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 p-2 rounded transition ${isActive
                                            ? "bg-white text-blue-700 font-semibold"
                                            : "hover:bg-blue-600 text-white"}`}>
                                    {item.icon}
                                    {open && <span>{item.name}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Sidebar;