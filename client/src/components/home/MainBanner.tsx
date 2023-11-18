import MainBanner1 from "src/assets/banner-1.jpg";
import MainBanner2 from "src/assets/banner-2.jpg";
import MainBanner3 from "src/assets/banner-3.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function MainBanner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <AliceCarousel
            mouseTracking
            autoPlay
            infinite
            autoPlayInterval={3000}
            animationDuration={1500}
            disableButtonsControls
            items={[
              <div className="slider-item">
                <img
                  src={MainBanner1}
                  alt="women's latest fashion sale"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Trending item</p>

                  <h2 className="banner-title">Women's latest fashion sale</h2>

                  <p className="banner-text">
                    starting at $ <b>20</b>.00
                  </p>

                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </div>
              </div>,
              <div className="slider-item">
                <img
                  src={MainBanner2}
                  alt="modern sunglasses"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Trending accessories</p>

                  <h2 className="banner-title">Modern sunglasses</h2>

                  <p className="banner-text">
                    starting at $ <b>15</b>.00
                  </p>

                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </div>
              </div>,
              <div className="slider-item">
                <img
                  src={MainBanner3}
                  alt="new fashion summer sale"
                  className="banner-img"
                />

                <div className="banner-content">
                  <p className="banner-subtitle">Sale Offer</p>

                  <h2 className="banner-title">New fashion summer sale</h2>

                  <p className="banner-text">
                    starting at $ <b>29</b>.99
                  </p>

                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </div>
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
}
