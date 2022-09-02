import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='shangu22',
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


strsql = "SELECT `industry`,COUNT(*) AS COUNT FROM test GROUP BY `industry` HAVING COUNT>1 LIMIT 10"
rows = data(strsql)
rows = list(rows)


def pictorialBar(xdata1, ydata1):
    pictorialBar = (PictorialBar()
                    .add_xaxis(xdata1)
                    .add_yaxis('', ydata1)
                    )
    pictorialBar.set_global_opts(title_opts=(opts.TitleOpts(title="行业占比")))
    return pictorialBar


xdata1 = []
ydata1 = []
for i in rows:
    xdata1.append(i[0])
    ydata1.append(i[1])

pictorialBar(xdata1, ydata1).render("pictorialBar.html")
