import React from 'react';
import classes from './Section4.module.css';
import pic6 from '../../../Images/github1.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const section4=()=>{
    return(
        <div className={classes.Section4}>
           <div className={classes.heading}>About</div>
           <div className={classes.details}>
                <div className={classes.details1}>
                    <div className={classes.info}>Info:</div>
                    <div className={classes.Name}>Raghupathi Dhara</div>
                    <div className={classes.designation}>Full-stack Developer</div>
                    <div className={classes.mobile}>+91-7997033404</div>
                    <div className={classes.details1Image}>
                        <a href="mailto:dhararaghu777@gmail.com" target="_blank"            rel="noreferrer">
                            <EmailIcon className={classes.materialIcons} />   
                        </a>
                        <span>dhararaghu777@gmail.com</span>
                    </div>
                </div>
                <div className={classes.details2}>
                    <div className={classes.info}>Address:</div>
                    <div className={classes.address}>Tirupati, Andhra Pradesh</div>
                    <div>Pin:517507</div>
                    <div className={classes.details2Image}>
                        <a href="https://www.google.co.in/maps/place/13%C2%B037'06.3%22N+79%C2%B024'45.3%22E/@13.6195546,79.4129011,18.23z/data=!4m14!1m7!3m6!1s0x3a4d4b12525e4a95:0x25ff6c584c21962a!2sNew+Balaji+Colony,+Tirupati,+Andhra+Pradesh+517501!3b1!8m2!3d13.6195171!4d79.4155285!3m5!1s0x3a4d4b12c9a377a3:0x17b0e5c027c3a6ec!7e2!8m2!3d13.6184284!4d79.412572" target="_blank"     rel="noreferrer">
                            <LocationOnIcon className={classes.materialIcons} />
                        </a>
                    </div>
                </div>
                <div className={classes.details3}>
                    <div className={classes.info}>Reach Me:</div>
                    <div className={classes.icons}>
                        <div>
                            <a href='https://www.instagram.com/raghu_dara/'  target="_blank" rel="noreferrer">
                                 <InstagramIcon className={classes.materialIcons} />
                            </a> 
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/raghu-dara-202" target="_blank"         rel="noreferrer">
                                <LinkedInIcon className={classes.materialIcons} />
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/dhararaghu777'  target="_blank"         rel="noreferrer">
                                <GitHubIcon className={classes.materialIcons} />
                            </a> 
                        </div>
                    </div>

                </div>
           </div>
        </div>
           
       
    )
}

export default section4;
