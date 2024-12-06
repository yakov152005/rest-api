import Item from "./Item.jsx";

export default function Cards(props) {
    return (
        <div>
            {
                props.cards.map((card, index) => (
                    <Item
                        key={index}
                        number={card.number}
                        name={card.name}
                        attacks={card.attacks}
                        image={card.image}
                        date={card.date}
                    />
                ))
            }
        </div>
    )
}