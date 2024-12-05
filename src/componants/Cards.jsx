import Item from "./Item.jsx";

export default function Cards(props) {
    return (
        <div>
            {
                props.cards.map((card, index) => (
                    <Item
                        key={index}
                        name={card.name}
                        image={card.image}
                        date={card.date}
                    />
                ))
            }
        </div>
    )
}