import React, { useEffect, useState } from 'react';
import '../About/About.css';
import axios from 'axios';
import { Button } from '@mui/material';

export default function Page() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      let result = await axios(`http://localhost:3009/AllTask/`);
      setCategories(result.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const WaitingForData = () => {
 return <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="text-center">
        <div className="spinner-border text-danger mb-3" role="status" style={{width: '4rem', height: '4rem'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="text-danger mt-3">Loading Our Delicious Pizzas...</h3>
        <p className="text-muted">Please wait while we prepare your menu</p>
      </div>
    </div>

  }

  const AllDataHere = () => {
    return   <section id='AboutAllInfo'>
   
   <div className="container" >
   
   <div className="row">
   
     {categories.map((item) =>
   
       <div variants={item} className="AboutItem col-md-2 text-center m-2 p-0 justify-content-center">
         <img src={item.image} className='w-100' alt='pizza-hut pizza king papa jhons johns pizza in pizza world'/>
         <h3 className='AboutTitle'>{item.name.split(" ").slice(0, 3).join(" ")}</h3>
         <h5 className='AboutTitle'>${item.price}</h5>
         <Button className='AboutTitle w-100'>Order</Button>
       </div>
   
     )}
   
   </div>
   
   </div>
   </section>
   
     }

  useEffect(() => {

    getCategories();
    document.body.classList.toggle('overwriteAboutinfo')

  }, []);

  return <>
  
  {loading ? <WaitingForData/>  :  <AllDataHere/>}
  </>

};
