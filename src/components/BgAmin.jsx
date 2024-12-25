import React,{ useEffect, useState } from 'react'
import Projects from './Projects';
import About from './About'
import Contact from './Contact'
import NameAnim from './NameAnim';
import Skill from './Skill'; 
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
  } from "react-router-dom";

const BgAmin = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numberOfColorBoxes = width>800 ? 400 : 120;
    const arr = []
    
    for(let i = 0; i < numberOfColorBoxes; i++){
        arr.push(<div className='colorBox' key={i}></div>)
    }

    return (
        <Router>
            <Navbar />
            <div className="bgAnimation" id="bgAnimation">
                {arr}
                <div className="backgroundAmim"></div>
            </div>
            <Routes>
                <Route path="/" element={<NameAnim />}></Route>
                <Route path="/skill/*" element={<Skill />}></Route>
                <Route path="/project" element={<Projects/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    )
}

export default BgAmin
