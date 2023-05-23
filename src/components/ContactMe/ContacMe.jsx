import { useRef } from 'react'
import css from './ContactMe.module.scss'
import { motion } from 'framer-motion'
import {  staggerChildren, textVariant } from '../../utils/motion'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

export default function ContacMe() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // service_lho7c0d
        emailjs.sendForm('service_lho7c0d', 'template_ozg6bnh', form.current, 'YlzgSN1UZ1WmJXYvs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (

        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper} `}>
                    <a  className="anchor" id='contactme'></a>
            <div className={`flexCenter ${css.container}`}>

                <h1 className='flexCenter primaryText'>Contact Me</h1>
                <p className='secondary flexCenter'>Get in touch</p>
                <div className={css.informationdiv}>


                    <form
                        ref={form}
                        onSubmit={sendEmail} >
                        <input type="text" placeholder="Your Name" name='user_name' required />
                        <input type="email" name='user_email' placeholder="Your Email Address" required />
                        <textarea placeholder="Your Message" name='message' rows="10" required />
                        <button type="submit" className='btn-primary'  > Send Message</button>
                    </form>

                    <motion.div 
                    variants={textVariant(0.5)}
                    className={css.rigthSideElement}>
                        <div className={css.info}>
                            <div> <AiOutlineMail /> </div>
                            <p>ysisclongart@gmail.com</p>
                        </div>
                        <div className={css.info}>
                            <div> <AiOutlineWhatsApp /> </div>
                            <p>+56-930739387</p>
                        </div>
                        <div className={css.info}>
                            <div> <AiOutlineWhatsApp /> </div>
                            <p>+56-930739387</p>
                        </div>
                    </motion.div>
                </div>

            </div>

        </motion.section>
    )
}
