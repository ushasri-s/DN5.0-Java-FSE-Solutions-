import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import Home from "./Home";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Cognizant Academy</h1>

                <nav>
                    <Link to="/home">Home</Link>
                    {" | "}
                    <Link to="/trainers">Trainers</Link>
                </nav>

                <hr />

                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/home" replace />}
                    />

                    <Route
                        path="/home"
                        element={<Home />}
                    />

                    <Route
                        path="/trainers"
                        element={<TrainersList />}
                    />

                    <Route
                        path="/trainer/:id"
                        element={<TrainerDetails />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;