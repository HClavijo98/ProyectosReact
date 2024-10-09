import { useState, useEffect } from "react"
import { getRandomFact } from '../facts.js'

export function useCatFact() {
    const [fact, setFact] = useState()

    function refreshFact() {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(() => { //recuperar cita al cargar pagina
        refreshFact()
    }, [])

    return { fact, refreshFact }

}