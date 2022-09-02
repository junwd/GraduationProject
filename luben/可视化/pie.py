from link_mysql import  selectdata
from pyecharts import options as opts
from pyecharts.charts import Pie
from pyecharts.faker import Faker
def pie_radius1(xdata2,ydata2):
    v = Faker.choose()
    c = (
        Pie()
            .add(
            "",
            [list(z) for z in zip(xdata2, ydata2)],
            radius=["25%", "55%"],
            center=["50%", "50%"],
            rosetype="area",
        )
            .set_global_opts(title_opts=opts.TitleOpts(title=""))
        # .render("pie_rosetype.html")
    )

    return c
strsql="SELECT db.data_a,db.dada FROM db LIMIT 10"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata2=[]
ydata2=[]
for i in rows:
    # print(i[1])
    xdata2.append(i[0])
    ydata2.append(i[1])
pie_radius1(xdata2,ydata2).render("pie.html")