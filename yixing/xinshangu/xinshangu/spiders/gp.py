import scrapy
from xinshangu.items import XinshanguItem

class GpSpider(scrapy.Spider):
    name = 'gp'
    allowed_domains = ['s.askci.com']
    url = 'https://s.askci.com/stock/xsb/0-0?reportTime=2021-12-31&pageNum='
    set_page = 1
    start_urls = [url + str(set_page) + '#QueryCondition']
    # start_urls = ['http://s.askci.com/']

    def parse(self, response):
        item = XinshanguItem()
        conts = response.xpath('//tbody/tr')
        for cont in conts:
            item['name'] = cont.xpath('./td[4]/text()').extract()[0]  # "公司名称
            # item['province'] = cont.xpath('./td[5]/text()').extract()[0]  # "省份"
            item['city'] = cont.xpath('./td[6]/text()').extract()[0]  # "城市"
            item['sr'] = cont.xpath('./td[7]/text()').extract()[0]  # "营业收入"
            item['lr'] = cont.xpath('./td[8]/text()').extract()[0]  # "利润
            # item['rs'] = cont.xpath('./td[9]/text()').extract()[0]  # 员工人数
            item['time'] = cont.xpath('./td[10]/text()').extract()[0]  # 上市日期
            # item['time2'] = cont.xpath('./td[11]/text()').extract()[0]  # 成立时间
            item['industry'] = cont.xpath('./td[14]/text()').extract()[0]  # 行业分类
            item['product'] = cont.xpath('./td[15]/text()').extract()[0]  # 产品类型
            yield item
        self.set_page += 1
        next_url = self.url + str(self.set_page) + '#QueryCondition'
        yield scrapy.Request(next_url, callback=self.parse)


