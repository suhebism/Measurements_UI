import React from 'react'

const Remarks = ({formData, setFormData}) => {
  return (
    <div>
        <input placeholder='notes' value={formData.notes} onChange={(event) => setFormData({...formData, notes: event.target.value })} />
    </div>
  )
}

export default Remarks