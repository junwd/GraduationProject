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


strsql = "SELECT db.`地点`,db.`排名` FROM db LIMIT 20"
rows = data(strsql)
rows = list(rows)


def bar(xdata5, ydata5):
    polar = (
        Polar()
        .add_schema(
            radiusaxis_opts=opts.RadiusAxisOpts(data=xdata5, type_="category"),
        )
        .add("", ydata5, type_='bar'))
    return polar


xdata5 = []
ydata5 = []
for i in rows:
    xdata5.append(i[0])
    ydata5.append(i[1])

bar(xdata5, ydata5).render("bar.html")
