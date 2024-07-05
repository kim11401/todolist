import Input from '@/components/common/Input.tsx'
import styled from 'styled-components'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [loginInfoState] = useState({
    id: {
      isError: false,
      value: '',
      errorMessage: ''
    },
    password: {
      isError: false,
      value: '',
      errorMessage: ''
    }
  })

  // const moveSignUp = () => {
  //   navigate('/signup')
  // }

  return (
    <LoginLayout>
      <LoginWrapper>
        <InputWrapper>
          <Title>아이디</Title>
          <Input
            width={400}
            isError={loginInfoState.id.isError}
            errorMessage={loginInfoState.id.errorMessage}
            onChange={(data) => console.log(data)}
            value={loginInfoState.id.value}
          />
        </InputWrapper>
        <InputWrapper>
          <Title>비밀번호</Title>
          <Input
            type={'password'}
            width={400}
            isError={loginInfoState.password.isError}
            errorMessage={loginInfoState.password.errorMessage}
            onChange={(data) => console.log(data)}
            value={loginInfoState.password.value}
          />
        </InputWrapper>
        <InputWrapper>
          <Button>로그인</Button>
          <Line />
          <Link to={'./signup'}>
            <LinkTitle>회원가입</LinkTitle>
          </Link>
        </InputWrapper>
      </LoginWrapper>
    </LoginLayout>
  )
}

export default LoginPage

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: calc(var(--vh, 1dvh) * 100);
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 35vh;
  border-radius: 10px;
  border: 1px solid #000;
`

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`

const Title = styled.span`
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 20px;
`

const Button = styled.button`
  width: 426px;
  height: 65px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #3f3f3f;
  color: white;
`

const Line = styled.div`
  margin-top: 40px;
  margin-bottom: 15px;
  border-bottom: 1px solid #7f7f7f;
  width: 430px;
`
const LinkTitle = styled.span`
  color: #a5a5a5;
  cursor: pointer;
`
