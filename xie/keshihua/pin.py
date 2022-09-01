from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT `学历`,COUNT(*) AS COUNT FROM zhao GROUP BY `学历` HAVING COUNT>1"
rows = selectdata(strsql)
rows = list(rows)


def pin(xdata2, ydata2):
    pie = (Pie()
           .add('', [list(z) for z in zip(xdata2, ydata2)])
           )
    pie.set_global_opts(title_opts=opts.TitleOpts(title="学历统计"))
    return pie

xdata2 = []
ydata2 = []
for i in rows:
    xdata2.append(i[0])
    ydata2.append(i[1])
pin(xdata2, ydata2).render("pin.html")
