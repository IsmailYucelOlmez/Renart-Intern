const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      {/* Image skeleton */}
      <div className='w-full h-64 bg-gray-200 animate-pulse rounded-lg'></div>
      
      {/* Content skeleton */}
      <div className='flex flex-col gap-2'>
        {/* Title skeleton */}
        <div className='h-8 bg-gray-200 animate-pulse rounded w-3/4'></div>
        
        {/* Price skeleton */}
        <div className='h-4 bg-gray-200 animate-pulse rounded w-1/3'></div>
        
        {/* Color buttons skeleton */}
        <div className='flex items-center gap-2'>
          <div className='rounded-full w-4 h-4 bg-gray-200 animate-pulse'></div>
          <div className='rounded-full w-4 h-4 bg-gray-200 animate-pulse'></div>
          <div className='rounded-full w-4 h-4 bg-gray-200 animate-pulse'></div>
        </div>
        
        {/* Color text skeleton */}
        <div className='h-3 bg-gray-200 animate-pulse rounded w-1/4'></div>
        
        {/* Star section skeleton */}
        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='w-4 h-4 bg-gray-200 animate-pulse rounded'></div>
          ))}
          <div className='h-3 bg-gray-200 animate-pulse rounded w-8 ml-2'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton 