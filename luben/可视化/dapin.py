from pyecharts.charts import Page
from bar_tu import pie_radius, xdata1, ydata1
from ciyun import ciyun, xdata3
from pie import pie_radius1, xdata2, ydata2
from radar import pie_radius2, xdata4, ydata4
from sd import pie_radius3, xdata6, ydata6


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的acfun分析大屏", )
    page.add(
        pie_radius(xdata1,ydata1),
        ciyun(xdata3),
        pie_radius1(xdata2, ydata2),
        pie_radius2(xdata4, ydata4),
        pie_radius3(xdata6, ydata6),
    )
    # page.render("dap.html")
    page.save_resize_html("dap.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
