import classes from "./RagistrationButton.module.css";
import Context from "../../../Store/Context";
import { useContext, useState } from "react";
import Ragistration from "./RagistrationHandler/Ragistraton";
import { getAuth } from "firebase/auth";
import app from "../../../Store/BackEnd/Firebase";

function RagistrationButton(props) {
  const crtx = useContext(Context);

  const [displaysignUp, setDisplaySignUp] = useState(false);
  const [displaylogin, setDisplaylogin] = useState(false);

  function displaySignUpHnadler() {
    if (displaysignUp) {
      setDisplaySignUp(false);
    } else {
      setDisplaySignUp(true);
    }
  }
  function DisplayLoginHandler() {
    if (displaylogin) {
      setDisplaylogin(false);
    } else {
      setDisplaylogin(true);
    }
  }

  var id_loginButton = classes.id;
  var id_siginButton = classes.id;

  if (crtx.val_DarkMode) {
    id_loginButton = classes.id_loginButton;
    id_siginButton = classes.id_siginButton;
  }

  const auth = getAuth(app);
  var displayName =  window.localStorage.getItem('displayName');
  const user = auth.currentUser;
  if (user !== null) {
    displayName = window.localStorage.getItem('displayName');
  }

  if (crtx.val_IsRagistred == true) {
    return (
      <div className={classes.ragistrationButton}>
        <button className={classes.siginButton} id={id_siginButton}>
          {displayName}
        </button>
        <button
          className={classes.loginButton}
          onClick={crtx.fun_Logout}
          id={id_loginButton}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={classes.ragistrationButton}>
      {displaylogin && <Ragistration showLogin={DisplayLoginHandler} />}
      {displaysignUp && <Ragistration showSignUp={displaySignUpHnadler} />}
      <button
        className={classes.siginButton}
        id={id_siginButton}
        onClick={displaySignUpHnadler}
      >
        SignUp
      </button>
      <button
        className={classes.loginButton}
        id={id_loginButton}
        onClick={DisplayLoginHandler}
      >
        Login
      </button>
    </div>
  );
}

export default RagistrationButton;
