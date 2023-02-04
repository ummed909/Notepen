import classes from "./Logo.module.css";
import logoImg from "./../../../Assets/logo.png"

const Logo = (props) => {
  return (
    <div className={classes.logoInfo}> 
      <div className={classes.logo}>
        <img className={classes.logoImg} src={logoImg}></img>
        <div className={classes.logoName}>otepen</div>
      </div>
      <div className={classes.info}>
        <span  className={classes.line1}>This is free and open source note taking web</span>
        <span className={classes.line2}>it include many features and security .</span>
      </div>
    </div>
  );
};

export default Logo;
