import React from 'react'
import contact from './contact.jpg'

function Contact() {
  return (
    <div>
        <marquee direction="left" width='100%' height='30px'>Welcome to High-Q Labs web page. Designed by Chandu.</marquee>

       <img src={contact} alt='' width='100%' height='300px'/>
        <div id='contactfloat'>
            <h1 id='contacth1'>Contact Details:</h1>
            <div className='contactmain'>
                <h2>Corporate Office</h2>
                <div className='contactdata'>HighQ-Labs PVT LTD.,<br/>#990 12th Main, 1st Cross<br/>HAL 2nd stage, Indiranagar,<br/>Bangalore-560038</div>
            </div>

            <div className='contactmain'>
                <h2>Branch Office</h2>
                <div className='contactdata'>HighQ-Labs PVT LTD.,<br/>#46-17-20,4th floor,Lilari Elevance,<br/>HDFC Bank Building,Danavipeta<br/>Rajahmundry-533103</div>
            </div>

            <div className='contactmain'>
                <h2>UK Office</h2>
                <div className='contactdata'>HighQ-Labs,<br/>321-323 High Rd,Chadwall Health,<br/>Ramford, Essex,RM6 6AX,<br/>United Kingdom</div>
            </div>
            

        </div>

    </div>
  )
}

export default Contact