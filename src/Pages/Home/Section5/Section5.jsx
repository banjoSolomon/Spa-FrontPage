import styles from './index.module.css'
import logo13 from "../../../asset/pedicure.png";
import React from "react";
import logo20 from "../../../asset/tiz.png"
import logo21 from "../../../asset/pro1.png"

const Section5 = () => {

    return (
       <div className={styles.offers}>
           <div className={styles.special}>
               <p>Our Special Offers</p>
               <p>20% Off All Spa Services: Enjoy a 20% discount on all wellness treatments.<br/>
                   Treat yourself to the luxury you deserve.</p>
               <p>
                   Enroll in our specialized training sessions on holistic wellness, skincare,
                   and massage techniques.<br/> Learn from the experts and take your skills to the next level.<br/>
                   Hurry, these offers won't last forever!
               </p>
           </div>
           <div>
               <img src={logo20} alt="pedicure" className={styles.logo20}/>
               <img src={logo21} alt="pedicure" className={styles.logo21}/>
           </div>
       </div>
    )
}

export default Section5