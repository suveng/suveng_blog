---
category: MySQL
tag:
  - MySQL
  - Java
---

# MySQL的SQL执行过程

这是MySQL架构组件执行流程, 最后交给存储引擎执行SQL;

@startuml
skin rose 

node Driver
database MySQL {
    component SQL接口
    component SQL解析器
    component SQL优化器
    component SQL执行器
    component SQL存储引擎
}

Driver --> MySQL : 1. 建立连接
Driver --> SQL接口 : 2. 执行SQL
SQL接口 --> SQL解析器 : 3. 解析SQL
SQL解析器 --> SQL优化器 : 4. SQL优化
SQL优化器 --> SQL执行器 : 5. SQL执行
SQL执行器 --> SQL存储引擎 : 6. 执行SQL
SQL存储引擎 --> SQL接口 : 7. 返回数据
SQL接口 --> Driver : 8. 接收数据
@enduml


InnoDB存储引擎执行过程

这是InnoDB的写入操作流程
其中 redo log 时 InnoDB 特有的组件
binlog 时 MySQL 本身的组件

@startuml
skin rose

start
:接收SQL;
:查找SQL的数据;
:数据存入BufferPool;
:将数据保存到undo log;
:更新BufferPool的数据;
:更新数据存入redo log;
:事务结束将redo log 存入磁盘;
:事务结束将操作记录存入到bin log;
:bin log 存入完成后, 将redo log 标记为commit;
stop
@enduml


redo log 的 作用

1. 实现持久性和一致性

    由于数据的更新操作都是在内存发生的, 那么如果断电后, 如何保证内存的数据和磁盘的数据一致性, 那么redo log 的作用就是用来保证磁盘和内存数据的一致性;
    假设数据在提交事务后, redo log 只存在内存, 还没有落入磁盘中, 这个时候发生了断电, 磁盘的数据是落后于内存的数据的, 那么断电恢复后, InnoDB会从redo log 中恢复BufferPool的环境, 这个时候再将差异的数据写入磁盘中, 保证了持久性和一致性

