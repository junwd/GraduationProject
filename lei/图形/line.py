# from pyecharts.charts import Page, Pie,Bar,Line
# from pyecharts.faker import Collector, Faker
# from pyecharts import options as opts
# from linkdatabase import  selectdata
# from pyecharts.globals import ThemeType
# from pyecharts.commons.utils import JsCode
# from pyecharts.components import Table  #表格
# from pyecharts.options import ComponentTitleOpts,global_options
# year=[]#全局变量
# data_2020=[]#全局变量
# data_2019=[]#全局变量
# data_2018=[]#全局变量
#
# #拆线图
# def year_line(x_data,y_data,y_data1,y_data2):
#     line= (
#         Line(init_opts=opts.InitOpts(theme=ThemeType.SHINE))
#         .add_xaxis(x_data)
#         .add_yaxis("2020年",y_data,
#             markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
#             linestyle_opts=opts.LineStyleOpts( width=4))
#         .add_yaxis("2019年", y_data1,
#             markpoint_opts=opts.MarkPointOpts(data=[opts.MarkPointItem(type_="max")]),
#             linestyle_opts=opts.LineStyleOpts(width=4))
#         .add_yaxis("2018年", y_data2,
#
#             linestyle_opts=opts.LineStyleOpts(width=4))
#
#     )
#     return line
# #2020统计，生成拆线图
# sqlstr2="SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
#
#     #2019，生成拆线图
# sqlstr3="SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
#     #2018，生成拆线图
# sqlstr4="SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
#     #按年分组统计建议，生成拆线图
#
#
# # 获取2020数据
# rows2 = selectdata(sqlstr2)
# # 获取2019数据
# rows3 = selectdata(sqlstr3)
# # 获取2018数据
# rows4 = selectdata(sqlstr4)
#
#
# for j in rows2:
#
#     data_2020.append(j[1])
# print(data_2020)
# for j in rows3:
#     data_2019.append(j[1])
#
# for j in rows4:
#     data_2018.append(j[1])
# month=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
# year_line(month, data_2020, data_2019, data_2018).render('line.html')



import pyecharts.options as opts
from pyecharts.charts import Line
x=['中国教育在线','中国教育在线高考服务平台','千栀网','外语教学与研究出版社','湖北教育信息网','我要搜学网','四川外国语大学','古诗大全300首','仁和会计教育','天津商业大学']
y1=[9975,9975,99341,99279,98939]
y2=[98931,98588,98265,981112,97961]
sqlstr="SELECT name,pming FROM(SELECT name,pming FROM db ORDER BY pming DESC) a WHERE pming>=5000 LIMIT 0,10"
def line_charts()->Line:
    c=Line()
    c.add_xaxis(xaxis_data=x)
    c.add_yaxis(series_name='平台A-',y_axis=y1) #series_name=图例名称
    c.add_yaxis(series_name='平台B-',y_axis=y2)
    #全局数据项的设置
    c.set_global_opts(
        title_opts=opts.TitleOpts(title='可视化软件的数量情况统计'),
        legend_opts=opts.LegendOpts(is_show=True),
        tooltip_opts=opts.TooltipOpts(trigger='axis',axis_pointer_type='cross')
    ) #is_show=True 默认 展示图例，False是不显示图例

    return c
#绘制图表
c=line_charts()
c.render("line1.html")
