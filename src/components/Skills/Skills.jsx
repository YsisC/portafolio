import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from '../../utils/motion'
import css from './Skills.module.scss'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiAngularSimple, DiCss3, DiReact } from 'react-icons/di'
import { TbBrandJavascript} from 'react-icons/tb'
import { SiTypescript } from 'react-icons/si'

export default function Skills() {
  return (
    <motion.section
      variants={staggerChildren}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper} `}>
      <div className={`flexCenter ${css.container}`}>

        <a className="anchor" id='skills'></a>
        <h1 className="primaryText flexCenter">My skills</h1>
        <p className="secondaryText flexCenter">My knowledge</p>
        <motion.div  variants={fadeIn("up", "tween", .4, .5)} className={`flexCenter ${css.cardList}`}>

        <div   className={`flexCenter ${css.card}`}>
            <div className={`flexCenter ${css.circle_advance}`}> <AiFillHtml5 size={45} /> </div>
            <p>Intermediate</p>
          </div>

          <div  className={`flexCenter ${css.card}`}>
            <div className={`flexCenter ${css.circle_advance}`}> <DiCss3 size={45} /> </div>
            <p>Advanced</p>

          </div>

          <div className={`flexCenter ${css.card}`}>
          <div className={`flexCenter ${css.circle_intermediate}`}>    <TbBrandJavascript size={45} />  </div>
         
            <p>Intermediate</p>

          </div>
          
          <div className={`flexCenter ${css.card}`}>
            <div className={`flexCenter ${css.circle_intermediate}`}> <DiReact size={45} /> </div>
            <p>Intermediate</p>

          </div>
          <div className={`flexCenter ${css.card}`}>
            <div className={`flexCenter ${css.circle_intermediate}`}> <DiAngularSimple size={45} /> </div>
            <p>Intermediate</p>

          </div>
          <div className={`flexCenter ${css.card}`}>
            <div className={`flexCenter ${css.circle_intermediate}`}><SiTypescript size={45} /> </div>
            <p>Intermediate</p>

          </div>
         


        </motion.div>

      </div>
    </motion.section>
  )
}
