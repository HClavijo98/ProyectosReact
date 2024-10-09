const CAT_END_POINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function getRandomFact() {
    return fetch(CAT_END_POINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}