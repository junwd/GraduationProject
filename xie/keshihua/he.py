from pyecharts.charts import Page
from tu import bar, xdata, ydata
from shi import suan1, ydata4, xdata4
from tu1 import tu1, xdata1, ydata1
from suan import suan, xdata3, ydata3
from pin import pin, xdata2, ydata2


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        bar(xdata, ydata),
        suan1(xdata4, ydata4),
        tu1(xdata1, ydata1),
        suan(xdata3, ydata3),
        pin(xdata2, ydata2)
    )
    # page.render("page.html")
    page.save_resize_html("page.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
