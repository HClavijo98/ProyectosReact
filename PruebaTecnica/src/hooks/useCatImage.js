import { useState,useEffect } from "react"

export function useCatImage({ fact }) { //custom hook devuelve imageURL
    const [image, setImage] = useState()
    const CAT_END_POINT_PREFIX = 'https://cataas.com'
  
    useEffect(() => { //recuperar imagen a traves de la primera palabra de la cita
      if (fact) {
        const firstWord = fact.split(' ')[0]//si son las 3 primeras  .slice(0, 3).join(' ')
        const CAT_END_POINT_IMG = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
  
        fetch(CAT_END_POINT_IMG)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            const { url } = response
            setImage(url)
          })
      }
    }, [fact])
    return { image: `${CAT_END_POINT_PREFIX}${image}` }
  }