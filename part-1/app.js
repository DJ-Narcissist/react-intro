import React from "react";
import FirstComponent from "./FirstComponent";
import NamedComponent from "./NamedComponenet";

function App () {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="YourNameHere" />
        </div>
    );
};

export default App;