 $(window).load(function(){  
             $(".loading").fadeOut()
            })  	
$(function () {
echarts_21();
echarts_22();
echarts_1();
echarts_2();
echarts_3();
echarts_4();
echarts_5();
function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

       option1 = {

    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '0px',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
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
            "data": [
                "10",
                "10",
                "14",
                "12",
                "20",
                "10",
                "10",
                "10",
                "10",
                "10",
                "14",
                "30",
                "10",
                "10",
                "20"
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
                "\u5927\u5174-\u65e7\u5bab-\u5e91\u6bbf\u5bb6\u82d1",
                "\u623f\u5c71-\u957f\u9633-\u82ad\u857e\u96e8\u60a6\u90fd",
                "\u4e30\u53f0-\u4eac\u77f3\u9ad8\u901f-\u5357\u5bab\u667a\u82d1",
                "\u901a\u5dde-\u68a8\u56ed-\u4e94\u6240\u5bb6\u5c5e\u9662",
                "\u901a\u5dde-\u6b21\u6e20-\u534e\u99a8\u56ed",
                "\u4e30\u53f0-\u65b0\u5bab-\u5357\u5ead\u65b0\u82d1",
                "\u901a\u5dde-\u4e54\u5e84-\u897f\u4e0a\u56ed\u5c0f\u533a",
                "\u901a\u5dde",
                "\u4e30\u53f0-\u79d1\u6280\u56ed\u533a-\u5b9d\u9686\u516c\u5bd3",
                "\u901a\u5dde-\u6b21\u6e20-\u6b21\u6e20\u5357\u91cc",
                "\u671d\u9633-\u5b89\u8d1e-\u5916\u9986\u897f\u8857\u5c0f\u533a",
                "\u671d\u9633-\u9152\u4ed9\u6865-\u9152\u4ed9\u6865\u8def7\u53f7\u9662",
                "\u901a\u5dde-\u7389\u6865-\u4eac\u827a\u5929\u6717\u5609\u56ed",
                "\u901a\u5dde-\u4e07\u8fbe-\u6469\u5361\u7a7a\u95f4",
                "\u4e30\u53f0-\u79d1\u6280\u56ed\u533a-\u6021\u6d77\u82b1\u56ed\u5bcc\u6cfd\u56ed"
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
        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	

    }
function echarts_22() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart22'));

	   option1 = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'5px',
        right: '0%',
        bottom: '0px',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
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
            "coordinateSystem": "polar",
            "symbolSize": 4,
            "data": [
                "240",
                "540",
                "550",
                "500",
                "600",
                "260",
                "250",
                "230",
                "300",
                "400",
                "500",
                "700",
                "220",
                "400",
                "500"
            ],
            "label": {
                "show": false,
                "position": "top",
                "margin": 8
            },
            "areaStyle": {
                "opacity": 0
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
    "radiusAxis": {
        "type": "category",
        "data": [
            "\u5927\u5174-\u65e7\u5bab-\u5e91\u6bbf\u5bb6\u82d1",
            "\u623f\u5c71-\u957f\u9633-\u82ad\u857e\u96e8\u60a6\u90fd",
            "\u4e30\u53f0-\u4eac\u77f3\u9ad8\u901f-\u5357\u5bab\u667a\u82d1",
            "\u901a\u5dde-\u68a8\u56ed-\u4e94\u6240\u5bb6\u5c5e\u9662",
            "\u901a\u5dde-\u6b21\u6e20-\u534e\u99a8\u56ed",
            "\u4e30\u53f0-\u65b0\u5bab-\u5357\u5ead\u65b0\u82d1",
            "\u901a\u5dde-\u4e54\u5e84-\u897f\u4e0a\u56ed\u5c0f\u533a",
            "\u901a\u5dde",
            "\u4e30\u53f0-\u79d1\u6280\u56ed\u533a-\u5b9d\u9686\u516c\u5bd3",
            "\u901a\u5dde-\u6b21\u6e20-\u6b21\u6e20\u5357\u91cc",
            "\u671d\u9633-\u5b89\u8d1e-\u5916\u9986\u897f\u8857\u5c0f\u533a",
            "\u671d\u9633-\u9152\u4ed9\u6865-\u9152\u4ed9\u6865\u8def7\u53f7\u9662",
            "\u901a\u5dde-\u7389\u6865-\u4eac\u827a\u5929\u6717\u5609\u56ed",
            "\u901a\u5dde-\u4e07\u8fbe-\u6469\u5361\u7a7a\u95f4",
            "\u4e30\u53f0-\u79d1\u6280\u56ed\u533a-\u6021\u6d77\u82b1\u56ed\u5bcc\u6cfd\u56ed"
        ],
        "scale": false
    },
    "angleAxis": {
        "clockwise": false,
        "scale": false,
        "splitNumber": 5
    },
    "polar": {}
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

	function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng01'));
var gauge_value=66;

option = {
   title: {
			x: "center",
			bottom: 10,
			//text: '风向',
			subtext: '风向',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 7, //刻度数量
            min: 0,
            max:70,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#8f8f8f',
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -25,
               
                	formatter: function(e) {
					switch(e + "") {
					    case "0":
							return "北风";
						case "10":
							return "东北风";
 
						case "20":
							return "东风";

						case "30":
							return "东南风";

						case "40":
							return "南风";
							
						case "50":
							return "西南风";
							
						case "60":
							return "西风";
								
						case "70":
							return "西北风";
							
						default:
							return e;
					}
				},
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '风向',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 100,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#82b440']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#82b440",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng02'));
var gauge_value=30;
option = {
   title: {
			x: "center",
			bottom: 0,
			text: gauge_value,
			subtext: '风速km/h',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 7, //刻度数量
            min: 0,
            max:70,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#8f8f8f',
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -15,
          
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '风向',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 70,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#2ea7ff']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#2ea7ff",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng03'));
var gauge_value=17;

option = {
   title: {
			x: "center",
			bottom: 0,
			text:gauge_value,
			subtext: '降雨量ML',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 10, //刻度数量
            min: 0,
            max:100,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                   color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -15,
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '风向',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 100,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#ff7109']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#ff7109",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
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
       axisPointer: {type: 'shadow'},
      },"grid": {
        "top": "20%",
      "right":"50",
      "bottom":"20",
      "left":"30",
      },
      legend: {
        // data: ['数据1', '数据2', '数据3','增幅'],
        right: 'center', width:'100%',
        textStyle: {
            color: "rgba(255,255,255,.5)"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
      
      
      
       "xAxis": [
         {
           "type": "category",
           data: ['2016', '2017', '2018', '2019'],
           axisLine:{ show: false,},
           axisLabel:  { textStyle: {
			   fontSize:14,
             color: "rgba(255,255,255,.5)",
			    },
               },
       
           },
      ],
       "yAxis": [
         {
             
           "type": "value",
          // "name": "单位万",
			
           axisTick: {show: false},
           splitLine: { show: false,},
           axisLine: { show: false,},
           "axisLabel": {
             "show": true,
			   fontSize:14,
             color: "rgba(255,255,255,.5)"
            
           },
           axisLine: {
            min:0,
            max:10,
            show:false
            },//左线色
           
         },
         {
           "type": "value",
           //"name": "增速",
           "show": true,
           "axisLabel": {
             formatter: "{value} %",
            fontSize:14,
             color: "rgba(255,255,255,.5)"},
           axisTick: {show: false},
           splitNumber:3,
         axisLine: {show:false},//右线色
          splitLine: {lineStyle: {color:'rgba(255,255,255,.05)'}},//x轴线
         },
       ],
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
                    "10,000\u5143",
                    52
                ],
                [
                    "100,000\u5143",
                    10
                ],
                [
                    "15,000\u5143",
                    5
                ],
                [
                    "17,000\u5143",
                    2
                ],
                [
                    "18,000\u5143",
                    2
                ],
                [
                    "20,000\u5143",
                    19
                ],
                [
                    "200,000\u5143",
                    2
                ],
                [
                    "25,000\u5143",
                    2
                ],
                [
                    "3,000\u5143",
                    2
                ],
                [
                    "30,000\u5143",
                    8
                ],
                [
                    "40,000\u5143",
                    3
                ],
                [
                    "5,000\u5143",
                    59
                ],
                [
                    "50,000\u5143",
                    6
                ],
                [
                    "6,000\u5143",
                    6
                ],
                [
                    "60,000\u5143",
                    2
                ],
                [
                    "7,000\u5143",
                    4
                ],
                [
                    "8,000\u5143",
                    4
                ],
                [
                    "9,000\u5143",
                    9
                ],
                [
                    "\u6682\u65e0",
                    51
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
                "10,000\u5143",
                "100,000\u5143",
                "15,000\u5143",
                "17,000\u5143",
                "18,000\u5143",
                "20,000\u5143",
                "200,000\u5143",
                "25,000\u5143",
                "3,000\u5143",
                "30,000\u5143",
                "40,000\u5143",
                "5,000\u5143",
                "50,000\u5143",
                "6,000\u5143",
                "60,000\u5143",
                "7,000\u5143",
                "8,000\u5143",
                "9,000\u5143",
                "\u6682\u65e0"
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
            "text": "\u52a0\u4ef7\u7edf\u8ba1",
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
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

   var lightBlue = {
	type: 'linear',
	x: 0,
	y: 0,
	x2: 0,
	y2: 1,
	colorStops: [{
		offset: 0,
		color: 'rgba(41, 121, 255, 1)'
	}, {
		offset: 1,
		color: 'rgba(0, 192, 255, 1)'
	}],
	globalCoord: false
}

var option = {
	tooltip: {
		show: false
	},
	grid: {
		top: '0%',
		left: '50',
		right: '50',
		bottom: '0%',
	},
	xAxis: {
		min: 0,
		//max: 12000,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		
		},
		axisLabel: {
			show: false
		}
	},
	yAxis: {
		// data: ['数据','数据','数据','数据','数据','数据'],
		//offset: 15,
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			color: 'rgba(255,255,255,.6)',
			fontSize: 14,
		
			
		}
	},
	"series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "name": "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed221\u53f7\u697c104\u53f7",
                    "value": "25"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u901a\u5dde\u533a\u7816\u5382\u5317\u91cc121\u53f7\u697c-1\u81f31\u5c421\u5355\u5143102\u53f7\u623f\u5c4b",
                    "value": "4"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u660c\u5e73\u533a\u660c\u5e73\u9547\u9759\u5fc3\u82d168\u53f7\u697c3\u5c426\u5355\u5143302\u53f7\u623f\u5c4b",
                    "value": "2"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u660c\u5e73\u533a\u4e1c\u5c0f\u53e3\u9547\u5929\u901a\u5317\u82d1\u4e00\u533a21\u53f7\u697c3\u5c424\u5355\u5143301\u53f7\u623f\u5c4b",
                    "value": "3"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u623f\u5c71\u533a\u960e\u6751\u9547\u4e50\u6d3b\u5bb6\u56ed28\u53f7\u697c4\u81f35\u5c421\u5355\u5143201\u5ba4",
                    "value": "3"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u901a\u5dde\u533a\u4e1c\u679c\u56ed1\u53f7\u697c5\u5c42501\u53f7\u623f\u5c4b",
                    "value": "5,1"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u4e30\u53f0\u533a\u5b8b\u5e84\u8def71\u53f7\u96628\u53f7\u697c1\u5355\u51431804\u53f7",
                    "value": "4"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed220\u53f7\u697c105\u53f7",
                    "value": "27"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed220\u53f7\u697c104\u53f7",
                    "value": "27"
                },
                {
                    "name": "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed221\u53f7110\u5ba4",
                    "value": "25"
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
                "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed221\u53f7\u697c104\u53f7",
                "\u5317\u4eac\u5e02\u901a\u5dde\u533a\u7816\u5382\u5317\u91cc121\u53f7\u697c-1\u81f31\u5c421\u5355\u5143102\u53f7\u623f\u5c4b",
                "\u5317\u4eac\u5e02\u660c\u5e73\u533a\u660c\u5e73\u9547\u9759\u5fc3\u82d168\u53f7\u697c3\u5c426\u5355\u5143302\u53f7\u623f\u5c4b",
                "\u5317\u4eac\u5e02\u660c\u5e73\u533a\u4e1c\u5c0f\u53e3\u9547\u5929\u901a\u5317\u82d1\u4e00\u533a21\u53f7\u697c3\u5c424\u5355\u5143301\u53f7\u623f\u5c4b",
                "\u5317\u4eac\u5e02\u623f\u5c71\u533a\u960e\u6751\u9547\u4e50\u6d3b\u5bb6\u56ed28\u53f7\u697c4\u81f35\u5c421\u5355\u5143201\u5ba4",
                "\u5317\u4eac\u5e02\u901a\u5dde\u533a\u4e1c\u679c\u56ed1\u53f7\u697c5\u5c42501\u53f7\u623f\u5c4b",
                "\u5317\u4eac\u5e02\u4e30\u53f0\u533a\u5b8b\u5e84\u8def71\u53f7\u96628\u53f7\u697c1\u5355\u51431804\u53f7",
                "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed220\u53f7\u697c105\u53f7",
                "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed220\u53f7\u697c104\u53f7",
                "\u5317\u4eac\u5e02\u671d\u9633\u533a\u5468\u5e84\u5c71\u6c34\u6587\u56ed221\u53f7110\u5ba4"
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
            "text": "\u5355\u4f4d\u767e\u4e07\u5143",
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



		
		
		


		









