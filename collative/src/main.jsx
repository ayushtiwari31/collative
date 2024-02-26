import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Page2 from './Pages/Page2.jsx'
import Page3 from './Pages/Page3.jsx'
import Page4 from './Pages/Page4.jsx'

import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'


const router=createBrowserRouter([
  {
     path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"/offerings",
        element:<Page2 />,
      },
      {
        path:'/about',
        element:<Page3/>,
      },
      {
        path:'/contact',
        element:<Page4/>
      },

    ]
    
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Page2/>
    <Page3/> */}
    {/* <Page4/> */}
   
      <RouterProvider router={router}/>
 
    
  </React.StrictMode>,
)
