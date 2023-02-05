import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="data:image/jpeg;base64,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"
            alt="phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span> Price :$1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;