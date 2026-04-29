import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AdminHome = () => {

    const { cancelAppointment, dashData, getdashData, aToken } = useContext(AdminContext)

    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getdashData()
        }
    }, [aToken])

    return dashData && (
        <div className="m-5">

            {/* Stats Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Doctors Card */}
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <img
                        src={assets.doctor_icon}
                        alt="Doctors"
                        className="w-14 h-14"
                    />
                    <div>
                        <p className="text-2xl font-bold text-gray-800">
                            {dashData.doctors}
                        </p>
                        <p className="text-gray-500 font-medium">
                            Doctors
                        </p>
                    </div>
                </div>

                {/* Appointments Card */}
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <img
                        src={assets.appointments_icon}
                        alt="Appointments"
                        className="w-14 h-14"
                    />
                    <div>
                        <p className="text-2xl font-bold text-gray-800">
                            {dashData.appointments}
                        </p>
                        <p className="text-gray-500 font-medium">
                            Appointments
                        </p>
                    </div>
                </div>

                {/* Patients Card */}
                <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <img
                        src={assets.patients_icon}
                        alt="Patients"
                        className="w-14 h-14"
                    />
                    <div>
                        <p className="text-2xl font-bold text-gray-800">
                            {dashData.patients}
                        </p>
                        <p className="text-gray-500 font-medium">
                            Patients
                        </p>
                    </div>
                </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-5 mt-6">

                {/* Header */}
                <div className="flex items-center gap-3 border-b pb-3">
                    <img
                        src={assets.list_icon}
                        alt="List Icon"
                        className="w-8 h-8" />
                    <p className="text-lg font-semibold text-gray-800">
                        Latest Bookings
                    </p>
                </div>

                <div className="pt-4 border border-t-0 rounded-b-xl bg-white">

                    {dashData.latestAppointments.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between px-5 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
                        >
                            {/* Doctor Info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.docData.image}
                                    alt=""
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        {item.docData.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {slotDateFormat(item.slotDate)}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div>
                                {
                                    item.cancelled
                                        ?
                                        <p className=' text-red-500 text-xs font-medium'>Cancelled</p>
                                        : item.isCompleted
                                            ? <p className=' text-green-500 text-xs font-medium'>Completed</p>
                                            : <img onClick={() => cancelAppointment(item._id)} src={assets.cancel_icon} className='w-10 h-10 cursor-pointer' alt="" />
                                }
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default AdminHome;