import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const DonutChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data = [1, 2]; // 1/3 of the pie will be black, 2/3 will be white

    const width = 180;
    const height = 180;
    const margin = 0;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal<string, string>()
      .domain(['0', '1'])
      .range(['black', '#efa606']);

    const pie = d3.pie<number>().sort(null);

    const arc = d3.arc<d3.PieArcDatum<number>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (_d, i) => color(i.toString()))
      .attr('stroke', 'black')
      .style('stroke-width', '2px');

  }, []);

  return (
    <>
      <div className="donout_chart_container">
        <svg ref={ref}></svg>
        <h4>30% de lo que se comercia como miel de abeja está adulterada o es completamente falsa</h4>
      </div>
      <p className='chart_reference'><small>Funete: Business Insider</small></p>
    </>
  );
};

export default DonutChart;
