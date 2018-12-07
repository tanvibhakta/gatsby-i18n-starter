import React, { Component } from 'react'
import { createContext } from 'react'
//TODO: write a function which provides the index number for the
//obtained language in order, from the config array

const { Provider, Consumer } = createContext()

class LanguageProvider extends Component {
  state = {
    lang: 'fr',
    langList: [],
    langIndex: 0,
    setLang: function() {
      this.lang = window.location.href.split('/')[3]
    },
    setLangIndex: function() {
      this.langIndex = this.langList.indexOf(this.lang)
    },
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { LanguageProvider, Consumer as LanguageConsumer }
