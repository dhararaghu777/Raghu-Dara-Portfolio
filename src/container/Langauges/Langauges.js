import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Languages.module.css';
import pic1 from '../../Images/React.png';
import pic2 from '../../Images/javascript.png';
import pic3 from '../../Images/java.png';
import pic4 from '../../Images/html-coding.png';
import pic5 from '../../Images/database.png';
import pic6 from '../../Images/css-coding.png';
import Icons from '../../components/UI/Icons/Icons';


const langauges=()=>{

    const icons=[
            {name:"React.Js", image:pic1},
            {name:"Javascript", image:pic2},
            {name:"Java", image:pic3},
            {name:"HTML", image:pic4},
            {name:"SQL", image:pic5},
            {name:"CSS", image:pic6}
    ]

    
    return (
        <div className={classes.Languages}>
            {/* <Navbar /> */}
            <div className={classes.heading}>
                <div>Expert in Languages</div>
            </div>
            <div className={classes.content}>
                <Icons className={classes.row} details={icons} />
            </div>
            
        </div>
    )
}

export default langauges;