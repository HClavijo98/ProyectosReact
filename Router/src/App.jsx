import { lazy, Suspense } from 'react'
import { Router } from './components/Router'
import { Page404 } from './pages/Page404'
import { SearchPage } from './pages/Search'
import { Route } from './components/Route'

const AboutPage = lazy(() => import('./pages/About')) // import dinamico
const HomePage = lazy(() => import('./pages/Home')) // import dinamico

const appRoutes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
