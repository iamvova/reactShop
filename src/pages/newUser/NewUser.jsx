import { useState } from "react";
import { addUsers } from "../../redux/apiCalls";
import "./newUser.css";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"


export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const defaultImg = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  const handleChange = (e)=>{
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  const handleClick = (e)=>{
    e.preventDefault()
    addUsers({...inputs, img: defaultImg}, dispatch)
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input name="username" type="text" placeholder="john" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input name="email" type="email" placeholder="john@gmail.com" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input name="password" type="password" placeholder="password" onChange={handleChange} required />
        </div>
        <div className="newUserItem">
          <label>IsAdmin</label>
          <select name="isAdmin" onChange={handleChange} >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <Link to="/users"><button className="newUserButton" onClick={handleClick} >Create</button></Link>
      </form>
    </div>
  );
}
