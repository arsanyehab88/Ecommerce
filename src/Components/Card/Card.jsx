import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function Card({ele,addItme,setItem}) {
  return (
    <div>

   <div className="card rounded-2">
      <img src={ele?.images[0]} onClick={()=>setItem(ele)} data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="card-img-top w-100 rounded-2 position-relative" alt="..."/>
       <h6 className='bad'><span className="badge bg-warning">{ele?.category?.name}</span></h6>
      <div className="card-body">
           <h5 className="card-text fw-light">{ele?.title.split(" ").splice(0, 2).join(" ")}</h5>
            <p className='fw-bolder'>$ {ele?.price?.toFixed(2)} </p>
                <div className="d-grid gap-2">
                <button onClick={()=>{addItme(ele)}} className="btn btn-primary" type="button">Add To Cart</button>
                 <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
              </div>
            </div>
        </div>       
    </div>
  )
}

