import React, { useEffect } from 'react'
import banner from '../images/one-slice-margarita-pizza-dark-concrete-background_253362-3962.jpg'
import banner2 from '../images/wallpaperflare.com_wallpaper.jpg'
import banner4 from "../images/Untitled design (2).png";
import banner3 from "../images/wallpaperflare.com_wallpaper (2).jpg";
import banner5 from "../images/italian.png";

import photosection2 from '../images/About Image/Funghi-Ranch.webp'
import photosection3 from '../images/About Image/mixedcheese.webp'
import photosection4 from '../images/About Image/BlueCheese.webp'
import photosection5 from '../images/thinly-sliced-pepperoni-is-.png'

export default function Carsoule() {

  useEffect(() => {

    document.body.classList.toggle("editeH1itemSpan")


  }, [])
  return <>
  

    <section className="LandingPage">
      <img src={banner} alt="" className='BannerSection' />
      <div className="Hover">

        <div className="h1Item">

          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>R</span>
          <span>Y </span>
          <span>B</span>
          <span>I</span>
          <span>T</span>
          <span>E </span>
          <span>I</span>
          <span>S </span>
          <span>A </span>

        </div>
        <h1 className='h1Item'>

          <span>S</span>
          <span>L</span>
          <span>I</span>
          <span>C</span>
          <span>E </span>
          <span>O</span>
          <span>F </span>
          <span>H</span>
          <span>A</span>
          <span>P</span>
          <span>P</span>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
        </h1>
        <h1 className='h1Item'>
          <span>D</span>
          <span>I</span>
          <span>S</span>
          <span>C</span>
          <span>O</span>
          <span>V</span>
          <span>E</span>
          <span>R </span>
          <span>T</span>
          <span>A</span>
          <span>S</span>
          <span>T</span>
          <span>E</span>
        </h1>
      </div>

    </section>
    <section className="AboutPage">


      <img src={banner2} alt="" className='BannerSection2' />
      <div className="HoverAbout">
        <img src={photosection2} className='' alt="" />
        <div className="insideSectionItem">
          <h1>Check Margrita Offers</h1>
          <h4>Indulge in the timeless classic! Our Pizza Margherita features a perfect blend of fresh mozzarella, tangy tomato sauce, and fragrant basil on a golden crust. Enjoy special offers and discounts for solo cravings or family feasts. Fresh, simple, and deliciously satisfying! 🍕</h4>
        </div>

      </div>

    </section>
    <section className="AboutPage">


      <img src={banner3} alt="" className='BannerSection2' />
      <div className="HoverAbout">
        <img src={photosection3} className='' alt="" />
        <div className="insideSectionItem">
          <h1>Check Margrita Offers</h1>
          <h4>Indulge in the timeless classic! Our Pizza Margherita features a perfect blend of fresh mozzarella, tangy tomato sauce, and fragrant basil on a golden crust. Enjoy special offers and discounts for solo cravings or family feasts. Fresh, simple, and deliciously satisfying! 🍕</h4>
        </div>

      </div>

    </section>
    <section className="AboutPage">


      <img src={banner4} alt="" className='BannerSection2' />
      <div className="HoverAbout">
        <img src={photosection4} className='' alt="" />
        <div className="insideSectionItem">
          <h1>Check Margrita Offers</h1>
          <h4>Indulge in the timeless classic! Our Pizza Margherita features a perfect blend of fresh mozzarella, tangy tomato sauce, and fragrant basil on a golden crust. Enjoy special offers and discounts for solo cravings or family feasts. Fresh, simple, and deliciously satisfying! 🍕</h4>
        </div>

      </div>

    </section>

    <section className="AboutPage">


      <img src={banner5} alt="" className='BannerSection2' />
      <div className="HoverAbout">
        <img src={photosection5} className='' alt="" />
        <div className="insideSectionItem">
          <h1>Check Italian Pizza Offers</h1>
          <h4>
            Italian pizza is a world-renowned dish that originates from Italy, known for its simple yet flavorful ingredients
            and diverse regional variations. Traditionally baked in a wood-fired oven, authentic Italian pizza is characterized
            by its thin, crispy crust, fresh tomato sauce, high-quality mozzarella cheese, and a variety of toppings such as
            fresh basil, cured meats, and vegetables.      </h4>
        </div>

      </div>

    </section>
  </>

}
