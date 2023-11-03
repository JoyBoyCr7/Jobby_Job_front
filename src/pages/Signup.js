import { Form } from "react-router-dom"

function isEmpty(event){
  let allInputNodes = document.getElementsByClassName("userInput")
  const nodeTwo = allInputNodes[1].value
  const nodeOne = allInputNodes[0].value
  console.log(nodeOne, nodeTwo)
  if ( nodeOne.trim() === "" || nodeTwo.trim() === ""){
    const price = (allInputNodes[0].value)
    event.preventDefault()
    alert("You must have a username and password.")
  }else if (nodeOne.length < 5){
    event.preventDefault()
    alert("Username must be at least five characters")
  }else if (nodeTwo.length < 5){
    alert("Password must be at least five characters")
    event.preventDefault()
  }
}

const Signup = () => {
    return <div style={{display:"flex", justifyContent:"center", marginTop: "12rem"}}> 
        <Form action="/signup" method="post" className="form">
       <p className="form-title">Sign up for your account</p>
        <div className="input-container">
        <input type="text" name="userName" placeholder="Username" className="userInput" required></input>

      </div>
      <div className="input-container">
      <input type="password" name="password" placeholder="Password" className="userInput" required></input>

        </div>
         <button className="submit" type="submit" onClick={isEmpty}>
        Sign up
      </button>
    </Form>
    </div>
}

export default Signup


{/* <p className="heading" style={{paddingBottom:"0px"}}>Signup</p>
<input type="text" name="userName" placeholder="Username"></input>
<input type="password" name="password" placeholder="Password"></input>
<input type="submit" className="btn"/> */}