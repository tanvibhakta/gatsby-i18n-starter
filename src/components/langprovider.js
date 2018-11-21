import React from 'react'

const LanguageContext = React.createContext('en'); //language defaults to English

function getLang() {
    var lang = window.location.href
    return lang.split('/')[3]
}

export default LanguageContext
export { getLang }
