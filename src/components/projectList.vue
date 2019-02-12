<template>
  <div class="project-list" id="project-list">
    <h1 class="header">作品</h1>
    <ul>
      <li class="project-item">
        <div class="project-item-content markdown-body">
          <h1>微信翻译小程序</h1>
          <p>
            Github地址:
            <a href="https://github.com/youyitian123/weixinFy-demo">weixinFy-demo</a>
          </p>
          <p>本作品是利用百度翻译提供的api，实现一款微信小程序翻译工具，支持中、英、法、韩、日、阿拉伯、西班牙语的翻译。该工具还能保存用户翻译记录以便之后查看。</p>
        </div>
      </li>

      <li class="project-item">
        <div class="project-item-content markdown-body">
          <h1>Vue.js 技术栈搭建的CNODE社区</h1>
          <p>
            Github地址:
            <a href="https://github.com/youyitian123/Fcnode">Fcnode</a>
          </p>
          <p>本项目是利用cnode社区提供的API和vue框架，来高仿CNODE社区网站。在此过程中，来对vue框架的生命周期的钩子函数，组件之间值的传递，路由等学习</p>
        </div>
      </li>

      <li class="project-item">
        <div class="project-item-content markdown-body">
          <h1>使用jQuery技术仿网易云音乐手机版</h1>
          <p>
            Github地址:
            <a href="https://github.com/youyitian123/weixinFy-demo">163-demo</a>
          </p>
          <p></p>
        </div>
      </li>
      <li class="project-item">
        <div class="project-item-content markdown-body">
          <h1>使用Vue实现简单UI框架</h1>
          <p>
            Github地址:
            <a href="https://github.com/youyitian123/weixinFy-demo">163-demo</a>
          </p>
          <p></p>
        </div>
      </li>
      <li class="project-item">
        <div class="project-item-content markdown-body">
          <h1>使用jQuery技术仿网易云音乐手机版</h1>
          <p>
            Github地址:
            <a href="https://github.com/youyitian123/weixinFy-demo">163-demo</a>
          </p>
          <p></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss">
markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@import "../assets/github-markdown.css";
// $colors-list: #ece9e9 #ffe324 #4fd2e5 #1f1f1f #f60c3e #987ff1;

.project-list {
  width: 80%;
  margin: 0 auto;
  .header {
    font-size: 3rem;
    margin: 2rem 0;
  }
  .project-item {
    border: 2px solid #ece9e9;
    &:nth-child(1) {
      // background: #ece9e9;
    }
    &:nth-child(2) {
      // background: #ffe324;
    }
    &:nth-child(3) {
      // background: #4fd2e5;
    }
    &:nth-child(4) {
      // background: #1f1f1f;
    }
    &:nth-child(5) {
      // background: #987ff1;
    }
    margin-bottom: 1rem;
    border-radius: 0.2rem;
    height: auto;
    // overflow: hidden;
    padding: 2rem;
    .project-item-content {
      z-index: 1;
      text-align: left;
    }
  }
}
</style>
