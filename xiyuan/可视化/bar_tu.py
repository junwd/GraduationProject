from link_mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker


def pie_radius1(xdata, ydata):
    c = (
        Bar()
        .add_xaxis(xdata)
        .add_yaxis("股票成交额", ydata, category_gap="60%")
        .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 255, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 77, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [30, 30, 30, 30],
                    "shadowColor": "rgb(0, 160, 221)",
                }
            }
        )
        .set_global_opts(title_opts=opts.TitleOpts(title=""))
    )
    return c


strsql = "SELECT qy1.`名称`,qy1.`成交额` FROM qy1 ORDER BY qy1.`成交额` DESC LIMIT 20"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata = []
ydata = []
for i in rows:
    # print(i[1])
    xdata.append(i[0])
    ydata.append(i[1])
pie_radius1(xdata, ydata).render("bar_tu.html")
