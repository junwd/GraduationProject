from links import  selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker
def pie_radius(xdata3,ydata3):
    c = (
        Bar()
            .add_xaxis(xdata3)
            .add_yaxis("发行数量",ydata3, category_gap="65%")
            .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 25, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 77, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [80, 80, 80, 80],
                    "shadowColor": "rgb(0, 160, 22)",
                }
            }
        )
            .set_global_opts(title_opts=opts.TitleOpts(title="豆瓣top250各国电影发行数量榜前十"))
    )
    return c
strsql="SELECT country,Count(db.country) AS ’数量‘ FROM db GROUP BY country ORDER BY ’数量‘ DESC LIMIT 10"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata3=[]
ydata3=[]
for i in rows:
    # print(i[1])
    xdata3.append(i[0])
    ydata3.append(i[1])
pie_radius(xdata3,ydata3).render("zhuti.html")