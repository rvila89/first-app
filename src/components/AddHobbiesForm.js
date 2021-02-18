import React from 'react';
import useForm from '../hooks/useForm';
import { validateForm } from '../utils/validateForm';

const AddHobbiesForm = ({handleHobbies}) => {
  
  const { handleSubmit, handleChange, errors, values } = useForm(handleHobbies, validateForm)
  
  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <h3>Añadir Hobbie</h3>
      <input type="text" id="hobbie" onChange={handleChange} value={values.name} name="name"/>
      {errors.name && <p className="text-danger">Añada un hobbie</p>}
      <button className="btn btn-primary ml-2" onClick={handleSubmit}>Añadir</button>
    </form>
  )
}

export default AddHobbiesForm;