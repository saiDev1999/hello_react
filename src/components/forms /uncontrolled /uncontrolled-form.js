import { createRef } from "react"

const Uncontrolled = () => {

    const emailRef = createRef()
    const passwordRef=createRef()


    const handleSubmit =(event)=>{
        event.preventDefault()
      const details={
        username:emailRef.current.value,
        password:passwordRef.current.value


      }

      //Dummy login
    //   username: 'kminchelle',
    //   password: '0lelplR',
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
    }

    return (
        <>
            <h1>Uncontrolled form</h1>
            <form  onSubmit={handleSubmit}  >
                <div class="form-group">
                    <label >Email address:</label>
                    <input type="text" class="form-control" id="email"  ref={emailRef} />
                </div>
                <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" id="pwd" ref={passwordRef} />
                </div>

                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </>
    )
}

export default Uncontrolled


