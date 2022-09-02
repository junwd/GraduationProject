from pyecharts import options as opts
from pyecharts.charts import EffectScatter
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType
from link_mysql import selectdata


def pie_radius3(xdata6, ydata6):
    c = (
        EffectScatter()
        .add_xaxis(xdata6)
        .add_yaxis("人气", ydata6, symbol=SymbolType.ARROW)
        .set_global_opts(title_opts=opts.TitleOpts(title=""))
    )
    return c


strsql = "SELECT db.title,db.dada FROM db LIMIT 15"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata6 = []
ydata6 = []
for i in rows:
    # print(i[1])
    xdata6.append(i[0])
    ydata6.append(i[1][:-1])
pie_radius3(xdata6, ydata6).render("sd.html")
