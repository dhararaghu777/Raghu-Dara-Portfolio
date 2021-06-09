import React from 'react';
import classes from './Icons.module.css';


const Icons=(props)=>{

    // console.log(props);
    const iconsItems=props.details.map(x=>{
                return  <div className={classes.icon}>
                            <img className={classes.image} src={x.image} alt="" />
                            <p>{x.name}</p>
                        </div>})

    return (
        <div className={classes.Icons}>
            {iconsItems}
        </div>
    )
}
export default Icons;