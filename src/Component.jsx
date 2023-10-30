import React from 'react'
import { useState } from 'react'

export default function Component() {

  const [text, setText] = useState()
  const [updated, setUpdated] = useState()

  const textOnChange = (event) => {
    setText(event.target.value)
  }

  const buttonOnClick = () => {
    setUpdated(text)
  }
  

  return (
    <div>
      <div className='flexcontainer-input-button'>
      <input type="text" className='input-style' value={text} onChange={textOnChange} />
      <button class="button-style" onClick={buttonOnClick}>Update</button>
      </div>
      <h5>OnChange Effect</h5>
      <p><small>Inputted Text in real time: <p className='output-text'>{text}</p></small></p>
      <h5>OnClick Effect</h5>
      <p><small>Text updated when clicking the button : <p className='output-text'>{updated}</p></small></p>
    </div>
  )
}
