import { useState } from 'react'
import Image from './Image'

const ProductCard = ({product}: {product: Product}) => {

    const [color, setColor] = useState<string>("yellow")

  return (
    <div className='flex flex-col gap-4'>
      <Image src={product.images[color as keyof typeof product.images]} className='w-full h-full object-cover' />
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{product.name}</h1>
        <div className='flex items-center gap-2'>
            <button onClick={() => setColor("yellow")} className={`rounded-full w-6 h-6 bg-yellow-500 border border-gray-300 ${color === "yellow" ? "border border-black p-1" : ""}`}>

            </button>
            <button onClick={() => setColor("rose")} className={`rounded-full w-6 h-6 bg-rose-500 border border-gray-300 ${color === "rose" ? "border border-black p-1" : ""}`}>

            </button>
            <button onClick={() => setColor("white")} className={`rounded-full w-6 h-6 bg-white border border-gray-300 ${color === "white" ? "border border-black p-1" : ""}`}>

            </button>
            
        </div>
      </div>
    </div>
  )
}

export default ProductCard
