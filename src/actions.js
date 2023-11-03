import { redirect } from 'react-router-dom'
import url from './url'

export const signupAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        userName: formData.get("userName"),
        password: formData.get("password")
    }
    console.log(user)
    const response = await fetch(url + "/auth/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Could not signup, please try again")
        return redirect("/signup")
    }
    alert("Welcome to TopRated!")
    return redirect("/")
}


export const loginAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        userName: formData.get("userName"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/login/", {
        method: "post",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Could not login, please try again")
        return redirect("")
    }

    localStorage.setItem("Loggedin", "true")

    return redirect("/home")
}


export const logoutAction = async () => {
    const response = await fetch(url + "/auth/logout", {
        method: "get",
    })
    if (response.status > 400){
        alert("Could not log out, please try again")
        return redirect("/dashboard")
    }

    localStorage.removeItem("loggedIn")
    return redirect("/")
}

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newJob = {
        role: formData.get("role"),
        location: formData.get("location"),
        // brand_image: formData.get("brand Image"),
        description: formData.get("description"),
        intrest_level: Number(formData.get("interest Level")),
        application_date: formData.get("application Date")
    }
    console.log(newJob)

    await fetch(url + "/job", {
        method: "post",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)
    }).catch((error)=> console.log(error))
    console.count()
    return redirect("/home")
}

export const updateAction = async ({request, params}) => {

    const id = params.id
    const formData = await request.formData()

    const updatedJob = {
        role: formData.get("role"),
        location: formData.get("location"),
        // brand_image: formData.get("brand Image"),
        description: formData.get("description"),
        intrest_level: formData.get("interest Level"),
        application_date: formData.get("application Date")
    }

    await fetch(url + `/job/${id}`, {
        credentials: "include",
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

    await fetch(url + `/job/${id}`, {
        credentials: "include",
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/home")
}