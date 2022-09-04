 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
echarts_4()
echarts_5()
echarts_6()

function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
var data = [683, 234, 234, 523, 345, 320, 280, 271, 254, 229, 210, 190, 182]
var titlename = ['北京', '上海', '广州', '郑州', '武汉', '南京', '杭州', '东莞', '深圳', '虎门', '青岛', '石家庄', '安阳'];
option = {
	grid: {
        left: '0',
		top:'0',
        right: '0',
        bottom: '0%',
       containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick:{ show: false},
        axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },

    }, {
        show: false,
        inverse: true,
        data: data,
        axisLabel: {textStyle: {color: '#fff'}},
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick: { show: false},
    }],
    "series": [
        {
            "type": "bar",
            "data": [
                "146039",
                "16089",
                "4927",
                "23604",
                "11161",
                "11758",
                "40578",
                "16392",
                "34387",
                null,
                "4308",
                "3492",
                "5096",
                "4202",
                "5042"
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
                "\u6545\u5bab",
                "\u606d\u738b\u5e9c",
                "\u5317\u4eac\u6d77\u6d0b\u9986",
                "\u5317\u4eac\u91ce\u751f\u52a8\u7269\u56ed",
                "\u53e4\u5317\u6c34\u9547",
                "\u5929\u575b",
                "\u9890\u548c\u56ed",
                "\u5317\u4eac\u6b22\u4e50\u8c37",
                "\u516b\u8fbe\u5cad\u957f\u57ce",
                "\u5706\u660e\u56ed",
                "\u5317\u4eac\u73af\u7403\u5ea6\u5047\u533a",
                "\u5357\u9523\u9f13\u5df7",
                "\u9999\u5c71\u516c\u56ed",
                "\u4e16\u754c\u516c\u56ed",
                "\u5317\u4eac\u52a8\u7269\u56ed"
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
            "text": "\u65c5\u6e38\u666f\u70b9\u70ed\u5ea6",
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
	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '10',
		top: '20',
        right: '30',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
		splitNumber: 4,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)',
	  type: 'dotted',
            }
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
                    "\u56fd\u5bb6\u690d\u7269\u56ed\u5357\u56ed",
                    "99"
                ],
                [
                    "\u5b98\u5385\u6c34\u5e93",
                    "98"
                ],
                [
                    "\u4e2d\u592e\u620f\u5267\u5b66\u9662",
                    "98"
                ],
                [
                    "\u4e1c\u56db\u80e1\u540c",
                    "97"
                ],
                [
                    "\u53e4\u5317\u6c34\u9547\u6e29\u6cc9",
                    "97"
                ],
                [
                    "\u8001\u820d\u8336\u9986",
                    "967"
                ],
                [
                    "\u77f3\u666f\u5c71\u6e38\u4e50\u56ed",
                    "966"
                ],
                [
                    "\u5317\u4eac\u81ea\u7136\u535a\u7269\u9986",
                    "965"
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
                "\u56fd\u5bb6\u690d\u7269\u56ed\u5357\u56ed",
                "\u5b98\u5385\u6c34\u5e93",
                "\u4e2d\u592e\u620f\u5267\u5b66\u9662",
                "\u4e1c\u56db\u80e1\u540c",
                "\u53e4\u5317\u6c34\u9547\u6e29\u6cc9",
                "\u8001\u820d\u8336\u9986",
                "\u77f3\u666f\u5c71\u6e38\u4e50\u56ed",
                "\u5317\u4eac\u81ea\u7136\u535a\u7269\u9986"
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
            "text": "\u70ed\u5ea6\u6700\u5c0f",
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
 var option = {



       
 grid: {
        left: '0',
		top: '30',
        right: '0',
        bottom: '10',
        containLabel: true
    },
        legend: {

            top: 0,

            textStyle: {

            color: "#fff",

        },

        itemWidth: 10,  // 设置宽度

        itemHeight: 10, // 设置高度

        },

        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["西进口右转","北进口直行","南进口直行",],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'rgba(255,255,255,.1)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
 color: 'rgba(255,255,255,.1)',

                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        "series": [
            {
                "type": "bar",
                "data": [
                    "16111",
                    "40602",
                    "11766",
                    "146118",
                    "23614",
                    "11174",
                    "4929",
                    "4333",
                    "34408",
                    null
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
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d",
                    "\u5f00\u56ed\u4e2d"
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
                "text": "\u65c5\u6e38\u666f\u70b9\u70ed\u5ea6",
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
 option = {
          legend: {
           orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            textStyle:{
                color:'rgba(255,255,255,.5)'
            },
              top:'20%',
          right:30,
            data:['已入驻','已出售','已租赁','闲置房产']
        },
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
       
        calculable : true,
        "series": [
            {
                "type": "pie",
                "clockwise": true,
                "data": [
                    {
                        "value": 173
                    },
                    {
                        "name": "\u4eca\u65e5\u5df2\u95ed\u56ed",
                        "value": 182
                    },
                    {
                        "name": "\u5f00\u56ed\u4e2d",
                        "value": 67
                    },
                    {
                        "name": "\u6682\u505c\u8425\u4e1a",
                        "value": 55
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
                    null,
                    "\u4eca\u65e5\u5df2\u95ed\u56ed",
                    "\u5f00\u56ed\u4e2d",
                    "\u6682\u505c\u8425\u4e1a"
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
                "text": "\u662f\u5426\u8fd0\u8425",
                "padding": 5,
                "itemGap": 10
            }
        ]
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
option = {
    
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        indicator: [{
            text: '盈利能力',
            max: 100
        }, {
            text: '发展水平',
            max: 100
        }, {
            text: '融资能力',
            max: 100
        }, {
            text: '技术能力',
            max: 100
        }, {
            text: '企业规模',
            max: 100
        }],
        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: '70%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
    
        name: {
            padding:-5,
            formatter: '{value}',
            textStyle: {
              
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        }
    }, ],
    "series": [
        {
            "type": "pie",
            "clockwise": true,
            "data": [
                {
                    "value": 73
                },
                {
                    "name": "\u534e\u5317\u4e50\u56ed\u666f\u70b9\u699c\u7b2c7\u540d",
                    "value": 2
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
                null,
                "\u534e\u5317\u4e50\u56ed\u666f\u70b9\u699c\u7b2c7\u540d"
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
            "text": "\u6392\u540d",
            "padding": 5,
            "itemGap": 10
        }
    ]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









