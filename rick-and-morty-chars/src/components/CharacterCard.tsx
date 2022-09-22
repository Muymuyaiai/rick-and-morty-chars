import "./CharacterCard.css";
import {Character} from "../model/character";

export default function CharacterCard(props: { character: Character }) {
    return (
        <div className={"character-card"}>
            <h3>{props.character.name}</h3>
            <p><img src={props.character.image} alt={props.character.name} width="200" height="200"/></p>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
        </div>
    )
}