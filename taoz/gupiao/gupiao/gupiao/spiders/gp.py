import scrapy
from gupiao.items import GupiaoItem


class GpSpider(scrapy.Spider):
    name = 'gp'
    allowed_domains = ['gp.com']
    start_urls = [
        f'http://41.push2.eastmoney.com/api/qt/clist/get?cb=jQuery11240048857551504937646_1662085150575&pn=1&pz=20&po=1&np={i}&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&wbp2u=|0|0|0|web&fid=f3&fs=m:0+t:6,m:0+t:80,m:1+t:2,m:1+t:23,m:0+t:81+s:2048&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152&_=1662085150576' for i in range(1,200)]

    def parse(self, response):
        dai = response.xpath('.').re('f12":(.*?),')  # 代码
        name = response.xpath('.').re('f14":(.*?),')  # 名称
        zuix = response.xpath('.').re('f3":(.*?),')  # 最新价
        chen = response.xpath('.').re('f6":(.*?),')  # 成交额
        zui = response.xpath('.').re('f15":(.*?),')  # 最高
        zuid = response.xpath('.').re('f16":(.*?),')  # 最低
        jin = response.xpath('.').re('f17":(.*?),')  # 今天
        zuo = response.xpath('.').re('f18":(.*?),')  # 昨天收入
        list1 = list(zip(dai, name, zuix, chen, zui, zuid, jin, zuo))
        item = GupiaoItem()
        for i in list1:
            item["dai"] = i[0]
            item["name"] = i[1]
            item["zuix"] = i[2]
            item["chen"] = i[3]
            item["zui"] = i[4]
            item["zuid"] = i[5]
            item["jin"] = i[6]
            item["zuo"] = i[7]
            yield item
