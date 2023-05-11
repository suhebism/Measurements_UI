import React from 'react';
import { useForm } from "react-hook-form";


const Measurements = ({formData,setFormData}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input placeholder='length' value={formData.length} onChange={(event) => setFormData({...formData, length: event.target.value })} />
      <input placeholder='shoulder' value={formData.shoulder} onChange={(event) => setFormData({...formData, shoulder: event.target.value })}/>
      <input placeholder='chest' value={formData.chest}onChange={(event) => setFormData({...formData, chest: event.target.value })}/>
      <input placeholder='waist' value={formData.waist}onChange={(event) => setFormData({...formData, waist: event.target.value })} />
      <input placeholder='hip' value={formData.hip} onChange={(event) => setFormData({...formData, hip: event.target.value })}/>
      
    </form>
  )
}

export default Measurements