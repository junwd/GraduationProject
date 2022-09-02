from link_mysql import  selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker
def pie_radius(xdata1,ydata1):
    c = (
        Bar()
            .add_xaxis(xdata1)
            .add_yaxis("评论",ydata1, category_gap="60%")
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
strsql="SELECT db.title,db.dada FROM db ORDER BY db.dada DESC LIMIT 10"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata1=[]
ydata1=[]
for i in rows:
    # print(i[1])
    xdata1.append(i[0])
    ydata1.append(i[1])
pie_radius(xdata1,ydata1).render("bar_tu.html")