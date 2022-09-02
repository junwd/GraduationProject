from pyecharts.charts import Page
from bar import bar, xdata3, ydata3
from bie import bie, xdata, ydata
from ciyun import ciyun, xdata6
from line import line, xdata5, ydata5
from pictorialBar import pictorialBar, xdata1, ydata1


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        bar(xdata3, ydata3),
        bie(xdata, ydata),
        ciyun(xdata6),
        line(xdata5, ydata5),
        pictorialBar(xdata1, ydata1)
    )
    # page.render("page.html")
    page.save_resize_html("page.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
