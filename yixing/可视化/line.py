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


strsql = "SELECT test.`name`,test.lr FROM test ORDER BY test.lr DESC LIMIT 10"
rows = data(strsql)
rows = list(rows)


def line(xdata5, ydata5):
    line = (Line()
            .add_xaxis(xdata5)
            .add_yaxis('', ydata5)
            )
    line.set_global_opts(title_opts=(opts.TitleOpts(title="收入最高的几家")))
    return line


xdata5 = []
ydata5 = []
for i in rows:
    xdata5.append(i[0])
    ydata5.append(i[1][:-4])

line(xdata5, ydata5).render("line.html")
