import React from 'react'
import Count from './count'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center bg-blue-900 border rounded-xl'>
        <h1 className='font-bold text-2xl justify-center m-[20px] p-[20px]'>Lets play with buttons</h1>
        <p className='text-xl m-[15px] p-[15px]'>Make the numbers change with 2</p>
        <Count />
      </div>
    </>
  )
}

export default App