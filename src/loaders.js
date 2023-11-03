import url from './url'

export const indexLoader = async () => {
    const response = await fetch(url + "/job",{
        credentials: "include",
    })
    const jobs = await response.json()
    return jobs
}

export const showloader = async ({params}) => {
    console.log(`me ${params.id}`)
    const response = await fetch(url + `/job/${params.id}`,{
        credentials: "include",
    })
    const job = await response.json()
    return job
}


