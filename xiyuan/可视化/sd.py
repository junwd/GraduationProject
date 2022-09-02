from pyecharts import options as opts
from pyecharts.charts import EffectScatter
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType
from link_mysql import selectdata


def pie_radius4(xdata3, ydata3):
    c = (
        EffectScatter()
        .add_xaxis(xdata3)
        .add_yaxis("公司人数", ydata3, symbol=SymbolType.ARROW)
        .set_global_opts(title_opts=opts.TitleOpts(title=""))
    )
    return c


strsql = "SELECT qy1.`名称`,qy1.`总值` FROM qy1 ORDER BY qy1.`成交额` DESC LIMIT 10"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata3 = []
ydata3 = []
for i in rows:
    # print(i[1])
    xdata3.append(i[0])
    ydata3.append(i[1])
pie_radius4(xdata3, ydata3).render("sd.html")
