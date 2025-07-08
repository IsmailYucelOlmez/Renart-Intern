import './App.css'
import ProductCard from './components/ProductCard'
import ProductCardSkeleton from './components/ProductCardSkeleton'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FilterSection from './components/FilterSection';
import { responsive } from './utils/index';
import { useState, useEffect } from 'react';
import { useGetProducts } from './api/productApi';

function App() {

  const [filter, setFilter] = useState<Filter>({
    price: {
      min: 0,
      max: 50000,
    },
    popularityScore: {
      min: 0,
      max: 1,
    },
  });

  const {data: products, isLoading, error, maxPrice} = useGetProducts({filter})
  
  // Update max price when products change
  useEffect(() => {
    setFilter(prev => ({
      ...prev,
      price: {
        ...prev.price,
        max: maxPrice
      }
    }));
  }, [maxPrice]);
  
  return (
    <div className='w-full lg:w-3/4 mx-auto flex flex-col gap-4 justify-center h-screen my-4 px-4 lg:px-0'>
      <h1 className='text-[45px] text-center main-title'>Product List</h1>
      <FilterSection filter={filter} setFilter={setFilter} />
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Carousel responsive={responsive} className='w-full' >
          {[...Array(8)].map((_, index: number) => (
            <ProductCardSkeleton key={index} />
          ))}
        </Carousel>
      ) : (
        <>    
          {products && products.length > 0 ? (          
            <Carousel 
              responsive={responsive} 
              className='w-full' 
              sliderClass='overflow-x-auto'
              key={products.length} // Force re-render when products change
              infinite={false}
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              
              {products.map((product: Product, index: number) => (
                <ProductCard key={`${product.name}-${index}`} product={product} />
              ))}
            </Carousel>       
          ) : (
            <p className='text-center text-gray-500'>No products found matching your criteria.</p>
          )}
      </>
      )}
    </div>
  )
}

export default App
