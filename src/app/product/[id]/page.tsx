"use client"

import { useParams } from 'next/navigation';
import Image from "next/image";
import Layout from "@/components/layout";
import Rating from '@/components/rating/rating';
import products from '@/products.json';
import "./page.css";
import ProductCard from '@/components/product/card/productCard';
import NotFound from '@/app/notFound';

const Product = () => {
  const { id } = useParams() as { id: string };
  const currentProduct = products.find(prod => prod.id === parseInt(id));

  if (!currentProduct) {
    return <NotFound />
  }

  /**
   * filtra por produtos com a mesma categoria
   * exclui o produto atual
   * ordena pelo id mais recente e pela melhor avaliação
   * pega os 5 primeiros resultados
   */
  const productsRecommendation = products
    .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
    .sort((a, b) => b.id - a.id)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <Layout>
    <div className="container">
      <div className="flex-container">
        <div className="grow-3">
          <Image src={currentProduct.image} alt={currentProduct.title} width={300} height={300} />
        </div>
        <div className="grow-5">
          <h2>{currentProduct.title}</h2>
          <div className='rating-info'>
            <span className="category">{currentProduct.category}</span>
            <Rating rating={currentProduct.rating} ratingCount={currentProduct.ratingCount} />
          </div>
          <p className='description'>{currentProduct.description}</p>
          <span className="price">$ {currentProduct.price}</span>
        </div>
      </div>

      <br />
      <div className='recommendation'>
        <h2>Recommended Products</h2>
        <div className="products">
          {productsRecommendation.map(product => {
            return (
              <ProductCard product={product} key={product.id} />
            )
          })}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Product;