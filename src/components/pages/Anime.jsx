import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { arr } from '../fakeData';
import './page.css';

const Anime = () => {
   const { id } = useParams();
   const [like, setLike] = useState(0);
   
   const getImage = () => {
      return arr.filter((_, index) => index === Number(id)).map(anime => (anime.image));
   }
   
   return (
      <div className="section">
         <img className="image" src={getImage()} alt="poster"/>
         {
            arr
            .filter((_, index) => index === Number(id))
            .map((anime, index) => (
               <div key={index}>
                  <h3>{anime.title}</h3>
                  <p><span>Лайков:</span> {like} <span onClick={() => setLike(prev => prev + 1)}>&hearts;</span></p>
                  <p><span>Год выхода:</span> {anime.year}</p>
                  <p><span>Жанр:</span> {anime.genre}</p>
                  <p><span>Описание:</span> {anime.desc}</p>
               </div>
            ))
         }
      </div>
   );
}

export default Anime;