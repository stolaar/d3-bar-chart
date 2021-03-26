import React from 'react'
import {scaleLinear} from 'd3-scale'
import {interpolateLab} from 'd3-interpolate'

function Bars({scales, margins, data, svgDimensions, maxValue, peakValue}) {

    const colorScale = scaleLinear()
        .domain([0, maxValue])
        .range(['#CBC6D7'])
        .interpolate(interpolateLab)


    const {xScale, yScale} = scales
    const {height} = svgDimensions

    const bars = (
        data.map(datum =>
            <rect
                key={datum.label}
                x={xScale(datum.label)}
                y={yScale(datum.value) - 20}
                height={height - margins.bottom - scales.yScale(datum.value)}
                width={xScale.bandwidth()}
                rx={'2%'}
                ry={'2%'}
                fill={peakValue === datum.value ? 'url(#g1)' : colorScale(datum.value)}
            />,
        )
    )

    return (
        <g>
            <defs>
                <linearGradient id='g1' x2='0' y2='1'>
                    <stop stopColor='#5dc5f3'/>
                    <stop offset='.25' stopColor='#56b9fd'/>
                    <stop offset='.5' stopColor='#68abff'/>
                    <stop offset='.75' stopColor='#8999ff'/>
                    <stop offset='1' stopColor='#ad83f3'/>
                </linearGradient>
            </defs>
            {bars}
        </g>
    )
}

export default Bars
