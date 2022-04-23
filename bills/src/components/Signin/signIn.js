import React from 'react'
import { Container, FormContent, FormLabel, FormWrap, Icon, Form, H1, FormInput,FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
       <FormWrap>
           <Icon to="/">
               BillS
           </Icon>
           <FormContent>
               <Form action="#">
                   <H1>Sign in to your account</H1>
                   <FormLabel htmlFor='for'>Email</FormLabel>
                   <FormInput type='email' required />
                   <FormLabel htmlFor='for'>Password</FormLabel>
                   <FormInput type='password' required />
                   <FormButton type='submit'>Continue</FormButton>
                   <Text>Forgot Password</Text>
               </Form>
           </FormContent>
       </FormWrap>
    </Container>
    </>
  )
}

export default SignIn