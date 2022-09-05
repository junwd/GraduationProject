# from pyecharts.charts import Pie,Bar,Scatter
# from pyecharts import options as opts
# from linkdatabase import selectdata
# from pyecharts.charts import Map
# import numpy as np
# import matplotlib.pyplot as plt
#
# def scatter_tu(xdata,ydata):
#     scratter=Scatter()
#     scratter.add_xaxis(xdata)
#     scratter.add_yaxis("信息分布与年份",ydata)
#     scratter.render("scratter.htm")
#
#
#
# strsql="SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
# rows=selectdata(strsql)
# rows=list(rows)
# # print(rows)
# xdata=[]
# ydata=[]
# for i in rows:
#     # print(i[1])
#     xdata.append(i[0])
#     ydata.append(i[1])
# scatter_tu(xdata,ydata)#扇形图


#柱状图：y轴显示不同平台的销售数量
#折线图：y轴另外一侧显示不同平台课程对应的价格
from pyecharts.charts import Bar,Line
from pyecharts import options as opts
x=['中国知网','搜狗百科','庐江网','黄淮学院','爱词霸','未来网']
#1.绘制柱状图
def bar_charts()->Bar():
    y1=[8270,7238,6820,6705,5881]
    y2=[79655,7168,2300,6098,5752]
    bar=Bar(init_opts=opts.InitOpts(width='1000px',height='600px'))
    bar.add_xaxis(xaxis_data=x)
    bar.add_yaxis(series_name='平台A-教育数量',y_axis=y1)
    bar.add_yaxis(series_name='平台B-教育数量',y_axis=y2)
    bar.set_global_opts(
        title_opts=opts.TitleOpts(title='不同平台的教育情况统计'),
        legend_opts=opts.LegendOpts(is_show=True),
    )
    strsql = "SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
    bar.extend_axis(yaxis=opts.AxisOpts(
        name='数量',
        type_='value',
        min_=5725,
        max_=79655,
        interval=3500,
        axislabel_opts=opts.LabelOpts(formatter='{value}数量')
        ))
    return bar


#2.绘制折线图
def line_charts()->Line():
    y=[8270,79655,7238,7168,6820,6705,6098,5881,5752,47350]
    c=Line()
    c.add_xaxis(xaxis_data=x)
    c.add_yaxis(series_name='数量',yaxis_index=1,y_axis=y,label_opts=opts.LabelOpts(is_show=False))

    return c



#3.Bar+Line组合
bar=bar_charts()
line=line_charts()
bar.overlap(line).render("scratter.html")

