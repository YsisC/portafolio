import React, { useState } from "react";
import css from './Header.module.scss';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow'
import logo from '../../assets/logo.svg'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: false, aumount: 0.25 }}
            className={`paddings ${css.wrapper}`
            }
            style={{ boxShadow: headerShadow }}
        >
            {/* <div  className={`paddings ${css.wrapper}`}>  */}


            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    <a href="#hero"> <img src={logo} alt="logo" className={css.logo} /></a>
                </div>
                <ul
                    style={getMenuStyles(menuOpened)}
                    className={`flexCenter ${css.menu}`}>

                    <li > <a href="#about">About me</a></li>
                    <li > <a href="#skills">Skills</a></li>
                    <li > <a href="#work">Experience</a></li>
                    <li > <a href="#portfolio">Portfolio</a></li>
                    <li className={`flexCenter ${css.phone}`}>
                        <a href="#contactme"> Contact me </a>

                        <a href="#contactme">  <BiPhoneCall size={"40px"} /></a>
                    </li>
                </ul>
                {/* Para telefonos pequeños  */}
                <div
                    className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30} />

                </div>
            </div>
        </motion.div>

        // </div> 
    )
}
export default Header