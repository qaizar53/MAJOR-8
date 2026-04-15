import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(null)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    //getting current date
    let today = new Date()
    for (let i = 0; i < 7; i++) {

      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //settinf end time of date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      // if (today.getDate() === currentDate.getDate()) {
      //   currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)

      //   currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      // }

      // else {
      //   currentDate.setHours(10)
      //   currentDate.setMinutes(0)
      // }

      if (i === 0) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        )
        currentDate.setMinutes(0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        //add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        //increment current time by 30mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  useEffect(() => {
    if (docSlots.length > 0) {
      const firstValid = docSlots.findIndex(day => day.length > 0);
      if (firstValid !== -1) {
        setSlotIndex(firstValid);
      }
    }
  }, [docSlots])


  return docInfo && (
    <div>
      {/* doctor details */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div className='bg-blue-500 w-full sm:max-w-72 rounded-lg'>
          <img src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0'>
          {/* {docInfo:- name, degree, experience} */}

          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} /> </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p> {docInfo.degree} - {docInfo.speciality} </p>
            <button className='py-0.5 px-2 border text-xs rounded-full'> {docInfo.experience} </button>
          </div>

          {/* doc about */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /> </p>

            <p className='text-sm text-gray-500 max-w-175 mt-1'> {docInfo.about} </p>
          </div>

          <p className='text-gray-500 font-medium mt-4'>Appointment Fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees} </span> </p>

        </div>

      </div>

      {/* booking slots */}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-gray-500 font-semibold'>Booking slots</p>

        <div className='flex items-center gap-4 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-300'}`} >
                <p> {item[0] && daysOfWeek[item[0].dateTime.getDay()]} </p>

                <p> {item[0] && item[0].dateTime.getDate()} </p>
              </div>
            ))}
        </div>

        <div className='flex items-center gap-4 w-full overflow-x-scroll mt-4'>

          {docSlots.length > 0 &&
            slotIndex !== null &&
            docSlots[slotIndex] &&
            docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-blue-500 text-white" : "border border-gray-300"}`}
                key={index}>
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer'>Book an appointment</button>
      </div>

      {/* listed doc */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment