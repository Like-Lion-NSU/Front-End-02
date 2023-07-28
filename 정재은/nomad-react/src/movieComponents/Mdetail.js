import { Link } from "react-router-dom";

function MDetail({ title, src, description, genres, url, rating }) {
  return (
    <div>
      <h1>
        <a href={url} target="_blank">
          {title}
        </a>
      </h1>
      <img src={src} alt={title} />
      <h4>description</h4>
      <p /> {description}
      <h4>Movie Rating: {rating}</h4>
      <div>
        <h4>genres</h4>
        <ul>
          {genres && genres.map((g)=>( //장르가 있을 때 만 장르가 나오도록 genres &&
            <li key={g}>{g}</li> 
          ))}
        </ul>
      </div>
      <br />
      <hr />
      <a href={url} target="_blank">
        Go to the site&rarr;
      </a>
      <p />
      <Link to="/home">Go to the Movie List &rarr;</Link>
    </div>
  );
}
export default MDetail;