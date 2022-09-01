import scrapy
from zhaopin.items import ZhaopinItem


class ZpSpider(scrapy.Spider):
    name = 'zp'
    allowed_domains = ['kanzhun.com']
    start_urls = [
        f'https://www.shixiseng.com/interns?page={i}&type=intern&keyword=&area=&months=&days=&degree=&official=&enterprise=&salary=-0&publishTime=&sortType=&city=%E5%85%A8%E5%9B%BD&internExtend='
        for i in range(1, 20)]

    def parse(self, response):
        href = response.css('.title.ellipsis.font::attr(href)').extract()
        for lists in href:
            yield scrapy.FormRequest(url=lists, callback=self.list_data, dont_filter=True)

    def list_data(self, response):
        item = ZhaopinItem()
        body = response.xpath('//body')
        for article in body:
            item["name"] = article.css('.new_job_name span::text').get()  # 名称
            item["tian"] = article.css('.job_money.cutom_font::text').get()  # 天数
            item["di"] = article.css('.job_position::attr(title)').get()  # 地点
            item["xue"] = article.css('.job_academic::text').get()  # 学历
            item["squ"] = article.css('.job_time.cutom_font::text').get()  # 实习期
            item["gon"] = article.css('.job_good_list span::text').get()  # 其他
            yield item
