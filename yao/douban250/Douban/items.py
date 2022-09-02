# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DoubanItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    id = scrapy.Field()  # 排名
    info_link = scrapy.Field()  # 电影链接
    pic_link = scrapy.Field()  # 电影图片链接
    cname = scrapy.Field()  # 电影名
    country = scrapy.Field()  # 国家
    year = scrapy.Field()  # 上映时间
    type = scrapy.Field()  # 类型
    director = scrapy.Field()  # 导演
    score = scrapy.Field()  # 评分
    people = scrapy.Field()  # 评分人数
