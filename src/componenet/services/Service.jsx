import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrowIcon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div className="service">
        <div className="service-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="service-container">
            {Services_Data.map((service,index) =>{
                return <div key={index} className="service-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrowIcon} alt="arrow-icon" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Service