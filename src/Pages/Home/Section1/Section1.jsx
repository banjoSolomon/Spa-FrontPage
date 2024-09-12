import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import logo5 from "../../../asset/10967 1.png";

const Section1 = () => {
    const openHour = 9;
    const closeHour = 22;


    const initTime = () => {
        const now = new Date();
        return now.getHours() < openHour ? new Date(now.setHours(openHour, 0, 0, 0)) : now; // Set to open hour if before 9 AM
    };

    const [time, setTime] = useState(initTime());
    const [status, setStatus] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTime = new Date();
            setTime(newTime);
            updateStatus(newTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const updateStatus = (currentTime) => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        if (hours === openHour && minutes === 0) {
            setStatus("Now Open");
        } else if (hours === closeHour && minutes === 0) {
            setStatus("Now Closed");
        } else if (hours >= openHour && hours < closeHour) {
            setStatus("Open");
        } else {
            setStatus("Closed");
        }
    };

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return { hours, minutes, seconds };
    };

    const { hours, minutes, seconds } = formatTime(time);

    // Determine status color
    const statusColor = status.includes("Closed") ? styles.closed : styles.open;

    return (
        <div className={styles.mainContainer}>
            <div>
                <p className={styles.text}>
                    <span className={styles.span}>Be Beautiful</span><br />You Need Time For<br />Perfection
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img src={logo5} alt="Vector" className={styles.logo5} />
                <div className={styles.myTime}>
                    <div className={styles.timeUnit}>
                        <span className={`${styles.digit}`}>{hours}</span>
                        <span className={styles.label}>hours</span>
                    </div>
                    <span>:</span>
                    <div className={styles.timeUnit}>
                        <span className={`${styles.digit}`}>{minutes}</span>
                        <span className={styles.label}>minutes</span>
                    </div>
                    <span>:</span>
                    <div className={styles.timeUnit}>
                        <span className={`${styles.digit}`}>{seconds}</span>
                        <span className={styles.label}>seconds</span>
                    </div>
                </div>
                <div className={`${styles.status} ${statusColor}`}>{status}</div>
            </div>
        </div>
    );
}

export default Section1;