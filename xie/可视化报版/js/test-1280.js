/****** PLACE YOUR CUSTOM STYLES HERE ******/

var legal_person_data = {"uploadData":[{"count":630},{"count":986},{"count":792},{"count":642},{"count":521},{"count":573}
					,{"count":832},{"count":747},{"count":983},{"count":836},{"count":831},{"count":633}],
		"updateData":[{"count":110},{"count":181},{"count":123},{"count":197},{"count":123},{"count":173}
					,{"count":123},{"count":151},{"count":101},{"count":152},{"count":101},{"count":177}],
		"viewData":[{"count":651},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
					,{"count":928},{"count":219},{"count":613},{"count":254},{"count":981},{"count":301}]};
var people_data = {"uploadData":[{"count":1300},{"count":1686},{"count":1692},{"count":1742},{"count":1621},{"count":773}
				,{"count":832},{"count":1047},{"count":1483},{"count":1336},{"count":831},{"count":973}],
	"updateData":[{"count":103},{"count":281},{"count":203},{"count":197},{"count":173},{"count":154}
				,{"count":223},{"count":251},{"count":201},{"count":252},{"count":201},{"count":277}],
	"viewData":[{"count":651},{"count":842},{"count":223},{"count":223},{"count":221},{"count":812}
				,{"count":928},{"count":219},{"count":613},{"count":254},{"count":981},{"count":301}]};
var picture_data = {"uploadData":[{"count":330},{"count":786},{"count":492},{"count":842},{"count":421},{"count":673}
				,{"count":932},{"count":447},{"count":583},{"count":436},{"count":331},{"count":433}],
	"updateData":[{"count":10},{"count":81},{"count":23},{"count":97},{"count":23},{"count":73}
				,{"count":23},{"count":51},{"count":01},{"count":52},{"count":01},{"count":77}],
	"viewData":[{"count":451},{"count":342},{"count":523},{"count":323},{"count":421},{"count":812}
				,{"count":728},{"count":619},{"count":613},{"count":554},{"count":481},{"count":301}]};
			
var Tpl1 = '<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' ;		
var Tpl2 = '<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' ;
var Tpl3 = '<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' +
			'<li>' +
			'<p class="data-count"></p>' +
			'<span class="data-name"></span>' +
			'</li>' ;		
$('.com-screen-content .use-data').html(Tpl1);			
// 基于准备好的dom，初始化echarts实例
var myChart1= echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main3'));
//var myChart4 = echarts.init(document.getElementById('main4'));
var myChart5 = echarts.init(document.getElementById('main5'));
var myChart6 = echarts.init(document.getElementById('main6'));
var myChart7 = echarts.init(document.getElementById('main7'));

getNowFormatDate();
init_myChart1();
init_myChart2();
init_myChart3(legal_person_data);
init_myChart5();
init_myChart6();
init_myChart7();


