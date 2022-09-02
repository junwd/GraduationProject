# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import warnings

import pymysql
from itemadapter import ItemAdapter


class GupiaoPipeline:
    def process_item(self, item, spider):
        return item


class GupiaoPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()

    def process_item(self, item, spider):
        c_db = 'create database if not exists gupiao charset utf8'
        u_db = 'use gupiao'
        c_table = """create table if not exists gp(编号 int primary key auto_increment,
                                                                  代码 varchar(300),
                                                                  名称 varchar(300),
                                                                  最新价 varchar(300),
                                                                  成交额 varchar(300),
                                                                  最高 varchar(300),
                                                                  最低 varchar(300),
                                                                  今开 varchar(300),
                                                                  昨收 varchar(300));
                                                              """
        ins = 'insert into gp(代码,名称,最新价,成交额,最高,最低,' \
              '今开,昨收)' \
              'values(%s,%s,%s,%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass

        L = [item["dai"], item["name"], item["zuix"], item["chen"], item["zui"], item["zuid"], item["jin"], item["zuo"]]
        self.cursor.execute(ins, L)
        self.db.commit()
