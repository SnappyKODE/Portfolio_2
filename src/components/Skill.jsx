import React, { useEffect, useState } from 'react'
import '../styles/Skill.scss'
import Projects from './Projects';


const Skill = () => {

        const [Swidth, setWidth] = useState(window.innerWidth);
    
        useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }, []);
    

    const w = Swidth > 600 ? "200" : "50"
    const [Select,SetSelect] = useState(true)

    function handleClick(n){
        if(n>0)
            SetSelect(false)
        else
            SetSelect(true)
        
    }

    return (
        <>
        <div id='skill'>

            {/* <h2>Skills</h2> */}
            
            <div className="toggle">
                <div className={Select ? 'selected' :'toggle1' }  onClick={()=>{handleClick(0)}}>Frontend</div>
                <div className={Select ? 'toggle2' :'selected' }  onClick={()=>{handleClick(1)}}>Backend</div>
            </div>

            {Select ?  
                <>
                    <div className="skill_info">
                    <p>HTML</p>
                    <div className='outer-bar'>
                        <div className="inner-bar"></div>
                    </div>
                    </div> 
                    <div className="skill_info">
                        <p>CSS</p>
                        <div className='outer-bar'>
                            <div className="inner-bar"></div>
                        </div>
                    </div>
                    <div className="skill_info">
                        <p>JS</p>
                        <div className='outer-bar'>
                            <div className="inner-bar" style={{width:Swidth>600 ?"750px" : "165px"}}></div>
                        </div>
                    </div>
                    <div className="skill_info">
                        <p>React</p>
                        <div className='outer-bar'>
                            <div className="inner-bar" style={{width:Swidth>600 ?"720px" : "150px"}}></div>
                        </div>
                    </div>
                </>
            :

                <>
                <div className="skill_info">
                <p>NodeJS</p>
                <div className='outer-bar'>
                    <div className="inner-bar" style={{width:Swidth>600 ?"720px" : "160px"}}></div>
                </div>
                </div>
                <div className="skill_info">
                <p>Express</p>
                <div className='outer-bar'>
                    <div className="inner-bar" style={{width:Swidth>600 ?"700px" : "140px"}}></div>
                </div>
                </div>

                <div className="skill_info">
                <p>MongoDB</p>
                <div className='outer-bar'>
                    <div className="inner-bar" style={{width:Swidth>600 ?"710px" : "130px"}}></div>
                </div>
                </div>
                </>
           
            
            }
        </div>
        </>
    )
}

export default Skill
