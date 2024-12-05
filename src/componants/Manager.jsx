import {useEffect, useState} from "react";
import Cards from "./Cards.jsx";
import {API_POKEMON} from "../utils/constant";

export default function Manager() {
    const [dataCard, setDataCard] = useState([]);

    useEffect(() => {

        const fetchDataCard = async () => {

            try {
                const response = await fetch(API_POKEMON);
                const result = await response.json();
                console.log(result);

                const formatDataCard = result.data.map
                (card => ({
                    name: card.name,
                    date: card.set.releaseDate,
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
        <div className="Manager">
            <Cards cards={dataCard}></Cards>
        </div>
    )
}