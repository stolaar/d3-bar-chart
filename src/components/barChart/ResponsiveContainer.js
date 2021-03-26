import React, {useEffect, useRef, useState} from 'react'
import BarChart from "./BarChart";
import useWindowSize from "../../hooks/useWindowsSize";


function ResponsiveContainer(props) {
    const [containerWidth, setContainerWidth] = useState(null)
    const containerRef = useRef({})
    const {width} = useWindowSize()

    const renderChart = () => {
        return <BarChart {...props} parentWidth={containerWidth} />
    }

    useEffect(() => {
        if(containerRef.current) {
            const currentWidth = containerRef.current.getBoundingClientRect().width
            if(currentWidth !== containerWidth) {
                setContainerWidth(currentWidth)
            }
        }
    }, [containerRef,width, containerWidth])

    return <div className='responsive-chart-container' ref={containerRef}>
        {containerWidth ? renderChart() : null}
    </div>
}

export default ResponsiveContainer
