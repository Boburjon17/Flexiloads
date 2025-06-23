import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className='header-container'>
        <header className="header">
            <div className="header-img">
                <img src="public/images/h-img.jpg" alt="" />
            </div>
            <div className="header-text">
                <h1>Delivering Any Possibilities With One Cargo at a Time</h1>
                <div className="icons">
                    <div className="icon">
                        <i className="fa-solid fa-box"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-boxes-packing"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-ship"></i>
                        </div>

                        <div className="icon">
                    <i className="fa-solid fa-plane-arrival"></i>
                    </div>
                </div>
                <div className="header-shipment">
                    <h2>Calculate your shipment</h2>
                    <div className="header-shipment-input">

                      <div className="input-left">
                          <input type="text" placeholder='From'/>
                       
                        <div className="type">
                            <select name="" id="">
                                <option value="type">type</option>
                            </select>
                        </div>
                           </div>
                        <div className="input-right">
                          <input type="text" placeholder='Destination'/>
                        <input type="number" placeholder='kg' />
                        </div>
                   
                       
                    </div>
                    <button >Calculate </button>
                </div>
                
            </div>
        </header>
    </div>
  )
}

export default Header