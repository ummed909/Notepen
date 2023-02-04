import classes from "./CreateButton.module.css";
import { MdCreate } from "react-icons/md";

function CreateButton() {


  function MoveToCreate(){
    window.scrollTo({left:0,top:620,behavior:"smooth"});
  }

  return (
    <div className={classes.createButton}>
      <button onClick={MoveToCreate}>
        <div className={classes.textOfButton}>
          Lets Create Note
          ...
        </div >
        <div className={classes.iconSpace}>
          <MdCreate className={classes.icon} />
        </div>
      </button>
    </div>
  );
}

export default CreateButton;
