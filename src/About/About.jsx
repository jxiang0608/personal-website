import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './About.module.css';
import profilePic from './profile.jpg';

function About(){

    const bounceTransition = {
        y: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
        }
    }

    return(
        <div className={styles.container}>
            <div>
                <motion.img
                    className={styles.profileImage}
                    src={profilePic}
                    alt="profile picture"
                    transition={bounceTransition}
                    animate={{
                        y: ["0%", "-5%"]
                    }}
                />
            </div>
            {/* <div> */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Hi, I'm Joy! 👋🏻</h2>
                    <div className={styles.description}>
                        <p>
                            I'm a junior studying computer science and finance at the University of Rochester.
                            I love collaborating on front-end projects and financial models. Always interested
                            in getting to know more people!
                        </p>
                    </div>
                    <div className={styles.icons}>
                        <a href="https://github.com/jxiang0608" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/cxiang2/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><FaLinkedin /></a>
                        <a href="mailto:cxiang2@u.rochester.edu" target="_blank" rel="noopener noreferrer" className={styles.iconLink}><FaEnvelope /></a>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
export default About