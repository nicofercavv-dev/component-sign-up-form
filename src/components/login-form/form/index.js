import React, { useState } from 'react'
import Forms from './styled'
import Input from '../components/Input'
import useForm from '../../../hooks/useForm'

const registers = []

const FormInputs = () => {
  const firstName = useForm('firstName')
  const lastName = useForm('lastName')
  const email = useForm('email')
  const password = useForm('password')
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  // const getFormData = (e) => {
  //   const { name, value } = e.target
  //   setData({
  //     ...data,
  //     [name]: value
  //   })
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    registers.push(data)
    console.log(registers)
    setData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  return (
    <Forms onSubmit={handleSubmit}>
      <Input
        id={'firstName'}
        type={'text'}
        placeholder={'First Name'}
        {...firstName}
      />
      <Input
        id={'lastName'}
        type={'text'}
        placeholder={'Last Name'}
        {...lastName}
      />
      <Input
        id={'email'}
        type={'email'}
        placeholder={'Email'}
        {...email}
      />
      {console.log(email)}
      <Input
        id={'password'}
        type={'password'}
        placeholder={'Password'}
        {...password}
      />
      <button
        className="submit"
        onClick={() => {
          console.log('Enviado')
        }}
      >
        <b>CLAIM YOUR FREE TRIAL</b>
      </button>
      <p>
        By clicking the button, you are agreeing to our
        <a href="https://www.github.com/nicofercavv-dev" target={'_blank'} rel="noreferrer">
          <b> Terms and Services</b>
        </a>
      </p>
    </Forms>
  )
}

export default FormInputs
