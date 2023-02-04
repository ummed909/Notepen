import classes from "./Logo.module.css"
import logoImg from "./../../Assets/logo.png"
import Context from "../../Store/Context"
import { useContext } from "react"


function Logo(props){


    const crtx = useContext(Context)

    var id_logoName = classes.id
    if(crtx.val_DarkMode){
        id_logoName = classes.id_logoName
    }
    return(
        <div className={classes.logo}>
            <img src={logoImg} className={classes.logoImg}/>
            <div className={classes.logoName} id={id_logoName}>Notepen</div>
        </div>
    )
}

export default Logo