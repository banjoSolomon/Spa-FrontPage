import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import styles from './index.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h2>Recent Post</h2>
                    <p>“Embrace the new season with fresh beauty tips and wellness advice. Check out our latest post to
                        discover how small changes can make a big difference in your daily routine.”</p>
                    <ul>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Career</li>
                        <li>Our Team</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>Working Hours</h2>
                    <ul>
                        <li>Monday – Friday: 9am – 10pm</li>
                        <li>Saturday: 10am – 10pm EST</li>
                        <li>Sunday: 12am – 10pm EST</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>Contact Us</h2>
                    <p>7 Adebare Street Ogudu</p>
                    <p>Phone: (+234)8066306125</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Copyright Bee Heaven Beauty Spa. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://wa.me/2348066306125" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/beehavenbeautyspa/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
