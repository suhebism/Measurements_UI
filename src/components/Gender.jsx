import React,{useState} from "react";
import female from "../assets/female.png";
import male from "../assets/male.png";

const User = () => {
    const [gender, setGender] = useState('')
    
  return (
    <div>
        <h1>{gender}</h1>
      <div
        className="gender"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={female} style={{ width: "100px" }} alt="" />
          <input type="radio" name='gender' value='Female' onChange={(e)=>setGender(e.target.value)}/>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={male} style={{ width: "105px" }} alt="" />
          <input type="radio" name='gender' value='Male' onChange={(e)=>setGender(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default User;
