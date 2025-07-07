

const ColorSection = ({color, setColor}: {color: string, setColor: (color: string) => void}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2.5'>
            <div className={`w-7 h-7 flex justify-center items-center rounded-full p-1 bg-white ${color === "yellow" ? "border border-black " : ""}`}>
              <button onClick={() => setColor("yellow")} className={`rounded-full w-5 h-5 bg-[#E6CA97]`}>
              </button>
            </div>
              <div className={`w-7 h-7 flex justify-center items-center rounded-full p-1 bg-white ${color === "rose" ? "border border-black " : ""}`}>
                <button onClick={() => setColor("rose")} className={`rounded-full w-5 h-5 bg-[#E1A4A9]`}>
                </button>
            </div>
            <div className={`w-7 h-7 flex justify-center items-center rounded-full p-1 bg-white ${color === "white" ? "border border-black " : ""}`}>
                <button onClick={() => setColor("white")} className={`rounded-full w-5 h-5 bg-[#D9D9D9] `}>
                </button>
            </div>
        </div>
        <p className='text-xs capitalize product-card-color'>{color} Gold</p>
    </div>
  )
}

export default ColorSection
