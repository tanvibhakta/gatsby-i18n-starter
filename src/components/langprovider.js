import React from 'react'

const LanguageContext = React.createContext('en'); //language defaults to English

function getLang() {
    var lang = window.location.href
    return lang.split('/')[3]
}

//TODO: write a function which provides the index number for the 
//obtained language in order, from the config array

export default LanguageContext
export { getLang }
