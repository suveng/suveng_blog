const e=JSON.parse('{"key":"v-3ea5b5a5","path":"/zh/posts/ElasticSearch/MySQL%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AEES%E6%96%B9%E6%A1%88.html","title":"MySQL同步数据ES","lang":"zh-CN","frontmatter":{"category":"ElasticSearch","tag":["ElasticSearch","MySQL","Java","方案"],"order":1,"description":"1. 同步双写 2. 异步双写 3. 定时任务 4. 数据订阅 同步双写 startuml skin rose node 商品服务 database MySQL storage ElasticSearch interface --> 商品服务 : 1. 更新商品请求 商品服务 --> MySQL : 2.同步更新数据 商品服务 --> ElasticS...","head":[["meta",{"property":"og:url","content":"https://suveng.github.io/zh/posts/ElasticSearch/MySQL%E5%90%8C%E6%AD%A5%E6%95%B0%E6%8D%AEES%E6%96%B9%E6%A1%88.html"}],["meta",{"property":"og:site_name","content":"苏文广的博客"}],["meta",{"property":"og:title","content":"MySQL同步数据ES"}],["meta",{"property":"og:description","content":"1. 同步双写 2. 异步双写 3. 定时任务 4. 数据订阅 同步双写 startuml skin rose node 商品服务 database MySQL storage ElasticSearch interface --> 商品服务 : 1. 更新商品请求 商品服务 --> MySQL : 2.同步更新数据 商品服务 --> ElasticS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:17:36.000Z"}],["meta",{"property":"article:author","content":"苏文广"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"方案"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:17:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL同步数据ES\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-03T05:17:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"苏文广\\",\\"url\\":\\"https://github.com/suveng\\"}]}"]]},"headers":[{"level":2,"title":"同步双写","slug":"同步双写","link":"#同步双写","children":[{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"异步双写","slug":"异步双写","link":"#异步双写","children":[{"level":3,"title":"优点","slug":"优点-1","link":"#优点-1","children":[]},{"level":3,"title":"缺点","slug":"缺点-1","link":"#缺点-1","children":[]}]},{"level":2,"title":"定时任务","slug":"定时任务","link":"#定时任务","children":[{"level":3,"title":"优点","slug":"优点-2","link":"#优点-2","children":[]},{"level":3,"title":"缺点","slug":"缺点-2","link":"#缺点-2","children":[]}]},{"level":2,"title":"数据订阅","slug":"数据订阅","link":"#数据订阅","children":[{"level":3,"title":"优点","slug":"优点-3","link":"#优点-3","children":[]}]}],"git":{"createdTime":1704939957000,"updatedTime":1706937456000,"contributors":[{"name":"suwenguang","email":"wenguang.su@ly.com","commits":4},{"name":"suveng","email":"30512096+suveng@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.38,"words":715},"filePathRelative":"zh/posts/ElasticSearch/MySQL同步数据ES方案.md","localizedDate":"2024年1月11日","copyright":{"author":"苏文广","license":"CC BY-NC-ND 4.0"},"autoDesc":true}');export{e as data};
