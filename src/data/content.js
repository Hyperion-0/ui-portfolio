// ============================================================
// 站点内容数据（UI 重构方向）—— 文案改动只动这一个文件
// 数据来源：王有发应聘重构简历(1).docx
// ============================================================

// 部署在子路径时，public 资源需要用 base 前缀拼接
const BASE = import.meta.env.BASE_URL
export const asset = (p) => BASE + String(p).replace(/^\//, '')

export const profile = {
  name: '王有发',
  nameEn: 'WANG YOUFA',
  brand: 'HYPERION',
  role: 'UI 重构设计师',
  roleEn: 'UI RECONSTRUCTION',
  kicker: 'UI RECONSTRUCTION · FIGMA / UE5',
  tagline: '把旧界面重做，也让它在引擎里跑起来',
  intro: [
    '荆州学院软件工程专业毕业，大学期间自学 C++ 与 UE4 客户端开发，目前在腾讯 V 岗，参与《和平精英》的界面工作。',
    '我的位置有点特殊：既会用 Photoshop、Illustrator、Figma 做视觉，也能在 UE4 / UE5 里用 UMG 把界面真正搭出来、跑起来。所以做 UI 重构时我不只交一张图——信息架构怎么重排、规范怎么定、到引擎里怎么落地，这条链路能自己走完。',
    '求职方向：UI 重构。擅长把一套陈旧的界面体系重新梳理、重做，再沉淀成能复用的规范。',
  ],
  email: 'hyperioni@163.com',
  location: '腾讯 V 岗 · 《和平精英》',
  education: '荆州学院 · 软件工程',
  site: 'https://hyperion-0.github.io/',
}

export const stats = [
  { value: '4', unit: '组', label: '界面重构与复刻作品' },
  { value: '6', unit: '套', label: '设计与引擎工具' },
  { value: '3', unit: '端', label: '手游 / PC / 模拟器' },
  { value: '2', unit: '份', label: '规范与对齐文档' },
]

// 技能矩阵
export const skills = [
  { group: '视觉设计', en: 'DESIGN', items: ['Photoshop', 'Illustrator', 'Figma'] },
  { group: '引擎实现', en: 'ENGINE', items: ['UE4 / UMG', 'UE5', 'C++ 基础'] },
  { group: '动效表现', en: 'MOTION', items: ['Spine', '材质动画', '层级过渡'] },
  { group: '流程规范', en: 'PROCESS', items: ['信息架构', '跨端适配', '文档沉淀'] },
]

export const marquee = [
  '界面重构', '信息架构重排', '像素级还原', '动效调优',
  '视觉规范', '组件复用', '跨端适配', 'UMG 落地',
  '摄影级氛围', '信息密度控制', '文档沉淀', '协作推进',
]

export const projects = [
  {
    id: '01',
    title: '设置界面 · 整体重构',
    subtitle: '《和平精英》 · 信息架构与视觉重做',
    desc: '原设置界面架构陈旧、层级混乱。参与需求评审后重新规划信息架构，把原本散落的设置项按使用场景重排，梳理近 20 处逻辑变更点，同时识别出十余处需要一并改造的关联模块。视觉侧统一了列表、开关、滑条的规格与间距节奏，输出可复用的组件规范。',
    tags: ['信息架构', '视觉规范', '组件复用'],
    results: ['界面层级重排，常用项前置', '沉淀《设置界面重构规范》', '后续同类需求周期缩短约 60%'],
    image: asset('/assets/pubgm/pubgm-01.jpg'),
    wide: true,
  },
  {
    id: '02',
    title: '运营活动 · 界面视觉',
    subtitle: '《和平精英》 · 活动页与抽奖界面',
    desc: '活动界面和常驻界面是两套逻辑：常驻讲效率，活动讲氛围。这里做的是在保持信息可读的前提下，把主题感拉满——主视觉、光效、材质质感、按钮层级，以及抽奖流程里的情绪节奏控制。同一套界面规范，在不同主题下保持统一又各有性格。',
    tags: ['主视觉', '氛围营造', '信息密度'],
    results: ['主题化视觉呈现', '抽奖流程情绪节奏设计', '复用同一套界面规范'],
    image: asset('/assets/activity/activity-01-shuisui.jpg'),
    wide: true,
  },
  {
    id: '03',
    title: '《艾尔登法环》UI 复刻',
    subtitle: 'UE4 · UMG / C++ 还原练习',
    desc: '基于 UE4 UMG 复刻《艾尔登法环》的装备、置物包与角色数据三大面板：栏位布局、物品选中态、属性面板数据绑定、层级导航与过渡动效。重点在于还原原作的暗金质感与信息密度控制——不只是长得像，交互节奏也要对。',
    tags: ['UE4', 'UMG', '还原度', '动效'],
    results: ['装备 / 置物包 / 角色数据三大面板', '像素级视觉还原', '完整交互与过渡动效'],
    video: asset('/assets/eldenring-demo.mp4'),
    poster: asset('/assets/eldenring-poster.jpg'),
    wide: false,
  },
  {
    id: '04',
    title: 'MyDMC · 引擎内实机',
    subtitle: 'UE4 · 材质与渲染管线验证',
    desc: '自研 UE4 项目的实机运行画面：D3D Shader Model 6 渲染管线下的场景表现、材质质感与交互逻辑验证。用来确认界面元素放进真实场景后，光照、透明度、层级关系是否仍然成立。',
    tags: ['UE4', 'D3D SM6', '材质'],
    results: ['实机渲染验证', '材质与光照表现调校'],
    video: asset('/assets/hero-reel.mp4'),
    wide: false,
  },
]

export const capabilities = [
  {
    id: '01',
    title: '还原度把控',
    desc: '从参考图到引擎内的像素级还原，不只是照着画，而是把层级、间距、色彩关系一起对齐。',
    items: ['视觉还原', '间距节奏', '色彩统一'],
  },
  {
    id: '02',
    title: '规范与沉淀',
    desc: '把一次性的界面改动整理成可复用的组件规范和对齐文档，让同类需求下次不必重来。',
    items: ['组件规范', '文档沉淀', '模块化'],
  },
  {
    id: '03',
    title: '跨部门协作',
    desc: '与开发、策划、美术都能直接对话。发现流程里反复返工的环节，会主动提优化工具和方案。',
    items: ['需求沟通', '流程优化', '工具协作'],
  },
  {
    id: '04',
    title: '技术落地',
    desc: '软件工程科班出身，能在 UE4 / UE5 里自己把界面搭出来跑通，动效和材质也能自己调。',
    items: ['UMG', 'UE5', 'Spine'],
  },
]

export const toolbelt = ['Photoshop', 'Illustrator', 'Figma', 'UE4 / UMG', 'UE5', 'Spine']

// 作品画廊（分组）
export const galleries = [
  {
    id: 'pubgm',
    title: '设置界面',
    subtitle: '《和平精英》 · 手游端界面实机',
    images: [
      asset('/assets/pubgm/pubgm-01.jpg'),
      asset('/assets/pubgm/pubgm-03.jpg'),
      asset('/assets/pubgm/pubgm-05.jpg'),
      asset('/assets/pubgm/pubgm-07.jpg'),
      asset('/assets/pubgm/pubgm-09.jpg'),
      asset('/assets/pubgm/pubgm-11.jpg'),
    ],
  },
  {
    id: 'activity',
    title: '活动界面',
    subtitle: '《和平精英》 · 主题化运营视觉',
    images: [
      asset('/assets/activity/activity-01-shuisui.jpg'),
      asset('/assets/activity/activity-02-mofang.jpg'),
      asset('/assets/activity/activity-03-shengling.jpg'),
      asset('/assets/activity/activity-04-rongtu.jpg'),
    ],
  },
]

export const nav = [
  { id: 'about', label: '关于', en: 'ABOUT' },
  { id: 'projects', label: '作品', en: 'WORK' },
  { id: 'strengths', label: '能力', en: 'SKILLS' },
  { id: 'contact', label: '联系', en: 'CONTACT' },
]
