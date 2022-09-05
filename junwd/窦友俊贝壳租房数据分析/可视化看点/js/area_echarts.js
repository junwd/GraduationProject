
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
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
