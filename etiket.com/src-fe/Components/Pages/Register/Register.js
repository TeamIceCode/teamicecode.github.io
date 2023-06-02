import React from 'react'
import { FormBox, FormInput, TextStyle, FormContainer } from '../../Forms/FormStyle'
// import { SubmitButton } from '../../Buttons/ButtonStyles'
import { ButtonWrapper, MainHeading, Container, Button } from '../../../globalStyles'
import { RegisterSection } from './RegisterStyles'


const Register = () => {
  return (
    <RegisterSection>
      <Container>
        <MainHeading>REGISTER</MainHeading>
        <FormContainer>
          <FormBox>
              <TextStyle>
                  <label htmlFor="firstName">First Name</label>
                  <FormInput type='text' name='fisrtName' />
                  <label htmlFor="lastName">Last Name</label>
                  <FormInput type='text' name='lastName' />
                  <label htmlFor="email">Email</label>
                  <FormInput type='email' name='email' />
                  <label htmlFor="password">Password</label>
                  <FormInput type='password' name='password' />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <FormInput type='password' name='confirmPassword' />
                  <ButtonWrapper>
                    <Button>Register</Button>
                  </ButtonWrapper>
              </TextStyle>
          </FormBox>
        </FormContainer>
      </Container>
    </RegisterSection>
  )
}

export default Register