function init_myChart3(data) {

	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {

		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			// data: ['数据总量','共享次数','更新量'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top: '46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		"series": [
			{
				"type": "pictorialBar",
				"symbolClip": false,
				"data": [
					"100",
					"100",
					"80",
					"100"
				],
				"barCategoryGap": "20%",
				"label": {
					"show": true,
					"position": "top",
					"margin": 8
				}
			}
		],
		"legend": [
			{
				"data": [
					""
				],
				"selected": {
					"": true
				},
				"show": true,
				"padding": 5,
				"itemGap": 10,
				"itemWidth": 25,
				"itemHeight": 14
			}
		],
		"tooltip": {
			"show": true,
			"trigger": "item",
			"triggerOn": "mousemove|click",
			"axisPointer": {
				"type": "line"
			},
			"textStyle": {
				"fontSize": 14
			},
			"borderWidth": 0
		},
		"xAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				},
				"data": [
					"IE\u5b9e\u4e60\u751f",
					"\u653f\u7b56\u7533\u62a5\u52a9\u7406",
					"\u4eba\u529b\u8d44\u6e90\u5b9e\u4e60\u751f",
					"\u786c\u4ef6\u5b9e\u4e60\u751f"
				]
			}
		],
		"yAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				}
			}
		],
		"title": [
			{
				"text": "\u804c\u4f4d\u6700\u4f4e\u505a\u591a\u5c11\u5929",
				"padding": 5,
				"itemGap": 10
			}
		]
	};
	myChart3.setOption(option);
}
function init_myChart2() {
	var data = {"uploadData":[{"count":3230},{"count":2986},{"count":3392},{"count":2642},{"count":3521},{"count":2573}
							,{"count":3132},{"count":3147},{"count":3283},{"count":3336},{"count":3831},{"count":3633}],
				"updateData":[{"count":310},{"count":281},{"count":123},{"count":97},{"count":323},{"count":373}
							,{"count":423},{"count":451},{"count":501},{"count":452},{"count":201},{"count":177}],
				"viewData":[{"count":1651},{"count":1842},{"count":2223},{"count":2123},{"count":2021},{"count":1812}
							,{"count":1928},{"count":2019},{"count":2613},{"count":2754},{"count":2981},{"count":3001}]};
	var uploadCnt = [];
	var updateCnt = [];

	var viewCnt = [];
	if (data.uploadData != null) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
		}
	}
	if (data.updateData != null) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}

	if (data.viewData != null) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
	
		tooltip: {
			trigger: 'axis',
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		legend: {
			icon: 'circle',
			itemWidth: 8,
			itemHeight: 8,
			itemGap: 10,
			top: '16',
			right: '10',
			// data: ['数据总量','共享次数','更新量'],
			textStyle: {
				fontSize: 14,
				color: '#a0a8b9'
			}
		},
		grid: {
			top:'46',
			left: '13%',
			right: '10',
			//bottom: '10%',
			containLabel: false
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:14
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
			offset: 10
		}],
		yAxis: [{
			type: 'value',
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			},
			splitLine: {
				lineStyle: {
					color: '#2b3646'
				}
			},
			axisTick: {
				show: false
			}
		}],
		"series": [
			{
				"type": "line",
				"connectNulls": false,
				"symbolSize": 4,
				"showSymbol": true,
				"smooth": false,
				"step": false,
				"data": [
					[
						"\u5b9e\u4e6012\u4e2a\u6708",
						17
					],
					[
						"\u5b9e\u4e601\u4e2a\u6708",
						4
					],
					[
						"\u5b9e\u4e602\u4e2a\u6708",
						20
					],
					[
						"\u5b9e\u4e603\u4e2a\u6708",
						208
					],
					[
						"\u5b9e\u4e604\u4e2a\u6708",
						29
					],
					[
						"\u5b9e\u4e605\u4e2a\u6708",
						12
					],
					[
						"\u5b9e\u4e606\u4e2a\u6708",
						69
					],
					[
						"\u5b9e\u4e607\u4e2a\u6708",
						12
					],
					[
						"\u5b9e\u4e608\u4e2a\u6708",
						4
					],
					[
						"\u5b9e\u4e609\u4e2a\u6708",
						3
					]
				],
				"hoverAnimation": true,
				"label": {
					"show": true,
					"position": "top",
					"margin": 8
				},
				"lineStyle": {
					"show": true,
					"width": 1,
					"opacity": 1,
					"curveness": 0,
					"type": "solid"
				},
				"areaStyle": {
					"opacity": 0
				},
				"zlevel": 0,
				"z": 0
			}
		],
		"legend": [
			{
				"data": [
					""
				],
				"selected": {
					"": true
				},
				"show": true,
				"padding": 5,
				"itemGap": 10,
				"itemWidth": 25,
				"itemHeight": 14
			}
		],
		"tooltip": {
			"show": true,
			"trigger": "item",
			"triggerOn": "mousemove|click",
			"axisPointer": {
				"type": "line"
			},
			"textStyle": {
				"fontSize": 14
			},
			"borderWidth": 0
		},
		"xAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				},
				"data": [
					"\u5b9e\u4e6012\u4e2a\u6708",
					"\u5b9e\u4e601\u4e2a\u6708",
					"\u5b9e\u4e602\u4e2a\u6708",
					"\u5b9e\u4e603\u4e2a\u6708",
					"\u5b9e\u4e604\u4e2a\u6708",
					"\u5b9e\u4e605\u4e2a\u6708",
					"\u5b9e\u4e606\u4e2a\u6708",
					"\u5b9e\u4e607\u4e2a\u6708",
					"\u5b9e\u4e608\u4e2a\u6708",
					"\u5b9e\u4e609\u4e2a\u6708"
				]
			}
		],
		"yAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				}
			}
		],
		"title": [
			{
				"text": "\u5730\u533a\u804c\u52a1\u6570",
				"padding": 5,
				"itemGap": 10
			}
		]
	};
	myChart2.setOption(option);
}
function init_myChart1(){
	option = {
			tooltip : {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			color:['#8fc31f','#f35833','#00ccff','#ffcc00','#f5e965','#a74faf','#ff9668'],
		   
			"series": [
				{
					"type": "pie",
					"clockwise": true,
					"data": [
						{
							"name": "\u4e0d\u9650",
							"value": 59
						},
						{
							"name": "\u5927\u4e13",
							"value": 48
						},
						{
							"name": "\u672c\u79d1",
							"value": 258
						},
						{
							"name": "\u7855\u58eb",
							"value": 15
						}
					],
					"radius": [
						"0%",
						"75%"
					],
					"center": [
						"50%",
						"50%"
					],
					"label": {
						"show": true,
						"position": "top",
						"margin": 8
					}
				}
			],
			"legend": [
				{
					"data": [
						"\u4e0d\u9650",
						"\u5927\u4e13",
						"\u672c\u79d1",
						"\u7855\u58eb"
					],
					"selected": {},
					"show": true,
					"padding": 5,
					"itemGap": 10,
					"itemWidth": 25,
					"itemHeight": 14
				}
			],
			"tooltip": {
				"show": true,
				"trigger": "item",
				"triggerOn": "mousemove|click",
				"axisPointer": {
					"type": "line"
				},
				"textStyle": {
					"fontSize": 14
				},
				"borderWidth": 0
			},
			"title": [
				{
					"text": "\u5b66\u5386\u7edf\u8ba1",
					"padding": 5,
					"itemGap": 10
				}
			]
		};
// 使用刚指定的配置项和数据显示图表。
	myChart1.setOption(option);
}

function init_myChart5(){
	//var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	//var yData=[1243,2315,1164,3021,3521,4121,2001,1983,2541,2612,2331,1992];
	var XData=["一月","二月","三月","四月","五月","六月","七月","八月","九月"];
	var yData=[1243,2315,1164,3021,3521,4121,2001,1983,1432];
	option = {
		backgroundColor:"",
		xAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			data: XData,
			axisLabel: {
				formatter: function(value) {
					var ret = ""; //拼接加\n返回的类目项
					var maxLength = 1; //每项显示文字个数
					var valLength = value.length; //X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1) //如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = ""; //每次截取的字符串
							var start = i * maxLength; //开始截取的位置
							var end = start + maxLength; //结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					} else {
						return value;
					}
				},
				interval: 0,
				fontSize: 14,
				fontWeight: 100,
				textStyle: {
					color: '#9faeb5',

				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},
		yAxis: {
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
			splitArea: {
				show: false
			},
			
			axisLabel: {
				textStyle: {
					color: '#9faeb5',
					fontSize: 16,
				}
			},
			axisLine: {
				lineStyle: {
					color: '#4d4d4d'
				}
			}
		},
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"series": [
			{
				"type": "bar",
				"data": [
					143,
					2,
					7,
					12,
					107,
					3,
					3,
					6,
					2,
					17,
					13,
					10,
					9,
					5,
					3,
					13,
					4,
					2,
					2,
					7,
					2,
					3
				],
				"barCategoryGap": "20%",
				"label": {
					"show": true,
					"position": "top",
					"margin": 8
				}
			}
		],
		"legend": [
			{
				"data": [
					""
				],
				"selected": {
					"": true
				},
				"show": true,
				"padding": 5,
				"itemGap": 10,
				"itemWidth": 25,
				"itemHeight": 14
			}
		],
		"tooltip": {
			"show": true,
			"trigger": "item",
			"triggerOn": "mousemove|click",
			"axisPointer": {
				"type": "line"
			},
			"textStyle": {
				"fontSize": 14
			},
			"borderWidth": 0
		},
		"xAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				},
				"data": [
					"\u4e0a\u6d77",
					"\u4e2d\u5c71",
					"\u4f5b\u5c71",
					"\u5168\u56fd",
					"\u5317\u4eac",
					"\u5357\u4eac",
					"\u5408\u80a5",
					"\u5929\u6d25",
					"\u5b81\u6ce2",
					"\u5e7f\u5dde",
					"\u6210\u90fd",
					"\u676d\u5dde",
					"\u6b66\u6c49",
					"\u6c88\u9633",
					"\u6d4e\u5357",
					"\u6df1\u5733",
					"\u6e56\u5dde",
					"\u73e0\u6d77",
					"\u82cf\u5dde",
					"\u897f\u5b89",
					"\u90d1\u5dde",
					"\u9547\u6c5f"
				]
			}
		],
		"yAxis": [
			{
				"show": true,
				"scale": false,
				"nameLocation": "end",
				"nameGap": 15,
				"gridIndex": 0,
				"inverse": false,
				"offset": 0,
				"splitNumber": 5,
				"minInterval": 0,
				"splitLine": {
					"show": false,
					"lineStyle": {
						"show": true,
						"width": 1,
						"opacity": 1,
						"curveness": 0,
						"type": "solid"
					}
				}
			}
		],
		"title": [
			{
				"text": "\u5730\u533a\u804c\u52a1\u6570",
				"padding": 5,
				"itemGap": 10
			}
		]
	};
	myChart5.setOption(option);
}
//刷新myChart5数据



