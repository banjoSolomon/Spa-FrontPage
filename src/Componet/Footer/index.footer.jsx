import styles from './index.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h2>Recent Post</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
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
                        <li>Monday – Friday: 8am – 6pm EST</li>
                        <li>Saturday: 9am – 5pm EST</li>
                        <li>Sunday: 9am – 4pm EST</li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2>Contact Us</h2>
                    <p>90 St Johns Brooklyn, NY, United States</p>
                    <p>Email: contact.louisvillebeautysalon@gmail.com</p>
                    <p>Phone: (+01) 888-999-777</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Copyright Louisville Beauty Salon. All rights reserved.</p>
                <div className={styles.socialLinks}>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Pinterest</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;