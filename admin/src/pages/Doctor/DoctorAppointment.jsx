import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointment = () => {

  const { dToken, appointments, getAppointments, currency, cancelAppointment, completeAppointment } = useContext(DoctorContext)

  const { calculateAge, slotDateFormat, currencySymbol } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  return (
    <div className="w-full max-w-6xl m-5">

      <p className="mb-4 text-lg font-semibold text-gray-700">
        All Appointments
      </p>

      <div className="bg-white border rounded-lg text-sm max-h-[80vh] overflow-y-scroll">

        {/* Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-4 py-3 px-6 border-b bg-gray-100 font-medium text-gray-700">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {/* Appointments */}
        {appointments.reverse().map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 
      md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] 
      gap-4 items-center text-gray-600
      py-4 px-4 sm:px-6 border-b hover:bg-gray-50">

            {/* Serial Number */}
            <p className="hidden sm:block font-medium text-gray-800">
              {index + 1}
            </p>

            {/* Patient Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.userData.image}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-medium text-gray-800">
                {item.userData.name}
              </p>
            </div>

            {/* Payment */}
            <p className="text-xs w-fit border border-blue-500 text-blue-500 px-3 py-1 rounded-full">
              {item.payment ? "Online" : "Cash"}
            </p>

            {/* Age */}
            <p>
              <span className="sm:hidden font-medium">Age: </span>
              {calculateAge(item.userData.dob)}
            </p>

            {/* Date & Time */}
            <p className="text-sm">
              <span className="sm:hidden font-medium">Date: </span>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            {/* Fees */}
            <p className="text-green-600 font-semibold">
              <span className="sm:hidden font-medium">Fees: </span>
              {currency}{item.amount}
            </p>

            {item.cancelled ? (
              <p className="text-red-500 text-sm font-medium">
                Cancelled
              </p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-sm font-medium">
                Completed
              </p>
            ) : (
              <div className="flex gap-2">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="w-8 cursor-pointer"
                  src={assets.cancel_icon}
                  alt="Cancel"
                />

                <img
                  onClick={() => completeAppointment(item._id)}
                  className="w-8 cursor-pointer"
                  src={assets.tick_icon}
                  alt="Complete"
                />
              </div>
            )}

          </div>
        ))}

      </div>
    </div >
  )
}

export default DoctorAppointment
