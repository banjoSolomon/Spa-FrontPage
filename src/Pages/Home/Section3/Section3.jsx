// Section3/index.js
import React from 'react';
import styles from './index.module.css';
import logo10 from "../../../asset/wax.png";
import logo11 from "../../../asset/face.png";
import logo12 from "../../../asset/massage.png";

const services = [
    { name: 'Waxing', icon: <img src={logo10} alt="wax" className={styles.logo10}/> },
    { name: 'Facials', icon: <img src={logo11} alt="face" className={styles.logo11}/> },
    { name: 'Massage', icon: <img src={logo12} alt="massage" className={styles.logo12}/> },
];

const Section3 = () => {
    return (
        <div className={styles.sec}>
            <div className={styles.our}>
                <h2 className={styles.service}>Our Services</h2>
                <p className={styles.description}>
                    A soothing environment in which you can rest, relax and feel completely rejuvenated.
                </p>
                <div className={styles.servicesContainer}>
                    {services.map((service) => (
                        <div key={service.name} className={styles.serviceItem}>
                            <div>{service.icon}</div>
                            <h3>{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section3;
