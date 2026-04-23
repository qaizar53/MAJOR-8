import React from "react";
import { assets } from "../../assets/assets";

const AdminHome = () => {
    
    const dashboardData = {
        doctors: 25,
        patients: 140,
        appointments: 78,
    };

    const recentAppointments = [
        {
            id: 1,
            name: "Dr. John Doe",
            date: "23 Apr 2026",
            time: "10:30 AM",
        },
        {
            id: 2,
            name: "Dr. Sarah Smith",
            date: "24 Apr 2026",
            time: "12:00 PM",
        },
        {
            id: 3,
            name: "Dr. Michael Lee",
            date: "25 Apr 2026",
            time: "3:45 PM",
        },
    ];

    return (
        <div className="m-5 w-full">

            {/* Dashboard Title */}
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
                Admin Dashboard
            </h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

                <div className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4">
                    <img className="w-12" src={assets.doctor_icon} alt="" />
                    <div>
                        <p className="text-2xl font-bold">{dashboardData.doctors}</p>
                        <p className="text-gray-500">Doctors</p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4">
                    <img className="w-12" src={assets.patients_icon} alt="" />
                    <div>
                        <p className="text-2xl font-bold">{dashboardData.patients}</p>
                        <p className="text-gray-500">Patients</p>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4">
                    <img className="w-12" src={assets.appointment_icon} alt="" />
                    <div>
                        <p className="text-2xl font-bold">{dashboardData.appointments}</p>
                        <p className="text-gray-500">Appointments</p>
                    </div>
                </div>
            </div>

            {/* Recent Appointments */}
            <div className="bg-white shadow-md rounded-lg p-5">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Recent Appointments
                </h2>

                <div className="space-y-4">
                    {recentAppointments.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b pb-3">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">
                                    {item.date} | {item.time}
                                </p>
                            </div>

                            <button className="bg-primary text-white px-4 py-2 rounded-md">
                                View
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;