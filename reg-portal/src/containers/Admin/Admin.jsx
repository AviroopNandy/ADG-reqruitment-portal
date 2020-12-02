import React,{ useState } from "react";
import AdminQuestions from '../../components/AdminQuestions/AdminQuestions';
import Background from '../../hoc/Background/Background';
// import TechQuestions from '../../components/AdminQuestions/TechnicalQuestions';
// import DesignQuestions from '../../components/AdminQuestions/DesignQuestions';
// import MgmtQuestions from '../../components/AdminQuestions/MgmtQuestions';

import classes from './Admin.module.css';
// let value;
const Admin = ()=>{
    // const [techQuestions,setTechQuestions]=useState([
    //     {
    //         "questionDescription": "What is your name?",
    //         "options" : {
    //            "a":"anuj",
    //            "b":"bharat",
    //            "c":"rahul",
    //            "d":"preetham"
    //                    },
    //            "correctOption" :"c",
    //            "yearofstudy":1
    //        }
    // ]);
    const [checkVal,setCheckVal]=useState("");
    function getSelectedVal(event){
        // console.log(event.target.value);
        setCheckVal(event.target.value);
        // value=event.target.value;
        // console.log(value);
    } 
    // function display(){
    //     console.log(value);
    //     if(value==='technical') return "TechQuestions"
    //     else if (value==='design') return "DesignQuestions"
    //     else return "MgmtQuestions"
    // }
    // var MyComponent=display();
    // MyComponent=()=>{return <div></div>}
    // console.log(MyComponent);
    return(
    <Background>
        <div className={classes.heading}>
            <h1>Administrator Portal</h1>
            <p>Create, Edit and Manage Domain Specific Quizzes and Questions</p>
        </div>
        <form>
            <div className={classes.formContainer} onChange={getSelectedVal}>
            <input type="radio" value="technical" name="selection" id="technical" visibility="hidden"  className={classes.input} ></input>
            <label htmlFor="technical" className={classes.label}>Technical</label>
            <input type="radio" value="design" name="selection" id="design" visibility="hidden" className={classes.input} ></input>
            <label htmlFor="design" className={classes.label}>Design</label>
            <input type="radio" value="management" name="selection" id="management" visibility="hidden" className={classes.input} ></input>
            <label htmlFor="management" className={classes.label}>Management</label>
            </div>
            <AdminQuestions selectedValue={checkVal}/>
        </form>
        {/* {React.createElement(MyComponent, {})} */}
    </Background>
    )};
export default Admin;