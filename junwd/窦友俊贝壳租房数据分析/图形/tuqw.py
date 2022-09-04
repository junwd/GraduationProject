import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.commons.utils import JsCode


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='beike',
                           charset="utf8")
    cursor = conn.cursor()  # 建立一个游标对象
    try:
        cursor.execute(sql)  # 使用游标执行SQL语句
        conn.commit()  # 提交数据
        #  print(cursor.rowcount) 输出查询记录数
        return cursor.fetchall()  # 获取全部记录
        #  return SqlDomainName
        cursor.close()  # 关闭游标对象
        conn.close()  # 关闭连接
    except Exception as e:
        # 有异常，回滚事务
        logging.exception(e)
        conn.rollback()  # 撤销数据


strsql = "SELECT bk.`房名`,bk.`面积` FROM bk LIMIT 20,13"
rows = data(strsql)
rows = list(rows)
strsql3 = "SELECT `房屋朝向`,COUNT(*) AS COUNT FROM bk GROUP BY `房屋朝向` HAVING COUNT>1"
rows3 = data(strsql3)
rows3= list(rows3)


def tui(xdata9, ydata9, zdata9, sdata9):
    c = (
        Pie()
        .add(
            "",
            [list(z) for z in zip(xdata9, ydata9)],
            radius=["30%", "75%"],
            center=["25%", "50%"],
            rosetype="radius",
            label_opts=opts.LabelOpts(is_show=False),
        )
        .add(
            "",
            [list(z) for z in zip(zdata9, sdata9)],
            radius=["30%", "75%"],
            center=["75%", "50%"],
            rosetype="area",
        )
        .set_global_opts(title_opts=opts.TitleOpts(title="Pie-玫瑰图示例"), legend_opts=opts.LegendOpts(is_show=False))

    )
    return c


xdata9 = []
ydata9 = []
for i in rows:
    xdata9.append(i[0])
    ydata9.append(i[1][:-4])

zdata9 = []
sdata9 = []
for i in rows3:
    zdata9.append(i[0])
    sdata9.append(i[1])
tui(xdata9, ydata9, zdata9, sdata9).render("tui.html")
