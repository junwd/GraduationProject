import logging
import pymysql
from pyecharts.charts import *
from pyecharts import options as opts
from pyecharts.faker import Faker
from pyecharts.globals import SymbolType


def data(sql):
    conn = pymysql.connect(host='localhost', port=3306, user='root',
                           password='root', db='ylong',
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


strsql = "SELECT lo.`地点`,lo.`评分`,lo.`评论` FROM lo LIMIT 12"
rows = data(strsql)
rows = list(rows)


def barlos(x4data, y4data, z4data):
    bar = (
        Bar()
            .add_xaxis(x4data)
            .add_yaxis('', y4data)
            .add_yaxis('', z4data)
            .set_global_opts(title_opts=opts.TitleOpts(title="地点及评分、评论",
                                                       pos_left='center',
                                                       pos_top='10%'))
    )

    return bar


x4data = []
y4data = []
z4data = []
for i in rows:
    x4data.append(i[0])
    y4data.append(i[1])
    z4data.append(i[2])
barlos(x4data, y4data, z4data).render("barlos.html")
