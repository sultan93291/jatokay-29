import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import { Toaster } from 'sonner';
import router from './routes/Router';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position='top-center' className='bg-[#3f97ff]' duration={1000} toastOptions={{
      style: {
        backgroundColor: "#3f97ff",
        color: "#ffffff",
        borderRadius: "8px"
      }
    }} />
  </React.StrictMode>
)