from link_mysql import selectdata
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker


def pie_radius(xdata1, ydata1):
    v = Faker.choose()
    c = (
        Pie()
        .add(
            "",
            [list(z) for z in zip(xdata1, ydata1)],
            radius=["25%", "55%"],
            center=["50%", "50%"],
            rosetype="area",
        )
        .set_global_opts(title_opts=opts.TitleOpts(title=""))
        # .render("pie_rosetype.html")
    )

    return c


strsql = "SELECT qy1.`类型`,qy1.`代码` FROM qy1 ORDER BY qy1.`成交额` DESC LIMIT 20"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata1 = []
ydata1 = []
for i in rows:
    # print(i[1])
    xdata1.append(i[0])
    ydata1.append(i[1])
pie_radius(xdata1, ydata1).render("pie.html")
