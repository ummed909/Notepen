import classes from "./DataCard.module.css";
import { useState } from "react";
import { getDatabase, ref, remove } from "firebase/database";
import { MdDelete } from "react-icons/md";

function DataCard(props) {
  const db = getDatabase();

  function deleteData() {
    const tasksRef = ref(db, "users/" + props.uid + "/notes/" + props.head);
    remove(tasksRef).then(() => {
      console.log("location removed");
    });
  }

  return (
    <div className={classes.dataCard} >
      <div className={classes.upperPart}>
        <div className={classes.title}>{props.head}</div>
        <button onClick={deleteData}>
          <MdDelete />
        </button>
      </div>
      <div className={classes.content}>{props.note}</div>
    </div>
  );
}

export default DataCard;
