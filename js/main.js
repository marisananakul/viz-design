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

//console.log(pCount + " " + nCount);
var data2 = [{
	labels: ["negative", "positive"],
 	type: "pie",
	values: [nCount, pCount]
}];

var layout2 = {
	title: "Pie Chart"
};

Plotly.plot('chart2', data2, layout2, {staticPlot: true});

});
});





























