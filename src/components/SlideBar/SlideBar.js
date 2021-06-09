import React,{useRef,useEffect} from 'react';
import classes from './SlideBar.module.css';
import {useHistory,useRouteMatch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from '../../store/actions/navActions';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function SlideBar(props) {
  

    return (
        <div  className={classes.Main}>
            <div className={classes.close}>
                <HighlightOffIcon className={classes.closeIcon} 
                                onClick={props.onTaggleHandler} />
            </div>
            <div className={classes.SlideBar}>
                <div className={classes.content} 
                    onClick={props.onTaggleHandler} >
                    <NavLink to="/">Home</NavLink>
                </div> 
                <div className={classes.content}
                    onClick={props.onTaggleHandler} >
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className={classes.content}
                    onClick={props.onTaggleHandler}>
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        toggle:state.toggle
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onTaggleHandler:()=>dispatch(actions.toggle())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SlideBar);
