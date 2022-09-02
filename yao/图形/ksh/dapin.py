from pyecharts.charts import Page

from bintu import pie_radius5, xdata, ydata
from jinzita import pie_radius1, xdata1, ydata1
from year import pie_radius2, xdata5, ydata5
from zhuti1 import pie_radius3, xdata4, ydata4
from zhutu import pie_radius, xdata3, ydata3


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        pie_radius5(xdata, ydata),
        pie_radius1(xdata1, ydata1),
        pie_radius2(xdata5, ydata5),
        pie_radius3(xdata4, ydata4),
        pie_radius(xdata3, ydata3),

    )
    # page.render("ls.html")
    page.save_resize_html("ls.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
