import React from 'react'

export default function Wrapper({children,className}) {
  return (
    <div className={`max-w-5xl lg:max-w-7xl mx-auto py-24 px-8 lg:px-0 ${className}`}>{children}</div>
  )
}