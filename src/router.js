import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./pages"
import Show from "./pages/Show"
import { indexLoader, showloader } from "./loaders"
import { createAction, deleteAction, loginAction, logoutAction, signupAction, updateAction } from "./actions"
import Login from "./pages/welcome"
import Signup from "./pages/Signup"
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>} action={loginAction}>
            <Route path="" element={<Login/>} action={loginAction}/>
            <Route path="/signup" element={<Signup/>} action={signupAction}/>
            <Route path="/logout"  action={logoutAction}/>
            <Route path="/home" element={<Index/>} loader={indexLoader}/>
            <Route path="/jobs/:id" element={<Show/>} loader={showloader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router
