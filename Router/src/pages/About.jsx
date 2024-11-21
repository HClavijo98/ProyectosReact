import { Link } from '../components/Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: '¡Hola! Me llamo Harold y estoy creando un clon de React Router.',
    link: 'Ir a Home'
  },
  en: {
    title: 'About us',
    description: 'Hi! My name is Harold and I am doing a React Router clone.',
    link: 'Go to Home'
  }
}

function useI18n (lang) {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <img src='https://pbs.twimg.com/profile_images/1824773087323111424/-S3LUmjQ_400x400.jpg' alt='Foto de midudev' />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.link}</Link>
    </>
  )
}
