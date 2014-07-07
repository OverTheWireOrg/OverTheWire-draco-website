function renderTodayStats() {
$(function() {
  	var globalChart = null;
	var seriesOptions = [],
	yAxisOptions = [],
	colors = Highcharts.getOptions().colors;

	function firstLoad() {
	    $.getJSON('/s/statistics/permin.json', function(data) {
		    var desc = [
			["clients", "clients"],
			["servers", "servers"],
			["routers", "routers"],
		    ];

		    for(var i = 0; i < desc.length; i++) {
			seriesOptions[i] = {
				name: desc[i][1],
				data: data.map(function(r) { return [r["ts"],r[desc[i][0]]]; })
			};
		    }
		    createChart();
	    });
	}

	function updateData() {
	    var loc = Highcharts.charts[1];

	    $.getJSON('/s/statistics/permin.json', function(data) {
		    var desc = [
			["clients", "clients"],
			["servers", "servers"],
			["routers", "routers"],
		    ];

		    for(var i = 0; i < desc.length; i++) {
			loc.series[i].setData(data.map(function(r) { return [r["ts"],r[desc[i][0]]]; }));
		    }

	    });
	}

	firstLoad();

	// create the chart when all data is loaded
	function createChart() {

		$('#today').highcharts('StockChart', {
		    chart: {
			type: 'areaspline',

			events: {
			    load: function() {
				// setInterval(updateData, 30000); // FIXME: this probably won't work in angularjs because everytime the view is visited, a new timer is started
			    }
			},
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
