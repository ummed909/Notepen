import classes from "./Footer.module.css"
import Content from "./UpperBody/content"
import SocialHandle from "./UpperBody/SocialHandle"
import Lowerbody from "./lowerbody/lowerbody"
const Footer = props=>{
    return(
        <div className = {classes.footer}>
            <div className={classes.upperBody}>
                <Content/>
                <SocialHandle/>
            </div>
            <div className={classes.lowerBody}>
                <Lowerbody/>
            </div>
           
        </div>
    )
}

export default Footer;