import classes from "./Note.module.css";
import { FaCheckSquare, FaBuysellads } from "react-icons/fa";
import { CgColorBucket } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import React, { useState, useContext } from "react";
import Context from "../../../Store/Context";
import { getAuth } from "firebase/auth";
import app from "../../../Store/BackEnd/Firebase";


const Note = (props) => {
  const crtx = useContext(Context);

  const [enteredNote, setEnteredNote] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  function noteHeandler(event) {
    setEnteredNote(event.target.value);
  }
  function titleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  var id_userInputSection = classes.id;
  if (crtx.val_DarkMode) {
    id_userInputSection = classes.id_userInputSection;
  }

  const auth = getAuth(app);
  var chech = false
  const user = auth.currentUser;
  if (user !== null) {
    chech = true
  }


  function clear() {
    document.getElementById("myNote").reset();
    new Notification ({
      title: 'Notify Title',
      text: 'Notify Message',
      autoclose: true,
      autotimeout: 3000
  }) 
  }

  function WriteData() {
    // const check = window.localStorage.getItem('isLoggedIn')
    if(chech){
      crtx.fun_WriteData(enteredTitle, enteredNote);
    }else{
      alert("please Login first")
    }
    clear()
    
  }
  

  function submit(event) {
    event.preventDefault();
  }

  

  return (
    <div className={classes.userInputSection} id={id_userInputSection}>
      <div className={classes.formBody}>
        <form onSubmit={submit} id="myNote">
          <div className={classes.buttons}>
            <input
              type="text"
              placeholder="Title ..."
              className={classes.title}
              onChange={titleHandler}
            ></input>
            <button className={classes.noteFormButton} onClick={WriteData}>
              <FaCheckSquare className={classes.checkButton} />
            </button>
            <button className={classes.noteFormButton} onClick={clear}>
              <MdDelete className={classes.deleteButton} />
            </button>
          </div>
          <div>
            <textarea
              placeholder="Type Here ..."
              className={classes.textarea}
              rows="13"
              cols="63"
              onChange={noteHeandler}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Note;
