import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Charts_chart from './Components/Charts_chart'
import Profile from './Components/Profile'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp/>
  </StrictMode>,
)
