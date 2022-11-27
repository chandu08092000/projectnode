import React from 'react'
import service from './service.jpg'

function Services() {
  return (
    <div>
      <marquee direction="left" width='100%' height='30px'>Welcome to High-Q Labs web page. Designed by Chandu.</marquee>

      <img src={service} alt='' width={'100%'} height='350px' />

      <div id='service'>
          <dl>
              <dt className='dt'><big><span id='homespan'>Services </span></big></dt>
                  <dd className='dd'>
                      <li>WEB APPLICATION DEVELIPMENT</li>
                      <li>DIGITAL TRANSFORMATION</li>
                      <li>MOBILE APP DEVELOPMENT</li>
                      <li>QA CONSULTING</li>
                      <li>DATA MANAGMENT</li>
                      <li>CLOUD COMPUTING</li>
                      <li>IT RESOURCING & RECRUITMENT</li>
                  </dd>
            </dl>
        </div>

    </div>
  )
}

export default Services
