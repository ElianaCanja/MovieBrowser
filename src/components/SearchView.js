import Hero from "./Hero";
import { Link } from "react-router-dom";
import fallbackPoster from "../assets/No-image-found.jpg"
//TMDB API KEY 761f229934f98313541b7cddd6d1e86b

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title}
                    onError={(e) => {
                        e.target.src = fallbackPoster;
                    }} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}



const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const resultHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />

    })
    return (
        <>
            <Hero text={title} />

            {keyword && searchResults.length === 0 && (
                <div className="container text-center mt-4">
                    <h3>Sorry, we haven't found anything</h3>
                </div>
            )}


            {searchResults.length > 0 && (
                <div className="container">
                    <div className="row">
                        {resultHtml}
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchView;