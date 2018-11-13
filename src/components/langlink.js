import React from 'react'
import { Link }  from 'gatsby'

const LangLink = props => {
    let slug = props.lang + props.to;
    return <Link to={slug}>{props.lang}</Link>
}

export default LangLink