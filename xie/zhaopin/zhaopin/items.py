# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ZhaopinItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    tian = scrapy.Field()
    di = scrapy.Field()
    xue = scrapy.Field()
    squ = scrapy.Field()
    gon = scrapy.Field()

