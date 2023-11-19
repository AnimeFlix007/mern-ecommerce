import { AddBox, Close, Remove } from "@mui/icons-material";
import { Rating } from "@mui/material";
import ShoesIcon from "@/assets/icons/shoes.svg";
import DressIcon from "@/assets/icons/dress.svg";
import BagIcon from "@/assets/icons/bag.svg";
import Jewellery from "@/assets/icons/jewelry.svg";
import GlassesIcon from "@/assets/icons/glasses.svg";
import CosmeticsIcon from "@/assets/icons/cosmetics.svg";
import PerfumeIcon from "@/assets/icons/perfume.svg";
import Product1 from "@/assets/products/1.jpg";
import Product2 from "@/assets/products/2.jpg";
import Product3 from "@/assets/products/3.jpg";
import Product4 from "@/assets/products/4.jpg";
import { useState } from "react";

const initialValues = {
  cloths: false,
  footware: false,
  Jewellery: false,
  bags: false,
  glasses: false,
  cosmetics: false,
  perfume: false,
};

export default function ProductMenuBar() {
  const [accordian, setAccordian] = useState(initialValues);

  return (
    <aside className="product-container">
      <div className="container">
        <div className="sidebar  has-scrollbar" data-mobile-menu>
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>

              <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                <Close />
              </button>
            </div>

            <ul className="sidebar-menu-category-list">
              <li className="sidebar-menu-category">
                <button
                  className={`sidebar-accordion-menu ${accordian.cloths ? "active" : ""}`}
                  onClick={() =>
                    setAccordian({ ...initialValues, cloths: !accordian.cloths })
                  }
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={DressIcon}
                      alt="clothes"
                      width="20"
                      height="20"
                      className="menu-title-img"
                    />

                    <p className="menu-title">Clothes</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className={`sidebar-submenu-category-list ${accordian.cloths ? "active" : ""}`} data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Shirt</p>
                      <data
                        value="300"
                        className="stock"
                        title="Available Stock"
                      >
                        300
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">shorts & jeans</p>
                      <data
                        value="60"
                        className="stock"
                        title="Available Stock"
                      >
                        60
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        50
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">dress & frock</p>
                      <data
                        value="87"
                        className="stock"
                        title="Available Stock"
                      >
                        87
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  className={`sidebar-accordion-menu ${accordian.footware ? "active" : ""}`}
                  data-accordion-btn
                  onClick={() =>
                    setAccordian({ ...initialValues, footware: true })
                  }
                >
                  <div className="menu-title-flex">
                    <img
                      src={ShoesIcon}
                      alt="footwear"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Footwear</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Sports</p>
                      <data
                        value="45"
                        className="stock"
                        title="Available Stock"
                      >
                        45
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Formal</p>
                      <data
                        value="75"
                        className="stock"
                        title="Available Stock"
                      >
                        75
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Casual</p>
                      <data
                        value="35"
                        className="stock"
                        title="Available Stock"
                      >
                        35
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Safety Shoes</p>
                      <data
                        value="26"
                        className="stock"
                        title="Available Stock"
                      >
                        26
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  className="sidebar-accordion-menu"
                  onClick={() =>
                    setAccordian({ ...initialValues, Jewellery: true })
                  }
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={Jewellery}
                      alt="clothes"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Jewelry</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Earrings</p>
                      <data
                        value="46"
                        className="stock"
                        title="Available Stock"
                      >
                        46
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Couple Rings</p>
                      <data
                        value="73"
                        className="stock"
                        title="Available Stock"
                      >
                        73
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Necklace</p>
                      <data
                        value="61"
                        className="stock"
                        title="Available Stock"
                      >
                        61
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  onClick={() =>
                    setAccordian({ ...initialValues, perfume: true })
                  }
                  className="sidebar-accordion-menu"
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={PerfumeIcon}
                      alt="perfume"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Perfume</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Clothes Perfume</p>
                      <data
                        value="12"
                        className="stock"
                        title="Available Stock"
                      >
                        12 pcs
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Deodorant</p>
                      <data
                        value="60"
                        className="stock"
                        title="Available Stock"
                      >
                        60 pcs
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">jacket</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        50 pcs
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">dress & frock</p>
                      <data
                        value="87"
                        className="stock"
                        title="Available Stock"
                      >
                        87 pcs
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  onClick={() =>
                    setAccordian({ ...initialValues, cosmetics: true })
                  }
                  className="sidebar-accordion-menu"
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={CosmeticsIcon}
                      alt="cosmetics"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Cosmetics</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data
                        value="68"
                        className="stock"
                        title="Available Stock"
                      >
                        68
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Sunscreen</p>
                      <data
                        value="46"
                        className="stock"
                        title="Available Stock"
                      >
                        46
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Body Wash</p>
                      <data
                        value="79"
                        className="stock"
                        title="Available Stock"
                      >
                        79
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Makeup Kit</p>
                      <data
                        value="23"
                        className="stock"
                        title="Available Stock"
                      >
                        23
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  onClick={() =>
                    setAccordian({ ...initialValues, glasses: true })
                  }
                  className="sidebar-accordion-menu"
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={GlassesIcon}
                      alt="glasses"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Glasses</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Sunglasses</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        50
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Lenses</p>
                      <data
                        value="48"
                        className="stock"
                        title="Available Stock"
                      >
                        48
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button
                  onClick={() => setAccordian({ ...initialValues, bags: true })}
                  className="sidebar-accordion-menu"
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <img
                      src={BagIcon}
                      alt="bags"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Bags</p>
                  </div>

                  <div>
                    <Remove className="remove-icon" />
                    <AddBox className="add-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Shopping Bag</p>
                      <data
                        value="62"
                        className="stock"
                        title="Available Stock"
                      >
                        62
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Gym Backpack</p>
                      <data
                        value="35"
                        className="stock"
                        title="Available Stock"
                      >
                        35
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Purse</p>
                      <data
                        value="80"
                        className="stock"
                        title="Available Stock"
                      >
                        80
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="#" className="sidebar-submenu-title">
                      <p className="product-name">Wallet</p>
                      <data
                        value="75"
                        className="stock"
                        title="Available Stock"
                      >
                        75
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="product-showcase">
            <h3 className="showcase-heading">best sellers</h3>

            <div className="showcase-wrapper">
              <div className="showcase-container">
                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img
                      src={Product1}
                      alt="baby fabric shoes"
                      width="75"
                      height="75"
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">baby fabric shoes</h4>
                    </a>

                    <div className="showcase-rating">
                      <Rating name="size-large" defaultValue={2} />
                    </div>

                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$4.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img
                      src={Product2}
                      alt="men's hoodies t-shirt"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">men's hoodies t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <Rating name="size-large" defaultValue={2} />
                    </div>

                    <div className="price-box">
                      <del>$17.00</del>
                      <p className="price">$7.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img
                      src={Product3}
                      alt="girls t-shirt"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">girls t-shirt</h4>
                    </a>
                    <div className="showcase-rating">
                      <Rating name="size-large" defaultValue={2} />
                    </div>

                    <div className="price-box">
                      <del>$5.00</del>
                      <p className="price">$3.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="#" className="showcase-img-box">
                    <img
                      src={Product4}
                      alt="woolen hat for men"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">woolen hat for men</h4>
                    </a>
                    <div className="showcase-rating">
                      <Rating name="size-large" defaultValue={2} />
                    </div>

                    <div className="price-box">
                      <del>$15.00</del>
                      <p className="price">$12.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
