import { useState } from "react";
import { ProductList } from "./components/Product/ProductList";
import "./App.css";
import { Basket } from "./components/Basket/Basket";

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
      
      <ProductList list={products} onMoveToCart={moveToCart} />

        <Basket basket={basket} onQunityUp={qunityUp} onDecreamentCount={decreamentCount} onDeleteItem={deleteItem}/>
    </div>
  );
}

export default App;
