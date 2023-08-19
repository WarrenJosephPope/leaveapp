import './App.css';
import { useState } from 'react'
import { UserForm, UserData } from './components'

function App() {
    const [data, setData] = useState()

    return (
        <div className="flex items-center justify-center w-full h-[100vh]">
            <UserForm setData={setData} />
            <UserData data={data} />
        </div>
    );
}

export default App;
