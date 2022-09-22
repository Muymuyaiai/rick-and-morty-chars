import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import axios from "axios";
import {Character} from "./model/character";

export default function App() {

    const [characters, setCharacters] = useState([])

    const updateCharacters = useCallback((results:Character[]) => {
        setCharacters((c) => c.concat.characters);
    }, [characters]);

    useEffect(() => {
        for (let i =1; i <= 13; i++) {
            axios.get("https://rickandmortyapi.com/api/character?page=" + i )
                .then((response) => {
                    return response.data
                })
                .then((data) => {
                    updateCharacters(data.results)
                    console.log(characters.length)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [])


    return (
        <CharacterGallery characters={characters}/>
    );
}