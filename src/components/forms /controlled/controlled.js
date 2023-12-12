import { useState } from "react"



const Controlled = () =>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const handleUsername= (event)=>{


        setUsername(event.target.value)
        // validations 
        // regex 

        // if(username.length>5){
        //     alert("please enter <5 ")
        // }

    }
    const handleSubmit = (event)=>{
event.preventDefault()

const details={
    username,
    password
}
///api call 
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(details)
})
.then(res => res.json())
.then((response)=> {
    if(response.message){
        alert("invalid login ")
    }else{
        alert("successfull login")
    }
});

// 2 cases 
// 1. case : failure case ---> mesage object
// 2. without message  


// api call 
    }

    const handlePassword = (event) =>{
        setPassword(event.target.value)
    }
 
    


      

    return(
        <>
        <h2>Controlled forms</h2>

        <form  onSubmit={handleSubmit}  >
                <div class="form-group">
                    <label >Email address:</label>
                    <input type="text" class="form-control" id="email"  value={username}  onChange={handleUsername} />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" id="pwd" value={password} onChange={handlePassword}  />
                </div>

               

                <button type="submit" class="btn btn-default">Submit</button>
            </form>


        
        
        </>
    )
}

export default Controlled


// 3 steps 

// 1. create a state 
// 2. bind the value 
// 3. use onChange handler to control the input 
