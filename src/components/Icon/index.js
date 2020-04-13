import React from 'react'

const Icon = ({ type, style = {} }) => {
  return (
    <svg className="icon svg-icon" style={style} width={style.fontSize} height={style.fontSize} aria-hidden="true">
      <use xlinkHref={`#icon${type}`}></use>
    </svg>
  )
}

export default Icon