# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class BeijingItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()  # 名称
    did = scrapy.Field()  # 地点
    pi = scrapy.Field()  # 评分
    pai = scrapy.Field()  # 排名
    kai = scrapy.Field()  # 是否开业


