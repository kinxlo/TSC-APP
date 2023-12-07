import { Route, Routes } from 'react-router-dom'
import Home from './pages/external-pages/landing-page'
import SignIn from './pages/auth-pages/SignIn'
import SignUp from './pages/auth-pages/SignUp'
import Community from './pages/external-pages/explore-community/Community'
import DefaultLayout from './layout/defaultLayout/DefaultLayout'
import AuthLayout from './layout/AuthLayout'
import FindTalent from './pages/FindTalent/FindTalent'

/**
 *
 *this is place you will all put your routings
 * it has been seperated using comments to indicate
 * 1. auth page
 * 2. external pages
 * 3. dashboard pages
 */

export function App() {
  return (
    <Routes>
      {/* authentication */}
      <Route element={<AuthLayout />}>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>

      {/* external pages */}
      <Route element={<DefaultLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path='/community' element={<Community />} />
        <Route path='/find-talent' element={<FindTalent />} />
      </Route>

      {/* dashboard */}
      {/* <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Route> */}
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  )
}

export default App
