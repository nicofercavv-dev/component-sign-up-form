import React from 'react'
import Greeting from '../components/greeting'
import FormContainer from '../components/login-form'
import Page from './styled'

const Main = () => {
  return (
        <Page>
            <Greeting />
            <FormContainer />
        </Page>
  )
}
export default Main
