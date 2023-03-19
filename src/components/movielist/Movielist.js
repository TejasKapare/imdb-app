import React,{useEffect,useState} from "react";
import Cards from "../cards/Card";
import "./Movielist.css";
import { useParams } from "react-router-dom";

const Movielist = ()=>{
    const[movielist,setMovielist]= useState([])
    const{type}=useParams()

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=03230186277626fdcb8e7f81ee7becda&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovielist(data.results))
    }
    return(
    <div className="movielist">
        <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2>
        <div className="list_cards">
            {
                movielist.map(movie=>(
                  <Cards movie={movie}/>  
                ))
            } 
        </div>
    </div>
)
}
export default Movielist