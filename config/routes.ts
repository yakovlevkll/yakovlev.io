import config from './config'

const routes = [
  { path: '/about', title: 'About' },
  { path: '/articles', title: config['articles.title'] },
  { path: '/projects', title: config['projects.title'] },
  { path: '/speaking', title: config['speaking.title'] },
  { path: '/recs', title: config['uses.title'] },
]

export default routes
