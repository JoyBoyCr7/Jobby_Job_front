import { redirect } from 'react-router-dom'
import url from './url'
export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newJob = {
        role: formData.get("role"),
        location: formData.get("location"),
        // brand_image: formData.get("brand Image"),
        description: formData.get("description"),
        interest_level: formData.get("interest Level"),
        application_date: formData.get("application Date")
    }
    console.log(newJob)

    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)
    }).catch((error)=> console.log(error))
    
    return redirect("/")
}

export const updateAction = async ({request, params}) => {

    const id = params.id
    const formData = await request.formData()

    const updatedJob = {
        role: formData.get("role"),
        location: formData.get("location"),
        // brand_image: formData.get("brand Image"),
        description: formData.get("description"),
        interest_level: formData.get("interest Level"),
        application_date: formData.get("application Date")
    }

    await fetch(url + `${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedJob)
    })

    return redirect(`/jobs/${id}`)
}


export const deleteAction = async ({params}) => {
   
    const id = params.id

    await fetch(url + `${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}