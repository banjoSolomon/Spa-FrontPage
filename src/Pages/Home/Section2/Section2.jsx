import styles from './index.module.css';
import logo6 from "../../../asset/deb.png";

const Section2 = () => {
    return (
        <div className={styles.mainCon}>
            <div className={styles.about}>
                <img src={logo6} alt="deb" className={styles.logo6} />
                <div className={styles.textContainer}>
                    <span className={styles.title}>Welcome To Bee Heaven Spa</span>
                    <p className={styles.text}>
                        At Bee Heaven Spa, we believe in the art of relaxation and rejuvenation.<br />
                        Step into a world where tranquility meets luxury, and allow yourself to unwind,<br />
                        recharge, and rediscover your inner peace. Your well-being is our priority<br />
                        and every treatment is designed to nourish your body, mind, and spirit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section2;