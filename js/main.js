$(function() {
	d3.csv("data/antibiotics_data.csv", function(data) {
   console.log(data);

function unpack(rows, element) {
	return rows.map(function(row) {
		return row[element];
	});

}

var trace1 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Penicilin'),
	name: "Penicilin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"

};

var trace2 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Streptomycin '),
	name: "Streptomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"

};

var trace3 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Neomycin'),
	name: "Neomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"
};

var build = [trace1, trace2, trace3];

var layout = {
	barmode: "stack",
	xaxis1: {
		showgrid: true,
		title: "Bacteria",
	},
	yaxis1: {
		showgrid: true,
		title: "MIC",
		
	}

};

Plotly.plot('chart1', build, layout, {staticPlot: true});




var data2 = [
	{
		labels: ["negative", "positive"],
		type: "pie",
		values: ["1", "1", "2", "2", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2"]




	}


];
var layout2 = {
	title: "Pie Chart"
};
Plotly.plot('chart2', data2, layout2);

});
});





























