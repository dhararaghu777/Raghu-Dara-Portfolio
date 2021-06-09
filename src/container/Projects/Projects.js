import React from 'react';
import classes from './Projects.module.css';
import pic1 from '../../Images/burger.png';
import pic2 from '../../Images/loan1.png';
import pic3 from '../../Images/cricket.png';
import pic4 from '../../Images/instagram1.png';
import pic5 from '../../Images/amazon.png';
import pic6 from '../../Images/music.png';

const pics=[pic1,pic2,pic3,pic4,pic5,pic6];
const links=[{name:"Burger Maker",url:'https://github.com/dhararaghu777/Projects/tree/main/burger-maker'},
            {name:"Loan Application",url:'https://github.com/dhararaghu777/Projects/tree/main/Java/LoanApplicationProcessingSystem-master'},
            {name:"Cricket Team",url:'https://github.com/dhararaghu777/Projects/tree/main/JavaScript/Cricket%20Team%20App'},
            {name:"Instagram",url:'https://github.com/dhararaghu777/Projects/tree/main/JavaScript/Dynamic%20Instagram%20page'},
            {name:'Amazon Clone',url:"https://github.com/dhararaghu777/Amazon-clone"},
            {name:'Music App',url:"https://github.com/dhararaghu777/Music-App"}
        ];

const projects=()=>{

    const projectsList=links.map((x,i)=>(
        <div className={classes.project} key={i}>
            <a href={x.url}  
               alt={x.name} 
               target="_blank"
               rel="noreferrer">
                    <img src={pics[i]} alt={x.name} />
                    <p>{x.name}</p>
            </a> 
        </div>
    ))

    return (
       
        <div className={classes.ProjectPage}>
            <div className={classes.Projects}>
                <div className={classes.content}>Projects List</div>
                <div className={classes.list}>
                   {projectsList}                    
                </div>
            </div>
        </div>
            
    )
}

export default projects;