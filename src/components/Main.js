import React, {useState, useEffect} from 'react';
import './Main.css';
import Event from './Event/Event';
import { View } from './view';
const getDatafromLS=()=>{
    const data = localStorage.getItem('events');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}
const Main = () => {
    // hooks
    const [event, setName]=useState(getDatafromLS());
    const [time, setTime]=useState(getDatafromLS());
    const [place, setPlace]=useState(getDatafromLS());
    const [date, setDate]=useState(getDatafromLS());
    const [day, setDay]=useState(getDatafromLS());
    const [events, setevent]=useState(getDatafromLS());
    const onSubmit = e =>{
        e.preventDefault();
        let newEvent = {
            id:Math.floor(Math.random()*100000), 
            event,
            time,
            place,
            date,
            day
        }
        setevent([...events,newEvent]);
        setName('');
        setTime('');
        setPlace('');
        setDate('');
        setDay('');
    }
    const deleteevent=(id)=>{
        const filteredeve=events.filter((element)=>{
            return element.id !== id
        })
        setevent(filteredeve);
    }
    useEffect(()=>{localStorage.setItem('events',JSON.stringify(events));},[events]);
    return (
        <div class="Content">
            <div class="Header">
                <div class="Layer">
                    List your events here
                </div>
            </div>
            <div class="Body">
                <ul class="events">
                    {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
                <div class="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input class="eventName" value={event} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter the event you want to add"></input>
                        <input class="eventTime" value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Time"></input>
                        <input class="eventPlace" value={place} onChange={(e) => setPlace(e.target.value)} type="text" placeholder="Place"></input>
                        <input class="eventDate" value={date} onChange={(e) => setDate(e.target.value)} type="text" placeholder="Date"></input>
                        <input class="eventDay" value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder="Day"></input>
                        <button class="submit">Add Event</button>
                    </form>
                </div>
                <div className='view-container'>
                    {events.length > 0 && <>
                        Local Storage table
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Place</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <View events={events} deleteevent={deleteevent} />
                            </tbody>
                        </table>
                        <button className='removeall' onClick={() => setevent([])}>Remove All</button>
                    </>}
                    {events.length < 1 && <div>No events are added yet</div>}
                </div>
            </div>
        </div>
    );
    
}
export default Main;