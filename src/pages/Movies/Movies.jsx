import React, { useEffect, useState } from "react";
import DataGrid, { Column, Paging } from "devextreme-react/data-grid";
import "./Movies.scss";
import { Pagination } from "./Pagination/Pagination";


export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 5;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirst  = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirst, indexOfLastMovie);

    useEffect(() => {
        console.log("Был ререндер");
        fetch("http://localhost:3000/movies")
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error("Ошибка загрузки фильмов: ", error));
    }, []);

    return (
        <>
            <div className="movies-list" style={{margin: '40px'}}>
                <h2>Список фильмов</h2>
                {movies.length > 0 ? (
                    currentMovies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <div className="movie-title">
                            <p>{movie.title}</p>
                        </div>
                        <div>
                            <img 
                                src={movie.poster} 
                                alt="Тут должен быть постер фильма"
                                onError={(e) => {
                                    e.target.onerror = null; // предотвращает бесконечный цикл
                                    e.target.src = "../images/ironman.jpeg";
                                }}
                            />
                        </div>
                    </div>
                    ))
                ) : (
                    <p>Фильмов нет. Кинотеатр пустует</p>
                )}
            </div>
            <Pagination 
                currentPage={currentPage}
                totalItems={movies.length}
                itemsPerPage={moviesPerPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
}