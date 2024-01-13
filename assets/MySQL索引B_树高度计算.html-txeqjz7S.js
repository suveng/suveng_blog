import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,a as i}from"./app-9IaafEEp.js";const t={},l=i('<h1 id="mysql索引b-树高度计算" tabindex="-1"><a class="header-anchor" href="#mysql索引b-树高度计算" aria-hidden="true">#</a> MySQL索引B+树高度计算</h1><ol><li>总记录数 N</li><li>记录大小 k Byte</li><li>索引大小 x Byte</li><li>数据库指针大小 6 Byte</li><li>数据库页大小 16KB</li></ol><p>从底往上计算高度</p><p>叶子节点存放数据</p><p>一个叶子节点存放数据量 c = 16 * 1024 / k</p><p>一个非叶子节点存放叶子节点数量 b = 16 * 1024 / (x + 6)</p><p>总页数 p = N / c</p><p>索引的高度 h = log(p,b)</p><p>树高 = h + 1</p><h2 id="聚簇索引例子计算" tabindex="-1"><a class="header-anchor" href="#聚簇索引例子计算" aria-hidden="true">#</a> 聚簇索引例子计算</h2><p>总记录N = 20,000,000</p><p>记录大小k = 1024</p><p>索引大小x = 8</p><p>总页数p = 1250000</p><p>索引数b = 1170</p><p>索引树高log(p,b) = 2</p><p>树高 = 3</p><p>总结, 2千万的数据,B+树的高度为3</p><h2 id="辅助索引例子计算" tabindex="-1"><a class="header-anchor" href="#辅助索引例子计算" aria-hidden="true">#</a> 辅助索引例子计算</h2><p>辅助索引的叶子节点存放的事主键值, 辅助索引找到主键, 通过主键去聚簇索引查找记录</p><p>辅助索引最大是256Byte</p><p>总记录N = 20,000,000</p><p>记录大小k = 8</p><p>索引大小x = 256</p><p>总页数p = 9765</p><p>索引数b = 62</p><p>索引树高log(p,b) = 3</p><p>树高 = 4</p><p>总结, 2千万的数据,辅助索引B+树的高度为4</p>',29),r=[l];function o(c,h){return e(),a("div",null,r)}const n=p(t,[["render",o],["__file","MySQL索引B_树高度计算.html.vue"]]);export{n as default};
