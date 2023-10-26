import React from "react";
import FirstComponent from "./FirstComponent";
import NamedComponent from "./NamedComponenet";

const app =  () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Joe" />
        </div>
    );
};

export default app;