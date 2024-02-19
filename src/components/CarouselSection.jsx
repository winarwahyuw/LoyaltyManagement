/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { dataSliderBanner } from "../data";
import { Link } from "react-router-dom";

const CarouselSection = ({ centerPadding }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: centerPadding+"px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };
  
    return (<>
      <div className="slider-container">
        <Slider {...settings}>
          {
            dataSliderBanner?.map(( data, key )=>(
              <Link to={`/voucher/${data?.company_name}`} key={key}>
                <div  className="card">
                  <div className="img-container">
                    <img src={data?.image} alt={`${data?.company_name_name} banner`} />
                  </div>
                </div>
              </Link>
            ))
          }
        </Slider>
    </div>
    </>
    );
  };

export default CarouselSection