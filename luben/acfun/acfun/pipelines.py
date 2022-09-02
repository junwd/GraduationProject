# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql
import warnings
import csv


class AcfunPipeline:
    def process_item(self, item, spider):
        print(item["data_a"])
        print(item["dada"])
        print(item["times"])
        print(item["title"])
        print(item["up"])

def process_item(self,item,spider):
        r_list = [item["data_a"],item["dada"],item["times"],item["title"],item["up"]]
        self.writer=csv.writer(r_list)
        return item


class AcfunPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()

    def process_item(self, item, spider):
        c_db = 'create database if not exists acfun charset utf8'
        u_db = 'use acfun'
        c_table = """create table if not exists db(编号 int primary key auto_increment,
                                                    data_a varchar(100),
                                                    dada varchar(200),
                                                    times varchar(200),
                                                    title varchar(200),
                                                    up varchar(200));
                                                """
        ins = 'insert into db(data_a,dada,times,title,up)values(%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass

        L = [item["data_a"], item["dada"], item['times'],
             item["title"], item["up"]
             ]
        self.cursor.execute(ins, L)
        self.db.commit()
