export const Movies = ({ listaNaFilmovi }) => {
    return (
        <div id='movies-list'>
            {listaNaFilmovi.map((film, index) => {
                return (
                    <div key={index}>
                        <img src={film.imgUrl} alt={film.name} width="120" />
                        <h3>Movie Name: {film.name}</h3>
                        <p><strong>Date:</strong> {film.date}</p>
                        <p><strong>Genre:</strong> {film.genre}</p>
                        <p><strong>Plot:</strong> {film.plot}</p>
                        <p>
                            <a href={film.imdbLink} target="blank" rel="noreferrer">
                                <p><strong>Link:</strong> IMDb Movie</p>
                            </a>
                        </p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}