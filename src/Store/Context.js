import React from "react";
import Ragistration from "../components/Header/RagistrationButton/RagistrationHandler/Ragistraton";

const Context = React.createContext({
  fun_LoginModeHandler: null,
  fun_SignupModeHandler: null,
  fun_RagistrationHandler: null,
  fun_AddUser: null,
  fun_SiginUser: null,
  fun_SiginInWithGoogle: null,
  fun_siginWithMicrosoft: null,
  val_sorryModal: null,
  fun_sorryModalHandler: null,
  fun_writefeedback:null

});

export default Context;
