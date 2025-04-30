'use client';
import { useState } from 'react';
import Layout from "@/components/layout";
import products from '@/products.json'
import ProductCard from '@/components/product/card/productCard';
import SearchBar from '@/components/searchBar/searchBar';
import NotFound from './notFound';

const Home = () => {
  const [searchText, setSearchText] = useState<string>('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <NotFound />
  }
  
  return (
    <Layout>
    <div className="container">
      <div className='search-bar'>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="products">
        {filteredProducts.map(product => {
          return (
            <ProductCard product={product} key={product.id} />
          )
        })}
      </div>
    </div>
    </Layout>
  );
};

export default Home;