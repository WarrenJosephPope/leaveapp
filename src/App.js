import React,{ useState } from 'react';
import './App.css';
import UserState from './context/UserState';
import UserInput from './components/UserInput';
import UserApp from './components/UserApp';


function App() {
  const [data, setData] = useState()
  const leaveApplication=(data)=>{
    setData(data)
  }

  return (
    <UserState >
      <h1>Leave Application</h1>
     <UserInput onLeave={leaveApplication}/>
     {data && <UserApp />}
    </UserState>
  );
}

export default App;
