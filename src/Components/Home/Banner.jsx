import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/home/01.jpg";
import banner2 from "../../assets/home/02.jpg";
import banner3 from "../../assets/home/03.png";
import banner4 from "../../assets/home/04.jpg";
import banner5 from "../../assets/home/05.png";
import banner6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel showStatus={false} className="text-center">
      <div>
        <img className="h-full object-cover" src={banner1} />
      </div>
      <div>
        <img className="h-full object-cover" src={banner2} />
      </div>
      <div>
        <img className="h-full object-cover" src={banner3} />
      </div>
      <div>
        <img className="h-full object-cover" src={banner4} />
      </div>
      <div>
        <img className="h-full object-cover" src={banner5} />
      </div>
      <div>
        <img className="h-full object-cover" src={banner6} />
      </div>
    </Carousel>
  );
};

export default Banner;
