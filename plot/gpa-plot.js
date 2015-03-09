var gpaBySubject = [{
    subject: "Humanities",
    gpa: 3.74
}, {
    subject: "Computer Science",
    gpa: 3.95
}, {
    subject: "Philosophy",
    gpa: 3.7
}, {
    subject: "Economics & Business",
    gpa: 3.85
}, {
    subject: "Math & Statistics",
    gpa: 3.6
}, {
    subject: "Science",
    gpa: 4
}, ]

var xScale = new Plottable.Scale.Ordinal();
var yScale = new Plottable.Scale.Linear().domain([3.3, 4.1]);
var colorScale = new Plottable.Scale.Color();
var gridlines = new Plottable.Component.Gridlines(null, yScale);

var plot = new Plottable.Plot.Bar(xScale, yScale)
    .addDataset(gpaBySubject)
    .attr("x", "subject", xScale)
    .attr("y", "gpa", yScale)
    .attr("fill", "subject", colorScale)
    .animate(true);
var xAxis = new Plottable.Axis.Category(xScale, "bottom");
var yAxis = new Plottable.Axis.Numeric(yScale, "left");
var table = new Plottable.Component.Table([
    [yAxis, gridlines.merge(plot)],
    [null, xAxis]
]);
table.renderTo("#gpa-breakdown");
