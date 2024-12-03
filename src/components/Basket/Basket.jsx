import { BasketItem } from "./BasketItem";

export function Basket({basket,onQunityUp,onDecreamentCount,onDeleteItem}) {
    return       <div>
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
        {basket.map((item) => 
        <BasketItem 
        item={item}
        onQunityUp={onQunityUp } 
        onDecreamentCount={onDecreamentCount} 
        onDeleteItem={onDeleteItem}
         key={item.id}/> )}
      </tbody>
    </table>
  </div>
}