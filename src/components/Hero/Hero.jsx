import Card from '../Card/Card';
import styles from './Hero.module.css';
import { arr } from '../fakeData';

const Hero = ({ fetching }) => {
   if(fetching){
      return <div>Good</div>
   }
   
   return (
      <div className={styles.wrapper}>
         {
            arr.map((anime, index) => <Card 
               key={index}
               id={index}
               title={anime.title} 
               desc={anime.desc}
               image={anime.image}
            />)
         }
      </div>
   )
}

export default Hero;