function init_myChart6(){
	var data = {"uploadData":[{"count":5421,"areaName":"公共服务"},{"count":6512,"areaName":"健康保障"},{"count":3721,"areaName":"安全生产"},{"count":2842,"areaName":"价格监督"}
							,{"count":6427,"areaName":"能源安全"},{"count":4422,"areaName":"信用体系"},{"count":1020,"areaName":"城乡建设"},{"count":1421,"areaName":"社区治理"},{"count":1776,"areaName":"生态环保"}
							,{"count":2428,"areaName":"应急维稳"}]};
	var uploadCnt = [];
	var updateCnt = [];
	//var collectionCnt = [];
	//var dailyCnt = [];
	var viewCnt = [];
	var areaNameS = [];
	if (data.uploadData) {
		for (var i = 0; i < data.uploadData.length; i++) {
			uploadCnt.push(data.uploadData[i].count);
			areaNameS.push(data.uploadData[i].areaName);
		}
	}
	if (data.updateData) {
		for (var i = 0; i < data.updateData.length; i++) {
			updateCnt.push(data.updateData[i].count);
		}
	}
	if (data.viewData) {
		for (var i = 0; i < data.viewData.length; i++) {
			viewCnt.push(data.viewData[i].count);
		}
	}
	option = {
		"tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
		"grid": {
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
	
			textStyle: {
				color: "#fff"
			}
		},
		"legend": {
			right: '24',
			top: "24",
			itemWidth: 8,
			itemHeight: 12,
			textStyle: {
				color: '#fff',
				fontSize:14
			},
			"data": ['资源总量'],
		
		},
		"calculable": true,
		xAxis: [{
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 2;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}

			

			},
			"splitArea": {
				"show": false
			},
			'data': areaNameS,
			splitLine: {
				show: false
			}
		}],
		"yAxis": [
			{
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14

				},
				"splitArea": {
					"show": false
				}
			}],
		
			"series": [
				{
					"type": "effectScatter",
					"showEffectOn": "render",
					"rippleEffect": {
						"show": true,
						"brushType": "stroke",
						"scale": 2.5,
						"period": 4
					},
					"symbolSize": 10,
					"data": [
						[
							"0-20/\u5929",
							2
						],
						[
							"100-120/\u5929",
							17
						],
						[
							"100-150/\u5929",
							33
						],
						[
							"100-180/\u5929",
							3
						],
						[
							"100-200/\u5929",
							16
						],
						[
							"100/\u5929",
							3
						],
						[
							"120-150/\u5929",
							33
						],
						[
							"120-180/\u5929",
							14
						],
						[
							"120-200/\u5929",
							26
						],
						[
							"120/\u5929",
							11
						],
						[
							"150-180/\u5929",
							28
						],
						[
							"150-200/\u5929",
							62
						],
						[
							"150-250/\u5929",
							6
						],
						[
							"150-300/\u5929",
							6
						],
						[
							"150/\u5929",
							24
						],
						[
							"180-200/\u5929",
							19
						],
						[
							"180-250/\u5929",
							4
						],
						[
							"200-250/\u5929",
							8
						],
						[
							"200-300/\u5929",
							3
						],
						[
							"200-400/\u5929",
							3
						],
						[
							"200/\u5929",
							6
						],
						[
							"250-300/\u5929",
							6
						],
						[
							"250-400/\u5929",
							2
						],
						[
							"300-400/\u5929",
							3
						],
						[
							"300-500/\u5929",
							8
						],
						[
							"300/\u5929",
							3
						],
						[
							"50-100/\u5929",
							7
						],
						[
							"80-100/\u5929",
							10
						],
						[
							"80-120/\u5929",
							4
						],
						[
							"80-150/\u5929",
							3
						]
					],
					"label": {
						"show": true,
						"position": "top",
						"margin": 8
					}
				}
			],
			"legend": [
				{
					"data": [
						""
					],
					"selected": {
						"": true
					},
					"show": true,
					"padding": 5,
					"itemGap": 10,
					"itemWidth": 25,
					"itemHeight": 14
				}
			],
			"tooltip": {
				"show": true,
				"trigger": "item",
				"triggerOn": "mousemove|click",
				"axisPointer": {
					"type": "line"
				},
				"textStyle": {
					"fontSize": 14
				},
				"borderWidth": 0
			},
			"xAxis": [
				{
					"show": true,
					"scale": false,
					"nameLocation": "end",
					"nameGap": 15,
					"gridIndex": 0,
					"inverse": false,
					"offset": 0,
					"splitNumber": 5,
					"minInterval": 0,
					"splitLine": {
						"show": false,
						"lineStyle": {
							"show": true,
							"width": 1,
							"opacity": 1,
							"curveness": 0,
							"type": "solid"
						}
					},
					"data": [
						"0-20/\u5929",
						"100-120/\u5929",
						"100-150/\u5929",
						"100-180/\u5929",
						"100-200/\u5929",
						"100/\u5929",
						"120-150/\u5929",
						"120-180/\u5929",
						"120-200/\u5929",
						"120/\u5929",
						"150-180/\u5929",
						"150-200/\u5929",
						"150-250/\u5929",
						"150-300/\u5929",
						"150/\u5929",
						"180-200/\u5929",
						"180-250/\u5929",
						"200-250/\u5929",
						"200-300/\u5929",
						"200-400/\u5929",
						"200/\u5929",
						"250-300/\u5929",
						"250-400/\u5929",
						"300-400/\u5929",
						"300-500/\u5929",
						"300/\u5929",
						"50-100/\u5929",
						"80-100/\u5929",
						"80-120/\u5929",
						"80-150/\u5929"
					]
				}
			],
			"yAxis": [
				{
					"show": true,
					"scale": false,
					"nameLocation": "end",
					"nameGap": 15,
					"gridIndex": 0,
					"inverse": false,
					"offset": 0,
					"splitNumber": 5,
					"minInterval": 0,
					"splitLine": {
						"show": false,
						"lineStyle": {
							"show": true,
							"width": 1,
							"opacity": 1,
							"curveness": 0,
							"type": "solid"
						}
					}
				}
			],
			"title": [
				{
					"text": "\u5b9e\u4e60\u5929\u6570",
					"padding": 5,
					"itemGap": 10
				}
			]
		};

