import React from "react";
import Tweet from "./Tweet";

const App = () => {
    return (
        <div>
            <Tweet
            name={"James Thomas"}
            username={"JT_Money"}
            date={new Date().toDateString()}
            message={"OFWGFTKA"}
            />
            <Tweet
            name={"Chris Carl"}
            username={"KrissCross23"}
            date={new Date().toDateString()}
            message={"WELL HOW THE TURNTABLES!!!"}
            />
        </div>
    );
};

export default App;
