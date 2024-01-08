---
category: ES
tag:
  - ES
  - Java
  - 方案
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
interface --> 商品服务 : 更新请求
商品服务 --> MySQL : 同步更新数据
商品服务 --> ElasticSearch : 同步更新数据
@enduml

优点:
- 简单

缺点:
- 商品业务和搜索业务强耦合
- 扩展性差, 需要定制搜索需求需求时, 还需要改动商品代码
- ES 和 MySQL 存在分布式事务问题

## 异步双写


## 定时任务


## 数据订阅