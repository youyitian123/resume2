<template>
  <article class="about">
    <div class="inner-item">
      <div class="item">
        <h1 class="item-title hello">关于</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>我的名字叫冯锦城，现居住在广州，是一名前端开发学习者，目前正在寻找一份前端开发的工作，如果你看到我的简历觉得不错，可以通过下面的联系方式来联系我。</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div class="item">
        <h1 class="item-title">联系</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>
              <strong class="point">fengjc_sleep@163.com</strong>
              <span>E-MAIL</span>
            </li>
            <li>
              <strong class="point">1698927XXXX</strong>
              <span>电话</span>
            </li>
            <li>
              <strong>
                <a href="https://github.com/youyitian123" class="point" target="_blank">youyitian123</a>
              </strong>
              <span>Github</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="item">
        <h1 class="item-title">技能</h1>
        <div class="item-desc">
          <ul class="item-desc-list">
            <li>Vue</li>
            <li>HTML5,CSS3,Javascript</li>
            <li>jQuery</li>
            <li>移动端开发</li>
            <li>HTTP</li>
            <li>
              <strong class="point">其他</strong>
              <span>webpack,Chai,karma,parcel,Sass...</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.point::after {
  content: " · ";
}

.point {
  color: #333;
  text-decoration: underline;
}

.hello {
  position: relative;
}
.hello::after {
  position: absolute;
  content: "Hello";
  display: block;
  padding: 5px;
  height: 25px;
  font-size: 15px;
  text-align: center;
  line-height: 25px;
  background: orange;
  top: 0px;
  left: 80px;
  border-radius: 3px;
}

.hello::before {
  position: absolute;
  left: 75px;
  top: 7px;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent orange transparent transparent;
}

.about {
  margin-top: 150px;
  .inner-item {
    max-width: 70%;
    margin: 0 auto;
    width: 70vw;
    color: #666;
    .item {
      margin: 10px 0;
      font-size: 0.875rem;
      display: flex;
      .item-title {
        width: 30%;
        font-size: 2.25rem;
        color: #333;
      }
      .item-desc {
        width: 70%;
        text-align: left;
        .item-desc-list {
          li {
            word-wrap: break-word;
            line-height: 30px;
            span {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>


<script>
export default {};
</script>


