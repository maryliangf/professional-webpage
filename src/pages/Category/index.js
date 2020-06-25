import React from 'react'
import { useParams } from 'react-router-dom'

import CategoryPage from './RecipeList'

const CategoryPages = () => {
  const { category } = useParams()

  return <CategoryPage categoryId={category} />
}

export default CategoryPages
