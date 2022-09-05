function rsz() {
    var zoom = $(window).width() / 1920;
    document.body.style.zoom = zoom;


}
$(function() {
    rsz();
    leftTopCharts();
    leftBottomCharts();
    centerTopCharts();
    rightTopCharts();
    rightBottomCharts();
    // itv();
    // setInterval("itv()", 1000);
});
$(window).resize(function() {
    rsz();
});

/**
 * 左上角第一个图表：订单品类占比（备选）
 */
function leftTopChartsBak() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));

    var colorList = [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(51,192,205,0.01)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(51,192,205,0.57)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(115,172,255,0.02)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(115,172,255,0.67)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(158,135,255,0.57)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(252,75,75,0.57)' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 1,
            y: 1,
            x2: 1,
            y2: 0,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#FDB36ac2' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                    offset: 0,
                    color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#FECE4391' // 100% 处的颜色
                }
            ],
            globalCoord: false // 缺省为 false
        }
    ]
    var colorLine = ['#33C0CD', '#73ACFF', '#9E87FF', '#FE6969', '#FDB36A', '#FECE43']

    function getRich() {
        let result = {}
        colorLine.forEach((v, i) => {
            result[`hr${i}`] = {
                backgroundColor: colorLine[i],
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, -12]
            }
            result[`a${i}`] = {
                padding: [8, -60, -20, -20],
                color: colorLine[i],
                fontSize: 12
            }
        })
        return result
    }
    let data = [{
        'name': '北京',
        'value': 25
    }, {
        'name': '上海',
        'value': 20
    }, {
        'name': '广州',
        'value': 18
    }, {
        'name': '深圳',
        'value': 15
    }, {
        'name': '未知',
        'value': 13
    }, {
        'name': '海外',
        'value': 9
    }].sort((a, b) => {
        return b.value - a.value
    })
    data.forEach((v, i) => {
        v.labelLine = {
            lineStyle: {
                width: 1,
                color: colorLine[i]
            }
        }
    })
    option = {
        // 图例
        legend: {
            orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
            // 'horizontal' ¦ 'vertical'
            x: 'center', // 水平安放位置，默认为全图居中，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc', // 图例边框颜色
            borderWidth: 0, // 图例边框线宽，单位px，默认为0（无边框）
            padding: 5, // 图例内边距，单位px，默认各方向内边距为5，
            // 接受数组分别设定上右下左边距，同css
            itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
            // 横向布局时为水平间隔，纵向布局时为纵向间隔
            itemWidth: 20, // 图例图形宽度
            itemHeight: 14, // 图例图形高度
            textStyle: {
                color: '#fff', // 图例文字颜色
                fontSize: 18, // 图例文字大小
            }
        },
        series: [{
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            clockwise: true,
            avoidLabelOverlap: true,
            label: {
                show: true,
                position: 'outside',
                formatter: function(params) {
                    const name = params.name
                    const percent = params.percent + '%'
                    const index = params.dataIndex
                    return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join('\n')
                },
                rich: getRich()
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            data,
            roseType: 'radius'
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

/**
 * 左上角第一个图表：订单品类占比
 */
function leftTopCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart1'));

    var option = {
        // 图例
        legend: {
            orient: 'horizontal', // 布局方式，默认为水平布局，可选为：
            // 'horizontal' ¦ 'vertical'
            x: 'center', // 水平安放位置，默认为全图居中，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            backgroundColor: 'rgba(0,0,0,0)', // 背景颜色
            borderColor: '#ccc', // 图例边框颜色
            borderWidth: 0, // 图例边框线宽，单位px，默认为0（无边框）
            padding: 5, // 图例内边距，单位px，默认各方向内边距为5，
            // 接受数组分别设定上右下左边距，同css
            itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
            // 横向布局时为水平间隔，纵向布局时为纵向间隔
            itemWidth: 20, // 图例图形宽度
            itemHeight: 14, // 图例图形高度
            textStyle: {
                color: '#fff', // 图例文字颜色
                fontSize: 18, // 图例文字大小
            }
        },
        title: {
            text: '30%',
            left: 'center',
            top: '46.5%',
            textStyle: {
                fontSize: 16,
                color: '#3C4353',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular,PingFang SC;',
            }
        },
        color: ['#7eacea', '#e15777', '#95ea71', '#ea9b4f', '#7577df', '#be72d8', '#fff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        "series": [
            {
                "type": "bar",
                "coordinateSystem": "polar",
                "symbolSize": 4,
                "data": [
                    "943 ",
                    "594 ",
                    "787 ",
                    "484 ",
                    "493 ",
                    "467 ",
                    "451 ",
                    "455 ",
                    "857 ",
                    "628 ",
                    "753 ",
                    "750 ",
                    "627 ",
                    "759 ",
                    "1142 ",
                    "360 ",
                    "1120 ",
                    "387 ",
                    "1145 ",
                    "1025 "
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
                "\u5317\u4eac",
                "\u4e0a\u6d77",
                "\u5317\u4eac",
                "\u6d59\u6c5f",
                "\u6c5f\u82cf",
                "\u4e0a\u6d77",
                "\u4e0a\u6d77",
                "\u6c5f\u82cf",
                "\u5317\u4eac",
                "\u6d77\u5916",
                "\u5317\u4eac",
                "\u5e7f\u4e1c",
                "\u4e0a\u6d77",
                "\u5317\u4eac",
                "\u6d77\u5357",
                "\u5317\u4eac",
                "\u5e7f\u4e1c",
                "\u4e0a\u6d77",
                "\u4e0a\u6d77",
                "\u5929\u6d25"
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
    myChart.setOption(option);

}

/**
 * 左下角第二个图表：投诉排名
 */
function leftBottomCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart2'));
    var option = {
        grid: {
            // left: '5%',
            // right: '5%',
            // bottom: '5%',
            top: '0',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                console.log(params);
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + params[0].value + ' %<br/>'
            }
        },
        // backgroundColor: 'rgb(20,28,52)', // 图表背景颜色
        xAxis: {
            show: false,
            type: 'value',
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20, // 分类文字大小
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            // data: ['儿童用品', '韩流服饰', '化妆品', '美味小吃', '老人用品', '美妆用品']
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#0cfcfc',
                    fontSize: 16, // 比例文字大小
                },
                formatter: function(value) {
                    // if (value >= 10000) {
                    //     return (value / 10000).toLocaleString() + '%';
                    // } else {
                    console.log(value);
                    return value.toLocaleString() + '%';;
                    // }
                },
            },
            // data: [84.2, 62.1, 78.6, 89.2, 67.3, 78.6]
        }],
        "series": [
            {
                "type": "funnel",
                "data": [
                    {
                        "name": "\u65f6\u5c1a\u65cf",
                        "value": "943 "
                    },
                    {
                        "name": "\u4e09\u4e9a",
                        "value": "594 "
                    },
                    {
                        "name": "\u56fd\u822a\u5b98\u7f51",
                        "value": "787 "
                    },
                    {
                        "name": "\u8fde\u4e91\u6e2f\u660e\u5929\u5929\u6c14",
                        "value": "484 "
                    },
                    {
                        "name": "\u9014\u725b",
                        "value": "493 "
                    },
                    {
                        "name": "\u822a\u73ed",
                        "value": "467 "
                    },
                    {
                        "name": "\u5e7f\u5dde\u5730\u56fe",
                        "value": "451 "
                    }
                ],
                "sort": "descending",
                "gap": 0,
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
                    "\u5e7f\u5dde\u5730\u56fe",
                    "\u56fd\u822a\u5b98\u7f51",
                    "\u65f6\u5c1a\u65cf",
                    "\u4e09\u4e9a",
                    "\u9014\u725b",
                    "\u8fde\u4e91\u6e2f\u660e\u5929\u5929\u6c14",
                    "\u822a\u73ed"
                ],
                "selected": {
                    "\u65f6\u5c1a\u65cf": true,
                    "\u4e09\u4e9a": true,
                    "\u56fd\u822a\u5b98\u7f51": true,
                    "\u8fde\u4e91\u6e2f\u660e\u5929\u5929\u6c14": true,
                    "\u9014\u725b": true,
                    "\u822a\u73ed": true,
                    "\u5e7f\u5dde\u5730\u56fe": true
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
        "title": [
            {
                "text": "\u5173\u952e\u5b57\u6392\u540d",
                "padding": 5,
                "itemGap": 10
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function centerTopCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart3'));
    var data = [{
            "time": 2020,
            "data": [{
                    "name": "美国",
                    "value": [1025000, 31.222, "美国"]
                },
                {
                    "name": "俄国",
                    "value": [433412, 13.202, "俄国"]
                },
                {
                    "name": "Japan",
                    "value": [209071, 6.369, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [208867, 6.362, "德国"]
                },
                {
                    "name": "France",
                    "value": [146982, 4.477, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [124970, 3.807, "英国"]
                },
                {
                    "name": "Italy",
                    "value": [109260, 3.328, "意大利"]
                },
                {
                    "name": "China",
                    "value": [91506, 2.787, "中国"]
                },
                {
                    "name": "Canada",
                    "value": [86303, 2.629, "加拿大"]
                },
                {
                    "name": "India",
                    "value": [61470, 1.873, "印度"]
                }
            ]
        },
        {
            "time": 2019,
            "data": [{
                    "name": "United States of America",
                    "value": [2768900, 23.337, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [1086988, 9.027, "日本"]
                },
                {
                    "name": "Russia",
                    "value": [940038, 7.923, "俄国"]
                },
                {
                    "name": "Germany",
                    "value": [919651, 6.253, "德国"]
                },
                {
                    "name": "France",
                    "value": [691157, 5.825, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [541917, 4.567, "英国"]
                },
                {
                    "name": "Italy",
                    "value": [459811, 3.875, "意大利"]
                },
                {
                    "name": "China",
                    "value": [306520, 2.583, "中国"]
                },
                {
                    "name": "Canada",
                    "value": [268889, 2.266, "加拿大"]
                },
                {
                    "name": "Mexico",
                    "value": [227664, 1.919, "墨西哥"]
                }
            ]
        },
        {
            "time": 2018,
            "data": [{
                    "name": "United States of America",
                    "value": [5754800, 25.921, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [3103698, 13.774, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [1714447, 7.722, "德国"]
                },
                {
                    "name": "France",
                    "value": [1244419, 5.605, "法国"]
                },
                {
                    "name": "Italy",
                    "value": [1133465, 5.105, "意大利"]
                },
                {
                    "name": "United Kingdom",
                    "value": [1012617, 4.561, "英国"]
                },
                {
                    "name": "Russia",
                    "value": [775810, 3.501, "俄国"]
                },
                {
                    "name": "Canada",
                    "value": [582735, 2.625, "加拿大"]
                },
                {
                    "name": "Spain",
                    "value": [520938, 2.346, "西班牙"]
                },
                {
                    "name": "China",
                    "value": [404494, 1.822, "中国"]
                }
            ]
        },
        {
            "time": 2017,
            "data": [{
                    "name": "United States of America",
                    "value": [9898800, 30.659, "美国"]
                },
                {
                    "name": "Japan",
                    "value": [4731199, 14.456, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [1886400, 5.843, "德国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [1477132, 4.575, "英国"]
                },
                {
                    "name": "France",
                    "value": [1326333, 4.108, "法国"]
                },
                {
                    "name": "China",
                    "value": [1192836, 3.695, "中国"]
                },
                {
                    "name": "Italy",
                    "value": [1097343, 3.399, "意大利"]
                },
                {
                    "name": "Canada",
                    "value": [724914, 2.245, "加拿大"]
                },
                {
                    "name": "Brazil",
                    "value": [644729, 1.997, "巴西"]
                },
                {
                    "name": "Mexico",
                    "value": [636731, 1.972, "墨西哥"]
                }
            ]
        },
        {
            "time": 2016,
            "data": [{
                    "name": "United States of America",
                    "value": [14419600, 22.679, "美国"]
                },
                {
                    "name": "China",
                    "value": [5951462, 9.360, "中国"]
                },
                {
                    "name": "Japan",
                    "value": [5488424, 8.632, "日本"]
                },
                {
                    "name": "Germany",
                    "value": [3306028, 5.200, "德国"]
                },
                {
                    "name": "France",
                    "value": [2565755, 4.035, "法国"]
                },
                {
                    "name": "United Kingdom",
                    "value": [2266049, 3.564, "英国"]
                },
                {
                    "name": "Brazil",
                    "value": [2143035, 3.371, "巴西"]
                },
                {
                    "name": "Italy",
                    "value": [2056941, 3.235, "意大利"]
                },
                {
                    "name": "India",
                    "value": [1678297, 2.640, "印度"]
                },
                {
                    "name": "Canada",
                    "value": [1577040, 2.480, "加拿大"]
                }
            ]
        }
    ]

    var option = {
        baseOption: {
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut',
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 5000,
                left: null,
                right: 5,
                top: 20,
                bottom: 20,
                width: 46,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 1
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: data.map(function(ele) {
                    return ele.time
                })
            },
            // backgroundColor: '#404a59', // 背景颜色
            // title: {     
            //     text: '互动营销中心全球用户',// 大标题
            //     subtext: '单位:人',
            //     left: 'center',
            //     top: 'top',
            //     textStyle: {
            //         fontSize: 25,
            //         color: 'rgba(255,255,255, 0.9)'
            //     }
            // },
            tooltip: {
                formatter: function(params) {
                    if ('value' in params.data) {
                        return params.data.value[2] + ': ' + params.data.value[0];
                    }
                }
            },
            grid: {
                left: '12%',
                right: '45%',
                top: '70%',
                bottom: 20
            },
            xAxis: {},
            yAxis: {},
            series: [{
                id: 'map',
                type: 'map',
                mapType: 'world',
                top: '10%',
                bottom: '25%',
                left: 10,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        areaColor: 'rgba(255,255,255, 0.5)'
                    }
                },
                data: []
            }, {
                id: 'bar',
                type: 'bar',
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ddd'
                        }
                    }
                },
                data: []
            }, {
                id: 'pie',
                type: 'pie',
                radius: ['8%', '20%'],
                center: ['75%', '85%'],
                roseType: 'radius',
                tooltip: {
                    formatter: '{b} {d}%'
                },
                data: [],
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0,0,0,0.3)',
                        borderSize: 1
                    }
                }
            }]
        },
        options: []
    }

    for (var i = 0; i < data.length; i++) {
        //计算其余国家GDP
        var restPercent = 100;
        var restValue = 0;
        data[i].data.forEach(function(ele) {
            restPercent = restPercent - ele.value[1];
        });
        restValue = data[i].data[0].value[0] * (restPercent / data[i].data[0].value[1]);
        console.log(restPercent);
        console.log(restValue);
        option.options.push({
            visualMap: [{
                dimension: 0,
                left: 10,
                itemWidth: 12,
                min: data[i].data[9].value[0],
                max: data[i].data[0].value[0],
                text: ['High', 'Low'],
                textStyle: {
                    color: '#ddd'
                },
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered', 'red']
                }
            }],
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.1],
                axisLabel: {
                    show: false,
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                data: data[i].data.map(function(ele) {
                    return ele.value[2]
                }).reverse()
            },
            series: [{
                id: 'map',
                data: data[i].data
            }, {
                id: 'bar',
                data: data[i].data.map(function(ele) {
                    return ele.value[0]
                }).sort(function(a, b) {
                    return a > b
                })
            }, {
                id: 'pie',
                data: data[i].data.map(function(ele) {
                    return {
                        name: ele.value[2],
                        value: ele.value
                    }
                }).concat({
                    name: '其他国家',
                    value: restValue
                }),
            }]
        })
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function rightTopCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart4'));

    var option = {
        // title: {
        //     text: '用电量'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc', // 图例边框颜色
            borderWidth: 0, // 图例边框线宽，单位px，默认为0（无边框）
            padding: 5, // 图例内边距，单位px，默认各方向内边距为5，
            // 接受数组分别设定上右下左边距，同css
            itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
            // 横向布局时为水平间隔，纵向布局时为纵向间隔
            itemWidth: 20, // 图例图形宽度
            itemHeight: 14, // 图例图形高度
            textStyle: {
                color: '#fff', // 图例文字颜色
                fontSize: 18, // 图例文字大小
            },
            data: ['2018', '2019']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false, //坐标轴两边留白
            data: ['12201', '12202', '12203', '12204', '12301', '12302', '12303', '12304', '12401', '12402', '12403', '12404'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#1B253A',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
                formatter: function(params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 4; //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }

                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                },
                //rotate:50,
            },
            axisTick: { //坐标轴刻度相关设置。
                show: false,
            },
            // axisLine: {//坐标轴轴线相关设置
            //     // show: false,
            //     lineStyle: {
            //         color: '#213b63',
            //         // opacity:0.2
            //     }
            // },
            // splitLine: { //坐标轴在 grid 区域中的分隔线。
            //     show: false,
            //     lineStyle: {
            //         color: '#E5E9ED',
            //         // 	opacity:0.1
            //     }
            // }
        },
        yAxis: [{
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E5E9ED',
                    // 	opacity:0.1
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
                        null,
                        557
                    ],
                    [
                        "\u4e0a\u6d77",
                        857
                    ],
                    [
                        "\u4e91\u5357",
                        277
                    ],
                    [
                        "\u5317\u4eac",
                        1153
                    ],
                    [
                        "\u53f0\u6e7e",
                        2
                    ],
                    [
                        "\u5409\u6797",
                        277
                    ],
                    [
                        "\u56db\u5ddd",
                        3
                    ],
                    [
                        "\u5929\u6d25",
                        279
                    ],
                    [
                        "\u5c71\u4e1c",
                        555
                    ],
                    [
                        "\u5e7f\u4e1c",
                        1126
                    ],
                    [
                        "\u6c5f\u82cf",
                        558
                    ],
                    [
                        "\u6d59\u6c5f",
                        1391
                    ],
                    [
                        "\u6d77\u5916",
                        13
                    ],
                    [
                        "\u798f\u5efa",
                        5
                    ],
                    [
                        "\u8fbd\u5b81",
                        3
                    ],
                    [
                        "\u91cd\u5e86",
                        831
                    ],
                    [
                        "\u9999\u6e2f",
                        4
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
                    null,
                    "\u4e0a\u6d77",
                    "\u4e91\u5357",
                    "\u5317\u4eac",
                    "\u53f0\u6e7e",
                    "\u5409\u6797",
                    "\u56db\u5ddd",
                    "\u5929\u6d25",
                    "\u5c71\u4e1c",
                    "\u5e7f\u4e1c",
                    "\u6c5f\u82cf",
                    "\u6d59\u6c5f",
                    "\u6d77\u5916",
                    "\u798f\u5efa",
                    "\u8fbd\u5b81",
                    "\u91cd\u5e86",
                    "\u9999\u6e2f"
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
                "text": "\u516c\u53f8\u6700\u591a\u7684\u5730\u533a",
                "padding": 5,
                "itemGap": 10
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function rightBottomCharts() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart5'));
    var xData = function() {
        var data = [];
        for (var i = 2; i < 8; i++) {
            data.push(i + "月");
        }
        return data;
    }();

    var option = {
        backgroundColor: 'rgba(011, 023, 059)',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(list) {
                var msg = "";
                for (let i in list) {
                    if (i == 0) {
                        msg += list[i].name + "<br>";
                    }
                    msg += list[i].seriesName + "：" + list[i].data + "万元<br>";
                    if (i > 0 && list[i].seriesName == "不可用余额" && list[i - 1].seriesName == "可用余额") {
                        msg += "总存款余额" + "：" + (list[i].data + list[i - 1].data) + "万元<br>";
                    }
                    if (i > 0 && list[i].seriesName == "支出" && list[i - 1].seriesName == "收入") {
                        msg += "净收入" + "：" + (list[i - 1].data - list[i].data) + "万元<br>";
                    }
                }
                return msg;
            }
        },
        legend: {
            textStyle: {
                color: '#fff',
            },
            data: ['可用余额', '不可用余额', '收入', '支出']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#808eb7',
                    width: 2
                }
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#808eb7',
                    width: 2
                }
            },
            splitLine: { //分割线配置
                lineStyle: {
                    color: "#AAAAAA56",
                }
            },
        },
        "series": [
            {
                "type": "bar",
                "data": [
                    557,
                    857,
                    277,
                    1153,
                    2,
                    277,
                    3,
                    279,
                    555,
                    1126,
                    558,
                    1391,
                    13,
                    5,
                    3,
                    831,
                    4
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
                    null,
                    "\u4e0a\u6d77",
                    "\u4e91\u5357",
                    "\u5317\u4eac",
                    "\u53f0\u6e7e",
                    "\u5409\u6797",
                    "\u56db\u5ddd",
                    "\u5929\u6d25",
                    "\u5c71\u4e1c",
                    "\u5e7f\u4e1c",
                    "\u6c5f\u82cf",
                    "\u6d59\u6c5f",
                    "\u6d77\u5916",
                    "\u798f\u5efa",
                    "\u8fbd\u5b81",
                    "\u91cd\u5e86",
                    "\u9999\u6e2f"
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
                "text": "\u516c\u53f8\u6392\u540d",
                "padding": 5,
                "itemGap": 10
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}