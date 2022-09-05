from MySQL import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Pie, Polar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker


def pie_radius(xdata, ydata):
    bar = (Bar()
           .add_xaxis(xdata)
           .add_yaxis('', ydata)
           )
    # pie.set_global_opts(title_opts=opts.TitleOpts(title="单位百万元"), legend_opts=opts.LegendOpts(is_show=False))
    return bar


strsql = "SELECT db.`地点`,db.`加价` FROM db LIMIT 15"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata = []
ydata = []
for i in rows:
    # print(i[1])
    xdata.append(i[0])
    ydata.append(i[1][:-5])
pie_radius(xdata, ydata).render("Pie3.html")
