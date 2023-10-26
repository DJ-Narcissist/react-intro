import React from "react";

const Person = (props) => {
    const { name, age, hobbies } = props;

    let displayText = "Info on this person";
    if (name.length > 8) {
        name = name.substring(0,8) + "..."
    }

    return (
        <div>
            <p>{displayText}</p>
            {age > 18 ? <h3>GO Vote</h3> : <h3>Must be 18</h3>}
            <h2> {name} </h2>
            <p> Age: {age} </p>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}> {hobby} </li>
                ))}
            </ul>
        </div>
    );
};

export default Person;