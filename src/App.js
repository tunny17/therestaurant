import React from "react";
import images from './constants/images';
import './App.css';


function App() {
  return (
    <div>

      <section className="navigation">
        <div className="logo-container">
          <img src={images.Logo} alt="A Logo" />
        </div>

        {/* main nav */}
        <div className="nav-container">
          <nav>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Stories</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>

        {/* the button and cart side */}
        <div className="nav-2">
          <div className="cart-container">
            <img src={images.Cart} alt="A cart" />
            <p>2</p>
          </div>
          <div className="button-container">
            <button type="button">LOGIN/SIGNUP</button>
          </div>
        </div>
      </section>

      <section className="hero-section">
        <div  className="hero-text">
          <h3>QUICK DELIVERY AT YOUR FINGER TIPS</h3>
          <img src={images.UnderLine} alt="An underline svg" />
          <p><span>Order</span> or <span>Reserve</span> your favourite refreshing drink and snacks.</p>
          <button type="button">EXPLORE MENU</button>
        </div>
        <div  className="cup-container">
          <img src={images.PlasticCup} alt="a plastic cup" className="plastic-cup"/>
          <img src={images.SplashEffect} alt="splash effect" className="splash-overlay1"/>
          <img src={images.JuiceSplash} alt="a splash" className="splash-overlay2"/>
        </div>
      </section>

      <section className="menu-section">
        <header>
          <h3>OUR MENUS</h3>
          <img src={images.UnderLine} alt="an underline" />
        </header>
        <div className="drinks">
          <h3>Drinks</h3>
          <div className="drinks-container">
            <div  className="drink">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink2">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink3">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink4">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink5">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink6">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
            <div  className="drink drink7">
              <div  className="drink-details">
                <h4>ORANGE JUICE</h4>
                <p>N200</p>
              </div>
              <img src={images.Cart} alt="a cart"   className="hidden-cart"/>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
}

export default App;
