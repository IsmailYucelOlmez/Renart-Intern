const StarSection = ({point}: {point: number}) => {
  // Ensure point is between 0 and 1
  const normalizedPoint = Math.max(0, Math.min(1, point));
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {[...Array(5)].map((_, index) => {
          const starValue = normalizedPoint * 5;
          const isFullyFilled = index < Math.floor(starValue);
          const isPartiallyFilled = index === Math.floor(starValue) && starValue % 1 > 0;
          const partialFill = isPartiallyFilled ? (starValue % 1) : 0;
          
          return (
            <div key={index} className="relative w-5 h-5">
              {/* Background star (always gray) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#E0E0E0"
                  stroke="#E0E0E0"
                  strokeWidth="0.5"
                />
              </svg>
              
              {/* Foreground star (filled based on rating) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0,
                  clipPath: isFullyFilled ? 'none' : isPartiallyFilled ? `inset(0 ${100 - (partialFill * 100)}% 0 0)` : 'inset(0 100% 0 0)'
                }}
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD700"
                  stroke="#FFD700"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <div className="text-[14px] text-gray-500 product-card-score">
          {`${Math.round(normalizedPoint * 5 * 10) / 10}/5`}
      </div>
    </div>
  );
};

export default StarSection;
