import React from 'react'

export default function Details({item,addItme}) {
    
  return (
    <>
                  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{item?.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-flex">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div>
               <div id="carouselExampleFade" className="carousel slide carousel-fade ">
                <div className="carousel-inner">

 
                    {item?.images?.map((ele,i)=>(
                        <div className="carousel-item active" key={i}>

                        <img src={ele} className="d-block w-100" alt="..."/>

                        </div> 
                    ))}


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <p>{item?.description}</p>
                    </div>
                </div>
                <h5 className='badge bg-danger mt-2'>Price: $ {item?.price}</h5>
            </div>

            
        </div>
        <div className="modal-footer">
        <button onClick={()=>addItme(item)} className="btn btn-primary" type="button">Add To Cart</button>
        </div>
        </div>
    </div>
            </div>
    </>
  )
}
