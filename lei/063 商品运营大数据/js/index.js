//
$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    

    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        var xAxisData = [];
        var legendData = ['3月', '4月'];
        var title = "2018年度3月,4月销售额";//标题
        var serieData = [];
        var metaDate = [
            
        ]
        for (var v = 0; v < legendData.length; v++) {
            var serie = {
                name: legendData[v],
                type: 'line',
                symbol: "circle",
                symbolSize: 10,
                data: metaDate[v]
            };
            serieData.push(serie);
        }
        var colors = ["#036BC8", "#FFF", "#5EBEFC", "#2EF7F3"];
        var option = {
            // backgroundColor: '#0f375f',
            title: {
                text: title,
                textAlign: 'left',
                textStyle: {
                    color: "#fff",
                    fontSize: "12",
                    fontWeight: "bold"
                }
            },
            legend: {
                show: true,
                left: "center",
                data: legendData,
                y: "5%",
                itemWidth: 18,
                itemHeight: 12,
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                },
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '20%',
                iconStyle: {
                    color: '#fff',
                    borderColor: '#fff',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        // show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            color: colors,
            grid: {
                left: '2%',
                top: "12%",
                bottom: "5%",
                right: "5%",
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisTick: {
                    show: false
                },
                data: xAxisData,
            }, ],
            yAxis: [{
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            }, ],
            "series": [
                {
                    "type": "pie",
                    "clockwise": true,
                    "data": [
                        {
                            "name": "\u4e2d\u56fd\u77e5\u7f51",
                            "value": "8270"
                        },
                        {
                            "name": "\u963f\u91cc\u5df4\u5df4\u751f\u610f\u7ecf",
                            "value": "79655"
                        },
                        {
                            "name": "\u641c\u72d7\u767e\u79d1",
                            "value": "7238"
                        },
                        {
                            "name": "\u4e2d\u56fd\u6559\u80b2\u5728\u7ebf",
                            "value": "7168"
                        },
                        {
                            "name": "\u6caa\u6c5f\u7f51",
                            "value": "6820"
                        },
                        {
                            "name": "\u534e\u56fe\u6559\u80b2\u5b98\u7f51",
                            "value": "6705"
                        },
                        {
                            "name": "\u9ec4\u6dee\u5b66\u9662",
                            "value": "6098"
                        },
                        {
                            "name": "\u897f\u9646\u7f51",
                            "value": "5881"
                        },
                        {
                            "name": "\u7231\u8bcd\u9738",
                            "value": "5752"
                        },
                        {
                            "name": "\u672a\u6765\u7f51",
                            "value": "47350"
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
                        "margin": 8,
                        "formatter": "{b}: {c}"
                    },
                    "rippleEffect": {
                        "show": true,
                        "brushType": "stroke",
                        "scale": 2.5,
                        "period": 4
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u4e2d\u56fd\u77e5\u7f51",
                        "\u963f\u91cc\u5df4\u5df4\u751f\u610f\u7ecf",
                        "\u641c\u72d7\u767e\u79d1",
                        "\u4e2d\u56fd\u6559\u80b2\u5728\u7ebf",
                        "\u6caa\u6c5f\u7f51",
                        "\u534e\u56fe\u6559\u80b2\u5b98\u7f51",
                        "\u9ec4\u6dee\u5b66\u9662",
                        "\u897f\u9646\u7f51",
                        "\u7231\u8bcd\u9738",
                        "\u672a\u6765\u7f51"
                    ],
                    "selected": {},
                    "show": true,
                    "left": "2%",
                    "top": "15%",
                    "orient": "vertical",
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
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "title": [
                {
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "toolbox": {
                "show": true,
                "orient": "vertical",
                "itemSize": 15,
                "itemGap": 10,
                "left": "90%",
                "feature": {
                    "saveAsImage": {
                        "type": "png",
                        "backgroundColor": "auto",
                        "connectedBackgroundColor": "#fff",
                        "show": true,
                        "title": "\u4fdd\u5b58\u4e3a\u56fe\u7247",
                        "pixelRatio": 1
                    },
                    "restore": {
                        "show": true,
                        "title": "\u8fd8\u539f"
                    },
                    "dataView": {
                        "show": true,
                        "title": "\u6570\u636e\u89c6\u56fe",
                        "readOnly": false,
                        "lang": [
                            "\u6570\u636e\u89c6\u56fe",
                            "\u5173\u95ed",
                            "\u5237\u65b0"
                        ],
                        "backgroundColor": "#fff",
                        "textareaColor": "#fff",
                        "textareaBorderColor": "#333",
                        "textColor": "#000",
                        "buttonColor": "#c23531",
                        "buttonTextColor": "#fff"
                    },
                    "dataZoom": {
                        "show": true,
                        "title": {
                            "zoom": "\u533a\u57df\u7f29\u653e",
                            "back": "\u533a\u57df\u7f29\u653e\u8fd8\u539f"
                        },
                        "icon": {},
                        "xAxisIndex": false,
                        "yAxisIndex": false,
                        "filterMode": "filter"
                    },
                    "magicType": {
                        "show": true,
                        "type": [
                            "line",
                            "bar",
                            "stack",
                            "tiled"
                        ],
                        "title": {
                            "line": "\u5207\u6362\u4e3a\u6298\u7ebf\u56fe",
                            "bar": "\u5207\u6362\u4e3a\u67f1\u72b6\u56fe",
                            "stack": "\u5207\u6362\u4e3a\u5806\u53e0",
                            "tiled": "\u5207\u6362\u4e3a\u5e73\u94fa"
                        },
                        "icon": {}
                    },
                    "brush": {
                        "icon": {},
                        "title": {
                            "rect": "\u77e9\u5f62\u9009\u62e9",
                            "polygon": "\u5708\u9009",
                            "lineX": "\u6a2a\u5411\u9009\u62e9",
                            "lineY": "\u7eb5\u5411\u9009\u62e9",
                            "keep": "\u4fdd\u6301\u9009\u62e9",
                            "clear": "\u6e05\u9664\u9009\u62e9"
                        }
                    }
                }
            }
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));  
        var giftImageUrl = "";
        myChart.setOption({
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: giftImageUrl,
                        width: 30,
                        height: 30
                    },
                    left: '20%',
                    top: 'center'
                }]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['销售额'],
                left:'27%'
            },
            grid: {
                left: '1%',
                right: '60%',
                top: '10%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                position:'top',
                splitLine: {show: false},
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: [],
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            "series": [
                {
                    "type": "bar",
                    "name": "\u5e73\u53f0A-\u6559\u80b2\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        8270,
                        7238,
                        6820,
                        6705,
                        5881
                    ],
                    "showBackground": false,
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                },
                {
                    "type": "bar",
                    "name": "\u5e73\u53f0B-\u6559\u80b2\u6570\u91cf",
                    "legendHoverLink": true,
                    "data": [
                        79655,
                        7168,
                        2300,
                        6098,
                        5752
                    ],
                    "showBackground": false,
                    "barMinHeight": 0,
                    "barCategoryGap": "20%",
                    "barGap": "30%",
                    "large": false,
                    "largeThreshold": 400,
                    "seriesLayoutBy": "column",
                    "datasetIndex": 0,
                    "clip": true,
                    "zlevel": 0,
                    "z": 2,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                },
                {
                    "type": "line",
                    "name": "\u6570\u91cf",
                    "connectNulls": false,
                    "yAxisIndex": 1,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "\u4e2d\u56fd\u77e5\u7f51",
                            8270
                        ],
                        [
                            "\u641c\u72d7\u767e\u79d1",
                            79655
                        ],
                        [
                            "\u5e90\u6c5f\u7f51",
                            7238
                        ],
                        [
                            "\u9ec4\u6dee\u5b66\u9662",
                            7168
                        ],
                        [
                            "\u7231\u8bcd\u9738",
                            6820
                        ],
                        [
                            "\u672a\u6765\u7f51",
                            6705
                        ]
                    ],
                    "hoverAnimation": true,
                    "label": {
                        "show": false,
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
                        "\u5e73\u53f0A-\u6559\u80b2\u6570\u91cf",
                        "\u5e73\u53f0B-\u6559\u80b2\u6570\u91cf",
                        "\u6570\u91cf"
                    ],
                    "selected": {
                        "\u5e73\u53f0A-\u6559\u80b2\u6570\u91cf": true,
                        "\u5e73\u53f0B-\u6559\u80b2\u6570\u91cf": true,
                        "\u6570\u91cf": true
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
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
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
                        "\u4e2d\u56fd\u77e5\u7f51",
                        "\u641c\u72d7\u767e\u79d1",
                        "\u5e90\u6c5f\u7f51",
                        "\u9ec4\u6dee\u5b66\u9662",
                        "\u7231\u8bcd\u9738",
                        "\u672a\u6765\u7f51"
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
                    "type": "value",
                    "name": "\u6570\u91cf",
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "interval": 3500,
                    "gridIndex": 0,
                    "axisLabel": {
                        "show": true,
                        "position": "top",
                        "margin": 8,
                        "formatter": "{value}\u6570\u91cf"
                    },
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "min": 5725,
                    "max": 79655,
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
                    "text": "\u4e0d\u540c\u5e73\u53f0\u7684\u6559\u80b2\u60c5\u51b5\u7edf\u8ba1",
                    "padding": 5,
                    "itemGap": 10
                }
            ]
        });
    }

    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));  
        
        option = {
            // backgroundColor: "#404A59",
            color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
        
            title: [{
                text: '',
                left: '1%',
                top: '6%',
                textStyle: {
                    color: '#fff'
                }
            }, {
                text: '',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['2016年', '2017年', '2018年']
            },
            grid: {
                left: '1%',
                right: '28%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'value'
            },
            "series": [
                {
                    "type": "line",
                    "name": "2020\u5e74",
                    "connectNulls": false,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "1\u6708",
                            "8270"
                        ],
                        [
                            "2\u6708",
                            "79655"
                        ],
                        [
                            "3\u6708",
                            "7238"
                        ],
                        [
                            "4\u6708",
                            "7168"
                        ],
                        [
                            "5\u6708",
                            "6820"
                        ],
                        [
                            "6\u6708",
                            "6705"
                        ],
                        [
                            "7\u6708",
                            "6098"
                        ],
                        [
                            "8\u6708",
                            "5881"
                        ],
                        [
                            "9\u6708",
                            "5752"
                        ],
                        [
                            "10\u6708",
                            "47350"
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
                        "width": 4,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "markPoint": {
                        "label": {
                            "show": true,
                            "position": "inside",
                            "color": "#fff",
                            "margin": 8
                        },
                        "data": [
                            {
                                "type": "max"
                            }
                        ]
                    },
                    "zlevel": 0,
                    "z": 0
                },
                {
                    "type": "line",
                    "name": "2019\u5e74",
                    "connectNulls": false,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "1\u6708",
                            "8270"
                        ],
                        [
                            "2\u6708",
                            "79655"
                        ],
                        [
                            "3\u6708",
                            "7238"
                        ],
                        [
                            "4\u6708",
                            "7168"
                        ],
                        [
                            "5\u6708",
                            "6820"
                        ],
                        [
                            "6\u6708",
                            "6705"
                        ],
                        [
                            "7\u6708",
                            "6098"
                        ],
                        [
                            "8\u6708",
                            "5881"
                        ],
                        [
                            "9\u6708",
                            "5752"
                        ],
                        [
                            "10\u6708",
                            "47350"
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
                        "width": 4,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "markPoint": {
                        "label": {
                            "show": true,
                            "position": "inside",
                            "color": "#fff",
                            "margin": 8
                        },
                        "data": [
                            {
                                "type": "max"
                            }
                        ]
                    },
                    "zlevel": 0,
                    "z": 0
                },
                {
                    "type": "line",
                    "name": "2018\u5e74",
                    "connectNulls": false,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "clip": true,
                    "step": false,
                    "data": [
                        [
                            "1\u6708",
                            "8270"
                        ],
                        [
                            "2\u6708",
                            "79655"
                        ],
                        [
                            "3\u6708",
                            "7238"
                        ],
                        [
                            "4\u6708",
                            "7168"
                        ],
                        [
                            "5\u6708",
                            "6820"
                        ],
                        [
                            "6\u6708",
                            "6705"
                        ],
                        [
                            "7\u6708",
                            "6098"
                        ],
                        [
                            "8\u6708",
                            "5881"
                        ],
                        [
                            "9\u6708",
                            "5752"
                        ],
                        [
                            "10\u6708",
                            "47350"
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
                        "width": 4,
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
                        "2020\u5e74",
                        "2019\u5e74",
                        "2018\u5e74"
                    ],
                    "selected": {
                        "2020\u5e74": true,
                        "2019\u5e74": true,
                        "2018\u5e74": true
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
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
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
                        "1\u6708",
                        "2\u6708",
                        "3\u6708",
                        "4\u6708",
                        "5\u6708",
                        "6\u6708",
                        "7\u6708",
                        "8\u6708",
                        "9\u6708",
                        "10\u6708",
                        "11\u6708",
                        "12\u6708"
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));  
        
        option = {
            // backgroundColor: "#404A59",
            color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
        
            title: [{
                text: '',
                left: '1%',
                top: '6%',
                textStyle: {
                    color: '#fff'
                }
            }, {
                text: '',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 16
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                },
                data: ['2016年', '2017年', '2018年']
            },
            grid: {
                left: '1%',
                right: '28%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'value'
            },
            "series": [
                {
                    "type": "scatter",
                    "name": "\u4fe1\u606f\u5206\u5e03\u4e0e\u5e74\u4efd",
                    "symbolSize": 10,
                    "data": [
                        [
                            "\u4e2d\u56fd\u77e5\u7f51",
                            "8",
                            "2",
                            "7",
                            "0"
                        ],
                        [
                            "\u963f\u91cc\u5df4\u5df4\u751f\u610f\u7ecf",
                            "7",
                            "9",
                            "6",
                            "5",
                            "5"
                        ],
                        [
                            "\u641c\u72d7\u767e\u79d1",
                            "7",
                            "2",
                            "3",
                            "8"
                        ],
                        [
                            "\u4e2d\u56fd\u6559\u80b2\u5728\u7ebf",
                            "7",
                            "1",
                            "6",
                            "8"
                        ],
                        [
                            "\u6caa\u6c5f\u7f51",
                            "6",
                            "8",
                            "2",
                            "0"
                        ],
                        [
                            "\u534e\u56fe\u6559\u80b2\u5b98\u7f51",
                            "6",
                            "7",
                            "0",
                            "5"
                        ],
                        [
                            "\u9ec4\u6dee\u5b66\u9662",
                            "6",
                            "0",
                            "9",
                            "8"
                        ],
                        [
                            "\u897f\u9646\u7f51",
                            "5",
                            "8",
                            "8",
                            "1"
                        ],
                        [
                            "\u7231\u8bcd\u9738",
                            "5",
                            "7",
                            "5",
                            "2"
                        ],
                        [
                            "\u672a\u6765\u7f51",
                            "4",
                            "7",
                            "3",
                            "5",
                            "0"
                        ]
                    ],
                    "label": {
                        "show": true,
                        "position": "right",
                        "margin": 8
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "\u4fe1\u606f\u5206\u5e03\u4e0e\u5e74\u4efd"
                    ],
                    "selected": {
                        "\u4fe1\u606f\u5206\u5e03\u4e0e\u5e74\u4efd": true
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
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
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
                        "\u4e2d\u56fd\u77e5\u7f51",
                        "\u963f\u91cc\u5df4\u5df4\u751f\u610f\u7ecf",
                        "\u641c\u72d7\u767e\u79d1",
                        "\u4e2d\u56fd\u6559\u80b2\u5728\u7ebf",
                        "\u6caa\u6c5f\u7f51",
                        "\u534e\u56fe\u6559\u80b2\u5b98\u7f51",
                        "\u9ec4\u6dee\u5b66\u9662",
                        "\u897f\u9646\u7f51",
                        "\u7231\u8bcd\u9738",
                        "\u672a\u6765\u7f51"
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
});