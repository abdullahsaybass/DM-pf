import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profileImage from '../../assets/zenith.jpeg'

const About = () => {
  return (
    <div id = 'about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profileImage} alt="profile-image" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a budding Digital Marketer with a strong interest in SEO, SEM, content marketing, and 
                        social media management. With 2 years of experience, I have helped improve brand visibility 
                        and engagement. I am learning more about advanced analytics and data-driven marketing, and 
                        I am eager to work on impactful campaigns and grow in this exciting field.</p>
                    <p>My passion for digital marketing drives me to keep learning and improving, making sure I 
                        bring enthusiasm and dedication to every project</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>SEO</p>
                        <hr style={{width:'50%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>SMM</p>
                        <hr style={{width:'70%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>E-mail M </p>
                        <hr style={{width:'60%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Content M</p>
                        <hr style={{width:'50%'}}/>
                    </div>
                </div>
            </div>
        </div>

{/*         <div className="about-achievements">
            <div className="about-achievment">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
             <div className="about-achievment">
                <h1>8+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             <div className="about-achievment">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div> */}
    </div>
  )
}

export default About
