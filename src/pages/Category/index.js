import React from 'react'
import { useParams } from 'react-router-dom'

import DessertPage from './Dessert'

const CategoryPage = () => {
  const { category } = useParams()
  if (category === 'desserts') {
    return <DessertPage />
  }
  return null
}

export default CategoryPage
