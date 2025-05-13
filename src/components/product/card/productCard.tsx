import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "./productCard.props";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/redux/cartSlice";
import { useStore } from "@/store/zustand/store";
import { useAtom } from "jotai";
import { total } from "@/store/jotai/store";

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const incrementByRedux = () => {
    dispatch(addToCart({}));
  };

  const incrementByZustand = useStore((state) => state.addToCart)

  const [cartTotal, setCartTotal] = useAtom(total)
  const incrementByJotai = () => {
    setCartTotal(cartTotal + 1)
  }

  const addToCartAll = () => {
    incrementByRedux();
    incrementByZustand();
    incrementByJotai();
  };
  
  return (
    <div className="card">
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <div className="details">
        <span className="badge">★ {product.rating}</span>
        <h3>{product.title}</h3>
        <span className="price">$ {product.price}</span>
      </div>
      <div className="view">
        <Link href={`/product/${product.id}`}>View Product</Link>
      </div>
        <button className="add-button" onClick={addToCartAll}>Add to Cart</button>

    </div>
  );
};

export default ProductCard;