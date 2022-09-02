# -*- coding: utf-8 -*-
import scrapy
from acfun.items import AcfunItem
from cssselect import xpath


class AcfSpider(scrapy.Spider):
    name = 'acf'
    allowed_domains = ['acfun.com']
    # start_urls = ['http://acfun.com/']
    url = 'http://www.acfun.cn/v/list86/index.htm?sortField=rankScore&duration=all&date=default&page='
    set_page = 1
    start_urls = [url + str(set_page)]
    def parse(self, response):
        item=AcfunItem()
        data = response.xpath('//div[@class="list-wrapper"]/div')
        for i in data:
            item["data_a"] = i.xpath('./a[1]/div[1]/span[1]/text()').get()#播放量
            item["dada"] = i.xpath('./a[1]/div[1]/span[2]//text()').get()#评论
            item["times"] = i.xpath('./a[1]/div[2]/span//text()').get()#日期
            item["title"] = i.xpath('./h1/a//text()').get()#视频名字
            item["up"] = i.xpath('./a[2]//text()').get()#博主
            # list = [data_a, dada, times, title, up]
            yield item
        self.set_page += 1
        next_url = self.url + str(self.set_page)
        yield scrapy.Request(next_url, callback=self.parse,dont_filter=True)
