import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import Details from '../Details/Details'
import Usefetch from '../hook/Usefetch'
import Loading from '../Loading/Loading'

import Status from '../Status/Status'

export default function Product({addItme}) {
    let {id}=useParams()
    let {isloading,data}=Usefetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=20&offset=1`)
    let [item,setItem]=useState(null)
    
  return (
    <>
      <Status/>
 { isloading?<Loading/>: <div className="container pt-5">
            <div className="row gy-2">
            <h2 className='fw-bolder'>Our Products</h2>
                {data?.slice(1)?.map((ele,i)=>(
                    <div className="col-md-3" key={i}>
                        <Card ele={ele} addItme={addItme} setItem={setItem}/>
                    </div>
                ))}
            </div>
        </div>}
        <Details item={item} addItme={addItme}/>
    </>
  )
}
