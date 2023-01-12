import React from 'react'
import Message from '../Message/styled'
import InputContainer from './styled'
import PropTypes from 'prop-types'
import svg from './icon-error.svg'

const Input = ({
  id,
  type,
  onChange,
  onBlur,
  value,
  placeholder,
  error
}) => {
  return (
    <>
      <InputContainer error={error}>
        <input
          id={id}
          type={type}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <img src={svg} />
      </InputContainer>
      {error && <Message>{error}</Message>}
    </>
  )
}

export default Input

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string
}
