import React, { useState } from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleDescBtn = () => {
    setShowMore(!showMore)
  }
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Parf Of A Balanced Diet
            </h1>
            <p className='primary-text'>
            A balanced diet provides essential nutrients the body needs to function correctly, including a variety of fruits, vegetables, lean proteins, whole grains, and healthy fats
            </p>
            <p className='primary-text'>
            It helps maintain overall health, supports growth and development, and reduces the risk of chronic diseases. 
            </p>
            {
              showMore && (
                <div>
                  <p className='primary-text'>
                  A balanced diet provides essential nutrients that the body needs to function properly. It includes a variety of foods from all the major food groups: fruits, vegetables, lean proteins, whole grains, and healthy fats. By consuming a diverse range of foods, you ensure that your body receives a wide array of vitamins, minerals, and other important nutrients necessary for maintaining energy levels, enhancing mood, and boosting immune function.
                  </p>
                </div>
              )
            }
            <div className='about-buttons-container'>
            <button className='secondary-button' onClick={handleDescBtn}>
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
                <button className='watch-video-button'><BsFillPlayCircleFill />Watch Video</button>
            </div>
            
        </div>
    </div>
  )
}

export default About