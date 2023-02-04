import classes from "./SorryModal.module.css";
import { useContext } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import Context from "./../../Store/Context";

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function SorryModal(props) {
  const crtx = useContext(Context);

  function Backdrope(props) {
    return (
      <div className={classes.backdrope} >
      </div>
    );
  }

  const Element = document.getElementById("sorrymodal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrope></Backdrope>, Element)}
      {ReactDOM.createPortal(
        <Overlay>
          <h1>Sorry!</h1>
          <h3>this feature is not availble now</h3>
          <h3>currenty we are worling on this feature</h3>
          <button className={classes.okayButton} onClick={crtx.fun_sorryModalHandler}>Okay</button>
        </Overlay>,
        Element
      )}
    </Fragment>
  );
}

export default SorryModal;
