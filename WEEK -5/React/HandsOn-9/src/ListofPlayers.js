import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 88 },
        { name: "Gill", score: 65 },
        { name: "Rahul", score: 72 },
        { name: "Hardik", score: 68 },
        { name: "Jadeja", score: 75 },
        { name: "Pant", score: 60 },
        { name: "Surya", score: 90 },
        { name: "Shami", score: 55 },
        { name: "Bumrah", score: 80 },
        { name: "Siraj", score: 45 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Score Below 70</h2>

            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;