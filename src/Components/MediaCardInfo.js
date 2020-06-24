import React, {useState, useEffect} from "react";
import axios from "axios";
import MediaCard from "./MediaCard";

export default function MovieCard () {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=h2IFiYwRI55fbDe4Jd7nxFHQGpjlYEwA9MLIJ9ai`)
            .then(res => {
                console.log ("Res from useEffect of MediaCard", res);
                setPhoto(res.data);
            })
            .catch(err => {
                console.log("Error occured in useEffect of MediaCard: ", err);
            });
    }, []);

    return (
        <div className = "card-container">
            <div className = "image-container">
                <MediaCard image={photo}/>
            </div>
        </div>
    );
};
