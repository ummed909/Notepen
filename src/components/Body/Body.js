import classes from "./Body.module.css";
import Note from "./UserInput/Note";
import UpperBody from "./UpperBody/UpperBody";
import UserOutput from "./UserOutput/UserOutput";
import Context from "../../Store/Context";
import { useContext } from "react";

function Body(props) {
  const crtx = useContext(Context);

  var id_body = classes.id;

  if (crtx.val_DarkMode) {
    id_body = classes.id_body;
  }

  

  return (
    <div className={classes.body} id={id_body}>
      <UpperBody></UpperBody>
      <Note></Note>
      <UserOutput></UserOutput>
    </div>
  );
}

export default Body;
