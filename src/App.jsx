import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import HomeWrap from './wrappers/HomeWrap.jsx'
import recipesLoader from './loaders/recipesLoader.js'
import RecipeDetails from './pages/RecipeDetails.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <HomeWrap />,
      children: [
        {
          path: 'login',        //no need to write /login because it is already nested under /
          element: <Login />
        },
        {
          path: 'register',     //no need to write /register because it is already nested under /
          element: <Register />
        },
        {
          path: '',             //no need to write / because it is already nested under / and it is the default path for this route
          element: <Home />
        }
      ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: recipesLoader,
    hydrateFallbackElement: <p>Loading recipes...</p>
  },
  {
    path: '/recipes/:id',
    element: <RecipeDetails />
  }
]);

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App;