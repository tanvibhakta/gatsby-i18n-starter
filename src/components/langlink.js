import React from 'react'
import { Link }  from 'gatsby'

function getSlug(props) {
    let slug = props.to.split('/');
    slug[1] = props.lang;
    return slug.join('/');
}

const LangLink = props => (
    <Link to={getSlug(props)}>{props.children}</Link>
)

export default LangLink