import React from 'react'
import Usefetch from "../hook/Usefetch.js"
import Loading from '../Loading/Loading.jsx'

export default function HomeMain() {
    let {isloading,data}=Usefetch(`https://api.escuelajs.co/api/v1/categories?limit=5`)
  return (
    <>
    {isloading?<Loading/>:
    <div className="container">
    <h2 className='ms-4'>Category</h2>
    <div className="row">
    {data?.map((ele,i)=>(
        <div className=' col-md-3' key={i}>
            <img src={ele?.image} className='w-100 m-4 rounded-4' alt='category' /> 
            <h3 className=' text-center'>{ele?.name?.split(" ").splice(0,1).join(" ")}</h3>
        </div>               
        ))}
        
    </div>
    
</div>

    }
    </>
  )
}
