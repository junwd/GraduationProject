from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Pie
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT gp.`名称`,gp.`最新价` FROM gp"
rows = selectdata(strsql)
rows = list(rows)


def pie(xdata, ydata):
    pie = (Pie()
           .add('', [list(z) for z in zip(xdata, ydata)])
           )
    return pie

xdata = []
ydata = []
for i in rows:
    # print(i[1])
    xdata.append(i[0])
    ydata.append(i[1])
pie(xdata, ydata).render("pie.html")
