import React from 'react'
import { FormContainer, FormBox, TextStyle, FormInput } from '../../Forms/FormStyle'
import { Button, ButtonWrapper, Container, MainHeading } from '../../../globalStyles'
import { LoginSection } from './LoginStyles'

const Login = () => {
  return (
    <LoginSection>
      <Container>
        <FormContainer>
          <MainHeading>Login</MainHeading>
            <FormBox>
              <TextStyle>
                  <label htmlFor="email">Email</label>
                  <FormInput type='email' name='email' />
                  <label htmlFor="password">Password</label>
                  <FormInput type='password' name='password' />
                  <ButtonWrapper>
                    <Button>Sign In</Button>
                  </ButtonWrapper>
              </TextStyle>
            </FormBox>
        </FormContainer>
      </Container>
    </LoginSection>
  )
}

export default Login