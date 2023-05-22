import React from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'


export default function Portfolio() {
    return (
        <motion.section
        variants={staggerChildren}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper} `}>
            <a  className="anchor" id='portfolio'></a>
            <div className={`innerWidth flexCenter ${css.container} `}>
                <div className={`flexCenter ${css.headding}`}>
                    <div>
                        <span className='primaryText'>My Latest Works</span>
                        <p style={{ marginTop: "10px" }}>Perfect solution</p>
                    </div>
                    <span className="secondaryText">
                        Explore more works
                    </span>
                </div>
                {/* Image */}
                <div className={`flexCenter ${css.showCase}`}>
                    <motion.img  variants={fadeIn("up", "tween", .5, .6)}
                        src="./burguer queen.png" alt='project' />
                    <motion.img variants={fadeIn("up", "tween", .7, .6)}
                        src="./foodgram.png" alt='project' />
                    <motion.img variants={fadeIn("up", "tween", .9, .6)}
                        src="./rickandmorty.png" alt='project' />

                </div>


            </div>
        </motion.section>
    )
}
