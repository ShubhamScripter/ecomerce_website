import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const Loginsignup = () => {

const [state,setstate]=useState("Login");

const [formData,setformData]=useState({
  "username":"",
  "email":"",
  "password":""
})

const ChangeHandler=(e)=>
{
setformData({...formData,[e.target.name]:e.target.value})
}

const signup=async()=>
{
  console.log("signup function called",formData);

  let respnoseData;
  await fetch('http://localhost:4000/signup',{
    method:"POST",
    headers:
    {
      Accept:"application/form-data",
      'content-type':'application/json'
    },
    body:JSON.stringify(formData)
  }).then((res)=>res.json()).then((data)=>{respnoseData=data});

  if(respnoseData.success)
  {
    localStorage.setItem('auth-token',respnoseData.token);
    window.location.replace('/');
  }
  else
  {
    alert(respnoseData.errors);
  }


}

const login =async()=>
{
  console.log("login function called",formData);

  let respnoseData;
  await fetch('http://localhost:4000/login',{
    method:"POST",
    headers:
    {
      Accept:"application/form-data",
      'content-type':'application/json'
    },
    body:JSON.stringify(formData)
  }).then((res)=>res.json()).then((data)=>{respnoseData=data});

  if(respnoseData.success)
  {
    localStorage.setItem('auth-token',respnoseData.token);
    window.location.replace('/');
  }
  else
  {
    alert(respnoseData.errors);
  }


}



  return (
    <div className='loginsignup'>
    <div className='loginsignup-container'>
    <h1>{state}</h1>
    <div className='loginsignup-fields'>
    {state==="Sign up"?<input name='username' value={formData.username} onChange={ChangeHandler} type='text' placeholder='Your Name'></input>:null}
    <input name='email' value={formData.email} onChange={ChangeHandler}  type='email' placeholder='enter your email'></input>
    <input name='password' value={formData.password} onChange={ChangeHandler} placeholder='enter here'  type='password'></input>
    </div>
    <button onClick={()=>{state==="Sign up"?signup():login()}}>continue</button>
    {state==="Sign up"?<p className='loginsignup-login'>Already Have A Acoount <span onClick={()=>{setstate("Login")}} style={{cursor:"pointer"}}>click Here</span></p>:
    <p className='loginsignup-login'>Create A Acoount <span onClick={()=>{setstate("Sign up");}} style={{cursor:"pointer"}}>click here</span></p>
    }
    <div className='loginsignup-agree'>
    <input type='checkbox' name='' id='' />
      <p>By continuing , i agree to term of use and policies</p>
    </div>
    </div>
      
    </div>
  )
}

export default Loginsignup
