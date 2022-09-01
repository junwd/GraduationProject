from mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie, EffectScatter, PictorialBar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker

strsql = "SELECT zhao.`名称`,zhao.`天数` FROM zhao LIMIT 8,4"
rows = selectdata(strsql)
rows = list(rows)


def suan1(xdata4, ydata4):
    pictorialBar = (PictorialBar()
                    .add_xaxis(xdata4)
                    .add_yaxis('', ydata4)
                    )
    pictorialBar.set_global_opts(title_opts=opts.TitleOpts(title="职位最低做多少天"))
    return pictorialBar
xdata4 = []
ydata4 = []
for i in rows:
    xdata4.append(i[0])
    ydata4.append(i[1][:-6])

suan1(xdata4, ydata4).render("suan1.html")
