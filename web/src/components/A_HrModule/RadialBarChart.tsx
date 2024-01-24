import React, { useEffect, useRef } from 'react'

import * as d3 from 'd3'

const PieChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    // Sample data
    const data = [
      { label: 'A', value: 10 },
      { label: 'B', value: 30 },
      { label: 'C', value: 15 },
      { label: 'D', value: 5 },
      { label: 'E', value: 8 },
    ]

    // Set the dimensions and margins of the chart
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = 400 - margin.left - margin.right
    const height = 300 - margin.top - margin.bottom
    const radius = Math.min(width, height) / 2

    // Create an SVG element
    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left + width / 2},${margin.top + height / 2})`
      )
      .attr('fill', 'white')

    // Set the color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10)

    // Generate the pie layout
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null)

    // Generate the arc path data
    const arc = d3.arc().innerRadius(0).outerRadius(radius)

    // Generate the radial bars
    const arcs = svg
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i))

    // Add labels to the bars
    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .text((d) => d.data.label)
  }, [])

  return <svg ref={chartRef}></svg>
}

export default PieChart
