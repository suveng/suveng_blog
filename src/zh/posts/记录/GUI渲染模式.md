---
category: 
  - 记录
tag:
  - GUI
---

# GUI渲染模式

## 即时模式

每次渲染都立即重新绘制, 每一帧都会消耗CPU和GPU资源

适用于动态元素渲染, 比如 实时图表，动画，特效，游戏等

## 保留模式

每次渲染的是需要改变的元素, 不会重新绘制, 但是需要记录状态, 所以消耗内存


## 资料

https://learn.microsoft.com/zh-cn/windows/win32/learnwin32/retained-mode-versus-immediate-mode

https://zhuanlan.zhihu.com/p/534695668