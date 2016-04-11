var trace1 = {
	x: ["A. aerogenes", "B. abortus", "B. anthracis", "D. pneumoniae", "E. coli", "K. pneumoniae", "M. tuberculosis", "P. vulgaris", "P. aeruginosa", "S. typhosa", "S. schottmuelleri", "S. albus", "S. aureus", "S. fecalis", "S. hemolyticus", "S. viridans"],
	y: [870, 1, 0.001, 0.005, 100, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005],
	name: "Penicilin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"

};

var trace2 = {
	x: ["A. aerogenes", "B. abortus", "B. anthracis", "D. pneumoniae", "E. coli", "K. pneumoniae", "M. tuberculosis", "P. vulgaris", "P. aeruginosa", "S. typhosa", "S. schottmuelleri", "S. albus", "S. aureus", "S. fecalis", "S. hemolyticus", "S. viridans"],
	y: [1, 2, 0.01, 11, 0.4, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.03, 1, 14, 10],
	name: "Streptomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"

};

var trace3 = {
	x: ["A. aerogenes", "B. abortus", "B. anthracis", "D. pneumoniae", "E. coli", "K. pneumoniae", "M. tuberculosis", "P. vulgaris", "P. aeruginosa", "S. typhosa", "S. schottmuelleri", "S. albus", "S. aureus", "S. fecalis", "S. hemolyticus", "S. viridans"],
	y: [1.6, 0.02, 0.007, 10, 0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40],
	name: "Neomycin",
	orientation: "v",
	showlegend: true,
	type: "bar",
	//visible: true,
	//xaxis: "x1",
	//yaxis: "y1"
};

var data = [trace1, trace2, trace3];



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

Plotly.plot('chart1', data, layout, {staticPlot: true});



























