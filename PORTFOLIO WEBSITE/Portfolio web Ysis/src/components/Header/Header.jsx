import React, { useState } from "react";
import css from './Header.module.scss';
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import{motion}from 'framer-motion';
import  {getMenuStyles, headerVariants}from '../../utils/motion';
// css
const Header =()=>{
    const[menuOpened, setMenuOpened]=useState(false)
    return(
        <motion.div
        initial="hidden" 
        whileInView="show"
        variants={headerVariants}
        viewport = {{once: false, aumount:0.25}}

        className={`paddings ${css.wrapper}`}>
     {/* <div  className={`paddings ${css.wrapper}`}>  */}


            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                  Ysis 
                 </div>
                <ul
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu }`}> 
                    <li > <a href="">Servicios</a></li>
                    <li > <a href="">Experiencia</a></li>
                    <li > <a href="">Portafolio</a></li>
                    <li > <a href="">Testimonios</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                     <p> +56930739387</p>
                     <BiPhoneCall size ={"40px"}/>
                      </li>
                  </ul>
                {/* Para telefonos pequeños  */}
                  <div 
                  className={css.menuIcon}
                  onClick={()=>setMenuOpened((prev)=>!prev)}>
                  <BiMenuAltRight size={30}/>

                  </div>
            </div>
         </motion.div> 

// </div> 
    )
}
export default Header