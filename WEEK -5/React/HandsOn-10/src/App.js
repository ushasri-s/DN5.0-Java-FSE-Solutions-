import React from "react";
import officeImage from "./Office.jpg";

function App() {

    const officeList = [
        {
            name: "Tech Park",
            rent: 55000,
            address: "Bangalore"
        },
        {
            name: "Business Hub",
            rent: 75000,
            address: "Hyderabad"
        },
        {
            name: "Corporate Plaza",
            rent: 45000,
            address: "Chennai"
        }
    ];

    return (
        <div style={{ margin: "20px" }}>

            <h1>Office Space Rental App</h1>

            <img
                src={officeImage}
                alt="Office Space"
                width="400"
                height="250"
            />

            <hr />

            {
                officeList.map((office, index) => (
                    <div key={index} style={{ marginBottom: "20px" }}>

                        <h2>{office.name}</h2>

                        <h3
                            style={{
                                color:
                                    office.rent < 60000
                                        ? "red"
                                        : "green"
                            }}
                        >
                            Rent: ₹{office.rent}
                        </h3>

                        <h4>Address: {office.address}</h4>

                        <hr />

                    </div>
                ))
            }

        </div>
    );
}

export default App;