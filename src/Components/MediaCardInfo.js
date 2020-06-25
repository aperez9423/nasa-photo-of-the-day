import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from 'styled-components'

const Image = styled.img`
    height: 40vh;
    width: 75vw;
    border: solid .3rem slateblue;
`
const Heading = styled.h2`
    font-size: 1.6rem;
    font-family: oxygen;
`
const Info = styled.h4`
    font-size: 1.2rem;
    font-family: oxygen;
`
const Paragraph = styled.p`
    font-size: 1.1rem;
    font-family: oxygen;
    margin: 2rem;
`
const Span = styled.span`
    font-size: 1.1rem;
    font-family: oxygen;
    font-weight: Bolder;
`

export default function MovieCard () {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=h2IFiYwRI55fbDe4Jd7nxFHQGpjlYEwA9MLIJ9ai&date=2020-06-24`)
            .then(res => {
                console.log ("Res from useEffect of MediaCard", res);
                setPhoto(res.data);
            })
            .catch(err => {
                console.log("Error occured in useEffect of MediaCard: ", err);
            });
    }, []);

    return (
        <div>
            <Heading>{photo.title}</Heading>
            <Info>Date: {photo.date}</Info>
            <Image src= {photo.hdurl} alt= "space"/>
            <Info>Image Credit and Copyright: {photo.copyright}</Info>
            <Paragraph><Span>Explanation: </Span>{photo.explanation}</Paragraph>
        </div>
    );
};
