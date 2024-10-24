import "./App.css"
import Navbar from "./Components/navbar"
import Home from "./Pages/home"
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import Dashboard from './Pages/dashboard'
import Mygrants from "./Pages/myGrants"
import Apptracker from "./Pages/appTracker"
import Discover from "./Pages/discover"
import SelectGrant from "./Pages/appTracker/selectGrant"
import LOI from "./Pages/appTracker/LOI"
import ProposalDevelopment from "./Pages/appTracker/proposalDevelopment"
import FinalApplication from "./Pages/appTracker/finalApplication"
import PostSubmission from "./Pages/appTracker/postSubmission"
import { HorizontalNonLinearStepper } from "./Components/stepper"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />
  },
  {
  path: '/login',
  element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/myGrants',
    element: <Mygrants />
  },
  {
    path: '/appTracker',
    element: <Apptracker />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/appTracker/:stepId',
    element: <HorizontalNonLinearStepper />
  },
  {
    path: '*',
    element: <Home />
  }
  // {
  //   path: '/appTracker/0',
  //   element: <SelectGrant />
  // },
  // {
  //   path: '/appTracker/1',
  //   element: <LOI />
  // },
  // {
  //   path: '/appTracker/2',
  //   element: <ProposalDevelopment />
  // },
  // {
  //   path: '/appTracker/3',
  //   element: <FinalApplication />
  // },
  // {
  //   path: '/appTracker/4',
  //   element: <PostSubmission />
  // },
]);

function App(){


  return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App