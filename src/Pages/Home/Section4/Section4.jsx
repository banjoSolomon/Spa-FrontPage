import styles from './index.module.css';
import logo12 from "../../../asset/facials.png";
import logo13 from "../../../asset/pedicure.png";
import React from "react";

const Section4 = () => {
    return (
        <div className={styles.spa}>
            <div className={styles.view}>
                <p className={styles.scrub}>Facials<br/> With Scrub</p>
                <img src={logo12} alt="facials" className={styles.logo12}/>
            </div>
            <div className={styles.views}>
                <p className={styles.scrub}>Pedicure<br/> With Massage</p>
                <img src={logo13} alt="pedicure" className={styles.logo13}/>
            </div>
        </div>
    );
}

export default Section4;
