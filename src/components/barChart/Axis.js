import React, {useEffect, useRef} from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

function Axis({orient, translate, scale, tickSize, tickFormat}) {
    const axisRef = useRef({})

    const renderAxis = () => {
        const axisType = `axis${orient}`
        const axis = d3Axis[axisType]()
            .scale(scale)
            .tickSize(-tickSize)
            .tickPadding([17])
            .ticks([5])
            .tickSizeInner(0)
            .tickSizeOuter(0)
            .tickFormat(tickFormat)

        d3Select(axisRef.current).call(axis)
    }

    useEffect(() => {
        renderAxis()
    })

        return (
            <g
                className={`Axis Axis-${orient}`}
                ref={axisRef}
                transform={translate}
            />
        )
}

export default Axis
