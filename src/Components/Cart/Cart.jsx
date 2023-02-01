import React from 'react'
import Status from '../Status/Status.jsx';

export default function Cart({cartItem,addItme,remove,delet,removeAll}) {
  let items=cartItem?.reduce((x,y)=> x+y.qty*y.price,0)
  let total=cartItem?.reduce((x,y)=> x+10+y.qty*y.price,0)
  let selected=cartItem?.reduce((x,y)=>x+y.qty,0)
  console.log(items);
  return (
    <>
      <Status/>
      <div className="container pt-5">
        <h2 className='mb-2'>Cart Item</h2>
        {cartItem?.length ===0?<><h2 className=' alert alert-primary w-25'>Empty</h2> </>:''}
        <div className="row">
        <div className="col-md-7 pt-5" >
            {cartItem?.map((ele,i)=>(
              <div key={i}>
                  <>
                  <div className="row" >
                    <div className="col-md-4">
                    <div className="card rounded-2">
                    <img src={ele?.images[0]} className='w-100' alt="" />
                      <div className="card-body">
                      <button  onClick={()=>delet(ele)} className='btn btn-outline-danger mt-3 mx-auto d-flex'><i className="fa-solid fa-trash"></i></button>
                       </div>
                    </div>
                    </div>
                    <div className="col-md-8">
                      <h4>{ele?.title}</h4>
                      <p>qty: <button onClick={()=>remove(ele)} className='btn btn-light'>-</button><span className='mx-2'>{ele?.qty}</span><button onClick={()=>addItme(ele)} className='btn btn-light'>+</button></p>
                      <p>price: $ {ele?.price?.toFixed(2)}</p>
                    </div>
                  </div>
                  <hr />
                  </>
                  </div>
            ))}
            </div>
            <div className="col-md-5 gy-3">
              <div className="back p-3 rounded-3">
                <h2>Order Summary</h2>
                <hr />
                <div className="d-flex justify-content-between mb-5">
                  <div>
                    <p>Selected ({selected}) item(s) price</p>
                    <p>Discount</p>
                    <p>Delivery Coast</p>
                    </div>
                  <div className='mb-5'>
                    <p>$ {items?.toFixed(2)}</p>
                    <p>$ 0.00</p>
                    <p>$ 10.00</p>

                  </div>

                </div>
                <hr />
                <p>Total: $ {total?.toFixed(2)}</p>
              </div>
          </div>



          

            
        </div>
        {cartItem.length ===0?'':<button onClick={removeAll} className='btn btn-outline-danger w-25 mb-3'>Clear Cart</button>}
      </div>
    </>
  )
}

