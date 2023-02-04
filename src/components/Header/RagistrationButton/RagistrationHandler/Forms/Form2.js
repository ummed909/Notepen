import classes from "./Form2.module.css";
import { useState,useContext, useEffect } from "react";
import Context from "./../../../../../Store/Context";






const Form2 = (props) => {

  const crtx = useContext(Context)


  const [enterdEmail,setEnterdEmail] = useState("");
  const [enterdpassword,setEnterdpassword] = useState("")
  const [username,setUsername] = useState("");

  function changeEmail(event){
    setEnterdEmail(event.target.value)
  }
  function changePassword(event){
    setEnterdpassword(event.target.value);
  }
  function changeUsername(event){
    setUsername(event.target.value)
  }

  function signup(){
    crtx.fun_AddUser(enterdEmail,enterdpassword,username);
  }


  return (
      <div className={classes.form}>
      <div className={classes.heading}>Welcome</div>
        <form>
          <div className={classes.userinput1}>
            <input
              type="text"
              placeholder="Set User name"
              className={classes.username}
              onChange={changeUsername}
              value={username}
            />
          </div>
          <br/>
          <div className={classes.userinput2}>
            <input
              type="email"
              placeholder="Email"
              onChange={changeEmail}
              value={enterdEmail}
              className={classes.username}
            />
          </div>
          <br/> 
          <br />
          <div className={classes.userinput3}>
            <input
              type="password"
              placeholder="Set Password"
              className={classes.password}
              onChange={changePassword}
              value={enterdpassword}
            />
          </div>
        </form>
        <button className={classes.button1} onClick={signup}>SignUp</button>
        <br />

        <button className={classes.button2} onClick={props.stateHandler}>
          back to login ? <span className={classes.signup}>Sign in</span>
        </button>
      </div>
  );
};

export default Form2;
