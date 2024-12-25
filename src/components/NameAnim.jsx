import React,{ useEffect, useState } from 'react'

const NameAnim = () => {

    const text =`Hi I'm Kartikey`;
    const [name,setName] = useState(`Hi I'm Kartikey`)

    const letters = "abcDefGHiJKLmNoPQrStuVwXyZ";
    let interval = null;

    useEffect(()=>{
        let iteration =0;
        clearInterval(interval)
        console.log(event.target)
        interval = setInterval(()=>{
        setName(()=>{
        return name.split("")
            .map((letter, index) => {
                if(index < iteration) {
                return text[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        })
        
        if(iteration >= text.length){ 
        clearInterval(interval);
        }
            
        iteration += 1 / 3;
    },40)
    },[])


    const handleMouse =(event)=>{
        let iteration =0;
        clearInterval(interval)
        console.log(event.target)
        interval = setInterval(()=>{
        setName(()=>{
        return name.split("")
            .map((letter, index) => {
                if(index < iteration) {
                return text[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        })
        
        if(iteration >= text.length){ 
        clearInterval(interval);
        }
            
        iteration += 1 / 3;
    },40)

    }

  return (
    <div className='name' onMouseEnter={(e)=>{
        handleMouse(e)
        }}>
        <h1 data-value="Hi I'm Kartikey">{name}</h1>
    </div>
  )
}

export default NameAnim
