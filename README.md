# 新手Vue入门学习   JustDoIt ! 

---







##  构建与部署

```bash
# 克隆项目
git clone https://github.com/diveDylan/learn-vue.git
# 进入项目目录

cd learn-vue

git checkout xy_learn_vue_component_20200608


# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run serve
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash

npm run build


```

## 其它

```bash


# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```


