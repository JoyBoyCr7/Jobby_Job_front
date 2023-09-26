import url from './url'

export const indexLoader = async () => {
    const response = await fetch(url)
    const jobs = await response.json()
    return jobs
}

export const showloader = async ({params}) => {
    const response = await fetch(url + `${params.id}/`)
    const job = await response.json()
    return job
}


