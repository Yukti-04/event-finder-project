import React from 'react'
export const View = ({events,deleteevent}) => {
    
    return events.map(event=>(
        
        <tr key={event.id}>
            <td>{event.event}</td>
            <td>{event.time}</td>
            <td>{event.place}</td>
            <td>{event.date}</td>
            <td>{event.day}</td>
            <td><button className='delete' onClick={()=>deleteevent(event.id)}>
                Delete
            </button></td>         
        </tr>            
    
))
}