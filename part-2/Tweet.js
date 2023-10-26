import React from "react";
import './style.css';

const Tweet = (props) => {
    const { username, name, date, message } = props;
    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="username"> {username} </span>
                <span className="date"> {date} </span>
            </div>
            <div className="tweet-content">
                <p className="message"> {message} </p>
                <p className="name"> {name} </p>
            </div>
        </div>
    );
};

export default Tweet;