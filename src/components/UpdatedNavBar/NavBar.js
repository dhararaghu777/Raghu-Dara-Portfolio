import React,{useState} from 'react';
import { NavLink, useRouteMatch,useHistory } from 'react-router-dom';
import classes from './NavBar.module.css';
import * as actions from '../../store/actions/navActions';
import {connect} from 'react-redux';


const NavBar=(props)=>{
   const history= useRouteMatch();
   const myHistory=useHistory()


    return (
        <div className={classes.NavBar}>
            <div className={classes.nav1}
                onClick={()=>{myHistory.push("/")}}>
                Raghu Dara
            </div>
            <div className={classes.nav2}>
                {history.url!=='/'? 
                    <div className={classes.content} >
                        <NavLink to="/">Home</NavLink>
                    </div> : null}
                {history.url!=='/contact'? 
                    <div className={classes.content} >
                        <NavLink to="/contact">Contact</NavLink>
                    </div>: null}
                {history.url!=='/resume'? 
                    <div className={classes.content}>
                        <NavLink to="/resume">Resume</NavLink>
                     </div>: null}
            </div>
            <div className={classes.dashbar}
                onClick={props.onToggleHandler}>
                <div className={classes.div1}></div>
                <div className={classes.div1}></div>
                <div className={classes.div1}></div>
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        onToggleHandler: ()=>dispatch(actions.toggle())
    }
}

export default connect(null,mapDispatchToProps)(NavBar);