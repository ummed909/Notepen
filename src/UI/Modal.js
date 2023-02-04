import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import Context from "../Store/Context";

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {

  function Backdrope() {
    return (
      <div className={classes.backdrope} onClick={props.showForm}>
        <button
          onClick={props.showForm}
          className={classes.closeButton}
        >
          <MdClose className={classes.closeIcon} />
        </button>
      </div>
    );
  }

  const Element = document.getElementById("modalForLogin");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrope></Backdrope>, Element)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, Element)}
    </Fragment>
  );
}

export default Modal;
