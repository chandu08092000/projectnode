import React from 'react'
import aboutus from './aboutus.jpg'
import about from './about1.jpg'

function About() {
  return (
    <div>
      <marquee direction="left" width='100%' height='30px'>Welcome to High-Q Labs web page. Designed by Chandu.</marquee>

      <img src={about} alt='' width={'100%'} height='350px' />

      <div className='hometext'>
        <div className='hometext'>

        <img id='about' src={aboutus} alt=''/>

        <dl>
          <dt className='dt'>HighQ-Labs is a technology consulting and services company.</dt>
          <dd className='dd'>We bring in deep expertise in the areas of application development and mobile development from across the globe, with a total experience of 100 plus years in the technology consulting and services business.</dd>
          <dd className='dd'>We provide comprehensive solutions and services that enable companies across all business verticals to efficiently transform their business to digital with custom-build cost-effective solutions.</dd>
          <dd className='dd'>While our commitment and dedication will be on the quality of delivery along with high integrity, we bring in new methods and best practices from across the globe and leverage them to our customers, which will add value across all aspects of our customer business.</dd>
        </dl>

        </div>

        <div>

        <dl>
          <dt className='dt'><span id='homespan'>HighQ-Labs</span></dt>
          <dd className='dd'>At HighQ-Labs we deliver efficient IT Solutions and Professional services.</dd>
        </dl>
        </div>


      </div>
      </div>
  )
}

export default About
