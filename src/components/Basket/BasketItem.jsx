export function BasketItem({item,onQunityUp,onDecreamentCount,onDeleteItem}) {
    return (
        <tr key={item.id} className="border-t border-gray-700">
          <td className="py-2 px-4">{item.title}</td>
          <td className="py-2 px-4">${item.price}</td>
          <td className="py-2 px-4">{item.count}</td>
          <td className="py-2 px-4">${(item.count * item.price).toFixed(2)}</td>
          <td className="py-2 px-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-md mr-2" onClick={() => onQunityUp(item)}>
              +
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-md mr-2" onClick={() => onDecreamentCount(item)}>
              -
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md" onClick={() => onDeleteItem(item)}>
              x
            </button>
          </td>
        </tr>
      )
}