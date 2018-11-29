import React, { Component } from "react";
import { Provider } from "./createContext"

class AppProvider extends Component {
    state = {
        value: 0,
        onInc: () => {
            console.log(value);
            this.setState({ value: value+1 })
        },
    };

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}

export default AppProvider;