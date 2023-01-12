import React from 'react'
import FormInputs from './form'
import { Container } from './styled'

const FormContainer = () => {
  return (
        <Container>
            <button><b>Try it free 7 days</b> then $20/mo. thereafter</button>
            <FormInputs />
        </Container>
  )
}

export default FormContainer
