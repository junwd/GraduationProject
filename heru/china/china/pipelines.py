# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import warnings

import pymysql
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class ChinaPipeline:
    def process_item(self, item, spider):
        return item



class ChinaPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()
    def process_item(self, item, spider):
        c_db = 'create database if not exists china charset utf8'
        u_db = 'use china'
        c_table = """create table if not exists db(编号 int primary key auto_increment,
                                                           名称 varchar(100),
                                                           排名 varchar(200),
                                                           地点 varchar(200),
                                                           权重 varchar(200),
                                                           关键字 varchar(200));
                                                       """
        ins = 'insert into db(名称,排名,地点,权重,关键字)values(%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass

        L = [item["name"], item["pai"], item["di"], item["quan"], item["gun"]]
        self.cursor.execute(ins, L)
        self.db.commit()

