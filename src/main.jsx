import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Search from './pages/Search.jsx';
import Details from './pages/Details.jsx';


 let router = createBrowserRouter([
  { path: "/", element: <App><Home /></App> },
  { path: "/home", element: <App><Home/></App> },
  { path: "/search", element: <App><Search /></App> },
  { path: "/fav", element: <App><Wishlist /></App> },
  { path: "/detail/:id", element: <App><Details /></App> },
  { path: "*", element: <App><Home /></App> }, // Catch-all route
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
