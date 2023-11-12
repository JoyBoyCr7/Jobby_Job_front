import { Form, Link } from "react-router-dom"

function loginAccess(){
  let allInputNodes = document.getElementsByClassName("userloginform")
  const nodeOne = allInputNodes[0].value
  const nodeTwo = allInputNodes[1].value
  if (nodeOne !== "" && nodeTwo !== ""){
    alert("Fetching data, please allow 10 seconds to pass")
  }
}

const Login = () => {
    return <div style={{display:"flex", justifyContent:"center", marginTop: "12rem"}}> <Form action="" method="post" className="form1">
       <p className="form-title">Sign in to your account</p>
        <div className="input-container">
        <input type="text" name="userName" placeholder="Username" required className="userloginform"></input>

      </div>
      <div className="input-container">
      <input type="password" name="password" placeholder="Password" required className="userloginform"></input>

        </div>
         <button className="submit" type="submit" onClick={loginAccess}>
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <Link to={"/signup"} style={{textDecoration:"none"}}> Signup</Link>
      </p>
      <p>
      <a href="https://jobby-job-front.vercel.app/" style={{textDecoration:"None"}}>Continue as Guest</a>
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