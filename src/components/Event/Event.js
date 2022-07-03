import React from 'react';

const Event = ({ item }) => {
    return (
        <li>
            <span className="Event">{item.event}</span>
            <span className="Time">{item.time}</span>
            <span className="Place">{item.place}</span>
            <span className="Date">{item.date}</span>
            <span className="Day">{item.day}</span>
            <button className="Mail">Email and Update</button>
        </li>
    );
}

export default Event;