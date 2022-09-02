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


strsql = "SELECT test.`name`,test.sr FROM test ORDER BY test.sr DESC LIMIT 8"
rows = data(strsql)
rows = list(rows)


def bar(xdata3, ydata3):
    bar = (Bar()
           .add_xaxis(xdata3)
           .add_yaxis('', ydata3)
           )
    bar.set_global_opts(title_opts=(opts.TitleOpts(title="主营业务收入(单位-万)")))
    return bar

xdata3 = []
ydata3 = []
for i in rows:
    xdata3.append(i[0])
    ydata3.append(i[1][:-4])

bar(xdata3, ydata3).render("bar.html")
