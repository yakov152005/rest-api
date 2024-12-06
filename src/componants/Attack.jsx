import React, { useState } from "react";

export default function Attack(props) {
    const [selectedAttack, setSelectedAttack] = useState(null);


    const handleSelectChange = (event) => {
        const attackName = event.target.value;
        const attack = props.attacks.find((atk) => atk.name === attackName);
        setSelectedAttack(attack);
    };

    return (
        <div>
            <div className="item_name">
                <mark>Attacks:</mark>
                <select value={selectedAttack ? selectedAttack.name : "show-option"} onChange={handleSelectChange}>
                    <option value="show-option" disabled>
                        Show option
                    </option>
                    {props.attacks && props.attacks.length > 0 ? (
                        props.attacks.map((attack, index) => (
                            <option value={attack.name} key={index}>
                                {attack.name}
                            </option>
                        ))
                    ) : (
                        <option value="no-attacks" disabled>No attacks available</option>
                    )}
                </select>

                <div>
                    <mark>Damage:</mark>
                    {selectedAttack ? (
                        <b>{selectedAttack.damage === "" ? "No damage" : selectedAttack.damage}</b>
                    ) : (
                        <b>Select an attack to see damage.</b>
                    )}
                </div>
            </div>
        </div>
    );
}
