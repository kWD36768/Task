import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Investorsdashboard from './pages/Investorsdashboard'
import Enterpreniorsdashboard from './pages/Enterpreniorsdashboard'
import Layout from './layout/Layout'
import Investrorsprofile from './pages/Investrorsprofile'
import Enterprniorsprofile from './pages/Enterprniorsprofile'
// import App from './App.jsx'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   <Route path='/dashboard' element={<Layout/>}>
    <Route path='invester' element={<Investorsdashboard/>}/>
    <Route path='invester/profile/:id' element={<Investrorsprofile/>}/>
    <Route path='enterprenior' element={<Enterpreniorsdashboard/>}/>
    <Route path='enterprenior/profile/:id' element={<Enterprniorsprofile/>}/>
    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </StrictMode>,
)
