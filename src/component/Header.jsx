import React from 'react'
const Header = (props) => {
  return (
    <header className='h-20 z-10 flex items-center justify-center shadow-sm bg-white'>
     <h1 className='text-3xl font-bold'>{props.pageHeader}</h1>
    </header>
  )
}
export default Header