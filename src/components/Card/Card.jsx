import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Card = ( { id, title, desc, image } ) => {
   const [number, setNumber] = useState(0); //state

   useEffect(() => {
      console.log(number);
   }, [number])


   return (
      <div className={styles.wrapper}>
         <NavLink to={`/anime/${id}`}>
            <img className={styles.image} src={image} alt="poster"/>
         </NavLink>
         <h4 className={styles.title} onClick={() => setNumber((prev) => prev + 1)}>{title}</h4>
      </div>
   );
}

export default Card;