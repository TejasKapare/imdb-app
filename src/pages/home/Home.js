import React, { useEffect, useState } from "react";
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Movielist from "../../components/movielist/Movielist";

const Home= ()=>{

    const [popularmovies,setPopularmovies]=useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=03230186277626fdcb8e7f81ee7becda&language=en-US")
        .then(res=>res.json())
        .then(data=>setPopularmovies(data.results))
        
    },[])
    return(
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime='1'
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularmovies.map(movie=>(
                        <Link 
                        key = {movie.id}
                        style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">{movie?movie.original_title:""}</div>
                                <div className="posterImage_runtime">
                                    {movie?movie.release_date:""}
                                    <span className="posterImage_rating">
                                        {movie ? movie.vote_average:""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="posterImage_description">{movie?movie.overview:""}</div>
                            </div>
                        </Link>
                    )
                    )
                }
            </Carousel>
            <Movielist/>
        </div>
        </>
    )
}

export default Home
// API KEy ="03230186277626fdcb8e7f81ee7becda"