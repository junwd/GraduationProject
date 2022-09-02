
import scrapy
from Douban.items import DoubanItem
class DbSpider(scrapy.Spider):
    name = 'db'
    allowed_domains = ['douban.com']
    url = 'https://movie.douban.com/top250?start='
    set_page = 0
    set_pag = '&filter='
    start_urls = [url + str(set_page) + set_pag]

    def parse(self, response):
        item = DoubanItem()
        articles = response.xpath('//ol[@class="grid_view"]/li')
        for article in articles:
            item["id"] = article.xpath('.//div[@class="pic"]/em/text()').extract_first()  # 排名
            item["info_link"] = article.xpath('.//div[@class="hd"]/a/@href').extract_first()  # 电影链接
            item["pic_link"] = article.xpath('.//div[@class="pic"]/a/img/@src').extract_first()  # 电影图片链接
            item["cname"] = article.xpath('.//span[@class="title"]/text()').extract_first()  # 电影名
            item["country"] = article.xpath('.//div[@class="bd"]/p/text()').extract()[1][4:].replace('\n', '').lstrip().split()[2]  # 国家
            item["year"] = article.xpath('.//div[@class="bd"]/p/text()').extract()[1][4:].replace('\n', '').lstrip().split()[0]  # 上映年份
            item["type"] = article.xpath('.//div[@class="bd"]/p/text()').extract()[1].replace('\n', '').lstrip().split('\xa0')[4]  # 类型
            item["director"] = article.xpath('.//div[@class="bd"]/p/text()').extract()[0][33:].replace('\n', '').lstrip().split('\xa0\xa0\xa0')[0] # 导演
            item["score"] = article.xpath('.//div[@class="star"]/span[2]/text()').extract_first()  # 评分
            item["people"] = article.xpath('.//div[@class="star"]/span[4]/text()').extract_first()[:-3]  # 评价人数
            yield item
        self.set_page += 1 * 25
        next_url = self.url + str(self.set_page) + self.set_pag
        yield scrapy.Request(next_url, callback=self.parse)
