import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import axiosConfig from "../axiosconfig/axiosConfig";
import "./movie.css"
import { useDispatch, useSelector } from "react-redux";
import addFav from "../../store/action/actions";
const Movie = () => {
    const favMovie = useSelector(state => state.movies)

    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {

        axiosConfig.get(`/movie/popular?page=${page}`, {
        }).then((res) => {

            console.log(res.data);
            setMovies(res.data.results)

        }).catch((err) => {
            console.log(err);
        })
    }, [page])
    const previous = () => {
        setPage(page - 1);
    }
    const next = () => {
        setPage(page + 1)
    }

    const handleFav = (movie) => {
        dispatch(addFav(movie))
    }

    return (
        <>
            <div className="d-flex flex-wrap">
                {movies.map(function (movie) {
                    return <div key={movie.id}>
                        <Card className="m-5" style={{ width: "15rem" }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Text>{movies.overview}</Card.Text>
                                <Card.Title><Link to={`/details/${movie.id}`}>{movie.title}</Link> </Card.Title>
                                <button onClick={() => handleFav(movie)} style={{
                                    color: favMovie.find((item) => {
                                        return item.id === movie.id;
                                    }) ? "red" : "",
                                }}><i class="fa-solid fa-heart"></i></button>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>
            <div className="d-flex justify-content-around">
                <div >
                    <Button variant="warning" disabled={page === 1} onClick={() => previous()}>previous</Button>
                </div>
                <div >
                    <Button variant="warning" disabled={page === 20} onClick={() => next()}>next</Button>
                </div>
            </div>
        </>
    )
}
export default Movie