import React from 'react'

const Remarks = ({formData, setFormData}) => {
  return (
    <div>
        <textarea className="border-solid border-2 border-sky-600 outline-none p-1 m-2 w-60 h-60" placeholder='Notes' value={formData.notes} onChange={(event) => setFormData({...formData, notes: event.target.value })} ></textarea>
        <input className='ml-28' type="file" id="myfile" onChange={(event) => setFormData({...formData, file: event.target.value })} />
    </div>
  )
}

export default Remarks