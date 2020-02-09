import React, { useState } from 'react'

export default function Button(props) {
  const [text, setText] = useState('')
  function handleClick() {
    setText('PROCEED TO CHECKOUT')
  }

  return (
    <button data-testid="button" onClick={handleClick}>
      {text || props.text}
    </button>
  )
}
