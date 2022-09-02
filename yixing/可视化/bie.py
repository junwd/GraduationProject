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


strsql = "SELECT `city`,COUNT(*) AS COUNT FROM test GROUP BY `city` HAVING COUNT>1 LIMIT 10"
rows = data(strsql)
rows = list(rows)


def bie(xdata, ydata):
    pie = (Pie()
           .add('', [list(z) for z in zip(xdata, ydata)])
           )
    pie.set_global_opts(title_opts=(opts.TitleOpts(title="公司所在城市")))
    return pie


xdata = []
ydata = []
for i in rows:
    xdata.append(i[0])
    ydata.append(i[1])

bie(xdata, ydata).render("bie.html")
