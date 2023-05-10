import React from "react";

const User = ({formData, setFormData}) => {
  return (
    <div>
      <input type="text" placeholder="Name" value={formData.name} 
      onChange={(event) => setFormData({...formData, name: event.target.value })}/>
      
      <input type="number" placeholder="Mobile No" value={formData.mobileNo} 
      onChange={(event) => setFormData({...formData, mobileNo: event.target.value })}/>
    </div>
  );
};

export default User;
