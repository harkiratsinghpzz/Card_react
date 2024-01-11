import axios from 'axios'
import React, { useEffect, useState } from 'react'
import myproduct from './main.module.css'

function Main() {
    let [product,setproduct] = useState([])

let getdata = async()=>{
    let response = await axios
    .get('https://fakestoreapi.com/products')
    .then(val=>{
        console.log(val.data);
        setproduct(val.data)
    })
    .catch(err=>{
        console.log(err);
    }) 

}

useEffect(()=>{
    getdata()
},[])

// render data

let renderdata = product.map((ele,index)=>(
    <div key={index} className={myproduct.card}>
        <div className="card-title">
            <h3>{ele.title}</h3>
        </div>
        <div className="card-body">
            <img className='img-fluid' src={ele.image} alt="" />
            <p>{ele.description}</p>
        </div>
        <div className="card-footer">
            <h1> ${ele.price}</h1>
        </div>
    </div>
))

  return (
    <div className={myproduct.container}>
{
    renderdata
}
    </div>
  )
}

export default Main


// 1) send request to get the data
// 2) updatae a state with incoming data
// render the data