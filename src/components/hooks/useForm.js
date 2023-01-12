import { useState } from 'react'

const types = {
  firstName: {
    regex: /^[a-zA-Z].$/gm,
    message: 'First Name cannot be empty'
  },
  lastName: {
    regex: /^[a-zA-Z].$/gm,
    message: 'Last Name cannot be empty'
  },
  email: {
    regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    message: 'Looks like this is not an email'
  },
  password: {
    regex: /^[a-zA-Z0-9#?!@$%^&*-]{1,}$/gm,
    message: 'Password cannot be empty'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate (value) {
    if (types[type].regex && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange ({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  function onBlur ({ target }) {
    validate(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur
  }
}

export default useForm
