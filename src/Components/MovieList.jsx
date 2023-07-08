import { useState,useEffect,useRef } from 'react';
import Filter from './Filter';
import MovieCard from './MovieCard';

const MovieList = () => {
    const [movies,setMovies] = useState([
        {
        id : 1,
        title : 'Delphi Safari',
        description : 'kids Movies',
        posterURL : 'https://youtu.be/tcqip3ULaCY',
        rating : 2,
        image : 'https://upload.wikimedia.org/wikipedia/en/2/2a/Delhi_Safari_Poster.jpg'
    },
    
    {
        id : 2,
        title : 'Diamond Dog Caper',
        description : 'kids Movies',
        posterURL : 'https://youtu.be/MkjMrzT6TvA',
        rating : 3,
        image : 'https://is5-ssl.mzstatic.com/image/thumb/S7aADi2S93PZseiVoqBgSQ/1000x563.jpg'
    },
    
    {
        id : 3,
        title : 'TAXI',
        description : 'Driver Film',
        posterURL :'https://youtu.be/lEoLOHVl76U',
        rating :2,
        image : 'https://m.media-amazon.com/images/M/MV5BNjlmZmU4ODEtYTIwZC00Y2Y0LTlhYmEtM2E5MTAwMjUzNTRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR89,0,630,1200_AL_.jpg'
    }
])

const [filtredMovies, setFiltredMovies]= useState([])

const search = (type) =>{
setFiltredMovies(type.length === 0 ? movies: Object.entries(type)[0][0] === 'rating' ? 
                movies.filter(el=> el.rating === type.rating) : 
                movies.filter(el=> el.title.toLowerCase().includes(type.titleMovie.toLowerCase())))
}

const add = movie => {
    setMovies([...movies, movie]);
}

    return(
        <>
        <Filter movies={movies} search={search}/> 
        <br/><br/>
        <MovieCard add={add} />
        <br/><br/>
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
        {filtredMovies.map((e)=>
        <div>
        <a href={e.posterURL}><img src={e.image} alt="" width="300" height="300"/></a>  
        <br/>
        <label>Title : {e.title}</label>
        <br/>
        <label>Rating : {e.rating}</label>
        </div>
        )}
        </div>
        </>
    )
}

export default MovieList;