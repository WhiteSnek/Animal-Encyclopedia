import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collections from './pages/Collections.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Detail from './pages/Detail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App />}>
      <Route path='' element= {<Home />} />
      <Route path='/collections' element= {<Collections />} />
      <Route path='/about' element= {<About />} />
      <Route path='/blog' element= {<Blog />} />
      <Route path='/details/:id' element={<Detail />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
