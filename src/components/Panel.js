import React from 'react'

const Panel = ({title, description, status}) => {
  return (
    <div className={`panel ${status}`}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  )
}

export default Panel
