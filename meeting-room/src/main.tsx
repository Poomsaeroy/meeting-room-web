import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/root'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
