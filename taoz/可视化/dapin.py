from pyecharts.charts import Page
from bir import bir, xdata, ydata
from nie import nie, xdata4, ydata4
from pet import pet, xdata3, ydata3
from pie import pie, xdata1, ydata1
from tie import tie, xdata2, ydata2


def page_draggable_layout():
    page = Page(layout=Page.DraggablePageLayout, page_title="基于Python的贝壳分析大屏", )
    page.add(
        bir(xdata, ydata),
        nie(xdata4, ydata4),
        pet(xdata3, ydata3),
        pie(xdata1, ydata1),
        tie(xdata2, ydata2),
    )
    # page.render("ls.html")
    page.save_resize_html("ls.html", cfg_file="chart_config.json", dest="大屏.html")


if __name__ == "__main__":
    page_draggable_layout()
