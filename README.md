# 校园帮

> 本项目是vue构建的智慧校园移动端(校园帮).
> 技术栈采用vue-CLI + webpack3 + mint-ui + vuex + axios

## 项目日志

2019.8.23 引用axios与后端测试接口连通性,出现跨域问题.

2019.8.24 跨域问题解决,所有页面全部重构.重新设计UI

2019.8.26 完成登录注册页面的布局,完成故障报备页面的表单和数据展示.

2019.8.27 解决cell-swipe不能滑动的bug,测试打包上线发现跨域问题依旧存在,与后端沟通后解决.打包完成后发现部分样式错乱.没有考虑到布局时屏幕尺寸不同问题,使用flex布局可能会好点,有时间再重构吧.

2019.9.2 完成各个表单布局,调整部分页面布局,修改背景颜色.

2019.9.4 完成登录注册联调.一开始请求发生500.采用QS库处理后提交完美解决

2019.9.5 使用flex布局优化登录注册页面布局,自动登录功能暂未实现.

2019.9.6 完成考试信息获取功能,详情页暂未实现.完成自动登录功能

2019.9.10 使用vuex保存用户信息,完成账号信息的获取和修改功能,完成报备功能提交页面时,出现图片上传到后端为空的问题.

2019.9.11 单独封装图片上传组件,但是不完美,基本完成所有提交功能,获取大部分接口提供的数据并渲染页面.将获取数据单独绑定至用户点击按钮,解决添加数据后不能获取到最新数据.但页面刷新会导致vuex数据清空.于是采用用户手动重新获取数据的方式解决此问题.

2019.9.16 单独封装view组件,用于展示所需要的超链接的iframe页面.取消页面滑动限制,修复注册页面滑动的问题.完成校园全景功能展示.目前考试报名入口展示在view页面仍有顶栏不显示的问题.

2019.9.17 完成个人中心页面的我的交易信息、我的故障报备、我的失物招领等页面的布局及滑动删除功能.完成交易信息展示图片框组.

2019.9.18 微调整个页面布局.完成学院列表入口查询考试信息的组件.

2019.9.19 1.完成管理员入口布局,完成故障报备、二手信息、考试信息、考试报名入口的管理内容.包括信息的查看增加删除,修改功能暂未实现.2.添加原生Android原生返回事件的处理,解决H5 app打包完成后在手机端点击返回键即退出应用的问题.

2019.9.21 1.修复了修改信息参数不全导致某些功能不能正常显示的bug.2.完成故障报备、二手信息、失物招领的详情展示页面,布局样式暂未完成.

## 目前出现的BUG及解决方法

- [x] 故障报备数据展示页面使用mint-ui的cell-swipe,想实现右划出现按钮的功能.但页面渲染完成后就出现的按钮.暂时不知道哪里出现的问题.(2019.8.26)

    问题原因: mint-ui的CellSwipe与tab-container的滑动冲突,二者暂时不能同时使用.应该是mint-ui的bug.

- [x] 项目开发环境布局样式正常,打包完成后Mint-ui的样式没有被自定义样式覆盖,依旧为mint-ui默认样式.(2019.8.27)

    解决方法: 在main.js中将根组件及路由引入时放在mint-ui前面即可解决.

- [x] 使用vuex保存用户信息,完成账号信息的获取和修改功能,完成报备功能提交页面时,出现图片上传到后端为空的问题.(2019.9.10)

    问题原因:V-Model无法与input file进行双向数据绑定,无法直接获取到文件.

    解决方法:单独使用封装图片上传组件避开此问题.

- [x] 在首次开启自动登录登陆失败后第二次登录时默认使用第一次的错误密码导致登陆失败.

    问题原因:之前的判断逻辑在点击自动登录按钮提交数据成功后就保留了用户名和密码,再次提交并不会更新本地密码.

    解决方法:将保存密码的逻辑判断放在服务器返回登录成功后,输入错误信息提交不会保存错误数据.

## 页面需求梳理及开发进度

- 用户注册(已完成)

- 用户登录(已完成)

- 个人中心(完成度: 80%)

- 个人信息(完成度: 80%)

- 故障报备(已完成)

- 失物招领(完成度: 80%)

- 二手交易(完成度: 90%)

- 考试信息(已完成)

- 管理员模块(完成度: 0%)

## 待修改的部分

- [x] 自动登录bug

- [x] 报备查看api

- [x] 图片组件添加提示

- [x] 失物招领表单提示信息

- [x] 考试入口超链接

- [x] 考试入口学院列表组

- [x] 交易信息展示组件

- [x] 报修信息展示组件

- [x] 失物招领信息展示组件

- [ ] 用户编辑自己发布的二手信息

- [ ] 用户编辑自己发布的报修信息

- [ ] 用户编辑自己发布的失物招领信息

- [ ] 头像上传

- [ ] 管理员功能
