import scrapy
from beijing.items import BeijingItem


class BjSpider(scrapy.Spider):
    name = 'bj'
    allowed_domains = ['bj.com']
    start_urls = ['https://you.ctrip.com/sight/beijing1/s0-p1.html']
    start_url = 'https://you.ctrip.com'

    def parse(self, response):
        href = response.css('.rdetailbox dl dt a::attr(href)').extract()
        for lists in href:
            yield scrapy.FormRequest(url=lists, callback=self.list_data, dont_filter=True)
        page = response.css('.nextpage::attr(href)').extract_first()
        if page:
            yield scrapy.Request(url=self.start_url + page, callback=self.parse, dont_filter=True)

    def list_data(self, response):
        item = BeijingItem()
        for items in response.xpath('//body'):
            item["name"] = items.css('.title h1::text').get()
            item["did"] = items.css('.baseInfoText::text').get()
            item["pi"] = items.css('.commentCount span::text').get()
            item["pai"] = items.css('.rankText::text').get()
            item["kai"] = items.css('.baseInfoText.cursor.openTimeText span::text').get()
            yield item
