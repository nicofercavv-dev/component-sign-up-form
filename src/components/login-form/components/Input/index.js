import React from 'react'
import Message from '../Message/styled'
import PropTypes from 'prop-types'

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
      <div>
        <input
          id={id}
          type={type}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </div>
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
