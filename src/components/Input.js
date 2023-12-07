import React from 'react'

function Input(props) {
    const { placeholdertext, style } = props

  return (
    <div>
        <input type="text" placeholder={placeholdertext} className={style.inputs} />
    </div>
  )
}

export default Input