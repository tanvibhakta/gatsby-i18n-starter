import React from 'react'
import { Link } from 'gatsby'
//This component is a wrapper around Link that automatically creates 
//a slug with the currently-set language from the given 'to' prop of Link

function getSlug(props) {
  //create language-specific slug
  let slug = props.to.split('/')
  slug[1] = props.lang
  return slug.join('/')
}

const LangLink = props => <Link to={getSlug(props)}>{props.children}</Link>

export default LangLink
