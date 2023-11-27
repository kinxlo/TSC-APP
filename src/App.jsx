import { Route, Routes } from 'react-router-dom'
import { DashboardHome, FinTalent, Login } from './pages'
import { DashboardLayout } from './layout'
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


export function App() {
  return (
    <Routes>
      {/* authentication */}
      <Route path={`/login`} element={<Login />} />
      <Route element={<AuthLayout/>}>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Route>

      {/* external pages */}
      <Route index element={<FinTalent />} />

      {/* dashboard */}
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='home' index element={<DashboardHome />} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Route>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  )
}

export default App
