import classes from "./Page.module.css";
import imgCard from "./../../../../Assets/ragistrationBackground.png";
import Modal from "./../../../../UI/Modal";

function Page(props) {
  return (
    <Modal showForm = {props.showForm}>
      <div className={classes.ragistrationCard}>
        <div className={classes.imgCard}>
          <img src={imgCard} className={classes.img} />
        </div>
        <div className={classes.formCard}>{props.children}</div>
      </div>
    </Modal>
  );
}

export default Page;
