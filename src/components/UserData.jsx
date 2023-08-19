import { useState, useEffect } from 'react'

const UserData = ({ data }) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(data ? true : false)
  }, [data])

  return (
    <div className={`${showModal ? '' : 'opacity-0 pointer-events-none'} duration-200 flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 w-full h-[100vh]`}>
      { data && 
        (
        <div className="relative w-11/12 max-h-[90vh] overflow-y-auto max-w-[500px] p-5 bg-white rounded-md">
          <p>{ data.name },</p>
          <p>{ `${new Date().toLocaleDateString()}` },</p><br />
          <p>Sir/Madam,</p><br />
          <p>I am writing to formally request a medical leave due to illness. Unfortunately, I have fallen ill and am unable to perform my duties effectively. I have consulted a doctor who advised me to take [number of days] days off to recover and regain my health.</p><br />
          <p>During my absence, I can be reached at my personal contact details.</p>
          <p>- Phone: { data.phone }</p>
          <p>- Email: { data.email }</p><br />
          <p>I apologize for any inconvenience my leave may cause and appreciate your understanding. I am committed to returning to work in good health and resuming my duties promptly.</p><br />
          <p>Thank you for considering my leave request. I will keep you updated on my health status and any changes to my return date.</p><br />
          <p>Sincerely,</p>
          <p>{ data.name },</p>
          <p>{ data.email }.</p>
        </div>
        ) 
      }
      <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 cursor-pointer duration-200 hover:bg-red-400 w-[30px] h-[30px] flex items-center justify-center bg-red-600 text-white rounded-full font-bold">X</button>
    </div>
  )
}

export default UserData