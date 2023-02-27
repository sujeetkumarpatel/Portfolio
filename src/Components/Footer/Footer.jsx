import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>sujeetkumarp467@gmail.com</span>
            <div className="f-icons">
            <a href='https://instagram.com/sujeetpatel882?igshid=YmMyMTA2M2Y='><Insta color='white' size='3rem'/></a>
                <a href='https://www.linkedin.com/in/sujeet-kumar-patel-712425247'><LinkedIn color='white' size='3rem'/></a>
                <a href='https://github.com/sujeetkumarpatel'><Github color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer