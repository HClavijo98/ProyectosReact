import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'
import { FiltersProvider } from './src/context/Filters.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
