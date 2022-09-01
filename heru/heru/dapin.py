from pyecharts.charts import Page
from bar import bar, xdata5, ydata5
from bie import bie, xdata4, ydata4
from lie import lie, xdata2, ydata2
from pie import pie, xdata3, ydata3
from tie import tie, xdata1, ydata1


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        bar(xdata5, ydata5),
        bie(xdata4, ydata4),
        lie(xdata2, ydata2),
        pie(xdata3, ydata3),
        tie(xdata1, ydata1),
    )
    # page.render("dap.html")
    page.save_resize_html("dap.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
