# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import warnings

import pymysql
# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class ZhaopinPipeline:
    def process_item(self, item, spider):
        print(item["name"])
        print(item["tian"])
        print(item["di"])
        print(item["xue"])
        print(item["squ"])
        print(item["gon"])


class ZhaopinPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()

    def process_item(self, item, spider):
        c_db = 'create database if not exists zhaopin charset utf8'
        u_db = 'use zhaopin'
        c_table = """create table if not exists zhao(编号 int primary key auto_increment,
                                                          名称 varchar(200),
                                                          天数 varchar(200),
                                                          学历 varchar(200),
                                                          地点 varchar(100),
                                                          实习期 varchar(100),
                                                          其他 varchar(100));
                                                      """
        ins = 'insert into zhao(名称,天数,学历,地点,实习期,其他)values(%s,%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass
        L = [item["name"], item["tian"], item["xue"], item["di"], item["squ"], item["gon"]]
        self.cursor.execute(ins, L)
        self.db.commit()
