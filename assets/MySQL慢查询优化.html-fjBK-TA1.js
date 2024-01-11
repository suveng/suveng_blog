const t=JSON.parse('{"key":"v-09671a78","path":"/zh/posts/MySQL/MySQL%E6%85%A2%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96.html","title":"MySQL慢查询优化","lang":"zh-CN","frontmatter":{"category":"MySQL","tag":["MySQL","Java"],"description":"优化原则 1. 最左前缀匹配原则 2. 选择区分度高的列作为索引 3. 索引列不参与计算 4. 尽量扩展索引 排查慢查询过程 1. 找到耗时较长的SQL语句 2. 使用explain语句解析SQL执行计划 3. 排查执行计划中是否有全表扫描的情况 4. 排查执行计划中扫描行数较多的查询语句 5. 制定方案优化SQL 如果实在无法优化, 看看是否折中的方...","head":[["meta",{"property":"og:url","content":"https://suveng.github.io/suveng_blog/zh/posts/MySQL/MySQL%E6%85%A2%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"苏文广的博客"}],["meta",{"property":"og:title","content":"MySQL慢查询优化"}],["meta",{"property":"og:description","content":"优化原则 1. 最左前缀匹配原则 2. 选择区分度高的列作为索引 3. 索引列不参与计算 4. 尽量扩展索引 排查慢查询过程 1. 找到耗时较长的SQL语句 2. 使用explain语句解析SQL执行计划 3. 排查执行计划中是否有全表扫描的情况 4. 排查执行计划中扫描行数较多的查询语句 5. 制定方案优化SQL 如果实在无法优化, 看看是否折中的方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T07:49:51.000Z"}],["meta",{"property":"article:author","content":"苏文广"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2024-01-11T07:49:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL慢查询优化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-11T07:49:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"苏文广\\",\\"url\\":\\"https://github.com/suveng\\"}]}"]]},"headers":[{"level":2,"title":"优化原则","slug":"优化原则","link":"#优化原则","children":[]},{"level":2,"title":"排查慢查询过程","slug":"排查慢查询过程","link":"#排查慢查询过程","children":[]}],"git":{"createdTime":1704959391000,"updatedTime":1704959391000,"contributors":[{"name":"suwenguang","email":"wenguang.su@ly.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"zh/posts/MySQL/MySQL慢查询优化.md","localizedDate":"2024年1月11日","copyright":{"author":"苏文广","license":"CC BY-NC-ND 4.0"},"autoDesc":true}');export{t as data};
