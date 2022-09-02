import pyecharts.options as opts
from pyecharts.charts import Radar
from link_mysql import selectdata


def pie_radius2(xdata2, ydata2):
    v1 = [ydata2]
    c = (
        Radar()
        .add_schema(
            schema=[
                opts.RadarIndicatorItem(name=xdata2[0], max_=130),
                opts.RadarIndicatorItem(name=xdata2[1], max_=130),
                opts.RadarIndicatorItem(name=xdata2[2], max_=130),
                opts.RadarIndicatorItem(name=xdata2[3], max_=130),
                opts.RadarIndicatorItem(name=xdata2[4], max_=130),
                opts.RadarIndicatorItem(name=xdata2[5], max_=130),
                opts.RadarIndicatorItem(name=xdata2[6], max_=130),
                opts.RadarIndicatorItem(name=xdata2[7], max_=130),
                opts.RadarIndicatorItem(name=xdata2[8], max_=130),
                opts.RadarIndicatorItem(name=xdata2[9], max_=130),
            ]
        )
        .add("行业分类", v1)
        .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
        .set_global_opts(
            legend_opts=opts.LegendOpts(selected_mode="single"),
            title_opts=opts.TitleOpts(title=""),
        )
    )
    return c


strsql = "SELECT qy1.`类型`,qy1.`总值` FROM qy1 ORDER BY qy1.`成交额` DESC LIMIT 10"
rows = selectdata(strsql)
rows = list(rows)
print(rows)
xdata2 = []
ydata2 = []
for i in rows:
    # print(i[1])
    xdata2.append(i[0])
    ydata2.append(i[1][:-2])
pie_radius2(xdata2, ydata2).render("radar.html")
