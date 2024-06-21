import React from 'react'
import './Hero.css'
import profileImage from '../../assets/zenith.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id = 'menu' className='hero'>
        <img src = {profileImage} alt="profile-image" />
        <h1><span>I'm Abdullah Saybas,</span>Digital Marketer Based on India</h1>
        <p>I am a Digital Marketing Specialist with 2 years of experience in SEO, SEM, content marketing, 
          social media management, and email marketing. I have successfully executed campaigns that enhance 
          brand visibility and engagement, leveraging tools like Google Analytics and SEMrush for data-driven 
          results. Passionate about continuous learning, I thrive on creating innovative marketing strategies.</p>
        <div className='hero-actions'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className='hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero