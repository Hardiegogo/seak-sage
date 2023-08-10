import React from 'react'

const Footer:React.FC=()=> {
  return (
    <footer className='bg-bgColor p-4 grid place-items-center sticky bottom-0 w-screen border-t border-t-greyVariant h-[57px]'>
        <h2 className='text-textColor text-md'>Made by <a href="https://github.com/Hardiegogo" className='underline'>Chirag Gupta</a></h2>
    </footer>
  )
}

export default Footer