$(function() {
	d3.csv("data/antibiotics_data.csv", function(data) {

// extracts data
function unpack(rows, element) {
	return rows.map(function(row) {
		return row[element];
	});

}
// bar chart
// penicilin data
var trace1 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Penicilin'),
	name: "Penicilin",
	orientation: "v",
	showlegend: true,
	type: "bar",

};

// streptomycin data
var trace2 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Streptomycin '),
	name: "Streptomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",

};

// neomycin data
var trace3 = {
	x: unpack(data, 'Bacteria '),
	y: unpack(data, 'Neomycin'),
	name: "Neomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",

};

var build = [trace1, trace2, trace3];

var layout = {
	title: "Penicilin, Streptomycin, and Neomycin MIC Levels on Different Bacteria",
	barmode: "stack",
	xaxis1: {
		showgrid: true,
		title: "Bacteria",
	},
	yaxis1: {
		showgrid: true,
		title: "MIC",
	},
	margin: {
		b: 150,
	}
};

Plotly.plot('chart1', build, layout, {staticPlot: true});

// calculates number of negative and positive gram stains in data
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

// pie chart
var data2 = [{
	labels: ["negative gram stain", "positive gram stain"],
 	type: "pie",
	values: [nCount, pCount]
}];

var layout2 = {
	title: "Bacteria Gram Stains",
	//autosize: true,
	margin: {
		b: 40,
		l: 200,
	}
};

Plotly.plot('chart2', data2, layout2, {staticPlot: true});

// scatter plot
// streptomycin data
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

// neomycin data
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

var layout3 = {
	title: "Distribution of Streptomycin and Neomycin MIC Levels on Different Bacteria",
	xaxis: {
		title: "Bacteria"
	},
	yaxis: {
		title: "MIC"
	},
	margin: {
		r: 50,
		b: 120,
	}

};
Plotly.plot('chart3', build2, layout3, {staticPlot: true});

});
});
