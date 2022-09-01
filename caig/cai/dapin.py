from pyecharts.charts import Page
from biao import biao, ydata5
from ciyun import ciyun, xdata3
from pie import pie, xdata, ydata
from pin import pin, xdata6, ydata6
from pie1 import pie1, xdata1, ydata1


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        biao(ydata5),
        ciyun(xdata3),
        pie(xdata, ydata),
        pin(xdata6, ydata6),
        pie1(xdata1, ydata1),
    )
    # page.render("dap.html")
    page.save_resize_html("dap.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
