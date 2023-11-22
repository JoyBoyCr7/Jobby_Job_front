import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let showNumber = 1
export default function SimpleSlider(props) {
  if (props.divs.length === 1){
    showNumber = 1
  } else if (props.divs.length === 2){
    showNumber = 2
  } else {
    showNumber = 3
  }
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: showNumber,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {props.divs}
      </Slider>
    );
  }
