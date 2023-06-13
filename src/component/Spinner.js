import React from 'react'
import './spinner.css'

export const Spinner = () => {
    return (
        <div className="loading-container">
            <div className='loader my-3'></div>
            <h4 style={{ color: "white" }}>Loading...</h4>
        </div>
    )
}


//<span class="loader"></span>