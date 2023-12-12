import React, { useState } from 'react'

const App = () => {

 const [length , setLength] = useState(8)
 const [numberAllowed,setNumberALlowed] = useState(false)
 const [charAllowed , setCharAllowed] = useState(false)
 const [password,setPassword] = useState('')



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500'>
       <h1 className="text-white text-center my-3">Password Generator 🔐</h1>
       <div className="flex shadow rounded-lg overflow-hidden mb-4">
         
         <input 
           type="text" 
           value={password} 
           className='outline-none w-full py-1 px-3'
           placeholder='Password' 
           readOnly 
           //ref={passwordRef}
           />

         <button
           className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
          >copy</button>

       </div>

       <div className="flex text-sm gap-x-2">
         <div className="flex items-center gap-x-1">
           <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
           />
           <label htmlFor="length"> Length : {length}</label>
         </div>
       </div>
    </div>
  )
}

export default App
