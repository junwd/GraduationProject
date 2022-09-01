from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT `地点`,COUNT(*) AS COUNT FROM zhao GROUP BY `地点` HAVING COUNT>1"
rows = selectdata(strsql)
rows = list(rows)


def bar(xdata, ydata):
    bar = (Bar()
           .add_xaxis(xdata)
           .add_yaxis('', ydata)
           )
    bar.set_global_opts(title_opts=opts.TitleOpts(title="地区职务数"))
    return bar


xdata = []
ydata = []
for i in rows:
    xdata.append(i[0])
    ydata.append(i[1])
bar(xdata, ydata).render("bar.html")
