import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.inner}>
            <nav className={styles.navbar}>
                  <ul className={styles.linkContainer}>
                     <li className={styles.link}>
                        <NavLink to="/">Home</NavLink>
                     </li>
                     <li className={styles.link}>
                        <NavLink to="/about">About</NavLink>
                     </li>
                     <li className={styles.link}>
                        <NavLink to="/contact">Contact us</NavLink>
                     </li>
                     <li className={styles.link}>
                        <NavLink to="/anime">Anime</NavLink>
                     </li>
                  </ul>
               </nav>
            <div className={styles.contact}>
               <ul className={styles.linkContainer}>
                  <li className={styles.link}>+7 777 777 77 77</li>
                  <li className={styles.link}>Kazakhstan, Almaty, Almaly distr.</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Footer;