import React, { useState } from "react";
import { useForm } from "react-hook-form";
import User from "./User";
import Measurements from "./Measurements";
import Remarks from "./Remarks";
import Gender from "./Gender";
const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["Select Gender","user", "Measurements", "Remarks"];
  const [formData, setFormData] = useState({
    name:"",
    mobileNo:"",
    chest:"",
    waist:"",
    hip:"",
    shoulder:"",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const PageDisplay = () => {
    if(page === 0){
        return <Gender formData={formData} setFormData={setFormData}/>;
    } else if(page === 1){
        return <User formData={formData} setFormData={setFormData}/>;
    } else if(page === 2){
        return <Measurements/>;
    }else{
      return <Remarks/>
    }
  };
  // console.log(watch("FirstName"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{formTitles[page]}</h1>
        <div>{PageDisplay()}</div>
        
        <div>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((curPage) => curPage - 1);
            }}
          >
            Previous
          </button>
          <button
            disabled={page === formTitles.length - 1}
            onClick={() => {
              setPage((curPage) => curPage + 1);
            }}
          >
            Next
          </button>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;


{/* <input placeholder="Full Name"{...register("FirstName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>}
        <input placeholder="Mobile No." {...register("LastName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>} */}