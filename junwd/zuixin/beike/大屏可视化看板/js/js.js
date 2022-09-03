
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();

// 图1
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		// data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    "series": [
        {
            "type": "bar",
            "name": "A",
            "data": [
                3,
                8,
                2,
                82,
                74,
                2,
                44,
                31,
                6,
                61,
                119,
                5,
                50,
                5,
                50,
                3,
                20,
                6,
                2,
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
                "A"
            ],
            "selected": {
                "A": true
            }
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
                "1\u5ba40\u53850\u536b",
                "1\u5ba40\u53851\u536b",
                "1\u5ba41\u53850\u536b",
                "1\u5ba41\u53851\u536b",
                "2\u5ba41\u53851\u536b",
                "2\u5ba41\u53852\u536b",
                "2\u5ba42\u53851\u536b",
                "3\u5ba41\u53851\u536b",
                "3\u5ba41\u53852\u536b",
                "3\u5ba42\u53851\u536b",
                "3\u5ba42\u53852\u536b",
                "4\u5ba41\u53851\u536b",
                "4\u5ba41\u53852\u536b",
                "4\u5ba42\u53851\u536b",
                "4\u5ba42\u53852\u536b",
                "5\u5ba40\u53852\u536b",
                "5\u5ba41\u53852\u536b",
                "5\u5ba42\u53852\u536b",
                "5\u5ba42\u53853\u536b",
                "6\u5ba40\u53852\u536b",
                "6\u5ba42\u53852\u536b"
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
    ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
// 图2
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    "series": [
        {
            "type": "bar",
            "name": "\u79df\u8d41\u671f\u9650",
            "data": [
                2,
                3,
                3,
                19,
                12,
                218,
                25,
                32,
                5,
                15,
                28,
                2,
                223
            ],
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            },
            "itemStyle": {
                "color":             new echarts.graphic.LinearGradient(                                0,                                 1,                                 0,                                 0,                                [{offset: 0, color: '#008B8B'},                                  {offset: 1, color: '#FF6347'}],                                 false)           
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u79df\u8d41\u671f\u9650"
            ],
            "selected": {
                "\u79df\u8d41\u671f\u9650": true
            }
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
                "1~2\u5e74",
                "1~3\u4e2a\u6708",
                "1~3\u5e74",
                "1\u4e2a\u6708\u4ee5\u4e0a",
                "1\u5e74",
                "1\u5e74\u4ee5\u5185",
                "2\u5e74\u4ee5\u5185",
                "3~12\u4e2a\u6708",
                "3\u5e74\u4ee5\u4e0a",
                "3\u5e74\u4ee5\u5185",
                "6~12\u4e2a\u6708",
                "6~24\u4e2a\u6708",
                "\u6682\u65e0\u6570\u636e"
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
    ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    "series": [
        {
            "type": "bar",
            "xAxisIndex": 0,
            "yAxisIndex": 0,
            "data": [
                30,
                5,
                3,
                3,
                160,
                23,
                3,
                15,
                252,
                49,
                3,
                8,
                27
            ],
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "line",
            "connectNulls": false,
            "xAxisIndex": 1,
            "yAxisIndex": 1,
            "symbolSize": 4,
            "showSymbol": true,
            "smooth": false,
            "step": false,
            "data": [
                [
                    "\u4e1c",
                    "1160"
                ],
                [
                    "\u4e1c \u4e1c\u5357",
                    "1200"
                ],
                [
                    "\u4e1c \u897f",
                    "1080"
                ],
                [
                    "\u4e1c\u5317",
                    "1700"
                ],
                [
                    "\u4e1c\u5357",
                    "580"
                ],
                [
                    "\u4e1c\u5357 \u5357",
                    "2200"
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
            }
        },
        {
            "data": [
                ""
            ],
            "selected": {
                "": true
            }
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
                "\u4e1c",
                "\u4e1c \u4e1c\u5357",
                "\u4e1c \u897f",
                "\u4e1c\u5317",
                "\u4e1c\u5357",
                "\u4e1c\u5357 \u5357",
                "\u4e1c\u5357 \u897f\u5357",
                "\u5317",
                "\u5357",
                "\u5357 \u5317",
                "\u897f",
                "\u897f\u5317",
                "\u897f\u5357"
            ]
        },
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 1,
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
                "\u4e1c",
                "\u4e1c \u4e1c\u5357",
                "\u4e1c \u897f",
                "\u4e1c\u5317",
                "\u4e1c\u5357",
                "\u4e1c\u5357 \u5357",
                "\u4e1c\u5357 \u897f\u5357",
                "\u5317",
                "\u5357",
                "\u5357 \u5317",
                "\u897f",
                "\u897f\u5317",
                "\u897f\u5357"
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
        },
        {
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 1,
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
    "grid": [
        {
            "left": "50%",
            "bottom": "65%",
            "containLabel": false
        },
        {
            "left": "15%",
            "containLabel": false
        }
    ],
    "title": [
        {
            "padding": 5,
            "itemGap": 10
        },
        {
            "padding": 5,
            "itemGap": 10
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
    top:'0%',
        data:['安卓','IOS'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
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
                    "\u82b1\u679c\u56edM\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                    "1160"
                ],
                [
                    "\u9ad8\u901f\u8def\u653f\u7ba1\u7406\u6240\u5bbf\u820d 5\u5c45\u5ba4 \u5357\u5367                  ",
                    "1200"
                ],
                [
                    "\u82b1\u9999\u4e0a\u6d77\u57ce 1\u5ba41\u5385 \u5357                  ",
                    "1080"
                ],
                [
                    "\u4e16\u7eaa\u57ce\u9f99\u797a\u82d1 3\u5ba42\u5385 \u4e1c\u5357                  ",
                    "1700"
                ],
                [
                    "\u672a\u6765\u65b9\u821fG1\u7ec4\u56e2 4\u5c45\u5ba4 \u5357\u5367                  ",
                    "580"
                ],
                [
                    "\u4e2d\u94c1\u9038\u90fd\u56fd\u9645C\u533a 4\u5ba42\u5385 \u5357                  ",
                    "2200"
                ],
                [
                    "\u4e2d\u5927\u56fd\u9645\u5e7f\u573a 1\u5ba41\u5385 \u5357                  ",
                    "1030"
                ],
                [
                    "\u78a7\u6842\u56ed\u897f\u5357\u4e0a\u57ce 5\u5ba42\u5385 \u5357                  ",
                    "3500"
                ],
                [
                    "\u4e00\u9e23",
                    "580"
                ],
                [
                    "\u9f99\u51ef\u82d1 3\u5ba42\u5385 \u4e1c\u5357                  ",
                    "2200"
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
            }
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
                "\u82b1\u679c\u56edM\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                "\u9ad8\u901f\u8def\u653f\u7ba1\u7406\u6240\u5bbf\u820d 5\u5c45\u5ba4 \u5357\u5367                  ",
                "\u82b1\u9999\u4e0a\u6d77\u57ce 1\u5ba41\u5385 \u5357                  ",
                "\u4e16\u7eaa\u57ce\u9f99\u797a\u82d1 3\u5ba42\u5385 \u4e1c\u5357                  ",
                "\u672a\u6765\u65b9\u821fG1\u7ec4\u56e2 4\u5c45\u5ba4 \u5357\u5367                  ",
                "\u4e2d\u94c1\u9038\u90fd\u56fd\u9645C\u533a 4\u5ba42\u5385 \u5357                  ",
                "\u4e2d\u5927\u56fd\u9645\u5e7f\u573a 1\u5ba41\u5385 \u5357                  ",
                "\u78a7\u6842\u56ed\u897f\u5357\u4e0a\u57ce 5\u5ba42\u5385 \u5357                  ",
                "\u4e00\u9e23",
                "\u9f99\u51ef\u82d1 3\u5ba42\u5385 \u4e1c\u5357                  "
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
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
// 图6
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	"series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u534e\u6da6\u56fd\u9645\u793e\u533a 5\u5c45\u5ba4 \u5357\u5367                  ",
                    "value": "20"
                },
                {
                    "name": "\u89c2\u5c71\u6e56\u4e00\u53f7 4\u5ba42\u5385 \u5357                  ",
                    "value": "150"
                },
                {
                    "name": "\u82b1\u679c\u56edM\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                    "value": "18"
                },
                {
                    "name": "\u672a\u6765\u65b9\u821fF7\u7ec4\u56e2 1\u5ba41\u5385 \u5357                  ",
                    "value": "50"
                },
                {
                    "name": "\u4e3d\u9633\u5929\u4e0bE\u533a 4\u5c45\u5ba4 \u4e1c\u5357\u5367                  ",
                    "value": "11"
                },
                {
                    "name": "\u65b0\u8054\u9152\u5e97 4\u5ba42\u5385 \u5357/\u5317                  ",
                    "value": "120"
                },
                {
                    "name": "\u82b1\u679c\u56edA\u5357\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                    "value": "12"
                },
                {
                    "name": "\u82b1\u679c\u56edW2\u533a 3\u5ba42\u5385 \u4e1c\u5357                  ",
                    "value": "125"
                },
                {
                    "name": "\u5bcc\u529b\u65b0\u5929\u5730 2\u5ba41\u5385 LOFT \u5357                  ",
                    "value": "50"
                },
                {
                    "name": "\u4e07\u79d1\u7406\u60f3\u57ce 3\u5ba41\u5385 \u4e1c\u5357                  ",
                    "value": "91"
                },
                {
                    "name": "\u91d1\u5730\u82d1 4\u5c45\u5ba4 \u5357\u5367                  ",
                    "value": "8"
                },
                {
                    "name": "\u82b1\u679c\u56edL2\u533a 3\u5ba42\u5385 \u4e1c\u5357                  ",
                    "value": "108"
                },
                {
                    "name": "\u5e1d\u8c6a\u540d\u90fd 3\u5ba42\u5385 \u897f\u5317                  ",
                    "value": "144"
                }
            ],
            "radius": [
                "30%",
                "75%"
            ],
            "center": [
                "25%",
                "50%"
            ],
            "roseType": "radius",
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            }
        },
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u4e1c",
                    "value": 30
                },
                {
                    "name": "\u4e1c \u4e1c\u5357",
                    "value": 5
                },
                {
                    "name": "\u4e1c \u897f",
                    "value": 3
                },
                {
                    "name": "\u4e1c\u5317",
                    "value": 3
                },
                {
                    "name": "\u4e1c\u5357",
                    "value": 160
                },
                {
                    "name": "\u4e1c\u5357 \u5357",
                    "value": 23
                },
                {
                    "name": "\u4e1c\u5357 \u897f\u5357",
                    "value": 3
                },
                {
                    "name": "\u5317",
                    "value": 15
                },
                {
                    "name": "\u5357",
                    "value": 252
                },
                {
                    "name": "\u5357 \u5317",
                    "value": 49
                },
                {
                    "name": "\u897f",
                    "value": 3
                },
                {
                    "name": "\u897f\u5317",
                    "value": 8
                },
                {
                    "name": "\u897f\u5357",
                    "value": 27
                }
            ],
            "radius": [
                "30%",
                "75%"
            ],
            "center": [
                "75%",
                "50%"
            ],
            "roseType": "area",
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
                "\u534e\u6da6\u56fd\u9645\u793e\u533a 5\u5c45\u5ba4 \u5357\u5367                  ",
                "\u89c2\u5c71\u6e56\u4e00\u53f7 4\u5ba42\u5385 \u5357                  ",
                "\u82b1\u679c\u56edM\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                "\u672a\u6765\u65b9\u821fF7\u7ec4\u56e2 1\u5ba41\u5385 \u5357                  ",
                "\u4e3d\u9633\u5929\u4e0bE\u533a 4\u5c45\u5ba4 \u4e1c\u5357\u5367                  ",
                "\u65b0\u8054\u9152\u5e97 4\u5ba42\u5385 \u5357/\u5317                  ",
                "\u82b1\u679c\u56edA\u5357\u533a 4\u5c45\u5ba4 \u5357\u5367                  ",
                "\u82b1\u679c\u56edW2\u533a 3\u5ba42\u5385 \u4e1c\u5357                  ",
                "\u5bcc\u529b\u65b0\u5929\u5730 2\u5ba41\u5385 LOFT \u5357                  ",
                "\u4e07\u79d1\u7406\u60f3\u57ce 3\u5ba41\u5385 \u4e1c\u5357                  ",
                "\u91d1\u5730\u82d1 4\u5c45\u5ba4 \u5357\u5367                  ",
                "\u82b1\u679c\u56edL2\u533a 3\u5ba42\u5385 \u4e1c\u5357                  ",
                "\u5e1d\u8c6a\u540d\u90fd 3\u5ba42\u5385 \u897f\u5317                  ",
                "\u4e1c",
                "\u4e1c \u4e1c\u5357",
                "\u4e1c \u897f",
                "\u4e1c\u5317",
                "\u4e1c\u5357",
                "\u4e1c\u5357 \u5357",
                "\u4e1c\u5357 \u897f\u5357",
                "\u5317",
                "\u5357",
                "\u5357 \u5317",
                "\u897f",
                "\u897f\u5317",
                "\u897f\u5357"
            ],
            "selected": {},
            "show": false,
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
            "text": "Pie-\u73ab\u7470\u56fe\u793a\u4f8b",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '用水',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u5546\u6c34",
                    "value": 37
                },
                {
                    "name": "\u6682\u65e0\u6570\u636e",
                    "value": 208
                },
                {
                    "name": "\u6c11\u6c34",
                    "value": 345
                }
            ],
            "radius": [
                "40%",
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
                "\u5546\u6c34",
                "\u6682\u65e0\u6570\u636e",
                "\u6c11\u6c34"
            ],
            "selected": {},
            "show": false,
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
            "text": "\u7528\u6c34",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '职业分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u5546\u7535",
                    "value": 42
                },
                {
                    "name": "\u6682\u65e0\u6570\u636e",
                    "value": 207
                },
                {
                    "name": "\u6c11\u7535",
                    "value": 341
                }
            ],
            "radius": [
                "40%",
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
                "\u5546\u7535",
                "\u6682\u65e0\u6570\u636e",
                "\u6c11\u7535"
            ],
            "selected": {},
            "show": false,
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
            "text": "\u7528\u7535",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '兴趣分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['汽车','旅游','财经','教育','软件','其他'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u514d\u8d39\u4f7f\u7528",
                    "value": 48
                },
                {
                    "name": "\u6682\u65e0\u6570\u636e",
                    "value": 384
                },
                {
                    "name": "\u79df\u7528\u8f66\u4f4d",
                    "value": 158
                }
            ],
            "radius": [
                "40%",
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
                "\u514d\u8d39\u4f7f\u7528",
                "\u6682\u65e0\u6570\u636e",
                "\u79df\u7528\u8f66\u4f4d"
            ],
            "selected": {},
            "show": false,
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
            "text": "\u8f66\u4f4d",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})



		
		
		


		









