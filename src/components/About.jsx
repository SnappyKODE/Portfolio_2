import React from 'react'
import '../styles/About.scss'

import Avatar from '../assets/WhatsApp Image 2024-06-21 at 17.26.01_3a7749c5.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="detail">
        <h1>About Me</h1>
        <p>
        Welcome! I'm Kartikey Khanna, a passionate BSc student currently pursuing Computer Science and Data Analytics at IIT Patna. Based in Lucknow, I am a full-stack web developer with a strong grasp of Python and Java. My expertise lies in building dynamic web applications that are both user-friendly and efficient. When I'm not coding, you can find me indulging in my hobbies of drawing and robotics, where I love merging creativity with technology. Thank you for visiting my site!
        </p>
      </div>
      <div className='avatar'>
        <img src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default About
