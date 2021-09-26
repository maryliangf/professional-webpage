import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'
import ExperiencePage from '../pages/Experience'
import HomePage from '../pages/Home'
import ProjectsPage from '../pages/Projects'
import RecipesPage from '../pages/Recipes'
import { GREEN, TEAL } from './colors'

export const ROUTES = [
  {
    to: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    to: '/aboutme',
    label: 'About Me',
    component: AboutPage,
  },
  {
    to: '/experience',
    label: 'Experience',
    component: ExperiencePage,
  },
  {
    to: '/projects',
    label: 'Projects',
    component: ProjectsPage,
  },
  {
    to: '/recipes',
    label: 'Recipes',
    color: TEAL,
    component: RecipesPage,
  },
  {
    to: '/contact',
    label: 'Contact Me',
    color: GREEN,
    component: ContactPage,
  },
]
