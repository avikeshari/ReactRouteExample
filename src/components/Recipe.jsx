import React from 'react'
import { Link } from 'react-router'

const Recipe = ({ recipe }) => {
  return <li><Link to={`/recipes?id=${recipe.id}`}>{recipe.name}</Link></li>
}

export default Recipe