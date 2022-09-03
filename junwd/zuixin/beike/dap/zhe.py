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


strsql = "SELECT bk.`房名`,bk.`价格` FROM bk LIMIT 10"
rows = data(strsql)
rows = list(rows)


def zhe(xdata4, ydata4):
    line = (Line()
            .add_xaxis(xdata4)
            .add_yaxis('', ydata4)
            )

    return line


xdata4 = []
ydata4 = []
for i in rows:
    xdata4.append(i[0])
    ydata4.append(i[1])

zhe(xdata4, ydata4).render("zhe.html")
