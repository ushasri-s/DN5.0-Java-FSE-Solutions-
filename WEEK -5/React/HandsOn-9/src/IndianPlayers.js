import React from "react";

function OddPlayers({ first, third, fifth }) {
    return (
        <div>
            <h2>Odd Players</h2>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>
        </div>
    );
}

function EvenPlayers({ second, fourth, sixth }) {
    return (
        <div>
            <h2>Even Players</h2>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>
        </div>
    );
}

function IndianPlayers() {

    const players = [
        "Sachin1",
        "Dhoni2",
        "Virat3",
        "Rohit4",
        "Yuvraj5",
        "Raina6"
    ];

    const [
        first,
        second,
        third,
        fourth,
        fifth,
        sixth
    ] = players;

    const T20Players = [
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiTrophyPlayers = [
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const mergedPlayers = [
        ...T20Players,
        ...RanjiTrophyPlayers
    ];

    return (
        <div>

            <OddPlayers
                first={first}
                third={third}
                fifth={fifth}
            />

            <hr />

            <EvenPlayers
                second={second}
                fourth={fourth}
                sixth={sixth}
            />

            <hr />

            <h2>List of Indian Players Merged:</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>
                            Mr. {player}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default IndianPlayers;