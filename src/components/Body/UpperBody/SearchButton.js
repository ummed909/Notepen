import classes from "./SearchButton.module.css";
import { MdSearch} from "react-icons/md";

function SearchButton() {


  function MoveToSearch(){
    window.scrollTo({left:0,top:1350,behavior:"smooth"});
  }

  return (
    <div className={classes.createButton}>
      <button onClick={MoveToSearch}>
        <div className={classes.textOfButton}>
          Seach
        </div >
        <div className={classes.iconSpace}>
          <MdSearch className={classes.icon} />
        </div>
      </button>
    </div>
  );
}

export default SearchButton;
