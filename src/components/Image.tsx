import { LazyLoadImage } from 'react-lazy-load-image-component'

const Image = ({src,className}: {src: string, className: string}) => {
  return (
    
    <LazyLoadImage src={src} className={className || ""} />
    
  )
}

export default Image