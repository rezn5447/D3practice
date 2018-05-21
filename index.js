$(function() {
	$('#container').highcharts({
		xAxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			]
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.y}</b><br/>',
			backgroundColor: '#FCFFC5',
			valueSuffix: 'cm',
			borderWidth: 3,
			borderRadius: 6
		}
	});
});
