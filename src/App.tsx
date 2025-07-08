import './App.css'
import ProductCard from './components/ProductCard'
import ProductCardSkeleton from './components/ProductCardSkeleton'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import FilterSection from './components/FilterSection';
import { useState } from 'react';
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

  const {data: products, isLoading, error} = useGetProducts({filter})

  
  return (
    <div className='w-full lg:w-3/4 mx-auto flex flex-col gap-4 justify-center h-screen my-4 px-4 lg:px-0'>
      <h1 className='text-[45px] text-center main-title'>Product List</h1>
      <FilterSection filter={filter} setFilter={setFilter} />
      {error && <p>Error: {error.message}</p>}
      {isLoading ? (
        <Swiper
          spaceBetween={16}
          className='w-full'
          modules={[Navigation, Scrollbar]}
          navigation
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[...Array(8)].map((_, index: number) => (
            <SwiperSlide key={index}>
              <ProductCardSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {products && products.length > 0 ? (
            <Swiper
              spaceBetween={16}
              className='w-full'
              modules={[Navigation, Scrollbar]}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },           
              }}
            >
              {products.map((product: Product, index: number) => (
                <SwiperSlide key={`${product.name}-${index}`} className='mb-4'>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className='text-center text-gray-500'>No products found matching your criteria.</p>
          )}
        </>
      )}
    </div>
  )
}

export default App
