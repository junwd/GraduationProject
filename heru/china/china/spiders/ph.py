import scrapy
from china.items import ChinaItem


class PhSpider(scrapy.Spider):
    name = 'ph'
    allowed_domains = ['kanzhun.com']
    start_urls = ['https://top.chinaz.com/hangye/index_jiaotonglvyou.html']
    url = 'https://top.chinaz.com'

    def parse(self, response):
        href = response.css('.pr10.fz14::attr(href)').extract()
        for lists in href:
            yield scrapy.FormRequest(url=self.url + lists, callback=self.pai, dont_filter=True)
        url_s = response.css('.ListPageWrap a:nth-child(12)::attr(href)').extract_first()
        if url_s:
            yield scrapy.Request(self.url + url_s, callback=self.parse, dont_filter=True)

    def pai(self, response):
        for items in response.xpath('//body'):
            name = items.css('.h2Title.fl::text').get()
            pai = items.css('.headpoint a::text').get()
            di = items.css('.mb15.fz14.SimSun a:nth-child(1)::text').get()
            quan = items.css('.headpoint comdiv a::text').get()
            gun = items.css('.TMainmobWrap li:nth-child(2) span::text').get()
            item = ChinaItem()
            item["name"] = name
            item["pai"] = pai
            item["di"] = di
            item["quan"] = quan
            item["gun"] = gun
            yield item
