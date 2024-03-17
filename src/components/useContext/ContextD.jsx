import React, { useContext } from 'react'
import { SuperHeroName, SuperHeroNameNew } from './ContextA'

const ContextD = () => {

    const SuperHeroOne = useContext(SuperHeroName)
    const SuperHeroTwo = useContext(SuperHeroNameNew)
  return (
    <div>
        <p>{SuperHeroOne}</p>
        <p>{SuperHeroTwo}</p>
    </div>
  )
}

export default ContextD