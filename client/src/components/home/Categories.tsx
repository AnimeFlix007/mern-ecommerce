import DressIcon from "src/assets/icons/dress.svg";
import JacketIcon from "src/assets/icons/jacket.svg";
import TeeIcon from "src/assets/icons/tee.svg";
import WatchIcon from "src/assets/icons/watch.svg";
import GlassesIcon from "src/assets/icons/glasses.svg";
import ShortsIcon from "src/assets/icons/shorts.svg";
import CoatIcon from "src/assets/icons/coat.svg";
import HatIcon from "src/assets/icons/hat.svg";
import AliceCarousel, { Responsive } from "react-alice-carousel";

const responsive: Responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

export default function Categories() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <AliceCarousel
            mouseTracking
            autoPlay
            infinite
            autoPlayInterval={800}
            animationDuration={1500}
            disableButtonsControls
            responsive={responsive}
            items={[
              <div className="category-item">
                <div className="category-img-box">
                  <img src={DressIcon} alt="dress & frock" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Dress & frock</h3>

                    <p className="category-item-amount">(53)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={CoatIcon} alt="winter wear" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Winter wear</h3>

                    <p className="category-item-amount">(58)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={GlassesIcon} alt="glasses & lens" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Glasses & lens</h3>

                    <p className="category-item-amount">(68)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={ShortsIcon} alt="shorts & jeans" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Shorts & jeans</h3>

                    <p className="category-item-amount">(84)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={TeeIcon} alt="t-shirts" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">T-shirts</h3>

                    <p className="category-item-amount">(35)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={JacketIcon} alt="jacket" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Jacket</h3>

                    <p className="category-item-amount">(16)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={WatchIcon} alt="watch" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Watch</h3>

                    <p className="category-item-amount">(27)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>,

              <div className="category-item">
                <div className="category-img-box">
                  <img src={HatIcon} alt="hat & caps" width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">Hat & caps</h3>

                    <p className="category-item-amount">(39)</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
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