// 使用刚指定的配置项和数据显示图表。
	myChart6.setOption(option);
}

function init_myChart7(){

	
var colorList = [
    '#ff2600',
    '#ffc000',
    '#00ad4e',
    '#0073c2',
    '#165868',
    '#e76f00',
    '#316194',
    '#723761',
    '#00b2f1',
    '#4d6022',
    '#4b83bf',
    '#f9c813',
    '#0176c0'
];
var xData = ['公共服务','健康保障','安全生产','价格监督','能源安全','信用体系', '城乡建设', '社区治理', '生态环保','应急维稳'];
var yData = [2912,3991,4621,3941,3313,6631,5543,4463,6541,3381];
option = {
    color:colorList,
    "tooltip": {
			"trigger": "axis",
			transitionDuration: 0,
			backgroundColor: 'rgba(83,93,105,0.8)',
			borderColor: '#535b69',
			borderRadius: 8,
			borderWidth: 2,
			padding: [5, 10],
			formatter: function (params, ticket, callback) {
				var res = '';
				for (var i = 0, l = params.length; i < l; i++) {
					res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>';
				}
				return res;
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					type: 'dashed',
					color: '#ffff00'
				}
			}
		},
    toolbox: {
        show : true,
        feature : {
            mark : {
                show: true
            },

        }
    },
    grid: {
       "borderWidth": 0,
			"top": '40',
			"left": '30',
			"right": '10',
			"bottom": '40',
			textStyle: {
				color: "#fff"
			}
    },
    xAxis : [
       {
			'type': 'category',
			"axisTick": {
				"show": false
			},
			"axisLine": {
				"show": false,
				lineStyle: {
					color: '#868c96'
				}
			},
			"axisLabel": {
				"interval": 0,
				fontSize:14,
				formatter:function(value)
				{
					var ret = "";//拼接加\n返回的类目项
					var maxLength = 2;//每项显示文字个数
					var valLength = value.length;//X轴类目项的文字个数
					var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
					if (rowN > 1)//如果类目项的文字大于3,
					{
						for (var i = 0; i < rowN; i++) {
							var temp = "";//每次截取的字符串
							var start = i * maxLength;//开始截取的位置
							var end = start + maxLength;//结束截取的位置
							//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
							temp = value.substring(start, end) + "\n";
							ret += temp; //凭借最终的字符串
						}
						return ret;
					}
					else {
						return value;
					}
				}
			},
			"splitArea": {
				"show": false
			},
			'data': xData,
			splitLine: {
				show: false
			},
		
		}
    ],
    yAxis : [
      {
				"type": "value",
				offset: -14,
				"splitLine": {
					"show": false
				},
				"axisLine": {
					"show": false,
					lineStyle: {
						color: '#868c96'
					}
				},
				"axisTick": {
					"show": false
				},
				"axisLabel": {
					"interval": 0,
					fontSize:14

				},
				"splitArea": {
					"show": false
				}
			}

    ],
    series : [
        {
            name:'共享次数',
            type:'bar',
            data:yData,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                            '#ff2600',
                            '#ffc000',
                            '#00ad4e',
                            '#0073c2',
                            '#165868',
                            '#e76f00',
                            '#316194',
                            '#723761',
                            '#00b2f1',
                            '#4d6022',
                            '#4b83bf',
                            '#f9c813',
                            '#0176c0'
                        ];
                        return colorList[params.dataIndex]
                    },
                   
                }
            },
			 barWidth: 14,
			 label: {
					normal: {
						show: true,
						position: "top",
						textStyle: {
							color: "#ffc72b",
							fontSize: 10
						}
					}
				},
        },
		{
			name:'折线',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				  color:'#d3d5fd'
				}
			},
			data:yData
		}
     
    ]
};


