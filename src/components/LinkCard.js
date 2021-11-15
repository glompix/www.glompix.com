import React from 'react'

const containerStyle = { textAlign: 'center', margin: '30 auto' }

// markup
export default function LinkCard({ description, title, url }) {
  return (
    <div style={containerStyle}>
      <h3>{title || 'missing title'}</h3>
      <p>{description || 'missing description'}</p>
    </div>
  )
}
