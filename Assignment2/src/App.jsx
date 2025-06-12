import { useState } from 'react'
import './App.css'

function App() {
  const [loggedStatus, setloggedStatus] = useState(false)

  return (
    <>
      <div className="h-[70px] w-full m-[5px] p-[10px]">
        {loggedStatus ? (
          <div>
            <button onClick={() => setloggedStatus(false)} className=" text-xl h-[50px] w-[80px] bg-blue-500">Log Out</button>
            <p className="text-3xl font-bold text-cyanx-900 mt-10 p-5">You have logged in, You can continue</p>
            {/* I think we can even pass a function for a better UI  like
            <Login /> 
              */}
          </div>
        ) : (
          <div>
            <button onClick={() => setloggedStatus(true)} className=" text-xl h-[50px] w-[80px] bg-blue-500">Log In</button>
            <p className="text-3xl font-bold text-red-900 mt-10 p-5">Please Login to continue</p>

          </div>
        )}
      </div>
    </>
  )
}

export default App
