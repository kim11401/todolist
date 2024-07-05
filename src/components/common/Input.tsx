import React, { ComponentProps, useCallback, useState } from 'react'
import debounce from '../../util/debounce.ts'
import styled from 'styled-components'

interface InputProps extends ComponentProps<'input'> {
  width: number
  isError: boolean
  errorMessage: string
  onChangeType?: (isHidden: boolean) => void
  onBlur?: () => void
  onChange: (value: string) => void
  value: string
}

const Input = ({
  width,
  isError,
  errorMessage,
  onChange,
  onChangeType,
  onBlur,
  value,
  ...props
}: InputProps) => {
  const [valueState, setValueState] = useState(value || '')
  const [isPassword, setIsPassword] = useState<boolean>(true)
  const MAX_LENGTH = 30
  const printValue = useCallback(
    debounce((data) => onChange(data), 100),
    []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueData = e.target.value
    setValueState(valueData)
    printValue(valueData)
  }

  return (
    <InputWrapper width={width}>
      <InputTag
        id={props.id}
        $isError={isError}
        type={props.type}
        placeholder={props.placeholder}
        value={valueState}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        onBlur={() => onBlur && onBlur()}
      />
      {isError && <span className={'error-message'}>{errorMessage}</span>}
      {(props.id === 'password' || props.id === 'passwordCheck') && (
        <Eyes
          src={'/asset/svg/eyes.svg'}
          onClick={() => {
            const newIsPassword = !isPassword
            setIsPassword(newIsPassword)
            onChangeType && onChangeType(newIsPassword)
          }}
        />
      )}
    </InputWrapper>
  )
}
export default Input

const InputWrapper = styled.div<{ width: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => `${props.width}px`};
  height: 65px;
  border: none;
  box-sizing: border-box;
  gap: 2px;
  & .error-message {
    margin-left: 5px;
    color: #bb251e;
  }
`

const InputTag = styled.input<{ $isError: boolean }>`
  width: 100%;
  min-height: 48px;
  border-radius: 6px;
  color: ${(props) => (props.$isError ? '#BB251E' : '#1C1E1E')};
  border: ${(props) =>
    props.$isError ? 'solid 1px #BB251E' : 'solid 1px #E7E9EC'};
  background-color: ${(props) => (props.$isError ? '#FBF6F6' : '#F5F6F7;')};
  padding: 0 12px;
  &:focus {
    outline: ${(props) => (props.$isError ? 'none' : '#1C1E1E')};
  }
`
