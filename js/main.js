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


var pCount = 0;
var nCount = 0;
for (var i = 0; i < data.length; i++) {
	var GramStainingStatus = data[i]['Gram Staining '];
	if(GramStainingStatus == "positive") {
		pCount++;
	} else if(GramStainingStatus == "negative") {
		nCount++;
	} else {
		console.log("Error with data");
	}

}

var data2 = [{
	labels: ["negative", "positive"],
 	type: "pie",
	values: [nCount, pCount]
}];

var layout2 = {
	title: "Pie Chart"
};

Plotly.plot('chart2', data2, layout2, {staticPlot: true});

var trace4 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Streptomycin '),
	marker: {
		color: "rgba(64, 196, 127, 1)",
		size: 7
	},
	mode: "markers",
	type: "scatter",
	name: "Streptomycin"
};

var trace5 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Neomycin'),
	marker: {
		color: "rgba(251, 109, 214, 1)", 
		size: 7
	},
	mode: "markers",
	type: "scatter",
	name: "Neomycin"
};

var build2 = [trace4, trace5];
console.log(build2);
var layout3 = {
	title: "Scatter plot",
	xaxis: {
		title: "Bacteria"
	},
	yaxis: {
		title: "MIC"
	}

};
Plotly.plot('chart3', build2, layout3, {staticPlot: true});




});
});



