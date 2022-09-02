# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class XinshanguPipeline:
    def process_item(self, item, spider):
        print(item['name'])
        # print(item['province'])
        print(item['city'])
        print(item['sr'])
        print(item['lr'])
        # print(item['rs'])
        print(item['time'])
        # print(item['time2'])
        print(item['industry'])
        print(item['product'])


import csv


class XinshanguPipeline_csv:
    def __init__(self):
        self.f = open("csv.csv", "a", newline="", encoding="gb18030")
        self.write = csv.writer(self.f)
        self.write.writerow(["公司名称", "城市", "营业收入", "利润", "上市日期", "行业分类", "产品类型"])

    def process_item(self, item, spider):
        r = [item["name"], item["city"], item["sr"], item["lr"], item["time"], item["industry"], item["product"]]
        self.write.writerow(r)
        return item


import pymysql
import warnings


class XinshanguPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host='localhost',
                                  user='root',
                                  password='root',
                                  charset='utf8')
        self.cursor = self.db.cursor()

    def process_item(self, item, spider):
        c_db = 'create database if not exists shangu22 character set utf8'
        u_db = 'use shangu22'
        c_tab = 'create table if not exists test(' \
                'name varchar(100),' \
                'city varchar(500),' \
                'sr varchar(500),' \
                'lr varchar(50),' \
                'time varchar(200),' \
                'industry varchar(200),' \
                'product varchar(100))charset=utf8'
        warnings.filterwarnings('ignore')

        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_tab)
        except Warning:
            pass
        ins = 'insert into test(name,city,sr,lr,time,industry,product) values (%s,%s,%s,%s,%s,%s,%s)'
        L = [item["name"], item["city"], item["sr"], item["lr"], item["time"], item["industry"], item["product"]]
        self.cursor.execute(ins, L)
        self.db.commit()

