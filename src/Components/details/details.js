import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosConfig from "../axiosconfig/axiosConfig";
import './details.css';


const DetailsOfMovies = () => {
    const { id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axiosConfig.get(`/movie/${id}`).then((res) => {
            // console.log(res);

            setMovies(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [id])
    return (
        <div className="container row desc">
            {/* {movies.overview} */}
            <img className="col-6" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt=""/>
            <div className="col-6">
                <h1>{movies.title}</h1>
                <p>{movies.overview}</p>
            </div>
        </div>
    );
}

export default DetailsOfMovies;