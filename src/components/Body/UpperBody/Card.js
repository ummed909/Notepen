import classes from "./Card.module.css";
import TypeWriter from 'typewriter-effect'  

const Card = () => {
	return(
        <div className={classes.card}>
            <div className={classes.massegebox}>
                <TypeWriter onInit={(typewriter=>{
                    typewriter.typeString("Hey Welcome to NotePen !")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Where you can write you Notes")
                    .pauseFor(3000)
                    .start()
                })}/>
            </div>
        </div>
    )
}

export default Card