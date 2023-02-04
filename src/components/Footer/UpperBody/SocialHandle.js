import classes from "./SocialHandle.module.css"
import { FaLinkedin,FaTwitterSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

const SocialHandle = props=>{
    return(
        <div className={classes.socialHandle}>
            <div className={classes.heading}>Let's Chat</div>
            <div className={classes.heading2}>@follow me on</div>
            <ul className={classes.list}>
                <li className={classes.listItem}><a href="https://www.linkedin.com/in/ummed-choudhary-32387a222/"><FaLinkedin className={classes.Icon}/></a></li>
                <li className={classes.listItem}><a href="https://twitter.com/UmmedCh81619452"><FaTwitterSquare className={classes.Icon}/></a></li>
                <li className={classes.listItem}><a href="https://www.instagram.com/ummed303/"><FaInstagramSquare className={classes.Icon}/></a></li>
                <li className={classes.listItem}><a href="https://github.com/ummed404"><FaGithubSquare className={classes.Icon}/></a></li>
            </ul>
        </div>
    )
}

export default SocialHandle