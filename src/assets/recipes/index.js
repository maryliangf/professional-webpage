import DESSERTS from './desserts'

const RECIPES = [...DESSERTS.map((r) => ({ ...r, category: 'dessert' }))]

export default RECIPES
