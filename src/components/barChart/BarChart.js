import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from "./Axes";
import Bars from "./Bar";

function BarChart({data = [], parentWidth}){

        const margins = { top: 50, right: 10, bottom: 50, left: 40 }
        const svgDimensions = { width: Math.max(parentWidth, 400), height: 500 }

        const maxValue = Math.max(...data.map(d => d.value))

        const xScale = scaleBand()
            .padding(0.7)
            .domain(data.map(d => d.label))
            .range([margins.left, svgDimensions.width - margins.right])

        const yScale = scaleLinear()
            .domain([0, maxValue + 10])
            .range([svgDimensions.height - margins.bottom, margins.top])


        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />
                    <Bars
                        peakValue={Math.max(...data.map(d => +d.value))}
                        scales={{ xScale, yScale }}
                        margins={margins}
                        data={data}
                        maxValue={maxValue}
                        svgDimensions={svgDimensions}
                    />
            </svg>
        )
}

export default BarChart
