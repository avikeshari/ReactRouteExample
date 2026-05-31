import React from 'react'
import { Link } from 'react-router'

const Recipe = ({ recipe }) => {
  return <li><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>
}

export default Recipe