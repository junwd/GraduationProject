from pyecharts.commons.utils import JsCode

from links import selectdata
from pyecharts import options as opts
from pyecharts.charts import *


def pie_radius2(xdata5, ydata5):
    c = (
        Bar()
            .add_xaxis(xdata5)
            .add_yaxis("电影数量", ydata5)
            .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 25, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 97, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [80, 80, 80, 80],
                    "shadowColor": "rgb(0, 160, 22)",
                }
            }
        )
                .set_global_opts(title_opts=opts.TitleOpts(title="豆瓣top250-每年电影数量分布"),
                                 yaxis_opts=opts.AxisOpts(name="电影数量"),
                                 xaxis_opts=opts.AxisOpts(name="年份"),
                                 datazoom_opts=opts.DataZoomOpts(),
                                 )
        )
    return c


strsql = "SELECT db.`year`,Count(db.`year`) AS `数量`FROM db GROUP BY db.`year`ORDER BY db.`year` DESC "
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata5 = []
ydata5 = []
for i in rows:
    # print(i[1])
    xdata5.append(i[0])
    ydata5.append(i[1])
pie_radius2(xdata5, ydata5).render("year.html")
