item["name"] = article.css('.new_job_name span::text').get() # 名称
item["tian"] = article.css('.job_money.cutom_font::text').get()  # 天数
item["di"] = article.css('.job_position::attr(title)').get()  # 地点
item["xue"] = article.css('.job_academic::text').get() # 学历
item["squ"] = article.css('.job_time.cutom_font::text').get() # 实习期
item["gon"] = article.css('.job_good_list span::text').get() # 其他



item["name"],item["tian"],item["xue"],item["di"],item["squ"],item["gon"]





