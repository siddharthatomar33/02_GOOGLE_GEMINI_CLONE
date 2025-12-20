import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can Ihelp you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful palce to see on an upcoming travel trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Main
