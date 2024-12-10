import {useEffect, useState} from "react";
import Cards from "./Cards.jsx";
import {API_POKEMON} from "../utils/constant";

export default function Manager() {
    const [dataCard, setDataCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);


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
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch data.");
                setLoading(false);
            }
        }
        fetchDataCard()

    }, []);


    if (loading) {
        return (
            <div>
                <div>
                    <b>Loading...</b>
                    <div className="spinner-border text-primary" role="status"/>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        👍🏻
                    </button>
                    <b style={{color: "blue"}}>{count}</b>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (dataCard.length === 0) {
        return <div>No data found.</div>;
    }


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