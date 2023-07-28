import PropTypes from "prop-types"
import {Link} from "react-router-dom"//브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜줌
function Movie({id, coverImg, title, summary, genres}){
    return (
        <div>
        <img src={coverImg}/>
        <h2><Link to={`movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g)=>(
            <li key={g}>{g}</li> 
          ))}
        </ul>
      </div>
    )
}
Movie.propTypes={
    id: PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired, //장르는 배열
}
export default Movie