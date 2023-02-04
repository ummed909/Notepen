import classes from "./upperBody.module.css";
import Card from "./Card";
import SearchButton from "./SearchButton";
import CreateButton from "./CreateButton";
import Context from "./../../../Store/Context"
import { useContext } from "react";

function UpperBody() {

  const crtx = useContext(Context)

  var color = "#ffff"
  var id_upperBody=classes.id;
  if(crtx.val_DarkMode){
    id_upperBody = classes.id_upperBody
    color = "#2c2b2b"
  }


  return (
    <div className={classes.upperBody} id={id_upperBody}>
      <Card></Card>
      <CreateButton></CreateButton>
      <SearchButton onclick={crtx.fun_LoginModeHandler}></SearchButton>
      <div className={classes.belowText}>Use this Notepen with cloud Services</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,229.3C672,224,768,192,864,186.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default UpperBody;
