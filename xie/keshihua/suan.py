from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie, EffectScatter
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT `天数`,COUNT(*) AS COUNT FROM zhao GROUP BY `天数` HAVING COUNT>1"
rows = selectdata(strsql)
rows = list(rows)


def suan(xdata3, ydata3):
    effectScatter = (EffectScatter()
                     .add_xaxis(xdata3)
                     .add_yaxis('', ydata3)
                     )
    effectScatter.set_global_opts(title_opts=opts.TitleOpts(title="实习天数"))
    return effectScatter
xdata3 = []
ydata3 = []
for i in rows:
    xdata3.append(i[0])
    ydata3.append(i[1])
suan(xdata3, ydata3).render("suan.html")
