import Page from "./Page";
import Form from "./Forms/Form";
import Form2 from "./Forms/Form2";
import Context from "./../../../../Store/Context";
import { useContext} from "react";
function Ragistration(props) {


  const crtx = useContext(Context);

  if(props.showSignUp){
    return(<Page showForm = {props.showSignUp}><Form2></Form2></Page>)
  }
  if(props.showLogin){
    return(<Page showForm = {props.showLogin}><Form></Form></Page>)
  }

  

}

export default Ragistration;
