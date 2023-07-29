import React, { useEffect } from 'react'
import "../assets/Preloader.css"
import { preLoaderAnim } from '../animations'
const Preloader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
        <div className="texts-container">
            <span>OiDE Compiler</span>
        </div>
    </div>
  )
}

export default Preloader
