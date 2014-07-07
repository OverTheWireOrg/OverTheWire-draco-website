function renderFullStats() {
$(function() {
	var seriesOptions = [],
	yAxisOptions = [],
	colors = Highcharts.getOptions().colors;

	seriesOptions[0] = {
		type: "flags",
		name: "lala",
		data: flags,
		shape: 'squarepin'
	};

	$.getJSON('/s/statistics/full.json', function(data) {
		var desc = [
		    ["uniqclients", "Unique amount of clients"],
		    ["uniqservers", "Unique amount of servers"],
		    ["uniqrouters", "Unique amount of routers"],
		    ["avgclients", "Average amount of clients"],
		    ["avgservers", "Average amount of servers"],
		    ["avgrouters", "Average amount of routers"],
		];

		for(var i = 0; i < desc.length; i++) {
		    seriesOptions[i+1] = {
			    name: desc[i][1],
			    data: data.map(function(r) { return [r["ts"],r[desc[i][0]]]; })
		    };
		}

		createChart();
	});

	// create the chart when all data is loaded
	function createChart() {

		$('#overview').highcharts('StockChart', {
		    chart: {
			type: 'areaspline',
		    },

		    rangeSelector: {
			buttons: [
				{ type: 'week', count: 1, text: '1w' }, 
				{ type: 'month', count: 1, text: '1m' }, 
				{ type: 'month', count: 3, text: '3m' }, 
				{ type: 'month', count: 6, text: '6m' }, 
				{ type: 'ytd', text: 'YTD' }, 
				{ type: 'year', count: 1, text: '1y' }, 
				{ type: 'all', text: 'All' }
			],
		        selected: 0
		    },

		    yAxis: {
		    	plotLines: [{
		    		value: 0,
		    		width: 2,
		    		color: 'silver'
		    	}]
		    },
		    
		    plotOptions: {
		    },
		    
		    tooltip: {
		    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
		    	valueDecimals: 2
		    },
		    
		    series: seriesOptions
		});
	}

});
}
