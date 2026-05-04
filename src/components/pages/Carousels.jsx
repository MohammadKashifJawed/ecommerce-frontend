import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousels = () => {
  return (
    <Carousel autoPlay={true} interval={2000} showArrows={false} showStatus={false} 
      showThumbs={false}>
      <div>
        <img src="https://images.pexels.com/photos/10131765/pexels-photo-10131765.jpeg" />
        <p className="legend">Cool Summer Outfits</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/29265225/pexels-photo-29265225.jpeg" />
        <p className="legend">Trending Styles</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/8126157/pexels-photo-8126157.jpeg" />
        <p className="legend">Be Bold</p>
      </div>
    </Carousel>
  );
};

export default Carousels;