import React, { useState } from 'react';
import pizza1 from "../images/About Image/Double-Deal-Large.webp";
import pizza2 from "../images/About Image/Double-Deal-Medium.webp";
import pizza3 from "../images/About Image/Double-Deal-Small.webp";
import pizza4 from "../images/About Image/Treat-Meal.webp";
import pizza5 from "../images/About Image/Roma-Box-2-1024x384.webp";
import pizza6 from "../images/About Image/Triple-Box_Banner-1024x384.webp";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: pizza1,
    altText: 'Super Crunchy',
    caption: 'A Super Crunchy pizza is all about a satisfyingly crisp texture from the first bite to the last. Its crust is thin and cooked to perfection, achieving a deep golden-brown color with a crackling sound when you break it apart. The edges are especially crisp, almost like the texture of a cracker, with a slight char for a smoky hint.The base is often pre-baked to enhance its crunchiness before adding a light layer of tomato sauce, which prevents it from soaking into the crust. Melted mozzarella cheese adds a creamy contrast, with optional toppings like pepperoni, fresh veggies, or even a sprinkle of parmesan for extra flavor. The combination of a delicate, crunchy crust with savory toppings makes this pizza a delight for those who love that extra crispiness in every bite.',
    key: 1,
  },
  {
    src: pizza2,
    altText: 'Crespelle',
    caption: 'A Pizza Crespelle, often referred to as "Crespie," blends the delicious qualities of pizza with a unique twist. It features a thin and slightly crispy crepe-like base instead of the traditional dough. The base is cooked to a light golden-brown color, offering a delicate crunch with each bite.Toppings can vary, but a typical Pizza Crespelle might be spread with a rich tomato sauce and topped with ingredients like melted mozzarella, thin slices of cured meats, fresh vegetables, or even a drizzle of olive oil. The edges are often crisped up for a satisfying texture, and fresh herbs like basil or oregano are added for extra flavor.This variation of pizza offers a lighter alternative, with a balance of crispiness and the familiar savory toppings of classic pizza',
    key: 2,
  },
  {
    src: pizza3,
    altText: 'Margherita',
    caption: 'A Margherita pizza is a classic Italian pizza known for its simple yet delicious ingredients. It typically features a thin and crispy crust, lightly charred from the oven. The base is spread with a bright, tangy tomato sauce, made from fresh tomatoes. On top, there’s a generous layer of creamy, melted mozzarella cheese, which blends beautifully with the red sauce beneath it. Fresh basil leaves are scattered across the pizza, adding a burst of herbal flavor and a pop of vibrant green color. The combination of tomatoes, mozzarella, and basil represents the colors of the Italian flag, making it a timeless favorite.',
    key: 3,
  },
  {
    src: pizza4,
    altText: 'Corn',
    caption: 'Corn pizza is a unique twist on the classic pie, combining the sweet crunch of corn with the savory flavors of cheese and other toppings. Often paired with creamy mozzarella, tangy tomato sauce, and sometimes a hint of herbs like basil or oregano, corn adds a refreshing balance of texture and flavor. It\'s a popular choice in many parts of the world, especially in regions that love sweet-savory combinations. Whether baked in a traditional oven or cooked in a wood-fired one, corn pizza offers a delicious, satisfying experience for those looking to try something different from the usual pepperoni',
    key: 4,
  },
  {
    src: pizza5,
    altText: 'Vegetable',
    caption: 'Vegetable pizza is a vibrant and healthy take on the classic favorite. This pizza combines the natural sweetness of corn with a variety of fresh vegetables like bell peppers, onions, tomatoes, mushrooms, and olives. Topped with creamy mozzarella and a flavorful tomato or pesto base, it offers a delightful mix of textures and flavors. Packed with nutrients and bursting with color, it\'s perfect for those seeking a wholesome, plant-forward meal without sacrificing taste. Whether enjoyed as a quick weeknight dinner or a party snack, corn and vegetable pizza is a crowd-pleaser thats both delicious and nutritious.',
    key: 5,
  }, {
    src: pizza6,
    altText: 'Triple Box',
    caption: 'A Triple Box pizza is a hearty and flavorful option that packs a punch of taste in every bite. It typically features a generous amount of toppings, including multiple layers of cheese, meats, and vegetables. The base is often pre-baked to enhance its crispiness before adding a generous amount of tomato sauce. The combination of multiple toppings creates a rich, complex flavor profile that appeals to those who enjoy a robust pizza experience. Whether enjoyed as a family meal or a special treat, a Triple Box pizza is sure to satisfy cravings for a delicious and satisfying slice.',
    key: 6,
  },
];

export function Offers(args) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false)

  const next = () => {

    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);

  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='CarouselItem'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
     
        <img className="ImageCarsoule ms-auto h-100 w-100 d-flex" src={item.src} alt={item.altText} />
    
        <div className="Hover">

     <div className="HoverSystem">

     <h6>{item.caption}</h6>
     </div>
        </div>
      </CarouselItem>
    );

  });

  return <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >

      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />

      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />


    </Carousel>


  </>

    ;
}

