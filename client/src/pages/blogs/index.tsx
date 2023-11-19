import { Typography } from "@mui/material";
import Blog1 from "src/assets/blog-1.jpg";
import Blog2 from "src/assets/blog-2.jpg";
import Blog3 from "src/assets/blog-3.jpg";
import Blog4 from "src/assets/blog-4.jpg";

export default function Blogs() {
  return (
    <div className="blog">
      <Typography
        sx={{ width: "100%", textAlign: "center", mb: 3 }}
        variant="h3"
      >
        Our Blogs
      </Typography>

      <div className="container">
        <div className="blog-container has-scrollbar">
          <div className="blog-card">
            <a href="#">
              <img
                src={Blog1}
                alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                width="300"
                className="blog-banner"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Fashion
              </a>

              <a href="#">
                <h3 className="blog-title">
                  Clothes Retail KPIs 2021 Guide for Clothes Executives.
                </h3>
              </a>

              <p className="blog-meta">
                By <cite>Mr Admin</cite> /{" "}
                <time dateTime="2022-04-06">Apr 06, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={Blog2}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Clothes
              </a>

              <h3>
                <a href="#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Robin</cite> /{" "}
                <time dateTime="2022-01-18">Jan 18, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={Blog3}
                alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Shoes
              </a>

              <h3>
                <a href="#" className="blog-title">
                  EBT vendors: Claim Your Share of SNAP Online Revenue.
                </a>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Selsa</cite> /{" "}
                <time dateTime="2022-02-10">Feb 10, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={Blog4}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Electronics
              </a>

              <h3>
                <a href="#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </a>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Pawar</cite> /{" "}
                <time dateTime="2022-03-15">Mar 15, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
