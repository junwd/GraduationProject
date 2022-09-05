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


strsql = "SELECT db.`名称`,db.`权重` FROM db LIMIT 12"
rows = data(strsql)
rows = list(rows)


def pie(xdata3, ydata3):
    pie = (Pie(init_opts=opts.InitOpts(
        # width='40%',
        height='400px',


    ))
           .add('', [list(z) for z in zip(xdata3, ydata3)])
           )

    pie.set_global_opts(title_opts=opts.TitleOpts(title="网站权重"))
    return pie

xdata3 = []
ydata3 = []
for i in rows:
    xdata3.append(i[0])
    ydata3.append(i[1][:-1])

pie(xdata3, ydata3).render("pie.html")
