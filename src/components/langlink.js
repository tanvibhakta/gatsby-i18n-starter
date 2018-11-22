import React from 'react'
import { Link }  from 'gatsby'

const LangLink = props => {
    let slug = props.to.split('/');
    slug[1] = props.lang;
    slug = slug.join('/');
    return <Link to={slug}>{props.lang}</Link>
}

export default LangLink