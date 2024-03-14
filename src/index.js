import React, { useEffect } from 'react'
import Navigation from './Navigation'
import { LocationPermission } from './helper/getPermissionLocation'

const App = () => {

  useEffect(() => {
    LocationPermission(Navigation)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("error ===>", error)
      })
  }, [])
  return (
    <Navigation />
  )
}

export default App