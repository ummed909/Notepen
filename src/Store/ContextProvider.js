import Context from "./Context";
import { useState } from "react";
import { getDatabase, ref, set, update} from "firebase/database";
import app from "./BackEnd/Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

import {
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

function ContextProvider(props) {
  //___________________________RAGISTRATION____________________________//


  var check = window.localStorage.getItem('isLoggedIn');
  if(check == null){
    check = false;
    console.log("this is your check")
    console.log(check);
  }else{
    check = true
    console.log("this is your check")
    console.log(check)
  }
  const [IsRagistered, setIsRagistered] = useState(check);
  const [sorryModal, setSorryModal] = useState(false);

  



  

 

  //_______________________________google authentication___________________________

  const auth = getAuth(app);
  const database = getDatabase(app);

  
  


  function AppUser(gotEmail, gotPassoword, username) {
    if(username==null || username == ""){
      ErrorAndWarning("please provide right username");
      return;
    }
    // sign up new user
    createUserWithEmailAndPassword(auth, gotEmail, gotPassoword)
      .then((userCredential) => {
        const user = userCredential.user;
        window.localStorage.setItem("uid",user.uid)
        updateProfile(auth.currentUser, {
          displayName:username
        })
      })
      .then((okay) => {
        WriteMail();
        window.localStorage.setItem("isLoggedIn",true)
        window.localStorage.setItem("displayName",username)
        ErrorAndWarning("You done sucessfully!");
        setIsRagistered(true);
      })
      .catch((error) => {
        ErrorAndWarning(error.message);
      });
  }

  function sigInUsermanual(gotEmail, gotPassoword) {
    // Sign in existing users
    signInWithEmailAndPassword(auth, gotEmail, gotPassoword)
      .then((userCredential) => {
        const user = userCredential.user;
        window.localStorage.setItem("isLoggedIn",true)
        window.localStorage.setItem("uid",user.uid)
        window.localStorage.setItem('displayName',user.displayName)
        ErrorAndWarning("You done sucessfully!");
        setIsRagistered(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ErrorAndWarning(errorMessage)
      });
  }

  const provider = new GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });
  function signInWithGoogle() {
    // sign in with goog;e
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.localStorage.setItem("isLoggedIn",true)
        window.localStorage.setItem("uid",user.uid)
        window.localStorage.setItem('displayName',user.displayName)
        ErrorAndWarning("You done sucessfully!");
        setIsRagistered(true);
      })
      .catch((error) => {
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        ErrorAndWarning(error.message);
      });
  }

  const provider2 = new OAuthProvider("microsoft.com");
  function sigInWithMicrosoft() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        const user = result.user;
        window.localStorage.setItem("isLoggedIn",true)
        window.localStorage.setItem("uid",user.uid)
        window.localStorage.setItem('displayName',user.displayName)
        ErrorAndWarning("You done sucessfully!");
        setIsRagistered(true);
      })
      .catch((error) => {
        ErrorAndWarning(error.message)
      });
  }

  //_______________________________dark mode____________________________________

  const [DarkMode, setDarkMode] = useState(false);

  function DarkModeHandler() {
    if (DarkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    console.log("handler");
  }

  //____________________________________sorry modal___________________________

  function sorryModalHandler() {
    if (sorryModal) {
      setSorryModal(false);
    } else {
      setSorryModal(true);
    }
  }

  //________________________________________write and read data _______________________

  const user = auth.currentUser;
  var number = 0;

  function WriteData(title_, note_) {
    const uid = window.localStorage.getItem('uid')
    // write data
    set(ref(database, "users/" + uid + "/notes/"+title_), {
      note:note_,
      heading:title_,
    }).then((result)=>{
      console.log("added notes")
    }).catch((error)=>{
      alert(error.message)
    });

    // update counter

    const updates = {};
    number = number + 1;
    updates["users/" + uid + "/number"] = number;
    return update(ref(database), updates);
  }

  function WriteFeedback(feedback_) {
    // write feedback
    set(ref(database, "feedbacks/" + user.uid), {
      feedback: feedback_,
    });
    console.log("function executed");
  }

  function WriteMail() {
    // write Email varification
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email send sucessfully");
    });
  }

 

 

  var uid = null;
  if(user !=null){
    uid = user.uid
  }

  function LogOut(){
    window.localStorage.clear("isLoggedIn")
    window.localStorage.clear("username")
    ErrorAndWarning("loged out successfully!");
    window.location.reload(false)
    setIsRagistered(false);
  }

  




  //____________________________Error_handling__________________________________

  function ErrorAndWarning(props) {
    const msg = props
    alert(props)
  }

  const ContextValues = {
    fun_Logout:LogOut,
    val_IsRagistred: IsRagistered,
    val_DarkMode: DarkMode,
    fun_DarkModeHandler: DarkModeHandler,
    fun_AddUser: AppUser,
    fun_SiginUser: sigInUsermanual,
    fun_SiginInWithGoogle: signInWithGoogle,
    fun_siginWithMicrosoft: sigInWithMicrosoft,
    val_sorryModal: sorryModal,
    fun_sorryModalHandler: sorryModalHandler,
    fun_WriteData: WriteData,
    fun_writefeedback: WriteFeedback,
    val_userUID:uid,
    fun_ErrorAndWarning:ErrorAndWarning
  };

  return (
    <Context.Provider value={ContextValues}>{props.children}</Context.Provider>
  );
}
export default ContextProvider;
