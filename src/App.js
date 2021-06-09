import './App.css';
import Navbar from './components/UpdatedNavBar/NavBar';
import Layout from './Layout/Layout';
import Langauges from './container/Langauges/Langauges'; 
import Projects from './container/Projects/Projects';
import Resume from './container/Navbar-Links/Resume/Resume';
import Contact from './container/Navbar-Links/Contact/Contact';
import {Route,Switch } from 'react-router-dom';
import {connect } from 'react-redux';
import SlideBar from './components/SlideBar/SlideBar';


function App(props) {
  return (
    <div >
      {props.toggle?<SlideBar />:(
        <Switch>
        <Route path="/contact" >
          <Navbar />
          <Contact />
        </Route>
        <Route path="/resume" >
          <Navbar/>
          <Resume />
        </Route>
        <Route path="/projects" >
          <Navbar />
          <Projects />
        </Route>
        <Route path="/languages">
          <Navbar/>
          <Langauges />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Layout />
        </Route>
      </Switch>
      )}
      

    </div>
  );
}

const mapStateToProps=state=>{
  return {
    toggle:state.toggle
  }
}

export default connect(mapStateToProps)(App);
