from links import selectdata
from pyecharts.charts import Funnel
from pyecharts import options as opts
from pyecharts.faker import Faker


def pie_radius1(xdata1, ydata1):
    v = Faker.choose()
    c = (
        Funnel()
        .add(
            "电影数量",
            [list(z) for z in zip(xdata1, ydata1)],
            label_opts=opts.LabelOpts(position="outside", ),
        )
        .set_global_opts(
            title_opts=opts.TitleOpts(title="豆瓣电影top250-电影上映地区分布"),
            legend_opts=opts.LegendOpts(pos_left="5%", pos_bottom="-5%"),
        )
    )
    return c


strsql = "SELECT country,Count(db.country) AS ’数量‘ FROM db GROUP BY country ORDER BY ’数量‘ DESC"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata1 = []
ydata1 = []
for i in rows:
    # print(i[1])
    xdata1.append(i[0])
    ydata1.append(i[1])
pie_radius1(xdata1, ydata1).render("jinzita.html")
