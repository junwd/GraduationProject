from pyecharts.charts import Pie,Bar
from pyecharts import options as opts
from linkdatabase import selectdata
from pyecharts.charts import Map
import numpy as np
import matplotlib.pyplot as plt



def pie_radius(xdata,ydata):
    c = (
        Pie()
        .add(
            "",
            [list(z) for z in zip(xdata, ydata)],
            radius=["40%", "75%"],
        )
        .set_global_opts(
            # title_opts=opts.TitleOpts(title="Pie-数据扇形展示"),
            toolbox_opts=opts.ToolboxOpts(
                is_show=True,  # 是否显示组件
                orient='vertical',  # 布局朝向  vertical表示纵向  horizontal表示横向
                pos_left='90%',
            ),
            legend_opts=opts.LegendOpts(
                orient="vertical", pos_top="15%", pos_left="2%"
            ),
        )
        .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))
    )
    return c

strsql="SELECT name,f FROM(SELECT name,f FROM db ORDER BY f DESC) a WHERE f>=5000 LIMIT 0,10"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata=[]
ydata=[]
for i in rows:
    # print(i[1])
    xdata.append(i[0])
    ydata.append(i[1])
pie_radius(xdata,ydata).render("pie.html")  #扇形图


# #示例：官网案例
# from pyecharts import options as opts
# from pyecharts.charts import Geo
# from pyecharts.globals import ChartType, SymbolType
#
# c = (
#     Geo()
#     .add_schema(
#         maptype="china",
#         itemstyle_opts=opts.ItemStyleOpts(color="#323c48", border_color="#111"),
#     )
#     .add(
#         "",
#         [("新疆", 55), ("北京", 66), ("杭州", 77), ("重庆", 88)],
#         type_=ChartType.EFFECT_SCATTER,
#         color="white",
#     )
#     .add(
#         "geo",
#         [("贵州", "新疆"), ("贵州", "北京"), ("贵州", "杭州"), ("贵州", "重庆")],
#         type_=ChartType.LINES,
#         effect_opts=opts.EffectOpts(
#             symbol=SymbolType.ARROW, symbol_size=6, color="blue"
#         ),
#         linestyle_opts=opts.LineStyleOpts(curve=0.2),
#     )
#     .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
#     .set_global_opts(title_opts=opts.TitleOpts(title="Geo-Lines-background"))
#     .render("pip1.html")
# )