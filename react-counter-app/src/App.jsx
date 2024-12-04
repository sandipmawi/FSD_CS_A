// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';




function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='/contact' element={<h1>Contact Page</h1>} />
      <Route path='/services' element={<h1>Services Page</h1>} />
      
    </Routes>
   </div>
      
  )
}

export default App
