import React,{useRef} from 'react';
import classes from './Section1.module.css';
import Picture from '../../../Images/Raghu-dara.jpg';
// import pic1 from '../../../Images/background2.jpg';

const images=[
    'https://images.unsplash.com/photo-1612010167108-3e6b327405f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvbWUlMjBvZmZpY2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'];


const Section1=()=>{
   const bgImage= useRef(0)

   const changeBackgroundImage=()=>{
       
       let i=0;
       setInterval(()=>{
            bgImage.current.style.backgroundImage =`url(${images[i]})`;
            i+=1;
            console.log(i);
            if(i>=4)
            {
                i=0;
            }

       },10000)
    // bgImage.current.style.backgroundImage =`url(${images[i]})`;
   }

    return (
        <div ref={bgImage} className={classes.Section1}  >
           
           <div className={classes.Content}>
               <p>Hi 😊</p>
               <h3>I'm <b>Raghu Dara</b></h3>
               <p>Web Developer 💖</p>
           </div>
           <div className={classes.PictureDiv}>
               <img className={classes.Picture} src={Picture} alt="" />
           </div>
        </div>
    )
}

export default Section1;