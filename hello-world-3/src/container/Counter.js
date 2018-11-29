import React from "react"
import { Consumer } from "../context/createContext";
import Counter from "../components/Counter"


const CounterContainer = ({ children }) => (
    <Consumer>
        {({ value, onInc }) => (
            <Counter value={value} onInc={onInc}>
                {children}
            </Counter>
        )}
    </Consumer>
);

export default CounterContainer; 