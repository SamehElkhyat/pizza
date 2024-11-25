import React, { useEffect, useState } from 'react';
import '../About/About.css';
import axios from 'axios';
import { Button } from '@mui/material';

export default function Page() {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {

    let result = await axios.get(`http://localhost:3009/AllTask/`);

    console.log(result.data);
    setCategories(result.data)

  };

  useEffect(() => {

    getCategories();
    document.body.classList.toggle('overwriteAboutinfo')

  }, []);

  return <>
<section id='AboutAllInfo'>

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
  

  </>

};
