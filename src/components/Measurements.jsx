import React from 'react';
import { useForm } from "react-hook-form";


const Measurements = ({formData,setFormData}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type='number' className="border-solid border-2 border-sky-600 outline-none p-1 m-2" placeholder='Length' value={formData.length} onChange={(event) => setFormData({...formData, length: event.target.value })} />
      <input type='number' className="border-solid border-2 border-sky-600 outline-none p-1 m-2" placeholder='Shoulder' value={formData.shoulder} onChange={(event) => setFormData({...formData, shoulder: event.target.value })}/>
      <input type='number' className="border-solid border-2 border-sky-600 outline-none p-1 m-2" placeholder='Chest' value={formData.chest}onChange={(event) => setFormData({...formData, chest: event.target.value })}/>
      <input type='number' className="border-solid border-2 border-sky-600 outline-none p-1 m-2" placeholder='Waist' value={formData.waist}onChange={(event) => setFormData({...formData, waist: event.target.value })} />
      <input type='number' className="border-solid border-2 border-sky-600 outline-none p-1 m-2" placeholder='Hip' value={formData.hip} onChange={(event) => setFormData({...formData, hip: event.target.value })}/>
      
    </form>
  )
}

export default Measurements