import Slider from "rc-slider"
import "rc-slider/assets/index.css"


const FilterSection = ({filter, setFilter}: {filter: Filter, setFilter: (filter: Filter) => void}) => {

    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-avenir">
            <div className="flex items-center gap-4">
                <p className='text-sm font-medium'>Price</p>
                <div className="flex items-center gap-2 min-w-[180px]">
                    <span className="text-xs">{filter.price.min}</span>
                    <Slider
                        range
                        min={0}
                        max={filter.price.max}
                        value={[filter.price.min, filter.price.max]}
                        onChange={(val) => {
                            if (Array.isArray(val) && val.length === 2) setFilter({...filter, price: {min: val[0], max: val[1]}})
                        }}
                        allowCross={false}
                        trackStyle={[{ backgroundColor: '#000', height: 3 }]}
                        handleStyle={[
                            { backgroundColor: '#000', borderColor: '#fff', height: 16, width: 16 },
                            { backgroundColor: '#000', borderColor: '#fff', height: 16, width: 16 }
                        ]}
                        railStyle={{ backgroundColor: '#000', height: 3 }}
                    />
                    <span className="text-xs">{filter.price.max}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className='text-sm font-medium'>Point</p>
                <div className="flex items-center gap-2 min-w-[180px]">
                    <span className="text-xs">{(filter.popularityScore.min * 5).toFixed(1)}</span>
                    <Slider
                        range
                        min={0}
                        max={5}
                        value={[filter.popularityScore.min * 5, filter.popularityScore.max * 5]}
                        onChange={(val) => {
                            if (Array.isArray(val) && val.length === 2) setFilter({
                                ...filter,
                                popularityScore: {
                                    min: val[0] / 5,
                                    max: val[1] / 5
                                }
                            })
                        }}
                        allowCross={false}
                        trackStyle={[{ backgroundColor: '#000', height: 3 }]}
                        handleStyle={[
                            { backgroundColor: '#000', borderColor: '#fff', height: 16, width: 16 },
                            { backgroundColor: '#000', borderColor: '#fff', height: 16, width: 16 }
                        ]}
                        railStyle={{ backgroundColor: '#000', height: 3 }}
                    />                                     
                    <span className="text-xs">{(filter.popularityScore.max * 5).toFixed(1)}</span>
                    
                </div>
            </div>
        </div>
    )
}

export default FilterSection
