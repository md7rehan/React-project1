import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-slate-300 flex justify-center p-2 m-1 text-l'>
<p>&copy; rights reserved {new Date().getFullYear()}</p>
    </div>
    </>
  )
}

export default Footer