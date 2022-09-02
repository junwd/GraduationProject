from link_mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker


def pies(xdata9, ydata9):
    pie = (Pie()
           .add('', [list(z) for z in zip(xdata9, ydata9)])
           )

    return pie


strsql = "SELECT `类型`,COUNT(*) AS COUNT FROM qy1 GROUP BY `类型` HAVING COUNT>1 LIMIT 5"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata9 = []
ydata9 = []
for i in rows:
    # print(i[1])
    xdata9.append(i[0])
    ydata9.append(i[1])
pies(xdata9, ydata9).render("pies.html")
