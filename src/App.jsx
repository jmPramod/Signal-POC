import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Socket1 from './Socket'
import { socketConnect } from './utils/API.services'
import { GlobalContextProvider } from './context/GlobalContext'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
<>
<GlobalContextProvider>
  <Suspense fallback={"Loading...."}>
<Routes>
  <Route path='/' element={<Navbar/>}>
  <Route path="/home" element={<Home/>} ></Route>
  
  <Route path="/login" element={<Home/>} ></Route>
  </Route>
</Routes>
  </Suspense>
</GlobalContextProvider>

</>
  )
}

export default App
// function App() {
//   const [count, setCount] = useState(0)
// useEffect(()=>{
//   socketConnect()
// },[])
//   return (
// <>
// <button onClick={()=>disconnectSocket}>click</button>
// </>
//   )
// }