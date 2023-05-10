import React, { useState } from 'react'
import driverContext from './driverContext'

const DriversData = (props) => {
  
  const [arr, setArr] = useState([])

  return (
    <driverContext.Provider value={{
      arr, setArr
    }} >
      {props.children}
    </driverContext.Provider>
  )
}

export default DriversData;
