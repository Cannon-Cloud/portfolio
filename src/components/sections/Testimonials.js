import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Rick Perez",
    subtitle: "Technology Partner",
    review:
      "Clarence and I worked together at Verizon for almost four years. During that time, we shared an office and would often compete to attain the #1 spot during our call and sales blitzes. Clarence is a competitive and skilled sales leader who strives to give his customers and clients the best service to wow them into a long-term partnership. He was the “go to” person on his team for help and he would often assist me and my team with complex strategies to win and grow our business. I wish Clarence the best on his new venture and know his new set of customers will be delighted with his consultative style of sales professionalism. 👍",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "John Smith",
    subtitle: "Engineering Manager",
    review:
      "Clarence built a great and functional marketplace that allowed my team to work on other tasks.",
  },
  {
    id: 3,
    avatar: "images/avatar-3.svg",
    userName: "John Newton",
    subtitle: "Product designer at Dribbble",
    review:
      "Clarence used his technical stills and MERN skills to build a full stack app to support our blockchain application 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
