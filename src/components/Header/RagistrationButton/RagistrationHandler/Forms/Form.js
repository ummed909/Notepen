import classes from "./Form.module.css";
import { useState,useContext } from "react";
import Context from "./../../../../../Store/Context";
import { FcGoogle } from "react-icons/fc";

import microsoftImg from "./../../../../../Assets/microsoft.jpg"



const Form = (props) => {


  const crtx = useContext(Context)

  const [enteredEmail,setEnteredEmail] = useState('');
  const [enteredPassword,setEnteredPassword] = useState('');


  const emailChangeHandler = (event)=>{
    setEnteredEmail(event.target.value);
  }

  const passwordChangeHandler = (event)=>{
    setEnteredPassword(event.target.value);
  }

  function Login(){
    crtx.fun_SiginUser(enteredEmail,enteredPassword);
    console.log("okay login")
  }

  return (

    <div className={classes.form}>
      <div className={classes.heading}>Welcome back</div>
      <form>
        <div className={classes.userinput1}>
          <input
            type="text"
            placeholder="Email"
            className={classes.username}
            onChange = {emailChangeHandler}
            value = {enteredEmail}
          />
        </div>
        <br />
        <div className={classes.userinput2}>
          <input
            type="password"
            placeholder="Password"
            className={classes.password}
            onChange = {passwordChangeHandler}
            value = {enteredPassword} 
          />
        </div>
      </form>
      <br/>
      <button className={classes.microsoftButton} onClick={crtx.fun_siginWithMicrosoft}><img src={microsoftImg} className={classes.iconMicrosoft}/></button>
      <button className={classes.googleButton} onClick={crtx.fun_SiginInWithGoogle}><FcGoogle className={classes.googleIcon}/></button>
      <br/>
      <button className={classes.button1} onClick={Login}>Login</button>
      <br />

      <button className={classes.button2} >not ragistered yet ? <span className={classes.signup}>Sign up</span></button>
    </div>
  );
};

export default Form;
