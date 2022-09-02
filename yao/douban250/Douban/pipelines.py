# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from scrapy import item


class DoubanPipeline:
    def process_item(self, item, spider):
        print(item["id"])
        print(item["info_link"])
        print(item["pic_link"])
        print(item["cname"])
        print(item["country"])
        print(item["year"])
        print(item["type"])
        print(item["director"])
        print(item["score"])
        print(item["people"])

#
import csv


class DoubanPipeline_csv:
    def __init__(self):
        self.f = open("db.csv", 'a', newline="", encoding='utf-8')
        self.write = csv.writer(self.f)
        self.write.writerow(["排名", "电影链接", "海报链接", "名字", "国家", "发行年份", "类型", "导演", "评分", "评分人数"])

    def process_item(self, item, spider):
        L = [item["id"], item["info_link"], item["pic_link"], item["cname"], item["country"], item["year"],
             item["type"], item["director"], item["score"], item["people"]
             ]

        self.write.writerow(L)
        return item


# #保存mysql
import pymysql
import warnings


class DoubanPipeline_mysql:
    def __init__(self):
        self.db = pymysql.connect(host="localhost", user="root", password="root", charset="utf8")
        self.cursor = self.db.cursor()

    def process_item(self, item, spider):
        c_db = 'create database if not exists Douban charset utf8'
        u_db = 'use Douban'
        c_table = """create table if not exists db(
                                            id varchar(300),
                                            info_link varchar(300),
                                            pic_link varchar(300),
                                            cname varchar(300),
                                            country varchar(300),
                                            year varchar(200),
                                            type varchar(200),
                                            director varchar(200),
                                            score varchar(200),
                                            people varchar(333));
                                        """
        ins = 'insert into db(id,info_link,pic_link,cname,country,year,type,director,score,people)values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        warnings.filterwarnings('ignore')
        try:
            self.cursor.execute(c_db)
            self.cursor.execute(u_db)
            self.cursor.execute(c_table)
        except:
            pass

        L = [item["id"], item["info_link"], item["pic_link"], item["cname"], item["country"], item["year"],
             item["type"],
             item["director"], item["score"], item["people"]]
        self.cursor.execute(ins, L)
        self.db.commit()
