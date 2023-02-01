import joi from "joi"
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  let [valdtionError,setVald]=useState([])
  let [apiError,setApiError]=useState(null)
  let [isLoading,setIsLoading]=useState(false)
  let navigate = useNavigate()

  let [userData,setUserData]=useState({
    first_name:"",
    last_name:"",
    age:0,
    email:"",
    password:""
  })

  async function sendData(e){
    e.preventDefault();
    if(VAldData()){
      setIsLoading(true)
      let {data} = await axios.post(`https://route-movies-api.vercel.app/signup`,userData)
      if(data.message==="success"){
        setIsLoading(false)
        setApiError(null)
        navigate("/signIn")
      }else{
        setApiError(data.message)
        setIsLoading(false)
      }
    }
  }
  


  function VAldData(){
    const schema=joi.object({
      first_name:joi.string().min(3).max(15).required().messages({
        "string.min":"first Name length must be at least 3 characters long",
        "string.empty":"First Name Required!",
        "string.max":"first Name length must be less than or equal to 15 characters long"
      }),
      last_name:joi.string().min(3).max(15).required().messages({
        "string.min":"Last Name length must be at least 3 characters long",
        "string.empty":"Last Name Required!",
        "string.max":"Last Name length must be less than or equal to 15 characters long"
      }) ,
      age:joi.number().min(17).required().messages({
        "number.min":"you must be 17+",
        "number.empty":"Age Required!"
      }),
      email:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        "string.email":"Email must be a valid email",
        "string.empty":"Email Required!"
      }),
      password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        "string.pattern.base":"Password no match to pattern",
        "string.empty":"Password Required!"
      })
    })
    let res = schema.validate(userData,{abortEarly:false})
    if(res.error){
      setVald(res.error.details)
      
      return false
    }else{
      return true
    }
  }

  function getData(e){
    let current = {...userData}
    current[e.target.name]=e.target.value
    setUserData(current)
  }

  return (
    <div className="d-flex justify-content-center backs">
    <div className='bg rounded-2 border text-center border-1 mt-5 w-50 position-absolute'>
        <div className="cards">
           <div className="title pt-5">
              <h2>Sign Up</h2>
              <p>you already have account? <Link to="/signIn" className=' text-decoration-none'>Sign In</Link> </p>
              <hr />
            </div>
             <div className="body">
             {apiError && <div className=' alert alert-info'>{apiError}</div>}
              <form action="" onSubmit={sendData}>
              <input onChange={getData} type="text" name='first_name' className='mb-5 form-control rounded-pill w-50 border-0 mx-auto bg-light' placeholder='First Name' />
                <div className={valdtionError.filter(ele => ele.context.label==="first_name")[0]?"alert alert-danger mt-4":""}>
                  {valdtionError.filter(ele => ele.context.label==="first_name")[0]?.message}
                </div>    
              <input onChange={getData} type="text" name='last_name' className='mb-5 form-control rounded-pill w-50 border-0 mx-auto bg-light' placeholder='Last Name' />
              <div className={valdtionError.filter(ele => ele.context.label==="last_name")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label==="last_name")[0]?.message}
                        </div> 
              <input onChange={getData} type="email" name='email' className='mb-5 form-control rounded-pill w-50 border-0 mx-auto bg-light' placeholder='Email' />
              <div className={valdtionError.filter(ele => ele.context.label==="email")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label==="email")[0]?.message}
                        </div>  
              <input onChange={getData} type="number" name='age' className='mb-5 form-control rounded-pill w-50 border-0 mx-auto bg-light' placeholder='Age' />
              <div className={valdtionError.filter(ele => ele.context.label==="age")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label==="age")[0]?.message}
                        </div>
              <input onChange={getData} type="password" name='password' className='mb-5 form-control rounded-pill w-50 border-0 mx-auto bg-light' placeholder='Password' />
              <div className={valdtionError.filter(ele => ele.context.label==="password")[0]?"alert alert-danger mt-4":""}>
                        {valdtionError.filter(ele => ele.context.label==="password")[0]?.message}
                        </div>
              <button className='btn-grad mx-auto border-0'>{isLoading?<i className='fa fa-spinner fa-spin '></i>:"Sign Up"}</button>
              </form>
         </div>
      </div>
    </div>
 </div>
 
  )
}
