import React, { useState } from "react";
import { useForm } from "react-hook-form";
import User from "./User";
import Measurements from "./Measurements";
import Remarks from "./Remarks";
import Gender from "./Gender";
import logo from '../assets/logo.png'
// import './Form.css';
const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["Select Gender","User", "Measurements", "Remarks"];
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
    <>
    <img className="absolute w-32 top-20" src={logo} alt="" />
    <h1 className="text-black text-2xl absolute top-48 " >{formTitles[page]}</h1>
    <div className="bg-white fixed  w-80 h-96 min-h-96 flex items-center justify-center shadow-2xl" style={{height:'31rem',borderRadius:'10px'}}>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        
        <div className="flex ">{PageDisplay()}</div>
        
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-2 left-4"
            disabled={page === 0}
            onClick={() => {
              setPage((curPage) => curPage - 1);
            }}
          >
            Previous
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-2 right-4" 
            // disabled={page === formTitles.length - 1}
            onClick={() => {
              if(page === formTitles.length -1){
                alert('Form Submitted');
                console.log(formData);
                // window.location.reload(false);
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
    </>
  );
};

export default Form;


{/* <input placeholder="Full Name"{...register("FirstName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>}
        <input placeholder="Mobile No." {...register("LastName", { required: true })}/>
        {errors.LastName && <span>This field is required</span>} */}