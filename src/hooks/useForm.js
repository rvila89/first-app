import { useEffect, useState } from 'react';

const useForm = (handleHobbies, validateForm) => {
  const initiValues = {
    name: ''
  }
  const [values, setValues] = useState(initiValues)
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = event => {
    const name = event.target.value;
    setValues({
      ...values,
      name
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(validateForm(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setValues(initiValues)
      handleHobbies(values.name)
    }
  }, [errors])

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm;