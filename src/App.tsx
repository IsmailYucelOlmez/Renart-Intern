import './App.css'
import ProductCard from './components/ProductCard'
import products from './assets/products.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <div className='w-full lg:w-3/4 mx-auto flex flex-col gap-4 justify-center h-screen my-4'>
      <h1 className='text-[45px] text-center'>Product List</h1>
      <Carousel responsive={responsive} className='w-full'>
        {products.map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </Carousel>
    </div>
  )
}

export default App
