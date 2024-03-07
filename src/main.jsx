import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import Inbox from './pages/Inbox';
import Favorites from './pages/Favorites';
import Drafts from './pages/Drafts';
import Spam from './pages/Spam';
import Trash from './pages/Trash';
import SentMail from './pages/SentMail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Inbox />} />
        <Route path="sent-mail" element={<SentMail />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="drafts" element={<Drafts />} />
        <Route path="spam" element={<Spam />} />
        <Route path="trash" element={<Trash />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
