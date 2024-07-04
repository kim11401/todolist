import styled from '@emotion/styled'

const LoginPage = () => {
  return (
    <LoginLayout>
      <LoginWrapper></LoginWrapper>
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
  height: 50%;
`
