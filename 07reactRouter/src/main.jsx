import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout';




import { createBrowserRouter, RouterProvider } from 'react-router-dom'


   const router = createBrowserRouter([
   {
     path: '/',
    element: <Layout/>,
     children: [
       {
       path: "",
        element: <Home />
       },
       {
         path: "about",
         element: <About />
       },
       {
         path: "contact",
         element: <Contact />
       }
     ]
   }
 ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)





