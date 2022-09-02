import pyecharts.options as opts
from pyecharts.charts import Radar
from link_mysql import selectdata


def pie_radius2(xdata4, ydata4):
    v1 = [ydata4]
    c = (
        Radar()
        .add_schema(
            schema=[
                opts.RadarIndicatorItem(name=xdata4[0], max_=130),
                opts.RadarIndicatorItem(name=xdata4[1], max_=130),
                opts.RadarIndicatorItem(name=xdata4[2], max_=130),
                opts.RadarIndicatorItem(name=xdata4[3], max_=130),
                opts.RadarIndicatorItem(name=xdata4[4], max_=130),
                opts.RadarIndicatorItem(name=xdata4[5], max_=130),
                opts.RadarIndicatorItem(name=xdata4[6], max_=130),
                opts.RadarIndicatorItem(name=xdata4[7], max_=130),
                opts.RadarIndicatorItem(name=xdata4[8], max_=130),
                opts.RadarIndicatorItem(name=xdata4[9], max_=130),
            ]
        )
        .add("播放量", v1)
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(
            legend_opts=opts.LegendOpts(selected_mode="single"),
            title_opts=opts.TitleOpts(title=""),
        )
    )
    return c


strsql = "SELECT db.up,db.data_a FROM db ORDER BY db.data_a DESC LIMIT 20,10  "
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata4 = []
ydata4 = []
for i in rows:
    # print(i[1])
    xdata4.append(i[0])
    ydata4.append(i[1])
pie_radius2(xdata4, ydata4).render("radar.html")
