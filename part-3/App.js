import React from "react";
import Person from "./Person";


const App = () => {
    return (
        <div>
            <Person 
             name = "Luka Faults"
             age = {34}
             hobbies = {["Running", "Cooking", "Video games"]}
            />
            <Person 
             name = "Manny Ruiz"
             age = {19}
             hobbies = {[ "Kayaking", "Fishing", "Shopping"]}
            />
        </div>
    );
};

export default App;