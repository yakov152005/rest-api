import {useEffect, useState} from "react";
import Cards from "./Cards.jsx";
import {API_POKEMON} from "../utils/constant";

export default function Manager() {
    const [dataCard, setDataCard] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {

        const fetchDataCard = async () => {

            try {
                const response = await fetch(API_POKEMON);
                const result = await response.json();
                console.log(result);

                const formatDataCard = result.data.map
                (card => ({
                    number: card.number,
                    name: card.name,
                    date: card.set.releaseDate,
                    attacks: card.attacks,
                    image: card.images.small,
                }))
                setDataCard(formatDataCard);
            } catch (err) {
                console.log(err);
            }
        }
        fetchDataCard()

    }, []);


    return (
        <div>
            <div>
                <div>
                    <h1>Hello {name ? name : "Guest"}</h1>
                    <input
                        className="name-input"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
            </div>
            <div className="Manager">
                <Cards cards={dataCard}></Cards>
            </div>
        </div>
    )
}