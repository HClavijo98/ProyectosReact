import { Link } from '../components/Link'

export function Page404 () {
  return (
    <>
      <h1>Something went wrong</h1>
      <h2>404 Error</h2>
      <h2>Try another path</h2>
      <Link to='/'>Volver a Home</Link>
    </>
  )
}
