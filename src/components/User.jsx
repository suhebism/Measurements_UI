import React from "react";

const User = ({ formData, setFormData }) => {
  return (
    <>
    <div>
      <h1>Customer Info</h1>
      <input
        className="border-solid border-2 border-sky-600 outline-none p-1 m-2"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />

      <input
        className="border-solid border-2 border-sky-600 outline-none p-1 m-2"
        type="number"
        placeholder="Mobile No"
        value={formData.mobileNo}
        onChange={(event) =>
          setFormData({ ...formData, mobileNo: event.target.value })
        }
      />
    </div>
    </>
  );
};

export default User;
