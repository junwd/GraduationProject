from pyecharts.charts import Page
from bar_tu import pie_radius1, xdata, ydata
from pie import pie_radius, xdata1, ydata1
from radar import pie_radius2, xdata2, ydata2
from sd import pie_radius4, xdata3, ydata3
from pies import pies, xdata9, ydata9


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        pie_radius1(xdata, ydata),
        pie_radius(xdata1, ydata1),
        pie_radius2(xdata2, ydata2),
        pie_radius4(xdata3, ydata3),
        pies(xdata9, ydata9)
    )
    # page.render("page.html")
    page.save_resize_html("page.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
