import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AddAppointments = () => {

  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className="w-full max-w-6xl m-5">

      {/* Heading */}
      <p className="mb-4 text-lg font-semibold text-gray-800">
        All Appointments
      </p>

      {/* Table Container */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {
          appointments.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 items-center px-4 sm:px-6 py-4 border-b text-sm text-gray-700 hover:bg-gray-50"
            >
              {/* Serial Number */}
              <p className="font-medium text-gray-800">
                {index + 1}
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.userData.image}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <p className="font-medium">{item.userData.name}</p>
              </div>

              {/* Age */}
              <p>
                <span className="font-medium md:hidden">Age: </span>
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date & Time */}
              <p>
                <span className="font-medium md:hidden">Date: </span>
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              {/* Doctor */}
              <p>
                <span className="font-medium md:hidden">Doctor: </span>
                {item.docData.name}
              </p>

              {/* Fees */}
              <p className="text-green-600 font-medium">
                <span className="font-medium md:hidden text-gray-700">Fees: </span>
                {currency}{item.amount}
              </p>

              {/* Actions */}
              {
                item.cancelled
                  ?
                  <p className=' text-red-500 text-xs font-medium'>Cancelled</p>
                  : item.isCompleted
                    ? <p className=' text-green-500 text-xs font-medium'>Completed</p>
                    : <img onClick={() => cancelAppointment(item._id)} src={assets.cancel_icon} className='w-10 h-10 cursor-pointer' alt="" />
              }

            </div>
          ))}

      </div>
    </div>
  )
}

export default AddAppointments