import { ProductItem } from "./ProductItem";

export function ProductList({list, onMoveToCart}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {list.map((item) => <ProductItem item={item} onMoveToCart={onMoveToCart} key={item.id}/>)}
      </div>
    )
}