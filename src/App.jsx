import { Route, Routes } from 'react-router-dom'
// import { DashboardHome, Login, Community } from './pages'
import { DashboardLayout } from './layout'
import './App.css'
import Home from './pages/external-pages/landing-page/Home/Home'
import AuthLayout from './layout/AuthLayout'
import SignIn from './pages/auth-pages/SignIn'
import SignUp from './pages/auth-pages/SignUp'
import Community from './pages/external-pages/explore-community/Community'

export function App() {
  return (
    <Routes>
      {/* authentication */}
      <Route element={<AuthLayout />}>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>

      {/* external pages */}
      <Route index element={<Home />} />
      <Route path='/community' element={<Community />} />

      {/* dashboard */}
      <Route path='/dashboard' element={<DashboardLayout />}>
        {/* <Route path='home' index element={<DashboardHome />} /> */}
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Route>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  )
}

export default App
