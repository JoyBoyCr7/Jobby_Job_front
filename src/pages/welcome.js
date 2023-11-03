import { Form, Link } from "react-router-dom"
const Login = () => {
    return <div style={{display:"flex", justifyContent:"center", marginTop: "12rem"}}> <Form action="" method="post" className="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
        <input type="text" name="userName" placeholder="Username" required></input>

      </div>
      <div class="input-container">
      <input type="password" name="password" placeholder="Password" required></input>

        </div>
         <button class="submit" type="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to={"/signup"} style={{textDecoration:"none"}}> Signup</Link>
      </p>
    </Form>
    </div>
}

export default Login

{/* <Link to={"/signup"}> <button style={{backgroundColor: "red"}}>Signup</button></Link>
        <p className="heading" style={{paddingBottom:"0px"}}>Login</p>
        <input type="text" name="userName" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <input type="submit" className="btn"/> */}