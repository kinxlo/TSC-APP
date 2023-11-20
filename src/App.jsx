import { Route, Routes } from 'react-router-dom'
import { DashboardHome, FinTalent, Login, Community } from './pages'
import { DashboardLayout } from './layout'

export function App() {
  return (
    <Routes>
      {/* authentication */}
      <Route path={`/login`} element={<Login />} />

      {/* external pages */}
      <Route index element={<FinTalent />} />
      <Route path='/community' element={<Community />} />

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
