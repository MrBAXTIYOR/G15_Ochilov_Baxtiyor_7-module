import React from 'react'
import Header from '../components/Header'

const Mainlayout = ({children}) => {
  return (
   <div className='p-4 max-w-full'>
    <Header/>
    {children}
   </div>
  )
}

export default Mainlayout
