import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
   return (
      <div className={styles.footerWrapper}>
         <footer className={styles.footer}>
            <div className={styles.logo}>
               YOUR LOGO
            </div>
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
         </footer>
      </div>
   );
}


export default Header;