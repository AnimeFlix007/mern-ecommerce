import Testimonial1 from "src/assets/testimonial-1.jpg";
import QoutesIcon from "src/assets/icons/quotes.svg";
import CTA_Banner from "src/assets/cta-banner.jpg";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import {
  AirplaneTicket,
  ArrowBack,
  Call,
  RocketLaunchOutlined,
} from "@mui/icons-material";

export default function Testimonials() {
  return (
    <div>
      <div className="container">
        <div className="testimonials-box">
          <div className="testimonial">
            <h2 className="title">testimonial</h2>

            <div className="testimonial-card">
              <img
                src={Testimonial1}
                alt="alan doe"
                className="testimonial-banner"
                width="80"
                height="80"
              />

              <p className="testimonial-name">Alan Doe</p>

              <p className="testimonial-title">CEO & Founder Invision</p>

              <img
                src={QoutesIcon}
                alt="quotation"
                className="quotation-img"
                width="26"
              />

              <p className="testimonial-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>

          <div className="cta-container">
            <img
              src={CTA_Banner}
              alt="summer collection"
              className="cta-banner"
            />

            <a href="#" className="cta-content">
              <p className="discount">25% Discount</p>

              <h2 className="cta-title">Summer collection</h2>

              <p className="cta-text">Starting @ $10</p>

              <button className="cta-btn">Shop now</button>
            </a>
          </div>

          <div className="service">
            <h2 className="title">Our Services</h2>

            <div className="service-container">
              <a href="#" className="service-item">
                <div className="service-icon">
                  <DirectionsBoatIcon />
                </div>

                <div className="service-content">
                  <h3 className="service-title">Worldwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <RocketLaunchOutlined />
                </div>

                <div className="service-content">
                  <h3 className="service-title">Next Day delivery</h3>
                  <p className="service-desc">UK Orders Only</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <Call />
                </div>

                <div className="service-content">
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">Hours: 8AM - 11PM</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <ArrowBack />
                </div>

                <div className="service-content">
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy & Free Return</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <AirplaneTicket />
                </div>

                <div className="service-content">
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
