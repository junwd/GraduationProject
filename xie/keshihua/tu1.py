from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Line
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT `实习期`,COUNT(*) AS COUNT FROM zhao GROUP BY `实习期` HAVING COUNT>1"
rows = selectdata(strsql)
rows = list(rows)


def tu1(xdata1, ydata1):
    line = (Line()
            .add_xaxis(xdata1)
            .add_yaxis('', ydata1)
            )
    line.set_global_opts(title_opts=opts.TitleOpts(title="地区职务数"))

    return line

xdata1 = []
ydata1 = []
for i in rows:
    xdata1.append(i[0])
    ydata1.append(i[1])
tu1(xdata1, ydata1).render("bar1.html")
