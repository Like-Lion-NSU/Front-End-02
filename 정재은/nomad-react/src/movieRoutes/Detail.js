import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Mdetail from "../movieComponents/Mdetail";

//MovieOne.js에서 Route  path="/movie/:id" 와 세트, :id의 값을 넘겨줌, url에서의 id값
function Detail(){
    const {id}=useParams();
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
      };
      useEffect(() => {
        getMovie();
      }, []); //어떠한 것에서도 간섭받지 않도록 해준다는 느낌
    const [movie, setMovie]=useState({}); //빈 객체 {}를 초기값
    return (
    <div>
        <h1>Detail</h1>
        <Mdetail
        src={movie.medium_cover_image}
        description={movie.description_full}
        genres={movie.genres}
        url={movie.url}
        rating={movie.rating}
        />
    </div>
    )
}
export default Detail;