import React from "react";
import "./Home.css";
import Product from "./Product";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home"
    >
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="10002345"
          title="FLYBIRD Adjustable Bench,Utility Weight Bench for Full Body Workout- Multi-Purpose Foldable Incline/Decline Benchs (Black) Large"
          price={148.57}
          image="https://images-na.ssl-images-amazon.com/images/I/610w0JHWFvL._AC_SL1200_.jpg"
          rating={5}
        />
        <Product
          id="10002346"
          title="Cell Phone Stand,Angle Height Adjustable LISEN Cell Phone Stand For Desk,Thick Case Friendly Phone Holder Stand For Desk, Compatible with All Mobile Phones,iPhone,Pixel,iPad,Tablet(4-10in)"
          price={11.89}
          image="https://images-na.ssl-images-amazon.com/images/I/61VXacIAyRL._AC_SL1295_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="10002347"
          title="iTeknic Wireless Earbuds with 4 Mics, [2020 Upgraded] TWS Bluetooth 5.0 Wireless Earbuds with Dual-Mic Noise Reduction, IPX8 Waterproof, 40H Playtime, True Wireless Headphones for iPhone, Calls, Music"
          price={33.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61inEKUoybL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="10002348"
          title="PICTEK Gaming Mouse Wired [7200 DPI] [Programmable] [Breathing Light] Ergonomic Game USB Computer Mice RGB Gamer Desktop Laptop PC Gaming Mouse, 7 Buttons for Windows 7/8/10/XP Vista Linux, Black"
          price={14.44}
          image="https://images-na.ssl-images-amazon.com/images/I/61gxUsLtlyL._AC_SL1280_.jpg"
          rating={5}
        />
        <Product
          id="10002349"
          title="Booty 3 Resistance Bands for Legs and Butt Set, Exercise Bands Fitness Bands - Video Workout, Resistance Loops Hip Thigh Glute Bands Non Slip Fabric, Elastic Strength Squat Band Beginner-Professional"
          price={13.76}
          image="https://images-na.ssl-images-amazon.com/images/I/91fAg%2ByOSpL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="10002350"
          title="Diaper Bag Backpack, RUVALINO Multifunction Travel Back Pack Maternity Baby Changing Bags, Large Capacity, Waterproof and Stylish, Dark Gray"
          price={32.12}
          image="https://images-na.ssl-images-amazon.com/images/I/71kiBcGMv8L._SL1000_.jpg"
          rating={5}
        />
        <Product
          id="10002351"
          title="Laptop Monitor Mount Stand with Keyboard Tray, Adjustable Notebook Desk Mount with Clamp and Grommet Mounting Base for 13 to 27 Inch LCD Computer Screens Up to 22lbs, Notebook up to 15.6”, Black"
          price={49.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71sWNAnJ-OL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="10002352"
          title="Veken French Press Coffee Maker (8 cups, 34 oz), 304 Stainless Steel Coffee Press with 4 Filter Screens, Durable Easy Clean Heat Resistant Borosilicate Glass - 100% BPA Free"
          price={17.32}
          image="https://images-na.ssl-images-amazon.com/images/I/71lJEEvBARL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="10002353"
          title="Cyclace Exercise Bike Stationary 330 Lbs Weight Capacity- Indoor Cycling Bike with Comfortable Seat Cushion, Tablet Holder and LCD Monitor for Home Workout"
          price={290.73}
          image="https://images-na.ssl-images-amazon.com/images/I/61oCUIkV1aL._AC_SL1100_.jpg"
          rating={5}
        />
        <Product
          id="10002354"
          title="Tzowla Business Laptop Backpack Water Resistant Anti-Theft College Backpack with USB Charging Port and Lock 15.6 Inch Computer Backpacks for Women Girls, Casual Hiking Travel Daypack(Red)"
          price={28.04}
          image="https://images-na.ssl-images-amazon.com/images/I/81r1V2XHVjL._AC_SL1500_.jpg"
          rating={5}
        />
      </div>
    </motion.div>
  );
}

export default Home;
