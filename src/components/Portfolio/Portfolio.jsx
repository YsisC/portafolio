import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

export default function Portfolio() {
  const handleImageClick = (url) => {
    window.location.href = url;
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
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>Perfect solution</p>
          </div>
          <a href="https://github.com/YsisC?tab=repositories">
            <span className="secondaryText">Explore more works</span>
          </a>
        </div>
        {/* Image */}
        <div className={`flexCenter ${css.showCase}`}>
          <div className={`${css.cardProject}`}>
            <div className={`${css.proj_imgbx}`}>
              <motion.img
                variants={fadeIn("up", "tween", 0.4, 0.6)}
                onClick={() =>
                  handleImageClick("https://gif-apps-angular.vercel.app/")
                }
                src="./app gif.png"
                alt="project"
              />
              <div className={`${css.proj_txtx}`}>
                <h4>ANGULAR GIF APP</h4>
                <span>ABILITIES: ANGULAR, API AND BOOTSTRAP</span>
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
                <span>ABILITIES: ANGULAR, BOOTSTRAP, JSONSERVER, API CLIENT</span>
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
            alt="project"
          />
        <div className={`${css.proj_txtx}`}>
                <h4>FOOFGRAM APP</h4>
                <span>ABILITIES: JAVASCRIPT, HTML, CSS</span>
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
            alt="project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>MD LINKS NPM</h4>
                <span>ABILITIES: NODE AND NPM</span>
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
            alt="project"
          />
              <div className={`${css.proj_txtx}`}>
                <h4>LAB NOTES APP</h4>
                <span>ABILITIES: NEXT, TAILWIND, FIREBASE</span>
              </div>
            </div>
          </div>
     
        </div>
      </div>
    </motion.section>
  );
}
