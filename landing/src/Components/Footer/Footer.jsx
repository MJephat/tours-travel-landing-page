import React, {useEffect} from 'react'
import './footer.scss'
import video4 from '../Assets/video4.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram } from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'


import Aos from 'aos'
import 'aos/dist/aos.css'

export const Footer = () => {

     // add a scroll animation.
     useEffect(() =>{
      Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video4} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small> KEEP IN TOUCH </small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
             SEND <FiSend className='icon'/>
            </button>
            </div>          
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>
                Quest.
              </a>
            </div>

            <div data-aos="fade-up"
             className='footerParagraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>

            <div data-aos="fade-up"
            className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <AiOutlineYoutube className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>


          </div>

          <div className='footerLinks grid'>
            {/* group one */}
            <div data-aos="fade-up"
            data-aos-duration="3000"
            className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
             
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>


            </div>

             {/* group Two */}
             <div data-aos="fade-up"
            data-aos-duration="4000"
              className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
             
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisors
              </li>


            </div>

             {/* group Three */}
             <div data-aos="fade-up"
            data-aos-duration="4500"
             className='linkGroup'>
              <span className='groupTitle'>
                LAST MUNITES
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Kenya
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Ethiopia
              </li>
             
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tanzania
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Uganda
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rwanda
              </li>


            </div>

          </div>

          <div className='footerDiv flex'>
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHT RESERVED - @jmm.2023</small>
            </div>

        </div>
      </div>
    </section>
  )
}