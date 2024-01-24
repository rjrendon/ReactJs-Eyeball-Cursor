import React from 'react'
import './eyeballs.css'
//For eyeballs
document.querySelector("body").addEventListener("mousemove", eyeCircle);

function eyeCircle(event){

    let eyes = document.querySelectorAll(".eye");

    eyes.forEach((eye)=>{

        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;

        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;



        let rad=Math.atan2(event.pageX - x,event.pageY - y);

        let rotate=rad * (180 / Math.PI)* -1 + 270;

        eye.style.transform= `rotate(${rotate}deg)`;

    })

}
const Eyeballs = () => {
  return (
<div className="imageContainer">
    
    <img src="/face.png" alt="" />
    <div class = "both-eyes">
       <div class = "eye"></div>
       <div class = "eye"></div>

    </div>
</div>
  )
}

export default Eyeballs