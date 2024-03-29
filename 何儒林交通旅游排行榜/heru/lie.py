import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='china',
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


strsql = "SELECT `地点`,COUNT(*) AS COUNT FROM db GROUP BY `地点` HAVING COUNT>1"
rows = data(strsql)
rows = list(rows)


def lie(xdata2, ydata2):
    bar = (Bar()
           .add_xaxis(xdata2)
           .add_yaxis('', ydata2)
           )
    bar.set_global_opts(title_opts=opts.TitleOpts(title="公司排名"))
    return bar


xdata2 = []
ydata2 = []
for i in rows:
    xdata2.append(i[0])
    ydata2.append(i[1])

lie(xdata2, ydata2).render("lie.html")
