import classes from "./Content.module.css";
import { TbSend } from "react-icons/tb";
import { useContext,useState } from "react";
import Context from "./../../../Store/Context"


const Content = (props) => {
  const crtx  = useContext(Context);

  const [feedback,setFeedback] = useState("");
  function feedbackHandler(event){
    setFeedback(event.target.value);
  }

  function witrefeedback(){
    crtx.fun_writefeedback(feedback);
    alert("thank you for your valuable feedback")
  }

  function submitHandler(event){
    event.preventDefault();
  }
  return (
    <div className={classes.content}>
      <div className={classes.intro}>Take advantages of our product</div>
      <div className={classes.introHead}>Start using Notepen today</div>
      <form className={classes.footerForm} onSubmit={submitHandler}>
        <input
          className={classes.feedback}
          type="text"
          placeholder="Give your feedback"
          onChange={feedbackHandler}
          value={feedback}
        />
        <button className={classes.sendButton} onClick={witrefeedback}><TbSend className={classes.icon}/></button>
      </form>
    </div>
  );
};

export default Content;