// 使用刚指定的配置项和数据显示图表。
	myChart7.setOption(option);
}
//获取当前时间
function getNowFormatDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var Hour =  date.getHours();       // 获取当前小时数(0-23)
    var Minute =  date.getMinutes();     // 获取当前分钟数(0-59)
    var Second = date.getSeconds();     // 获取当前秒数(0-59)
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var day=date.getDay();
    if (Hour<10) {
        Hour = "0" + Hour;
    }
    if (Minute <10) {
        Minute = "0" + Minute;
    }
    if (Second <10) {
        Second = "0" + Second;
    }
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = '<div><p>'+year + '年' + month +'月' + strDate+'号</p><p>'+show_day[day]+'</p></div>';
    var HMS = Hour + ':' + Minute +':' + Second;
	var temp_time = year+'-'+month+'-'+strDate+' '+HMS;
    $('.nowTime li:nth-child(1)').html(HMS);
    $('.nowTime li:nth-child(2)').html(currentdate);
	//$('.topRec_List li div:nth-child(3)').html(temp_time);
    setTimeout(getNowFormatDate,1000);//每隔1秒重新调用一次该函数
}
var resourceDataType = $('.data-label li.active').data('type');//用于切换基础库
function urlType() {
    resourceDataType = $('.data-label li.active').data('type');
    if (resourceDataType == 1) {
        init_myChart3(legal_person_data);
		$('.com-screen-content .use-data').html(Tpl1);
    } else if (resourceDataType == 2) {
        init_myChart3(people_data);
		$('.com-screen-content .use-data').html(Tpl2);
    } else if (resourceDataType == 3) {
        init_myChart3( picture_data);
		$('.com-screen-content .use-data').html(Tpl3);
    }
}
var num =0 ;
//    资源类型定时器
function resourceType() {
    $('.data-label li').eq(num).addClass('active').siblings().removeClass('active');
    //$('.active-data-label').html($('.canvas-pic-two .data-label li.active').html());
    urlType();
    num++;
    if (num >= 3) {
        num = 0;
    }
}

//    资源类型点击切换
$('.data-label').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.active-data-label').html($('.data-label li.active').html());
    urlType();
});
var oTimer = setInterval(resourceType, 3000);
//    hover清除定时器
$('.data-label').hover(function () {
    clearInterval(oTimer);
}, function () {
    oTimer = setInterval(resourceType, 3000);
});

/*function resize(){
	window.addEventListener("resize", () => { 
  	this.myChart1.resize;
	this.myChart2.resize;
	this.myChart3.resize;
	this.myChart5.resize;
	this.myChart6.resize;
	this.myChart7.resize;
});
}*/

setInterval(function (){
    window.onresize = function () {
		this.myChart1.resize;
		this.myChart2.resize;
		this.myChart3.resize;
		this.myChart5.resize;
		this.myChart6.resize;
		this.myChart7.resize;
    }
},200)

//myChart7.resize();
