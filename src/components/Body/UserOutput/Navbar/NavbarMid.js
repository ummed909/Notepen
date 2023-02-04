import classes from "./NavbarMid.module.css";
import { MdSearch} from "react-icons/md";
import Context from "../../../../Store/Context";
import { useContext } from "react";


function NavbarMid() {


  const crtx =useContext(Context)
  var id_navbar = classes.id
  var id_listItem=classes.id
  if(crtx.val_DarkMode){
    id_navbar=classes.id_navbar
    id_listItem = classes.id_listItem
  }


  return (
    <div className={classes.navbar} id={id_navbar} onClick={crtx.fun_sorryModalHandler}>
      <ul className={classes.list}>
        <li className={classes.searchItem}>
          <label>Search</label>
          <input
            className={classes.search}
            // placeholder=" Search by Title"
          ></input>
          
        </li>
        <li className={classes.listItem} id={id_listItem}>
          <button>Filter</button>
        </li>
        <li className={classes.listItem} id={id_listItem}>
          <button>Share</button>
        </li>
        <li className={classes.listItem} id={id_listItem}>
          <button>delete</button>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMid;
