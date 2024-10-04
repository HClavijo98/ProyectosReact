import { useEffect, useState } from 'react'
import { Follower } from './components/Follower';


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMove(event){
      const {clientX, clientY} = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => { //reinicia los estados del useEffect al desmontarse o cambian las dependencias
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  function toggleFollow() {
    setEnabled(!enabled);
  }

  return (
    <>
      <Follower
        enabled={enabled}
        position={position}
        toggleFollow={toggleFollow}
      />
    </>
  )
}

export default App
