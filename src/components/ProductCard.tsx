import { useState } from 'react'
import Image from './Image'
import StarSection from './StarSection'
import ColorSection from './ColorSection'

const ProductCard = ({product}: {product: Product}) => {

    const [color, setColor] = useState<string>("yellow")

  return (
    <div className='flex flex-col gap-4 mb-4'>
      <Image src={product.images[color as keyof typeof product.images]} className='w-full h-full object-cover' />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold product-card-title'>{product.name}</h1>
            <p className='text-sm product-card-price'>${product.price?.toFixed(2) || 1000.00} USD</p>
        </div>

        <ColorSection color={color} setColor={setColor} />
        
        <StarSection point={product.popularityScore} />
      </div>
    </div>
  )
}

export default ProductCard
