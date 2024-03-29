import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='gupiao',
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


strsql = "SELECT gp.`名称`,gp.`最高` FROM gp LIMIT 8"
rows = data(strsql)
rows = list(rows)


def bir(xdata, ydata):
    bar = (Bar()
           .add_xaxis(xdata)
           .add_yaxis('', ydata)
           )
    bar.set_global_opts(title_opts=opts.TitleOpts(title="今日最高价"))
    return bar


xdata = []
ydata = []
for i in rows:
    xdata.append(i[0])
    ydata.append(i[1][:-3])

bir(xdata, ydata).render("bir.html")