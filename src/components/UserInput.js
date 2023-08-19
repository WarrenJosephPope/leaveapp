import React, { useContext, useState } from "react";
import UserContext from "../context/user-context";

const UserInput = (props) => {

  const {dispatch} = useContext(UserContext)

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  
  const submitHandler = (e) => {

    e.preventDefault();
    if (data.name && data.phone && data.email) {
      dispatch({ type: "ADD_USER", payload: data });
      setData({
        name: "",
        phone: "",
        email: "",
      });
    }
    props.onLeave(data)
  };
    
  const changehandler = (e, field) => {
    const value = e.target.value;
    setData((prevData)=>({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => {
              changehandler(e, "name");
            }}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone no.</label>
          <input
            type="number"
            id="phone"
            onChange={(e) => {
              changehandler(e, "phone");
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              changehandler(e, "email");
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default UserInput;
