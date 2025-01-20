import { lazy, Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Socket1 from './Socket'
// import { socketConnect } from './utils/API.services'
import { GlobalContextProvider } from './context/GlobalContext'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import CircularSize from './components/spinner/Spinner'
import Intro from './pages/Intro/Intro'
// import Profile from './pages/profile/Profile'
// import Register from './pages/register/Register'
// import { Toaster } from "@/components/ui/toaster"
const Home = lazy(() => import('./pages/Home/Home'))

const Profile = lazy(() => import('./pages/profile/Profile' ))
const Login = lazy(() => import('./pages/Login/Login'));

const Register = lazy(() => import('./pages/register/Register'));
function App() {
useEffect(()=>{},[])
  return (
<>
<GlobalContextProvider>
  <Suspense fallback={<CircularSize/>}>
<Routes>
  
  <Route path='/' element={<Navbar/>}>
  
  <Route path="/home" element={<Home/>} ></Route>
  
  <Route path="/login" element={<Login/>} ></Route>
  <Route path="/sign-up" element={<Register/>} ></Route>
  
  <Route path="/profile" element={<Profile/>} ></Route>
  
  </Route>
</Routes>
  </Suspense>
</GlobalContextProvider>

  {/* <Toaster /> */}
</>
  )
}

export default App
