import React from "react";
import css from './Heros.module.scss'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../utils/motion'
// import { Typical} from 'react-typical'
import { ReactTypical } from '@deadcoder0904/react-typical'

import { AiFillGithub, AiFillLinkedin, } from 'react-icons/ai'
import { SiCodewars } from 'react-icons/si'
const Heros = () => {
    return (
        <section className={`paddings ${css.wrapper}`} >
            <div

                className={`innerWidth flexCenter ${css.container}`}>
                <div className={css.leftElement}>
                    <div className={css.profile_details_nameleftElement}>


                        <div className={`${css.icon}`}>
                            <a href="https://github.com/YsisC"><AiFillGithub size={30} /> </a>
                            <a href="https://www.linkedin.com/in/ysis-carolina-longart-rivero/"><AiFillLinkedin size={30} /> </a>
                            <a href="https://www.codewars.com/users/YsisC"><SiCodewars size={30} /> </a>

                        </div>
                        <div className={css.profile_details_name}>
                            <span className={`primaryText`}>
                                {" "}
                                Hello, I'm <span className={css.highted_text}> Ysis Longart </span>
                            </span>
                        </div>
                        <div className={css.profile_detail_role}>
                            <span className="primaryText">
                                {" "}
                                <h1>

                                    <ReactTypical
                                        steps={[
                                            'React/ Angular 💻 ', 2000,
                                            'Front-end Developer 🖥 ', 2000
                                           
                                        ]}
                                        loop={2}
                                        wrapper="p"
                                    />

                                </h1>
                                <span className={css.profile_role_tagline}>
                                    I develop webpages
                                    <br />
                                    And I love what I do
                                </span>
                            </span>
                        </div>
                        <div className={css.profile_options}>
                            <button className={css.btn}>
                                {""}
                                Hire Me
                            </button>
                            <a href="YsisLongart..pdf" download="Ysis ysislongart.pdf">
                                <button  className={css.btn}> Get resumen</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div className={css.rigthElement}>
               <div className={css.profile_picture}>
               <div className={css.profile_picture_background}>
               </div>
               </div>
                </div>

            </div>

        </section>
    )
}
export default Heros