import "./CharacterGallery.css";
import {Character} from "../model/character";
import CharacterCard from "./CharacterCard";
import React from "react";

export default function CharacterGallery(props: { characters: Character[] }) {
    return <div>
        <p><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
                alt="Rick and Morty Gallery" width={500}/></p>
        <div className={"cards"}>{props.characters.map((character: Character) => <div
            className={"card"}>{CharacterCard({character})}</div>)}</div>
    </div>
}