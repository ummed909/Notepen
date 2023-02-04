import classes from "./Navbar.module.css";
import Context from "../../../Store/Context";
import { useContext } from "react";

function Navbar(props) {

  function MoveToSearch(){
    window.scrollTo({left:0,top:1350,behavior:"smooth"});
  }

  const crtx = useContext(Context)
  var theme ="Dark Theme";

  var id_listItem = classes.id
  if(crtx.val_DarkMode){
    id_listItem  = classes.id_listItem
    theme = "Light Theme"
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.navBar}>
        <ul className={classes.list}>
          <li className={classes.listItem} id={id_listItem}>
            <button onClick={MoveToSearch}>Notes</button>
          </li>
          <li className={classes.listItem} id={id_listItem}>
            <button onClick={crtx.fun_sorryModalHandler}>To DO List</button>
          </li>
          <li className={classes.listItem} id={id_listItem}>
            <button onClick={crtx.fun_sorryModalHandler}>About</button>
          </li>
          <li className={classes.listItem} id={id_listItem}>
            <button href="#Home" onClick={crtx.fun_DarkModeHandler}>{theme}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
