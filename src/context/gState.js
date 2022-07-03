import React,{createContext, useReducer} from 'react';
import aReducer from "./aReducer";

//initialize
const initialState={
    events: []
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider =({children}) => {
    const [state, dispatch] =useReducer(aReducer, initialState); //dispatch will store event type,data type and action type 

    function addEvent(event){
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        })
    }
    return(
        <GlobalContext.Provider value={{
            events: state.events,
            addEvent,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}