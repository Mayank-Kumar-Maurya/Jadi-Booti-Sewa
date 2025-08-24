import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Layout from './Components/Layout/Layout.jsx'
import AudioRecognition from './Components/AudioRecorganisation/AudioRecognition.jsx'
import About from './Components/About.jsx'
import ImageRecorgnition from './Components/ImageRecorganisation/ImageRecorgnition.jsx'
import ServerContextProvider from './Context/ServerContextProvider.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: 
    <ServerContextProvider>
      <Layout />
    </ServerContextProvider>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/audio",
        element: <AudioRecognition />
      },
      {
        path: "/image",
        element: <ImageRecorgnition />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
