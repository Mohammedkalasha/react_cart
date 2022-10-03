import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Cart from "./cart";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPencil",
      price: 10900,
      img: "https://www.reliancedigital.in/medias/Apple-MU8F2ZM-A-Mobile-Hands-free-Kits-491503392-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTQ1MHxpbWFnZS9qcGVnfGltYWdlcy9oYWIvaDE0LzkwODI2MjY4NjcyMzAuanBnfGRjM2VmZTZjNDYwMDJiM2NhYWY1OGU4NTY3YTY1YWY5YjY4M2NlMGE2NGY1YjE3MDYwMTMyZGUwYjMyMDRlMjk",
    },
    {
      id: 2,
      name: "MacBook pro",
      price: 259900,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415318/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245228_0_uyb1zl.png/mxw_2736,f_auto",
    },
    {
      id: 3,
      name: "iPhone SE",
      price: 43900,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009844/Croma%20Assets/Communication/Mobiles/Images/249852_0_eff8j8.png/mxw_2736,f_auto",
    },
    {
      id: 4,
      name: "iphone 14 pro max",
      price: 189000,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703416/Croma%20Assets/Communication/Mobiles/Images/261991_hhfa33.png/mxw_2736,f_auto",
    },
    {
      id: 5,
      name: "iphone 13 pro max",
      price: 139000,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009136/Croma%20Assets/Communication/Mobiles/Images/243528_0_qewwoa.png/mxw_2736,f_auto",
    },
    {
      id: 6,
      name: "ipad pro",
      price: 129000,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1619506490/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/234316_heelfc.png/mxw_2736,f_auto",
    },
  ]);

  const [cartItems, setcartItems] = useState([]);

  let addToCart = (product) => {
    setcartItems([...cartItems, product]);
  };
  let removeFromCart = (product) => {
    const indexVal = cartItems.findIndex((obj) => obj.id === product.id);
    cartItems.splice(indexVal, 1);
    setcartItems([...cartItems]);
  };
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bolder">Shop in style</h2>
            <p className="lead fw-normal text-white-50 mb-0">
              Smartphones & accessories
            </p>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {products.map((product) => {
                return (
                  <Card
                    product={product}
                    addToCart={addToCart}
                    cartItems={cartItems}
                  ></Card>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <h3>Cart</h3>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart}></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
