# blog

湘邦官网：hunanbangdream.github.io

#### 介绍
湘邦blog测试

#### 软件架构
使用hexo ^7.3.0 butterfly ^5.2.2

node.js v20.15.1 (最低node版本 v14.0.0)


hexo：[hexo官网](https://hexo.io/zh-cn/)
butterfly：[butterfly官网](https://butterfly.js.org/)

#### 安装教程

1.  拉取项目到本地
2.  运行npm install 安装依赖 （或pnpm等）
3.  运行hexo server 本地启动 

#### 使用说明

1. 新增文章 hexo new post \<title\> 
2. butterfly配置文件 _config.butterfly.yml
3. hexo配置文件 _config.yml



#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

#### 自动部署

1. 推送到远程master分支即可
2. 注意修改时新建feat分支不要在master上直接修改

### 图床使用
1. 图床 https://imgurl.loveviolet.cn ，感谢 @子衿 提供的图床 账号:hunanbangdream
2. 上传后获取相应嵌入代码即可

### 引入b站视频
1. b站视频点击分享-嵌入代码
2. 复制嵌入代码中的src链接
3. 替换到以下代码中，复制到markdown中使用
```markdown
{% raw %}
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
<iframe src="将链接复制到此处" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" ></iframe></div>
{% endraw %}

```