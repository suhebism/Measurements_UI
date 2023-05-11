import React, { useState } from "react";
import { useForm } from "react-hook-form";
import User from "./User";
import Measurements from "./Measurements";
import Remarks from "./Remarks";
import Gender from "./Gender";
// import './Form.css';
const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["Select Gender","user", "Measurements", "Remarks"];
  const [formData, setFormData] = useState({
    name:"",
    mobileNo:"",
    length:'',
    shoulder:'',
    chest:"",
    waist:"",
    hip:"",
    notes:''
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
        return <Measurements formData={formData} setFormData={setFormData}/>;
    }else{
      return <Remarks formData={formData} setFormData={setFormData}/>
    }
  };
  // console.log(watch("FirstName"));
  return (
    <div className="main">
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
            // disabled={page === formTitles.length - 1}
            onClick={() => {
              if(page === formTitles.length -1){
                alert('Form Submitted');
                console.log(formData);
                window.location.reload(false);
              }else{
              setPage((curPage) => curPage + 1);
              }
            }}
          >
            {page === formTitles.length -1 ? 'submit' : 'Next'}
          </button>
        </div>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default Form;


{/* <input placeholder="Full Name"{...register("FirstName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>}
        <input placeholder="Mobile No." {...register("LastName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>} */}