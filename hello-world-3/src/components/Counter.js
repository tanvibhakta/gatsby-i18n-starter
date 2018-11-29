import React, { PureComponent } from "react"

export default class Counter extends PureComponent {

    render() {
        const { children, value, onInc } = this.props;
        return (
            <>
                <h2>{value}</h2>
                <button onClick={onInc}>Increase</button>
                {children}
            </>
        )
    }
} 


