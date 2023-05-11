import React,{useState} from "react";
import female from "../assets/female.png";
import male from "../assets/male.png";

const User = () => {
    const [gender, setGender] = useState('')
    
  return (
       
      <div className="flex justify-between align-center">
        <div className="flex-col justify-between align-center" >
          <img src={female} style={{ width: "100px" }} alt="" />
          <input className="ml-3.5" type="radio" name='gender' value='Female' onChange={(e)=>setGender(e.target.value)}/>
        </div>
        <div className="flex-col justify-between align-center">
          <img src={male} style={{ width: "105px" }} alt="" />
          <input type="radio" name='gender' value='Male' onChange={(e)=>setGender(e.target.value)} />
        </div>
      </div>
    
  );
};

export default User;
