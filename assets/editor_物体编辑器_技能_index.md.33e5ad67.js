import{_ as e,o,c as i,O as l}from"./chunks/framework.c6cc7639.js";const c="/y3wiki/assets/技能基础设置.ca4c6d80.png",d="/y3wiki/assets/技能固定属性.9e3a1a33.png",a="/y3wiki/assets/技能固定属性-基础.20202538.png",t="/y3wiki/assets/技能固定属性-数值.921f76f9.png",r="/y3wiki/assets/技能固定属性-阶段.1ad4b4d3.png",s="/y3wiki/assets/技能固定属性-索敌.592601fc.png",n="/y3wiki/assets/技能自定义属性.18f29140.png",P=JSON.parse('{"title":"物体编辑器-技能","description":"","frontmatter":{},"headers":[],"relativePath":"editor/物体编辑器/技能/index.md","filePath":"editor/物体编辑器/技能/index.md"}'),h={name:"editor/物体编辑器/技能/index.md"},u=l('<h1 id="物体编辑器-技能" tabindex="-1">物体编辑器-技能 <a class="header-anchor" href="#物体编辑器-技能" aria-label="Permalink to &quot;物体编辑器-技能&quot;">​</a></h1><ul><li>技能类型的物编管理</li><li>分为英雄技能,物品技能,普攻技能三类</li></ul><h2 id="基础设置" tabindex="-1">基础设置 <a class="header-anchor" href="#基础设置" aria-label="Permalink to &quot;基础设置&quot;">​</a></h2><ul><li><code>头像</code>：点击头像或头像图片下方的按钮 ，可以进入资源管理器选择新的头像图片。</li><li><code>名称</code>：可以自定义当前技能的名字。</li><li><code>编辑器后缀</code>：此处添加的内容只在开发项目时有效，用于区分相同名字的技能，并不会影响 到游戏内的显示内容。</li><li><code>标签</code>：用于对技能进行分类，便于对同一类别的技能进行批量操作。例如，使用触发器编写 逻辑时可以通过标签关联相应的分组。</li><li><code>描述</code>：对于当前技能的具体说明，以方便玩家了解该技能的情况</li><li><img src="'+c+'" alt="技能基础设置"></li></ul><h2 id="固定属性" tabindex="-1">固定属性 <a class="header-anchor" href="#固定属性" aria-label="Permalink to &quot;固定属性&quot;">​</a></h2><ul><li>可以在固定属性中设置当前技能的基础，数值，技能阶段相关，索敌相关，声音等内容，点 击加号可以展开列表，查看可调整的具体属性内容</li><li><img src="'+d+'" alt="技能固定属性"></li></ul><h2 id="_1-基础" tabindex="-1">[1]基础 <a class="header-anchor" href="#_1-基础" aria-label="Permalink to &quot;[1]基础&quot;">​</a></h2><ul><li><img src="'+a+'" alt="技能固定属性-基础"></li><li><code>ID</code> 技能的物编id,创建是自动生成,不可编辑。可以用来判断技能类型</li><li><code>技能释放类型</code> 技能的释放类型。 技能的功能类型。分为以下四种 <ul><li><code>普攻</code> 单位的普通攻击技能 如<code>关羽-普通攻击</code></li><li><code>主动技能</code> 单位或者物品的主动攻击能 如物品技能<code>煞影</code>,单位技能<code>青龙流影</code></li><li><code>被动技能</code> 物品的被动技能 如物品技能<code>刑天斧</code>,</li><li><code>建造技能</code> 建造类的技能</li><li><code>采集</code> 采集类的技能</li></ul></li><li><code>指示器类型</code> 释放技能的鼠标指示器的样式. <code>普攻</code>和<code>主动技能</code>才可以设置指示器类型 <ul><li><code>无目标</code> 技能可以没有目标释放 关羽的<code>青龙护体</code>,刘备的<code>潜龙勿用</code></li><li><code>扇形指示器(方向)</code> 技能朝特定方向扇形释放 刘备的<code>龙飞凤舞</code></li><li><code>箭头指示器(方向)</code> 技能朝特定方向箭头释放 刘备的<code>义胆仁心</code></li><li><code>圆形指示器(地点)</code> 技能朝特定地点圆形释放 关羽的<code>龙皇降世</code></li><li><code>目标指示器(选目标)</code> 选取目标释放技能 刘备的<code>义胆仁心</code></li><li><code>单位或地点</code> 选取单位或地点释放技能 张角的<code>炫光</code></li><li><code>建造指示器</code> 建造类的技能效果</li><li><code>多段指示器</code></li></ul></li><li>指示器的数据 <ul><li>扇形/圆形指示器的<code>半径</code></li><li>扇形指示器的<code>角度</code></li><li>箭头/多段指示器的<code>长度</code></li><li>箭头/多段指示器的<code>宽度</code></li></ul></li><li><code>释放范围</code> 以角色为圆心,以该值为半径的圆形区域。技能可以释放的最远距离 <ul><li>除<code>被动技能</code>外都可以设置</li></ul></li><li><code>施法打断范围</code> 当技能施法开始或者出手阶段结束时,移动单位后,与技能目标的距离超过这个值，会打断施法</li><li><code>技能影响范围</code> 技能的影响范围 诸葛亮的<code>乾坤变</code></li><li><code>近战</code> 开启时 标记技能造成的伤害为近战伤害</li><li><code>立刻施法</code> 开启时 无需施法过程 可以随时立即施法</li><li><code>可以超出范围施法</code> 开启时 技能目标超出释放范围 会在离目标最近的可以释放范围自动释放</li><li><code>是否转身</code> 开启时 单位会自动旋转到合适方向释放技能</li><li><code>是否为蓄力技能</code> 开启时 技能开始会添加一阶段的蓄力时间</li><li><code>技能受冷却影响</code> 开启时 技能受到单位的冷却缩减属性的影响</li><li><code>可以缓存</code> 开启时 控制结束后被打断的施法可以继续</li><li><code>前置条件</code> 技能可以使用的前置条件</li><li><code>自动施法</code> 按照内定规则选择目标自动施法</li></ul><h2 id="_2-数值" tabindex="-1">[2]数值 <a class="header-anchor" href="#_2-数值" aria-label="Permalink to &quot;[2]数值&quot;">​</a></h2><ul><li><img src="'+t+'" alt="技能固定属性-数值"></li><li><code>技能伤害值</code> 技能造成的伤害</li><li><code>技能消耗</code> 技能释放消耗的蓝量</li><li><code>消耗生命值释放</code> 释放技能是否需要消耗生命</li><li><code>玩家属性消耗</code> 释放技能消耗玩家的属性</li><li><code>最大充能数</code> 技能的最大充能数</li><li><code>充能时间</code> 每增加一层充能需要的时间</li><li><code>冷却时间</code> 技能的默认冷却时间</li><li><code>技能最大等级</code> 技能的等级上线</li><li><code>允许学习等级</code> 单位学习改技能需要的等级</li></ul><h2 id="_3-技能阶段" tabindex="-1">[3]技能阶段 <a class="header-anchor" href="#_3-技能阶段" aria-label="Permalink to &quot;[3]技能阶段&quot;">​</a></h2><ul><li><img src="'+r+'" alt="技能固定属性-阶段"></li><li><code>施法开始</code> 施法开始时长 前摇时长</li><li><code>施法引导</code> 施法引导时长</li><li><code>施法出手</code> 施法出手时长</li><li><code>施法完成</code> 施法完成时长 后摇时长</li><li><code>开始可以被打断</code> 开始阶段可以被其他技能或移动打断</li><li><code>引导可以被打断</code> 引导阶段可以被其他技能或移动打断</li><li><code>出手可以被打断</code> 出手阶段可以被其他技能或移动打断</li><li><code>完成可以被打断</code> 完成阶段可以被其他技能或移动打断</li><li><code>可以打断其他技能</code> 释放该技能会尝试打断当前释放的技能</li><li><code>移动会对技能产生影响</code> 开启时移动会打断施法，关闭时可以移动施法</li></ul><h2 id="_4-索敌" tabindex="-1">[4] 索敌 <a class="header-anchor" href="#_4-索敌" aria-label="Permalink to &quot;[4] 索敌&quot;">​</a></h2><ul><li><img src="'+s+'" alt="技能固定属性-索敌"></li><li><code>普攻</code>,<code>主动技能</code>可以设置的索敌相关设置</li><li><code>阵营</code> 可以索敌的阵营<code>敌人</code>,<code>友方</code>,<code>中立</code>,<code>己方</code></li><li><code>类型</code> 可以索敌的类型<code>英雄</code>,<code>建筑</code>,<code>生物</code>,<code>物品</code>,<code>可破坏物</code></li><li><code>单位标签要求</code> 单位筛选标签</li><li><code>物品标签要求</code> 物品筛选标签</li><li><code>可破坏物标签要求</code> 可破坏物筛选标签</li><li><code>特殊筛选</code> 特殊筛选设置 <ul><li><code>允许隐身单位</code></li><li><code>允许不可选取单位</code></li><li><code>能筛选到尸体</code></li><li><code>施法者以为单位</code></li></ul></li></ul><h2 id="_5-建造" tabindex="-1">[5] 建造 <a class="header-anchor" href="#_5-建造" aria-label="Permalink to &quot;[5] 建造&quot;">​</a></h2><ul><li><code>建造单位</code> 建造技能建造的单位类型</li><li><code>建造角度</code></li></ul><h2 id="_6-采集" tabindex="-1">[6] 采集 <a class="header-anchor" href="#_6-采集" aria-label="Permalink to &quot;[6] 采集&quot;">​</a></h2><ul><li><code>采集动画</code> 采集时播放的动画</li><li><code>循环播放动画</code> 是否循环播放动画</li><li><code>采集获得量</code> 采集获得量</li><li><code>自动拾取</code> 是否自动拾取采集的物品到背包</li><li><code>连续施法</code> 采集完成后是否继续采集</li></ul><h2 id="_7-声音" tabindex="-1">[7] 声音 <a class="header-anchor" href="#_7-声音" aria-label="Permalink to &quot;[7] 声音&quot;">​</a></h2><ul><li><code>声音事件列表</code> 技能相关事件播放的音乐</li></ul><h2 id="自定义属性" tabindex="-1">自定义属性 <a class="header-anchor" href="#自定义属性" aria-label="Permalink to &quot;自定义属性&quot;">​</a></h2><ul><li>点击右上角加号，可以添加新的自定义属性并设置其名称，类型，值，后续通过触发器调用， 根据你的需求设定技能的自定义属性。</li><li><img src="'+n+'" alt="技能自定义属性"></li></ul>',22),_=[u];function m(p,b,f,q,k,x){return o(),i("div",null,_)}const w=e(h,[["render",m]]);export{P as __pageData,w as default};
