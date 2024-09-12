// Section5/index.js
import React from "react";
import styles from './index.module.css';
import logo20 from "../../../asset/tiz.png";
import logo21 from "../../../asset/pro1.png";

const Section5 = () => {
    return (
        <div className={`${styles.offers} wow animate__animated animate__zoomInDown`}>
            <div className={`${styles.special} wow animate__animated animate__zoomInDown`}>
                <p>Our Special Offers</p>
                <p>20% Off All Spa Services: Enjoy a 20% discount on all wellness treatments.<br/>
                    Treat yourself to the luxury you deserve.</p>
                <p>
                    Enroll in our specialized training sessions on holistic wellness, skincare,
                    and massage techniques.<br/> Learn from the experts and take your skills to the next level.<br/>
                    Hurry, these offers won't last forever!
                </p>
            </div>
            <div className="wow animate__animated animate__zoomInDown">
                <img src={logo20} alt="offer1" className={`${styles.logo20} wow animate__animated animate__zoomInDown`} />
                <img src={logo21} alt="offer2" className={`${styles.logo21} wow animate__animated animate__zoomInDown`} />
            </div>
        </div>
    );
}

export default Section5;
