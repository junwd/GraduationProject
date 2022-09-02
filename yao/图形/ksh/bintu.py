from links import selectdata
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker
def pie_radius5(xdata,ydata):
    v = Faker.choose()
    c = (
        Pie()
            .add(
            "",
            [list(z) for z in zip(xdata, ydata)],
            radius=["35%", "65%"],
            center=["45%", "50%"],
        )
            .set_global_opts(
            title_opts=opts.TitleOpts(title="top250导演作品数前十统计图",pos_left="30%",),
            legend_opts=opts.LegendOpts(pos_left="5%", pos_bottom = "-5%"),
        )
            .set_series_opts(label_opts=opts.LabelOpts(formatter="{b}: {c}"))

    )
    return c
strsql="SELECT db.director,Count(db.director) AS `数量`FROM db GROUP BY db.director ORDER BY`数量` DESC LIMIT 10"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata=[]
ydata=[]
for i in rows:
    # print(i[1])
    xdata.append(i[0])
    ydata.append(i[1])
pie_radius5(xdata,ydata).render("bintu.html")