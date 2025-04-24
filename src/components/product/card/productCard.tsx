import Link from "next/link";
import Image from "next/image";
import { ProductCardProps } from "./productCard.props";

const ProductCard = ({ product }: ProductCardProps) => {
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

    </div>
  );
};

export default ProductCard;