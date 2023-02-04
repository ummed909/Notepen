import DataCard from "./Data/DataCard";
import classes from "./Databox.module.css";
import { getDatabase, ref, set, update, onValue } from "firebase/database";
import Context from "../../../Store/Context";
import { useContext, useState, Fragment } from "react";

function Databox() {
  const [tag, setTag] = useState(true);
  
  function render() {
    if (tag) {
      setTag(false);
      console.log("render")
    } else {
      setTag(true);
      console.log("render")
    }
  }




  const crtx = useContext(Context);
  const uid = window.localStorage.getItem('uid');
  var Data = [];

  const db = getDatabase();
  const starCountRef = ref(db, "users/" + uid + "/notes");
  onValue(starCountRef, (snapshot) => {
    const get_data = snapshot.val();
    if (get_data != null) {
      Data = Object.entries(get_data);
      console.log(Data)
    }
  });

  if (Data.length === 0) {
    return (
      <Fragment>
        <button className={classes.reloadButton} onClick={render}>
          Reload
        </button>
        <div className={classes.alert}>No Data found !</div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <button className={classes.reloadButton} onClick={render}>
        Reload
      </button>
      <div className={classes.gridContainer}>
        {Data.map((item) => (
          <DataCard head={item[1].heading} note={item[1].note} uid={uid} />
        ))}
      </div>
    </Fragment>
  );
}

export default Databox;
