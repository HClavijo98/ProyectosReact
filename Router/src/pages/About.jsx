import { Link } from '../components/Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://pbs.twimg.com/profile_images/1824773087323111424/-S3LUmjQ_400x400.jpg' alt='Foto de midudev' />
      <p>Hola me llamo Harold y estoy creando un clon de React Router</p>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}
