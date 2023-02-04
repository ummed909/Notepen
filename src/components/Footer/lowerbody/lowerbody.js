import Logo from "./Logo";
import classes from "./lowerbody.module.css";
import { useContext } from "react";
import Context from "./../../../Store/Context"

const Lowerbody = (props) => {

  const crtx = useContext(Context)


  return (
    <div className={classes.lowerbody}>
      <Logo />
      <div className={classes.list}>
        <li className={classes.listItem}><a><button onClick={crtx.fun_sorryModalHandler}>About</button></a></li>
        <li className={classes.listItem}><a><button onClick={crtx.fun_sorryModalHandler}>Portfolio</button></a></li>
        <li className={classes.listItem}><a><button onClick={crtx.fun_sorryModalHandler}>Contact</button></a></li>
        <li className={classes.listItem}><a><button onClick={crtx.fun_sorryModalHandler}>Mail</button></a></li>
      </div>
    </div>
  );
};

export default Lowerbody;
