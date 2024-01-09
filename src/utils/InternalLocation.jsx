import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const InternalLocation = () => {
  const [pageName, setPageName] = useState('/dashboard')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setPageName('Dashboard')
    } else if (location.pathname === '/communities') {
      setPageName('Community')
    } else if (location.pathname === '/job-alert') {
      setPageName('Job Alert')
    } else if (location.pathname === '/projects') {
      setPageName('Projects')
    } else if (location.pathname === '/profile') {
      setPageName('Profile')
    } else if (location.pathname === '/settings') {
      setPageName('Settings')
    }
  }, [location])

  return (
    <div>
      <h4 className='text-white mt-4 mx-5 w-75'>{pageName}</h4>
    </div>
  )
}

export default InternalLocation
