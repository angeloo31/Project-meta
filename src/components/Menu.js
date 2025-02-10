import React from "react";
import recipies from "../recipes";
import Swal from "sweetalert2";
const Menu = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ordered!",
          text: "Your order has been confirmed.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials !</h2>
        <button>Order Menu</button>
      </div>

      <div className="cards">
        {recipies.map((recipie) => (
          <div key={recipie.id} className="menu-items">
            <img src={recipie.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipie.title}</h5>
                <p>{recipie.price}</p>
              </div>

              <p>{recipie.description}</p>
              <button
                className="order-btn"
                onClick={() => handleOrder(recipie.id)}
              >
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
