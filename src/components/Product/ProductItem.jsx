export function ProductItem({item,onMoveToCart}) {
    return  <div
    key={item.id}
    className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
    <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg" onClick={() => onMoveToCart(item)}>
    Move
    </button>
    </div>
}