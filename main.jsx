import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Game from '../components/Game/Game.jsx'
import ContactUs from '../components/Contactus/Contactus.jsx'
import IndividualGame from '../components/Gameall/Gameall.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
     <Route path='game' element={<Game/>}/>
     <Route path='contactus'element={<ContactUs/>}/>
     <Route path='game/:id'element={<IndividualGame/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
