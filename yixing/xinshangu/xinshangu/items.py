# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class XinshanguItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name=scrapy.Field()
    # province=scrapy.Field()
    city=scrapy.Field()
    sr=scrapy.Field()
    lr =scrapy.Field()
    # rs=scrapy.Field()
    time=scrapy.Field()
    # time2=scrapy.Field()
    industry=scrapy.Field()
    product=scrapy.Field()
