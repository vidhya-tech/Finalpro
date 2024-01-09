import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';



function Yearsection() {
    const [currentYear, setCurrentYear] = useState('');
    useEffect(()=>{
    const year =new Date().getFullYear();
    setCurrentYear(year.toString())
        },[])
  return (
    <div>
      <div className='year-section'>
        <div className='year-container'>
            <p>
                @copy <span id="displayYear">{currentYear}</span> All Rights Reserved By
                <Link to="https://html.design/"></Link>  Free Html Templates
            </p>
          
        </div>
      </div>
    </div>
  )
}

export default Yearsection
