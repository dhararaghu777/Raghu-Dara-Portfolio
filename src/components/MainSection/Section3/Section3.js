import React from 'react';
import classes from './Section3.module.css';
import {Button} from 'react-bootstrap';
import pic1 from '../../../Images/burger.png';
import pic2 from '../../../Images/loan1.png';
import pic3 from '../../../Images/instagram.png';
import pic4 from '../../../Images/cricket.png';
import pic5 from '../../../Images/amazon.png';
import pic6 from '../../../Images/music.png';

import Slides from '../../UI/Slides/Slides';
import {useHistory} from 'react-router-dom';

const projectsList=[
    {pic:pic1,content:"Buger Maker"},
    {pic:pic2,content:"Loan Application"},
    {pic:pic3,content:"Instagram"},
    {pic:pic4,content:"Cricket Team"},
    {pic:pic5,content:"Amazon Clone"},
    {pic:pic6,content:"Music App"}
];

const Section3=(props)=>{
    const history=useHistory();

    const onClickHandler=()=>{
        history.push("/projects");
    }

    return (
        <div className={classes.Section3}>
            <div className={classes.content}>
                <h4>Projects Completed</h4>
            </div>
            <Slides projects={projectsList} />
            <div className={classes.button}>
                <Button variant="outline-dark" 
                        onClick={onClickHandler} >Show Projects</Button>
            </div>
        </div>
    )
}

export default Section3;