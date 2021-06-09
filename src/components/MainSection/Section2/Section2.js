import React from 'react';
import classes from './Section2.module.css';
import reactImage from '../../../Images/React.png';
import java from '../../../Images/java.png';
import javascript from '../../../Images/javascript.png';
import Icons from '../../UI/Icons/Icons';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Section2=(props)=>{
    const history=useHistory();
    // console.log("history",history);
    const icons=[
        {name:"React.Js", image:reactImage},
        {name:"Javascript", image:javascript},
        {name:"Java", image:java}
    ]

    // console.log("History",history);
    const onClickHandler=()=>{
        history.push("/languages");
    }

    const iconsItems=icons.map((x,i)=>{
        return  <div key={i} className={classes.icon}>
                    <img className={classes.image} src={x.image} alt="" />
                    <p>{x.name}</p>
                </div>})

    return (
        <div className={classes.Section2} >
            <div className={classes.heading}>Expert In Technologies</div>
            <div className={classes.List}>
                <div>
                    {iconsItems}  
                </div>
            </div>
            <div className={classes.button} >
                <Button variant="outline-info" onClick={onClickHandler}>Show More</Button>
            </div>
        </div>
    )
}

export default Section2;