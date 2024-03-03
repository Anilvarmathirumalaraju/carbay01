import React from 'react'
import './howcarbayworks.css'
import step1 from '../../assets/serviceimages/doorstep.png';
import step2 from '../../assets/serviceimages/bookservice.png'
import step3 from '../../assets/serviceimages/via-sms-email.png'
import step4 from '../../assets/serviceimages/free-dropoff.png'

const Howcarbayworks = () => {
  return (
   <>
      <div className='how-carbay-works-main'>
            <div className='step1'>
                <div className='no-box'>1</div>
                <div className='how-text'>
                    <h1>Select the perfect car service</h1>
                    <p>From Carbay broad portfolio of carservices</p>
                </div>
                <div className='how-img-con'>
                    <img src={step2} alt='howimg'/>
                </div>
            </div>
            <div className='step1'>
                <div className='no-box'>2</div>
                <div className='how-text'>
                    <h1>Schedule Free Doorstep Pick-up</h1>
                    <p>we offer free pick up and drop for all services booked</p>
                </div>
                <div className='how-img-con'>
                    <img src={step1} alt='howimg'/>
                </div>
            </div>
            <div className='step1'>
                <div className='no-box'>3</div>
                <div className='how-text'>
                    <h1>Track Your Car Service Real-Time</h1>
                    <p>We will take care of everything from here!</p>
                </div>
                <div className='how-img-con'>
                    <img src={step3} alt='howimg'/>
                </div>
            </div>
            <div className='step1'>
                <div className='no-box'>4</div>
                <div className='how-text'>
                    <h1>Earn While We Service</h1>
                    <p>Spread the word! you get Rs.750 Your frinds get Rs .750</p>
                </div>
                <div className='how-img-con'>
                    <img src={step4} alt='howimg'/>
                </div>
            </div>
      </div>
   </>
  )
}

export default Howcarbayworks