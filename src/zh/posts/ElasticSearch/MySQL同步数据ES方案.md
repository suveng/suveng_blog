---
category: ElasticSearch
tag:
  - ElasticSearch
  - MySQL
  - Java
  - 方案
order: 1
permalink: /mysql/sync/es.html
---

# MySQL同步数据ES

1. 同步双写
2. 异步双写
3. 定时任务
4. 数据订阅

## 同步双写

@startuml
skin rose
node 商品服务
database MySQL
storage ElasticSearch
interface --> 商品服务 : 1. 更新商品请求
商品服务 --> MySQL : 2.同步更新数据
商品服务 --> ElasticSearch : 3.同步更新数据
@enduml

### 优点

1. 简单 
    
    仅需要在需要同步数据的逻辑上增加往ElasticSearch写

2. 保证实时性

### 缺点

1. 商品业务和搜索业务强耦合

2. 扩展性差

    需要定制搜索需求需求时, 还需要改动商品代码

3. ElasticSearch 和 MySQL 需要额外保证一致性

    MySQL事务提交之后, 写入ElasticSearch出现网络异常, 那么ElasticSearch和MySQL的数据无法保证一致

## 异步双写

@startuml
skin rose
node 商品服务
node 搜索服务
queue kafka
database MySQL
database ElasticSearch

interface --> 商品服务 : 1.更新商品请求
商品服务 --> MySQL : 2.更新商品数据库
商品服务 --> kafka : 3.生产更新商品请求的消息
kafka --> 搜索服务 : 4.消费更新商品请求的消息
搜索服务 ~~> 商品服务 : 5.搜索服务调用查询商品接口
搜索服务 --> ElasticSearch : 6. 聚合数据后写入ElasticSearch
@enduml

与同步双写相比分析优缺点

### 优点
- 解耦合; 商品本身无需关注同步ElasticSearch的逻辑
### 缺点
- 准实时, 存在MQ延迟
- 需要考虑额外组件的可靠性, Kafka, 搜索服务

## 定时任务

@startuml
skin rose
node 商品服务
node 搜索服务
database MySQL
database ElasticSearch

interface --> 商品服务 : 1.更新商品请求
商品服务 --> MySQL : 2.更新商品数据库
搜索服务 ~~> 商品服务 : 3.搜索服务定时调用查询在更新间隔范围内的商品列表
搜索服务 --> ElasticSearch : 4. 聚合数据后写入ElasticSearch
@enduml

### 优点

1. 简单

### 缺点

1. 无法保证实时性

    保证实时性主要依赖于搜索服务的定时间隔
    

## 数据订阅

@startuml
skin rose
node 商品服务
queue canal
node 搜索服务
database MySQL
database ElasticSearch

interface --> 商品服务 : 1.更新商品请求
商品服务 --> MySQL : 2.更新商品数据库
MySQL --> canal : 3.canal订阅binlog
canal --> 搜索服务 : 4.消费更新商品请求的消息
搜索服务 ~~> 商品服务 : 5.搜索服务调用查询商品接口
搜索服务 --> ElasticSearch : 6. 聚合数据后写入ElasticSearch
@enduml


### 优点

1. 解耦合

   利用canal订阅MySQL的binlog做到解耦合
2. 无业务侵入
   
   利用canal组件即可无需在商品代码上做改动
3. 准实时

   只存在binlog和业务回查的延迟
4. 良好的扩展行

   canal组件还支持各种数据库/客户端的写入适配器, 可以实现不同的数据写入需求, 例如 HBase
