# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class ChinaItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    pai = scrapy.Field()
    di = scrapy.Field()
    quan = scrapy.Field()
    gun = scrapy.Field()
