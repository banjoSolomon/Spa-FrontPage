import { useEffect, useState } from 'react';
import styles from './index.module.css';
import logo1 from '../../asset/Vector (3).png';
import logo2 from '../../asset/Vector (4).png';
import logo3 from '../../asset/Union.png';
import logo4 from '../../asset/bee.jpeg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.head}>
                <img src={logo4} alt="Bee" className={styles.logo4} />
                <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </div>
                <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Gallery</p>
                    <img src={logo1} alt="Vector" className={styles.logo1} />
                    <p>7 Adebare Street Ogudu</p>
                    <img src={logo2} alt="Vector" className={styles.logo2} />
                    <p>+234 806 630 6125</p>
                    <img src={logo3} alt="Union" className={styles.logo3} />
                    <p>Mon-Sun: 9am-10pm</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
