import React from "react";
import FirstComponent from "./FirstComponent";
import NamedComponent from "./NamedComponenet";

function App () {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Joe" />
        </div>
    );
};

export default App;