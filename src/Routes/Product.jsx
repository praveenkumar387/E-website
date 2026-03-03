import React from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../Database/json.js";
import { addToCart } from "../redux/slice.js";
import Swal from "sweetalert2";

const Product = () => {
  const dispatch = useDispatch();
  



  const search = useSelector((state) => state.search.value);

  const products = data.recipes;

  const filteredProducts = products.filter((item) =>
    item.name
      .toLowerCase()
      .includes(search?.toLowerCase() || "")
  );

  if (filteredProducts.length === 0) {
    return <h1 className="text-center mt-10">No Products Found</h1>;
  }

  return (
    <section id="product" className="px-4 py-10 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">

              <h2 className="text-lg font-semibold mb-1">
                {item.name}
              </h2>

              <p className="text-sm text-gray-600 mb-3">
                {item.ingredients?.slice(0, 3).join(", ")}
              </p>

              <div className="flex justify-between items-center">

                <span className="font-bold text-yellow-600">
                  {item.cuisine || "Popular"}
                </span>

                <button className="bg-yellow-500 text-white px-4 py-1 rounded"onClick={() => {
  dispatch(addToCart(item));

Swal.fire({
  title: "🌸 Removed Successfully 🌸",
  text: "The item has bloomed away from your cart!",
  icon: "success",
  background: "#fff0f6",
  color: "#b03060",
  confirmButtonText: "Okay 🌷",
  confirmButtonColor: "#ff69b4",
});
}} >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Product;
