function Rectangle()
{
var rect; 
d3.select("#svg").call(d3.drag()
.on('start', started)
.on('drag', dragged)

); 

function started(){
var coords = d3.mouse(this); 
rect = d3.select("#svg").append('rect')
.attr('x', coords[0])
.attr('y',coords[1])
.attr('height',0)
.attr('width',0)
.style('stroke', 'yellow')
.style('fill', 'none')
.style('stroke-width',5)
}
function dragged(){
 var coords = d3.mouse(this); 
 rect.attr('width',Math.max(0 , coords[0]- +rect.attr("x")));
 rect.attr('height', Math.max(0,coords[1]) - +rect.attr("y")); 
 }
}
function Circle(){
var circle; 
d3.select("#svg").call(d3.drag()
.on('start', started)
.on('drag', dragged)
);
function started(){
var coords = d3.mouse(this); 
 circle = d3.select("#svg")
 .append('circle')
 .attr('cx', coords[0])
 .attr('cy', coords[1])
 .attr('r',0)
 .style('stroke', 'red')
 .style('fill', 'none')
 .style('stroke-width',5)
 }

function dragged(){
 var coords = d3.mouse(this); 
 circle.attr("r", Math.max(0, coords[0] - +circle.attr('cx')))
}
}

function Ellipse(){
var Ellipse; 
d3.select("#svg").call(d3.drag()
.on('start', started)
.on('drag', dragged)
);
function started(){
var coords = d3.mouse(this); 
 Ellipse = d3.select("#svg")
 .append('ellipse')
 .attr('cx', coords[0])
 .attr('cy', coords[1])
 .attr('rx',0)
 .attr('ry',0)
 .style('stroke', 'red')
 .style('fill', 'none')
 .style('stroke-width',5)
 }

function dragged(){
 var coords = d3.mouse(this); 
  Ellipse.attr("rx", Math.max(0, coords[0] - +Ellipse.attr('cx')))
  Ellipse.attr('ry', Math.max(0,coords[1] - +Ellipse.attr('cy')))
}
}





