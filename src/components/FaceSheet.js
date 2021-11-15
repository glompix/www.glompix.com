import React from 'react'
import '../css/animation.css'
import icon from '../images/icon.png'

const imageStyle = {
  width: 366,
  height: 399,
  display: 'block',
  margin: '0 auto 30 0',
  position: 'relative',
  animation: 'bounce 3s cubic-bezier(0.37, 0, 0.63, 1) infinite',
}
const containerStyle = { margin: '0 auto', textAlign: 'center' }

// markup
export default function FaceSheet() {
  return (
    <div style={containerStyle}>
      <img src={icon} style={imageStyle} alt="Samantha Branham's Avatar" />
      <h1>Samantha Branham (@glompix)</h1>
    </div>
  )
}
