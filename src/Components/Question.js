import React, { useState } from 'react'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import reviews from '../reviews';
// import ProfilePic from '../Assets/john-doe-image.png'
// import { AiFillStar } from 'react-icons/ai'

const Contact = () => {
  const [currentItem, setCurrentItem] = useState(0)
  function showPerson(person){
    const item = reviews[person]
    console.log(item);
    return (
      <article className='review'>
    <div className='img-container'>
      <img className='person-img' src={item.img} alt='' />
    </div>
    <h4 className='author'>{item.name}</h4>
    <p className='job'>{item.job}</p>
    <p className='info'>{item.text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={handlePrevBtn}><FaLessThan /></button>
      <button className='next-btn' onClick={handleNextBtn}><FaGreaterThan /></button>
    </div>
    <button className='random-btn' onClick={handleRandBtn}><TbArrowsRandom /></button>
  </article>
    )
  }
  const handleNextBtn = () => {
   setCurrentItem((prevInd) => {
    let newInd = prevInd + 1;
    if(newInd >= reviews.length){
      newInd = 0;
    }
    return newInd
   })
  }

  const handlePrevBtn = () => {
   setCurrentItem((prevInd) => {
    let newInd = prevInd - 1;
    if(newInd < 0){
      newInd = reviews.length - 1
    }
    return newInd;
   })
  }
  const handleRandBtn = () => {
    let rand = Math.floor(Math.random() * reviews.length);
    if(rand === currentItem){
      rand++;
      if(rand >= reviews.length){
        rand = 0;
      }
    }
    setCurrentItem(rand);
  }
  return (
    
    <div className='contact-page-wrapper'>
      <p className='primary-subheading'>Contact</p>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let us Help You</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='yourmail@gmail.com' />
            <button className='secondary-button'>Submit</button>
        </div>
        <div className='work-section-top'>
          <section className='container'>
            <div className='titile'>
              <h2 className='primary-heading'>Our Reviews</h2>
              <div className='underline'></div>
            </div>
            {
              showPerson(currentItem)
            }
          </section>

            {/* <h1 className='primary-heading'>Reviews</h1>
            <div className='underline'></div>
            <p className='primary-text'>
            It provide firsthand accounts of customers' experiences, offering valuable insights into the quality and satisfaction of a product or service.
            </p>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt='Proffile Pic' />
                <p>
                These reviews often highlight specific features or benefits that stood out to customers, making them a powerful tool for influencing potential buyers. 
                </p>
                <div className='testimonials-stars-container'>
              <AiFillStar />
              <AiFillStar />  
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h2>John Doe</h2>
            </div>
             */}
        </div>
    </div> 
  )
}

export default Contact