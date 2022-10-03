function Card({ product, addToCart, cartItems }) {
  return (
    <>
      <div className=" col-lg-4 border mt-2 pt-3 pb-3">
        <div className="row">
          <div className="col-lg-12 ">
            <img className=" img-fluid" src={product.img} alt="phone" />
          </div>
          <div className=" col-lg-12 text-center">
            <h3>{product.name}</h3>
            <h6>price Rs.{product.price}</h6>
            <button
              disabled={cartItems.some((obj) => obj.id === product.id)}
              onClick={() => {
                addToCart(product);
              }}
              className=" btn btn-sm btn-primary"
            >
              {cartItems.some((obj) => obj.id === product.id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
