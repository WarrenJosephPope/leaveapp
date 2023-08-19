import { useState } from 'react'

const UserForm = ({ setData }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        const data = { name, phone, email }
        setData(data)
    }   

    return (
        <form className="flex flex-col items-center justify-start gap-2 w-11/12 max-w-[400px] shadow-gray-600 shadow-lg rounded-lg p-5" onSubmit={handleSubmit}>
            <h1 className="text-center font-semibold text-xl">Leave Application</h1>
            <label className="flex flex-col gap-1 w-full">
                Name:
                <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" placeholder="Enter your name" value={name} onInput={e => setName(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1 w-full">
                Phone:
                <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="tel" placeholder="Enter your phone number" value={phone} onInput={e => setPhone(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1 w-full">
                Email:
                <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="email" placeholder="Enter your email address" value={email} onInput={e => setEmail(e.target.value)} />
            </label>
            <button className="w-full px-5 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:opacity-70 duration-200" type="submit">Send</button>
        </form>
    )
}

export default UserForm