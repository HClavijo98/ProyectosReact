import HomePage from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './components/Router'
import { Page404 } from './pages/Page404'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

export function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}
