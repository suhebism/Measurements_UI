import React from 'react';
import { useForm } from "react-hook-form";


const Measurements = ({formData,setFormData}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input placeholder='chest' value={formData.chest}/>
      <input placeholder='waist' />
      <input placeholder='Hip' />
      <input placeholder='shoulder' />
    </form>
  )
}

export default Measurements