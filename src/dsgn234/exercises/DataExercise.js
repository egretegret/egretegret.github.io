import React from 'react';
import { useD3 } from '../useD3';
import "./dataExercise.css";
import * as d3 from 'd3';

function DataExercise() {

    const data = [{
        name: "Friday",
        work: 2,
        leisure: 4
    },
    {
        name: "Saturday",
        work: 3,
        leisure: 4
    },
    {
        name: "Sunday",
        work: 1,
        leisure: 3
    }
    ];

    // // set up styling that will hold the chart
    const margin = {
        top: 15,
        bottom: 10,
        left: 50,
        right: 50
    };

    // // create svg that will hold chart, you can then target the svg with css to see it
    const ref = useD3(
        (svg) => {
            const height = 450 - margin.top - margin.bottom;
        const width = 1000 - margin.left - margin.right;
        // const viewbox = [0, 0, width, height];

    // // set up the x scale to match how many elements we have in our object
    const x = d3
    .scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.15);

    // // set up y scale to match the amounts. 0 to 15 will work
    const y = d3
    .scaleLinear()
        .domain([0, 10])
        .range([height - margin.bottom, margin.top]);

    // // start creating the bars for the chart.
    // // we set up rectangles, as well as sort the data from biggest to smallest
    svg
        .append("g")
        .attr("fill", "white")
        .selectAll("rect")
        .data(data)
        .join("rect")
        //   // places data on correct positions
        .attr("x", (d, i) => x(i))
        .attr("y", (d) => y(d.leisure + d.work))
        .attr("height", d => y(0) - y(d.leisure + d.work))
        .attr("width", x.bandwidth())
        .attr("style", "outline: 2px solid black;")
        //   //add a class
        .attr("class", "leisure");

    var llabels = svg.selectAll("leisure")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "leisure");

    llabels.attr("x", (d, i) => x(i) + 82)
        .attr("y", (d) => y(d.leisure / 2 + d.work) + 5)
        .text("leisure");

    svg
        .append("g")
        .attr("fill", "white")
        .selectAll("rect")
        .data(data)
        .join("rect")
        //   // places data on correct positions
        .attr("x", (d, i) => x(i))
        .attr("y", (d) => y(d.work))
        .attr("height", d => y(0) - y(d.work))
        .attr("width", x.bandwidth())
        .attr("style", "outline: 2px solid black;")
        //   //add a class
        .attr("class", "work");

    var wlabels = svg.selectAll("work")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "work");

    wlabels.attr("x", (d, i) => x(i) + 90)
        .attr("y", (d) => y(d.work / 2) + 5)
        .text("work")


    // // set up labels for x axis
    // // the transform moves the labels to the bottom, comment out to see what i mean
    const xAxis = (g) => {
        g.attr("transform", `translate(0, ${height - margin.bottom})`)
        g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
    }

    // // set up labels for y axis
    const yAxis = (g) => {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
    }


    // // draw the labels onto the page for y
    svg.append("g").call(yAxis);

    // //draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
    svg.append("g").call(xAxis);

    // // draws bars onto page. try adding another flower to the data to see how it changes.
    svg.node();
},
[data.length]);

    function reveal() {

        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName("leisure")[i].style.fill = "white";
            document.getElementsByClassName("work")[i].style.fill = "white";
        }

    }


    return (
        <div class="data-exercise">
            <div class="header">
                <h1>time spent online</h1>
                <button id="reveal-button" onClick={() => reveal()}>
                    reveal
                </button>
            </div>
            <div class="d3-container">
            <svg
      ref={ref}
      style={{
        height: 450,
        width: "100%",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
            </div>
        </div>
    )

}



export default DataExercise;