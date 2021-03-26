import React, { Fragment, useEffect, useRef } from 'react'
import {scaleLinear} from 'd3-scale'
import {interpolateLab} from 'd3-interpolate'
import * as d3 from 'd3'
import d3Tip from 'd3-tip'

const duration = 500
function Bars({scales, margins, data, svgDimensions, maxValue, peakValue}) {
    const ref = useRef({})

    const colorScale = scaleLinear()
        .domain([0, maxValue])
        .range(['#CBC6D7'])
        .interpolate(interpolateLab)


    const {xScale, yScale} = scales
    const {height} = svgDimensions

    useEffect(() => {
        if(!ref.current) return
        const chart = d3.select(ref.current);

        const tip = d3Tip()
        .attr('class', 'tooltip')
        .offset([-10, 0])
        .html((d) => {
            return "<strong>Value:</strong> <span>" +( d.target.__data__ || {}).value + "</span>";
        })
        chart.call(tip)
        chart.selectAll(".bar")
        .data(data)
        .join((enter) =>
          enter
            .append("rect")
            .attr('key', d => d.label + d.value)
            .classed("bar", true)
            .attr("fill", datum => colorScale(datum.value))
            .attr("y", (d) => yScale(0))
            .attr("height", 0)
            .attr('rx','2%')
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
        )
        .attr("x", (d) => xScale(d.label))
        .style("fill", datum =>  datum.value >= peakValue ? 'url(#g1)' : colorScale(datum.value))
        .attr("width", (d) => xScale.bandwidth())
        .transition()
        .duration(duration)
        .delay((d, i) => (i * duration) / 10)
        .attr("height", (d) => height - margins.bottom - yScale(d.value))
        .attr("y", (d) => yScale(d.value) - 20);

    }, [data, peakValue, margins,colorScale, height, yScale, xScale])

    return (
        <Fragment>
            <div className='tooltip'>

            </div>
       
        <g ref={ref}>
            <defs>
                <linearGradient id='g1' x2='0' y2='1'>
                    <stop stopColor='#5dc5f3'/>
                    <stop offset='.25' stopColor='#56b9fd'/>
                    <stop offset='.5' stopColor='#68abff'/>
                    <stop offset='.75' stopColor='#8999ff'/>
                    <stop offset='1' stopColor='#ad83f3'/>
                </linearGradient>
            </defs>
        </g>
        </Fragment>
    )
}

export default Bars