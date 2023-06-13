import React, { useEffect, useRef, useState } from 'react'

import * as d3 from 'd3'

import PieChartTable from 'src/components/A_HrModule/Table'

const PieChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null)
  const data = [
    { label: 'Sam', value: 10 },
    { label: 'Raju', value: 20 },
    { label: 'Cherry', value: 15 },
    { label: 'Sid', value: 5 },
    { label: 'Tom', value: 8 },
  ]
  const [piePropData, setPiePropData] = useState<any>(data)
  useEffect(() => {
    // Sample data

    // Set the dimensions and margins of the chart
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = 400 - margin.left - margin.right
    const height = 300 - margin.top - margin.bottom

    // Create an SVG element
    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('fill', '#FF7F50')

    // Set the x and y scales
    const x = d3.scaleBand().range([0, width]).padding(0.1)
    const y = d3.scaleLinear().range([height, 0])

    // Define the domains for x and y scales
    x.domain(data.map((d) => d.label))
    y.domain([0, d3.max(data, (d) => d.value) || 0])

    // Create the bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label) || 0)
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.value))

    // Add the values on top of the bars
    svg
      .selectAll('.bar-value')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'bar-value')
      .attr('x', (d) => x(d.label) - -25)
      .attr('y', (d) => y(d.value) - 8) // Adjust the position based on your preference
      .attr('text-anchor', 'middle')
      .text((d) => d.value)
      .attr('fill', '#4A72FF')

    // Add the x-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))

    // Add the y-axis
    svg.append('g').call(d3.axisLeft(y))
  }, [])

  return (
    <>
      <svg
        ref={chartRef}
        onClick={(e: any) => {
          console.log('qqqqqqqq', e.target?.__data__)
          setPiePropData([e.target?.__data__])
        }}
      ></svg>
      <PieChartTable pieData={piePropData} allPieData={data} />
    </>
  )
}

export default PieChart
