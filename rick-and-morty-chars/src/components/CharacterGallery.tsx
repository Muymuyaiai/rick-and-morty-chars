import "./CharacterGallery.css";
import {Character} from "../model/character";
import CharacterCard from "./CharacterCard";
import React, {useState} from "react";

export default function CharacterGallery(props: { characters: Character[] }) {
    const [data, setData] = useState("");

    return <div>
        <p><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
                alt="Rick and Morty Gallery" width={500}/>
        </p>
        <input onChange={(event) => setData(event.target.value)} placeholder={'Character search'}/>
        <div className={"cards"}>
            {props.characters.filter(({name}) => name.toLowerCase().includes(data.toLowerCase())).map((character: Character) => <div
                className={"card"}>{CharacterCard({character})}</div>)}
        </div>
    </div>
}