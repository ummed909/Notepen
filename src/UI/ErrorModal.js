import classes from "./SorryModal.module.css";
import { useContext } from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Context from "./../../Store/Context";

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Backdrope(props) {
    return (
      <div className={classes.backdrope} >
      </div>
    );
  }



function ErrorModal(props) {
  const crtx = useContext(Context);


  const Element = document.getElementById("sorrymodal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrope></Backdrope>, Element)}
      {ReactDOM.createPortal(
        <Overlay>
            {props.children}
          <button className={classes.okayButton} onClick={crtx.fun_sorryModalHandler}>Okay</button>
        </Overlay>,
        Element
      )}
    </Fragment>
  );
}

export default ErrorModal;
