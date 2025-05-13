import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductCardProps } from "./productCard.props";
import { addToCart } from "../../../store/redux/cartSlice";

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const incrementCart = () => {
    dispatch(addToCart({}));
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
        <button className="add-button" onClick={incrementCart}>Add to Cart</button>

    </div>
  );
};

export default ProductCard;