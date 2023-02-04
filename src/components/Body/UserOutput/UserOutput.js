import classes from "./UserOutput.module.css";
import DataCard from "./Data/DataCard";
import NavbarMid from "./Navbar/NavbarMid";
import Context from "./../../../Store/Context";
import { useContext } from "react";
import Databox from "./Databox";

function UserOutput() {

  const crtx = useContext(Context);
  

  var id_userOutput = classes.id;
  if (crtx.val_DarkMode) {
    id_userOutput = classes.id_userOutput;
  }
  return (
    <div className={classes.userOutput} id={id_userOutput}>
      <NavbarMid></NavbarMid>
      <Databox/>
    </div>
  );
}

export default UserOutput;
