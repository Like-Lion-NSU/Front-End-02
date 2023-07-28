import { useEffect, useState } from "react";
import Movie from "../movieComponents/Movie";
function Home(){
    const [loading, setLoading]=useState(true);
    const [movies,setMovies]=useState([])
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` //8.8 = 평점8.8 이상
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    },[])
    // useEffect(()=>{
    //     fetch(
    //         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year` 
    //     )
    //     .then((response)=>response.json())
    //     .then((json)=>{
    //         setMovies(json.data.movies);
    //         setLoading(false); //가져올거 다 가져왔으니까 laoding 끝
    //     });
    // },[])
    return <div>{loading ? <h1>Loading...</h1> :
    <div>{movies.map((movie)=>(
      <Movie 
        key={movie.id} //map안에서 component들을 render할 때 사용
        id={movie.id}
        coverImg ={movie.medium_cover_image} 
        title={movie.title} 
        summary={movie.summary} 
        genres={movie.genres}
      />
      /*<div key={movie.id}>
        <img src={movie.medium_cover_image}/>
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((g)=>(
            <li key={g}>{g}</li> 
          ))}
        </ul>
      </div> Movie 컴포넌트로 따로 빼내기 전*/
    ))}</div>
    }</div>
}
export default Home;