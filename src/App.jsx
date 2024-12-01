import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Wireless Headphones", price: 49.99, category: "Electronics", photo: "" },
    { id: 2, title: "Yoga Mat", price: 19.99, category: "Fitness", photo: "" },
    { id: 3, title: "Desk Lamp", price: 29.99, category: "Home Decor", photo: "" },
    { id: 4, title: "Running Shoes", price: 59.99, category: "Footwear", photo: "" },
    { id: 5, title: "Bluetooth Speaker", price: 39.99, category: "Electronics", photo: "" },
    { id: 6, title: "Cooking Utensil Set", price: 24.99, category: "Kitchen", photo: "" },
    { id: 7, title: "Notebook", price: 4.99, category: "Stationery", photo: "" },
    { id: 8, title: "Gaming Mouse", price: 34.99, category: "Gaming", photo: "" },
    { id: 9, title: "Sunglasses", price: 14.99, category: "Accessories", photo: "" },
    { id: 10, title: "Portable Charger", price: 25.99, category: "Electronics", photo: "" },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart = product => {
    const found = basket.find(item => item.id === product.id)
    if(found) {
      found.count++
      setBasket([...basket])
    }
    else {
      setBasket([...basket,{...product,count:1}])
    }
  }

  const qunityUp = product => {
    setBasket(basket.map(item => 
      item.id !== product.id ? item: {...item,count: item.count+1}
    ))
  }
  const decreamentCount = product => {
    setBasket(basket.map(item => 
      item.id !== product.id ? item: {...item,count: Math.max(item.count-1,1)}
    ))
  }

  const deleteItem = product => {
    const filtered = basket.filter(item => item.id !== product.id)
    setBasket(filtered)
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Online Shop
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.photo || "https://via.placeholder.com/150"}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-full border-4 border-purple-500"
              />
            </div>
            <p className="text-lg font-semibold text-center text-white">{item.title}</p>
            <p className="text-center text-purple-400">${item.price.toFixed(2)}</p>
            <small className="block text-center text-gray-400">{item.category}</small>
            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg" onClick={() => moveToCart(item)}>
              Move
            </button>
          </div>
        ))}
      </div>

      {/* Basket */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Basket</h2>
        <table className="w-full bg-gray-800 text-gray-100 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-purple-400">
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Count</th>
              <th className="py-2 px-4 text-left">Subtotal</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr key={item.id} className="border-t border-gray-700">
                <td className="py-2 px-4">{item.title}</td>
                <td className="py-2 px-4">${item.price}</td>
                <td className="py-2 px-4">{item.count}</td>
                <td className="py-2 px-4">${(item.count * item.price).toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-md mr-2" onClick={() => qunityUp(item)}>
                    +
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-md mr-2" onClick={() => decreamentCount(item)}>
                    -
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md" onClick={() => deleteItem(item)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
