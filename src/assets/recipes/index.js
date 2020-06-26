import DESSERTS from './desserts'
import ENTREES from './entrees'
import SNACKS from './snacks'

const RECIPES = [
  ...DESSERTS.map((r) => ({ ...r, category: 'desserts' })),
  ...SNACKS.map((r) => ({ ...r, category: 'snacks' })),
  ...ENTREES.map((r) => ({ ...r, category: 'entrees' })),
]

export default RECIPES
