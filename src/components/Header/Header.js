import classes from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import RagistrationButton from "./RagistrationButton/RagistrationButton";
import Logo from "./Logo";
import Context from "../../Store/Context";
import { useContext } from "react";
import SorryModal from "../../UI/SorryModal/SorryModal";
function Header(props) {

  const crtx = useContext(Context);

  var id_header = classes.id

  if(crtx.val_DarkMode){
    id_header = classes.id_header
  }
  return (
    
    <div className={classes.header} id={id_header}>
      {crtx.val_sorryModal &&<SorryModal/>}
      <Logo></Logo>
      <Navbar></Navbar>
      <RagistrationButton></RagistrationButton>
    </div>
  );
}

export default Header;
