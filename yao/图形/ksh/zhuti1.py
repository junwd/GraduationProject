from links import  selectdata
from pyecharts import options as opts
from pyecharts.charts import Bar
from pyecharts.commons.utils import JsCode
from pyecharts.faker import Faker
def pie_radius3(xdata4,ydata4):
    c = (
        Bar()
            .add_xaxis(xdata4)
            .add_yaxis('评价人数',ydata4)
            .set_series_opts(
            itemstyle_opts={
                "normal": {
                    "color": JsCode(
                        """new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 244, 25, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 177, 167, 1)'
                }], false)"""
                    ),
                    "barBorderRadius": [80, 80, 80, 80],
                    "shadowColor": "rgb(0, 160, 22)",
                }
            }
        )
            .reversal_axis()
            .set_global_opts(
            title_opts=opts.TitleOpts(title='电影评价人数'),
            yaxis_opts=opts.AxisOpts(name='片名'),
            xaxis_opts=opts.AxisOpts(name='人数'),
            datazoom_opts=opts.DataZoomOpts(type_='inside'),
        )

        .set_series_opts(label_opts=opts.LabelOpts(position="right"))

    )
    return c
strsql="SELECT db.cname,db.people FROM db LIMIT 20"
rows=selectdata(strsql)
rows=list(rows)
print(rows)
xdata4=[]
ydata4=[]
for i in rows:
    # print(i[1])
    xdata4.append(i[0])
    ydata4.append(i[1])
pie_radius3(xdata4,ydata4).render("zhuti1.html")