import React from 'react'
import it from './it.jpg'
import it2 from './it2.jpg'
import home from './home.jpg'


function Home() {
  return (
    <div>
      <div id='home'>
      <marquee direction="left" width='100%' height='30px'>Welcome to High-Q Labs web page. Designed by Chandu.</marquee>
      <div className='banner-card'>
          <img src={home} alt='' width='100%' height='500px'/>
          <div className='banner-text'>
            <h1>COMMITMENT TO SERVICE<br/>DELIVERY EXCELLENCE</h1>
          </div>
      </div>

      <div className='hometext'>
        <dl>
          <dt className='dt'>Professional <span id='homespan'>Services</span></dt>
          <dd className='dd'>At HighQ-Labs we have an exceptional commitment to delivering distinguished professional talent and staffing services to our clients. By maintaining able relationships, we work in partnership with our clients and business professionals to share our market analysis and expertise locally and globally to provide an extraordinary service.</dd>
        </dl>
        <div>
          <img id='it' src={it} alt='' width={600} height={400}/>
          <br/>
          <dl>
            <dt className='dt'>IT <span id='homespan' >Solutions</span></dt>
            <dd className='dd'> HighQ-Labs is a software development, system integration, and professional services company that works with Enterprise systems and companies. As a privately owned company, HighQ-Labs provides IT Consulting, software design and development as well as professional services.</dd>
          </dl>
            <br/><br/>
          <dl>
            <dt className='dt'>Our <span id='homespan'>Expertise</span></dt>
            <dd className='dd'>     
            <br/>
                                    <li>HealthCare</li>
                                    <li>Oil and Gas</li>
                                    <li>Telecom</li>
                                    <li>Media</li>
                                    <li>Change and Transformation</li>
                                    <li>Reatail and eCommerce</li>
                                    <li>BFSI</li>

              </dd>
          </dl>
          <div>
          <img id='it2' src={it2} alt='' width={600} height={400}/>

          <dl>
            <dt className='dt'>Permanent  <span id='homespan' >Staffing</span></dt>
            <dd className='dd'> HighQ-Labs ally closely with our clients to help build exceptional teams. We are aware that finding the top people is the way to build and grow a company that has an edge on competition. Our speciality is the sourcing, screening and management of our clients’ most treasured asset – people. We use the best talent networks and provide you with exclusive market analysis to put you in a position to succeed.</dd>
          </dl>
          <br/>
          <dl>
            <dt className='dt'>Contract <span id='homespan' >Staffing</span></dt>
            <dd className='dd'> At HighQ-Labs, we have the art of attracting, hiring and engaging the right talent for our clients’ positions – from on-demand to future assignments. We bring in excellent HR tools and technologies to identify exceptional candidates who are culturally and technically aligned to the assignments of our clients.</dd>
          </dl>

          </div>



        </div>

      </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default Home
