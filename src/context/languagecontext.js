import React, { Component } from 'react'
import { Provider } from './createContext'
//TODO: write a function which provides the index number for the 
//obtained language in order, from the config array

class LanguageProvider extends Component {
    state = {
        lang: "fr",
        langList: [],
        langIndex: 0,
        setLang: function() { this.lang = window.location.href.split('/')[3] },
        setLangIndex: function() {  this.langIndex = this.langList.indexOf(this.lang) },
    };

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>
    }
}

export default LanguageProvider
