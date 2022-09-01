import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='beijing',
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


strsql = "SELECT bj.`名称`,bj.`评分` FROM bj ORDER BY bj.`评分` DESC LIMIT 8"
rows = data(strsql)
rows = list(rows)


def pin(xdata6, ydata6):
    effectScatter = (EffectScatter()
                     .add_xaxis(xdata6)
                     .add_yaxis('', ydata6)

                     .set_global_opts(title_opts=opts.TitleOpts(title="热度最小"))
                     )
    return effectScatter


xdata6 = []
ydata6 = []
for i in rows:
    xdata6.append(i[0])
    ydata6.append(i[1])

pin(xdata6, ydata6).render("pin.html")
