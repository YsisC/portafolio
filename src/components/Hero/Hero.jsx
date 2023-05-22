import React from "react";
import css from './Hero.module.scss'
import{motion} from "framer-motion"
import { fadeIn, staggerContainer} from '../../utils/motion'

const Hero=()=>{
    return(
        <section className={`paddings ${css.wrapper}`} >
          <a  className="anchor" id='hero'></a>
           <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.25}}
            className={`innerWidth ${css.container}`}>

                {/* Upper elements  */}
                <div className={css.upperElements}>
                <motion.span
                    variants={fadeIn("right", "tween", 0.2,1)}
                    className="primaryText"> 
                        Hey There, <br/> I'm Ysis Longart  
                    </motion.span>
                    <motion.span
                    variants={fadeIn("left", "tween", 0.4,1)}
                     className="secondaryText">
                        I develop webpages
                        <br/>
                        And I love what I do
                    </motion.span>
                </div>
                {/* Person Imagen  */}
            <motion.div
            variants={fadeIn("up", "tween", 0.3,1)}
             className={css.person}>
            <img className={css.me} src="./Ysiscl.png" alt="ysis" />
            {/* <img src="./person.png" alt="" /> */}
            </motion.div>

                {/* email  */}
            {/* <a href="mailto:ysisclongart@gmail.com" className={css.email}>
            ysisclongart@gmail.com
            </a> */}
            <a href="mailto:ysisclongart@gmail.com?
            Subject=Aquí%20el%20asunto%20del%20mail" className={css.email}>
                ysisclongart@gmail.com
            </a>
                    {/* Lower elements  */}
                <div className={css.lowerElements}>
                    <motion.div 
                      variants={fadeIn("right", "tween", 0.3,1)}
                    className={css.experience}>
                        <div className="primaryText">1</div>
                        <div className="secondaryText">   
                            <div> Years </div>
                            <div>Experience</div>
                        </div>
                    </motion.div>
                    <motion.div 
                      variants={fadeIn("left", "tween", 0.5,1)}
                    className={css.certificate}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFESIONAL</span>
                        <span>FRONT-END DEVELOPER</span>
                    </motion.div>
                </div>
      
            
            </motion.div>
      
        </section>   
        )
}
export default Hero