import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";
import{ AiFillGithub} from 'react-icons/ai'

import { TiWorld } from 'react-icons/ti'
export default function Portfolio() {
  const handleImageClick = (url) => {
    window.open(url, "_blank");

  };
  
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.headding}`}>
          <div>
            <span className="primaryText">My latest projects</span>
            <p style={{ marginTop: "10px" }}>Perfect solution</p>
          </div>
          <a href="https://github.com/YsisC?tab=repositories" target="_blank">
            <span className="secondaryText">Explore more works</span>
          </a>
        </div>
        {/* Image */}
        <div className={`flexCenter ${css.showCase}`}>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
              <motion.img
                variants={fadeIn("up", "tween", 0.4, 0.6)}
                src="./app gif.png"
                alt="project"
              />
              <div className={`${css.proj_txtx}`}>
                <h4>ANGULAR GIF APP</h4>
                <span>ABILITIES: ANGULAR, API, BOOTSTRAP, HTML AND CSS</span>
                <div>
                   <a href="https://gif-apps-angular.vercel.app/" target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/gifApps-angular" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            onClick={() =>
              handleImageClick("https://dev-003-burger-queen-api-client-o7uo5f1jy-ysisc.vercel.app/login/")
            }
            src="./burguer queen.png"
            alt="project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>BURGUER QUEEN APP</h4>
                <span>ABILITIES: ANGULAR, BOOTSTRAP, JSONSERVER, API CLIENT, HTML AND CSS</span>
                <div>
                   <a href="https://dev-003-burger-queen-api-client-o7uo5f1jy-ysisc.vercel.app/login/" target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/DEV003-burger-queen-api-client" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            onClick={() =>
              handleImageClick("https://foodgram-social-network.netlify.app/")
            }
            src="./foodgram.png"
            alt="foodgram project"
          />
        <div className={`${css.proj_txtx}`}>
                <h4>FOODGRAM APP</h4>
                <span>ABILITIES: JAVASCRIPT, HTML, CSS</span>
                <div>
                   <a href="https://foodgram-social-network.netlify.app" target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/DEV003-social-network" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>
         

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://www.npmjs.com/package/ysisc-md-links")
            }
            src="./mdlink.png"
            alt="md links project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>MD LINKS NPM</h4>
                <span>ABILITIES: NODE AND NPM</span>
                <div>
                   <a href="https://www.npmjs.com/package/ysisc-md-links" target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/DEV003-md-links" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>
    
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://dev-003-notes.vercel.app/")
            }
            src="./labnote.png"
            alt="Lab note project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>LAB NOTES APP</h4>
                <span>ABILITIES: NEXT, TAILWIND, FIREBASE</span>
                <div>
                   <a href="https://dev-003-notes.vercel.app/login" target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/DEV003-notes" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>
     

          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
            <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            onClick={() =>
              handleImageClick("https://calculadora-redux-ysisc.vercel.app/")
            }
            src="./calculator.png"
            alt="calculator project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>CALCULATOR</h4>
                <span>ABILITIES: NEXT, TYPESCRIPT, REDUX, HTML, CSS</span>
                <div>
                   <a href="https://calculadora-redux-ysisc.vercel.app/"  target="_blank"><TiWorld /> Web </a> 
                   <a href="https://github.com/YsisC/calculadora-redux" target="_blank"> <AiFillGithub /> Github </a> 
                </div>  
              </div>
            </div>
          </div>
        </div>

        
      
      </div>
    </motion.section>
  );
}
