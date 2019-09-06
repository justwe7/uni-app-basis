# 食安

### todo
- [] 考虑处理刘海屏兼容
- [] 不确定uni-app是否支持背景图
- [] 区分环境打包配置比较繁琐
- [] 接口暂未调用
   
### 运行项目
## Project setup
```
npm install

npm run dev

然后开发者工具直接打开项目即可
```


### 项目结构
```js
├─profile
│ ├─dev.env.js            //开发环境的变量
│ └─build.env.js          //生产环境 
├─src
│ ├─pages/            //小程序的页面
│ ├─components/       //业务逻辑组件目录
│ ├─wxcomponents/     //三方的UI组件库组件目录
│ ├─common/           //全局的js逻辑参数等
│ ├─utils/            //定义的一些js方法 处理业务逻辑
│ ├─static/           //静态文件 图片
│ ├─store/            //全局状态vuex
│ ├─pages.json        //配置小程序页面
│ ├─manifest.json     //微信小程序的配置：appid、微信开发工具寻址的小程序目录等
│ ├─uni.scss          //uni-app提供的全局样式变量文件 含mixin
│ ├─App.vue           //理解为小程序的app.js入口文件 包含小程序启动的生命周期
│ └─main.js           //挂载小程序页面 
├─project.config.json //微信小程序的配置：appid、微信开发工具寻址的小程序目录等
└─vue.config.js       //自定义的项目配置项
```

### 全局js变量及方法  

定义在 `src\common\js\global.js`，最终挂载到原型链上
常用的如接口请求最终使用方式：
```js
			this.$get({
				url: "/api",
				data: {
          a: 1
        }
			}).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
				
			})
```  


### css样式建议   

功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！属于全局工具样式**在app.vue中定义**
布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输入框、loading、图标等！
状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），具体详见命名规则的扩展相关项。

### 项目配置

**针对小程序**： `project.config.json` 配置了微信开发者工具启动会查找哪些文件

```js
主要字段
"miniprogramRoot": "dist/dev/mp-weixin/",
dist/dev/mp-weixin/   //对应开发
dist/build/mp-weixin/  //上线前需修改为这个字段 
```

### 引入三方小程序ui库  
[vant-ui](https://youzan.github.io/vant-weapp/#/button)   
[官方提供的配置方式](https://uniapp.dcloud.io/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)

以引入vant-ui为例
1. 复制官方编译好的组件至 src\wxcomponents\vant
2. 修改`src\pages.json`文件，添加对应页面字段
```js
{
	"path": "pages/index/index",
	"style": {
		"navigationBarTitleText": "首页",
		"usingComponents": {
			"van-button": "/wxcomponents/vant/button/index"
		}
	}
}
```
3. 页面直接使用，参照ui库文档即可  


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
