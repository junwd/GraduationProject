# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import warnings

import pymysql
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class BeijingPipeline:
    def process_item(self, item, spider):
        return item






class BeijingPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()
    def process_item(self, item, spider):
        c_db = 'create database if not exists beijing charset utf8'
        u_db = 'use beijing'
        c_table = """create table if not exists bj(编号 int primary key auto_increment,
                                                                   名称 varchar(100),
                                                                   地点 varchar(200),
                                                                   评分 varchar(200),
                                                                   排名 varchar(200),
                                                                   是否开业 varchar(200));
                                                               """
        ins = 'insert into bj(名称,地点,评分,排名,是否开业)values(%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass

        L = [item["name"], item["did"], item["pi"], item["pai"], item["kai"]]
        self.cursor.execute(ins, L)
        self.db.commit()










