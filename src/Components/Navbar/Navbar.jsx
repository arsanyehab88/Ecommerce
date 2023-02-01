import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({cartItem,use,logout}) {
  let selected=cartItem?.reduce((x,y)=>x+y.qty,0)
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">E-commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsupport" aria-controls="navbarsupport" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarsupport">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
        <div className="input-group w-100">
          <input type="text" className="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <span className="input-group-text bg-warning" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
         </div>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/cart" className=' text-decoration-none text-warning '>
                <div className='cart d-flex pe-1 pt-1'>
                  
                  <i className="fa-solid fa-cart-shopping fs-4 line"></i>
                  <h4 className='position-relative '>cart</h4>
                  <span className='badge rounded-circle bg-primary position-absolute qty'>{selected}</span>
                </div>
                
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <nav className="navbar blue navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    {use? <li className="nav-item">
          <button className="nav-link btn btn-outline-warning" onClick={logout} aria-current="page" >LogOut</button>
        </li> :<>
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signIn">sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/signUp">sign up</Link>
        </li>
    </>}
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories/2">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories/3">Furniture</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories/4">Shoes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/categories/5">Others</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
