import React, {useEffect, useState} from 'react'
import '../styles/Project.scss'
import img1 from '../assets/Screenshot_21-6-2024_172018_snappykode.github.io.jpeg'
import img2 from '../assets/Screenshot_21-6-2024_172246_snappykode.github.io.jpeg'
import img3 from '../assets/Screenshot_21-6-2024_17242_snappykode.github.io.jpeg'
import img4 from '../assets/Screenshot 2024-12-25 151409.png'
import img5 from '../assets/Screenshot 2024-12-25 151449.png'
import img6 from '../assets/spaceX_clone.png'


const Projects = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='project-sec'>
      {/* <h1>Projects</h1> */}


      <div className="card">
        {width > 600 && <div className="card-image"><img src={img4} alt="" /></div>}
        <p className="card-title">Weather App</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/Weather" target="_blank">Code</a>
          <a href="https://snappykode.github.io/Weather/" target="_blank">View</a>
        </div>
      </div>

      <div className="card">
      {width > 600 && <div className="card-image"><img src={img2} alt="" /></div>}
        <p className="card-title">Rock Paper Scissor</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/rock-paper-scissors" target="_blank">Code</a>
          <a href="https://snappykode.github.io/rock-paper-scissors/" target="_blank">View</a>
        </div>
      </div>

      <div className="card">
      {width > 600 && <div className="card-image"><img src={img3} alt="" /></div>}
        <p className="card-title">Keeper</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/keeper-app" target="_blank">Code</a>
          <a href="https://snappykode.github.io/keeper-app/" target="_blank">View</a>
        </div>
      </div>




      <div className="card">
        {width > 600 && <div className="card-image"><img src={img5} alt="" /></div>}
        <p className="card-title">Calculator</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/calculator" target="_blank">Code</a>
          <a href="https://snappykode.github.io/calculator/" target="_blank">View</a>
        </div>
      </div>

      <div className="card">
      {width > 600 && <div className="card-image"><img src={img6} alt="" /></div>}
        <p className="card-title">SpaceX Clone</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/SpaceX-clone" target="_blank">Code</a>
          <a href="https://snappykode.github.io/SpaceX-clone/" target="_blank">View</a>
        </div>
      </div>

      <div className="card">
      {width > 600 && <div className="card-image"><img src={img1} alt="" /></div>}
        <p className="card-title">Sneakers</p>
        {/* <p className="card-body">
          Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.
        </p> */}
        <div className="btn-group">
          <a href="https://github.com/SnappyKODE/sneaker" target="_blank">Code</a>
          <a href="https://snappykode.github.io/sneaker/" target="_blank">View</a>
        </div>
      </div>




    </div>
  )
}

export default Projects
